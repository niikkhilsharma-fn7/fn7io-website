import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/scout",
        destination: "/",
        permanent: false,
      },
      {
        source: "/atlas-platform",
        destination: "/",
        permanent: false,
      },
    ];
  },
  webpack: (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "yoga-layout": path.join(__dirname, "stubs", "yoga.js"),
      yoga: path.join(__dirname, "stubs", "yoga.js"),
      // Force Node build of @vercel/og to avoid edge build importing yoga.wasm via ESM
      "next/dist/compiled/@vercel/og/index.edge.js":
        "next/dist/compiled/@vercel/og/index.node.js",
    };
    return config;
  },
};

export default nextConfig;
