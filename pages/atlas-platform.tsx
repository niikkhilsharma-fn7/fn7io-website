import { Security } from "@/components/Roadmap/Security";
import { PlatformHero } from "@/components/PlatformHeroSection";
import {TimeIsNowSection} from "@/components/PlatformPage2ndSection";
import { IdeaToImpactSection } from "@/components/IdeaToImpactSection";
import { FullControlSection } from "@/components/FullControlSection";
import { AgentsThatExecuteSection } from "@/components/AgentThatExecutes";
import { AgenticOSSection } from "@/components/PlatformPage3rdSection";
import { ArchitectureSchemaSection } from "@/components/PlatformPageStackSection";
import Head from "next/head";
import { GetServerSideProps } from "next";

interface PlatformPageProps {
  currentYear: number;
}

export default function PlatformPage({ currentYear }: PlatformPageProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Atlas - The Agentic OS",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Atlas is fn7's Agentic Operating System that enables you to build bespoke hyperintelligent growth agents for Marketing, Sales, and CRM.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "fn7",
      "url": "https://www.fn7.io"
    },
    "url": "https://www.fn7.io/atlas-platform",
    "featureList": [
      "Build custom growth agents",
      "Marketing automation",
      "Sales automation",
      "CRM integration",
      "Full control and transparency",
      "Enterprise-grade security"
    ]
  };

  return (
    <>
      <Head>
        <title>Atlas Platform - The Agentic OS by fn7 | Build Growth Agents</title>
        <meta name="description" content="Conquer growth with Atlas - The Agentic OS. Build bespoke hyperintelligent growth agents for Marketing, Sales, and CRM. Full control, enterprise security." />
        <meta name="keywords" content="Atlas platform, Agentic OS, growth agents, marketing automation, sales automation, CRM automation, AI platform, fn7 Atlas" />
        <meta name="author" content="fn7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Atlas - The Agentic OS by fn7" />
        <meta property="og:description" content="Build bespoke hyperintelligent growth agents for Marketing, Sales, and CRM with Atlas - The Agentic OS." />
        <meta property="og:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta property="og:url" content="https://www.fn7.io/atlas-platform" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="fn7" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Atlas - The Agentic OS by fn7" />
        <meta name="twitter:description" content="Build bespoke hyperintelligent growth agents for Marketing, Sales, and CRM." />
        <meta name="twitter:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta name="twitter:site" content="@fn7io" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.fn7.io/atlas-platform" />

        {/* Favicon */}
        <link rel="icon" href="/fn7_nav_logo.svg" type="image/svg+xml" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />

        {/* Page-specific meta tags */}
        <meta property="article:author" content="fn7" />
        <meta property="article:publisher" content="https://www.fn7.io" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="relative overflow-hidden">
        <PlatformHero />
        <TimeIsNowSection />
        <AgenticOSSection />
        <ArchitectureSchemaSection />
        <AgentsThatExecuteSection />
        <FullControlSection />
        <Security />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PlatformPageProps> = async (context) => {
  // Preserve query parameters for analytics
  const { query } = context;

  // You can fetch any dynamic data here if needed
  // For now, we'll just pass the current year as an example
  const currentYear = new Date().getFullYear();

  // You could also fetch platform-specific data here
  // const platformData = await fetchPlatformData();

  return {
    props: {
      currentYear,
    },
  };
};
