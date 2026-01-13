import * as React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import {
  HeroSection,
  RealityStats,
  WhyTheOldWay,
  AffiliateSection,
  TargetAudienceSection,
  BenefitsSection,
  ProcessSection,
  HowItWorksSection,
  FinalCTASection,
} from "@/deprecated/PartnerProgram";

interface PartnerProgramProps {
  currentYear: number;
}

export default function PartnerProgram({ currentYear }: PartnerProgramProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "fn7 Partner Program",
    url: "https://www.fn7.io/partner-program",
    description:
      "Join the fn7 Partner Program for those already trusted by founders. You guide. We execute. Together, we move the needle.",
    isPartOf: {
      "@type": "WebSite",
      name: "fn7",
      url: "https://www.fn7.io",
    },
    about: {
      "@type": "Service",
      name: "fn7 Partner Program",
      description:
        "A selective partner network for incubators, influencers, and mentors who guide founders through early-stage challenges.",
    },
  };

  return (
    <>
      <Head>
        <title>fn7 Partner Program - Amplify Your Founder&apos;s Impact | Join Our Selective Network</title>
        <meta
          name="description"
          content="Join the fn7 Partner Program for those already trusted by founders. You guide. We execute. Together, we move the needle. Apply today."
        />
        <meta
          name="keywords"
          content="partner program, startup incubator, founder mentoring, business acceleration, fn7 partners, startup ecosystem"
        />
        <meta name="author" content="fn7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="fn7 Partner Program - Amplify Your Founder's Impact" />
        <meta
          property="og:description"
          content="Join the fn7 Partner Program for those already trusted by founders. You guide. We execute. Together, we move the needle."
        />
        <meta property="og:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta property="og:url" content="https://www.fn7.io/partner-program" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="fn7" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="fn7 Partner Program - Amplify Your Founder's Impact" />
        <meta
          name="twitter:description"
          content="Join the fn7 Partner Program for those already trusted by founders."
        />
        <meta name="twitter:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta name="twitter:site" content="@fn7io" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.fn7.io/partner-program" />

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

      <div className="flex overflow-hidden flex-col items-center bg-white">
        <HeroSection />
        <RealityStats />
        <WhyTheOldWay />
        <AffiliateSection />
        <TargetAudienceSection />
        <BenefitsSection />
        <ProcessSection />
        <HowItWorksSection />
        <FinalCTASection />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PartnerProgramProps> = async (context) => {
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
