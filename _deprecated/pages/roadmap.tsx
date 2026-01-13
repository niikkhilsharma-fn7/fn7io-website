import { Hero } from "@/deprecated/Roadmap/Hero";
import { AgenticAI } from "@/deprecated/Roadmap/AgenticAI";
import { Security } from "@/deprecated/Roadmap/Security";
// import { BetaBuzz } from "@/components/BetaBuzz";
import { Agents } from "@/deprecated/Roadmap/Agents";
import { Fn7Need } from "@/deprecated/Roadmap/Fn7Need";
import { RiseOfAgenticAI } from "@/deprecated/Roadmap/RiseOfAgenticAI";
import Head from "next/head";
import { GetServerSideProps } from "next";

interface RoadmapProps {
  currentYear: number;
}

export default function Roadmap({ currentYear }: RoadmapProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "fn7",
    url: "https://www.fn7.io",
    logo: "https://www.fn7.io/fn7_nav_logo.svg",
    description:
      "fn7 provides 7 AI agents that automate your go-to-market strategy, scaling your business 24/7 with cutting-edge AI technology.",
    sameAs: ["https://x.com/fn7_io", "https://linkedin.com/company/fn7io"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.fn7.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Head>
        <title>fn7 Roadmap - Your Go-To-Market On Autopilot | 7 AI Agents Scaling 24/7</title>
        <meta
          name="description"
          content="Scale your business 24/7 with fn7's 7 AI agents. Automate your go-to-market strategy with cutting-edge AI technology. Get started today."
        />
        <meta
          name="keywords"
          content="AI agents, go-to-market automation, business scaling, AI automation, sales automation, marketing automation, fn7"
        />
        <meta name="author" content="fn7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="fn7 Roadmap - Your Go-To-Market On Autopilot | 7 AI Agents" />
        <meta
          property="og:description"
          content="Scale your business 24/7 with fn7's 7 AI agents. Automate your go-to-market strategy with cutting-edge AI technology."
        />
        <meta property="og:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta property="og:url" content="https://www.fn7.io/roadmap" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="fn7" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="fn7 Roadmap - Your Go-To-Market On Autopilot" />
        <meta name="twitter:description" content="Scale your business 24/7 with fn7's 7 AI agents." />
        <meta name="twitter:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta name="twitter:site" content="@fn7io" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.fn7.io/roadmap" />

        {/* Favicon */}
        <link rel="icon" href="/fn7_nav_logo.svg" type="image/svg+xml" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>

      <div className="relative overflow-x-hidden">
        <Hero />
        <AgenticAI />
        <Fn7Need />
        <Agents />
        <Security />
        <RiseOfAgenticAI />
        {/* <BetaBuzz /> */}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<RoadmapProps> = async (context) => {
  // Preserve query parameters for analytics
  const { query } = context;

  // You can fetch any dynamic data here if needed
  // For now, we'll just pass the current year as an example
  const currentYear = new Date().getFullYear();

  return {
    props: {
      currentYear,
    },
  };
};
