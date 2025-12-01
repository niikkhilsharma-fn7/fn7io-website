/// <reference types="@fastly/js-compute" />

import VercelBuildOutputServer, {
  ComputeJsConsoleLoggerProvider,
  LogLevel,
  setLoggerProvider,
} from "@fastly/serve-vercel-build-output";
import { contentAssets, moduleAssets } from "./statics";

const loggerProvider = new ComputeJsConsoleLoggerProvider(LogLevel.DEBUG);
setLoggerProvider(loggerProvider);

/** @type {import('@fastly/serve-vercel-build-output').ServerConfigInit} */
let serverConfig = null;
try {
  serverConfig = (await import("../server.config.js")).default;
} catch {
  console.warn("Unable to import server.config.js");
}

const vercelServer = new VercelBuildOutputServer({
  contentAssets,
  moduleAssets,
  serverConfig,
});
await vercelServer.initialize();
const requestHandler = vercelServer.createHandler();

addEventListener("fetch", (event) => {
  if (event.request.url.includes("api/redirect-me")) {
    console.log("next-compute-js: Request is for shortcode redirect");
    event.respondWith(getShortURLFromES(event));
  } else {
    event.respondWith(handleRequest(event));
  }
});

async function handleRequest(event) {
  console.log("Handling request in next-compute-js:");
  return requestHandler(event);
}

async function getShortURLFromES(event) {
  console.log("Fetching shortcode from Elasticsearch:", event.request.url);

  const url = new URL(event.request.url);
  const urlPath = url.pathname;
  const shortcode = urlPath.split("/api/redirect-me/")[1]?.split("?")[0];

  if (!shortcode) {
    return new Response("Invalid Request", {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Check query parameters
  const queryParams = url.searchParams;
  const env = queryParams.get("env");
  console.log("env: ===>", env);
  let isDevEnv = "false";

  // Determine Elasticsearch URL and API key based on environment
  let esUrl, apiKey;
  if (env === "dev") {
    isDevEnv = "true";
    console.log("Using dev environment for Elasticsearch");
    esUrl = `https://elastic-v2.us-central1-dev.k8s.gcp.fn7.io/url_shortener/_doc/${shortcode}`;
    apiKey = "SHFyVVVKb0JBY2V6eDhMd0hxS2o6aGZUM1I1anJSazI0LWlCMGNkQU1Hdw==";
  } else {
    console.log("Using production environment for Elasticsearch");
    esUrl = `https://elastic.us-central1-prd.k8s.gcp.fn7.io/url_shortener/_doc/${shortcode}`;
    apiKey = "M2UwaXlab0JPYTI1SE9MZFNfWUU6cHVMbjFiblRUVHk4ZER4NzljNGcxdw==";
  }

  console.log("isDevEnv ", isDevEnv);
  console.log("isDevEnv type ", typeof isDevEnv);

  // Create Elasticsearch request
  const esRequest = new Request(esUrl, {
    method: "GET",
    headers: {
      Authorization: `ApiKey ${apiKey}`,
      "Content-Type": "application/json",
    },
    backend:
      isDevEnv == "true" ? "elasticsearch_host_dev" : "elasticsearch_host",
  });

  try {
    const esResponse = await fetch(esRequest);
    console.log(
      `Elasticsearch response for shortcode "${shortcode}":`,
      esResponse.status,
      esResponse.statusText
    );

    if (!esResponse.ok) {
      console.error(
        `Elasticsearch error: ${esResponse.status} ${esResponse.statusText}`
      );

      if (esResponse.status === 404) {
        return new Response(`Invalid Link ${env}`, { status: 404 });
      }
    }

    const esData = await esResponse.json();
    console.log(`Fetched data for shortcode "${shortcode}":`, esData);

    // Check if document was found and has a valid URL
    if (!esData.found || !esData._source?.original_url) {
      return new Response("Link not found", { status: 404 });
    }

    const redirectUrl = esData._source.original_url;

    // Log the click for analytics
    console.log(`Redirecting shortcode "${shortcode}" to "${redirectUrl}"`);
    const response = {
      Location: redirectUrl,
      org_hkey: esData._source.org_hkey,
      name: esData._source.name,
      user_id: esData._source.user_id,
      post_id: esData._source.post_id,
      provider: esData._source.provider,
      isDevEnv: isDevEnv,
      doc_id: Math.random().toString().slice(2, 12),
      doc_type: "URLShortenerTracker",
      comment_posted_on: esData._source.created_at,
      short_code: esData._source.doc_id,
    };
    console.log("response: ===>", response);

    // Perform the redirect
    return new Response(null, {
      status: 302,
      headers: response,
    });
  } catch (error) {
    console.error("Error fetching shortcode from Elasticsearch:", error);
    return new Response("Failed to process the request.", {
      status: 500,
      headers: { "Content-Type": "application/json",
       },
    });
  }
}
