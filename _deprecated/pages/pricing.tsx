import * as React from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { PricingHeroSection, PricingPlansSection } from "@/deprecated/Pricing";

interface PricingPageProps {
  currentYear: number;
}

export default function PricingPage({ currentYear }: PricingPageProps) {
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "fn7 AI Agents Platform",
    description: "Go-To-Market automation platform with AI agents",
    offers: [
      {
        "@type": "Offer",
        name: "Basic Plan",
        price: "70",
        priceCurrency: "USD",
        description: "For Solopreneurs & Small Startups",
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "145",
        priceCurrency: "USD",
        description: "For Growing Teams",
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Pricing - fn7 AI Agents Platform | Choose Your Plan</title>
        <meta
          name="description"
          content="Simple, transparent pricing for fn7's AI agents platform. Choose between Basic ($70/month) and Pro ($145/month) plans. Built for founders who ship."
        />
        <meta
          name="keywords"
          content="fn7 pricing, AI agents pricing, go-to-market automation pricing, agentic AI cost, business automation plans"
        />
        <meta name="author" content="fn7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Pricing - fn7 AI Agents Platform" />
        <meta
          property="og:description"
          content="Two plans. Built for founders who ship. Start your 3-day free trial today."
        />
        <meta property="og:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta property="og:url" content="https://www.fn7.io/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="fn7" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pricing - fn7 AI Agents" />
        <meta
          name="twitter:description"
          content="Choose your plan and start automating your go-to-market with AI agents."
        />
        <meta name="twitter:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta name="twitter:site" content="@fn7io" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.fn7.io/pricing" />

        {/* Favicon */}
        <link rel="icon" href="/fn7_nav_logo.svg" type="image/svg+xml" />

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingStructuredData) }}
        />
      </Head>

      <div className="relative w-full min-h-screen bg-white">
        <PricingHeroSection />
        <PricingPlansSection />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PricingPageProps> = async (context) => {
  // Preserve query parameters for analytics
  const { query } = context;

  const currentYear = new Date().getFullYear();

  return {
    props: {
      currentYear,
    },
  };
};
