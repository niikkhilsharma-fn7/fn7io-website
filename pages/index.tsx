import Head from "next/head";
import { GetServerSideProps } from "next";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { trackSignupClick, trackEvent, getCurrentUTMParams } from '@/utils/amplitude';

interface HomeProps {
  currentYear: number;
}

export default function Home({}: HomeProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Function to preserve UTM parameters when redirecting to beta access form
  const getSignupUrlWithUTM = () => {
    const baseUrl = 'https://www.fn7.io/get-form';
    const utmParams: Record<string, string> = {};

    // Collect all UTM parameters from current URL
    searchParams.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        utmParams[key] = value;
      }
    });

    // If there are UTM parameters, append them to the signup URL
    if (Object.keys(utmParams).length > 0) {
      const queryString = new URLSearchParams(utmParams).toString();
      return `${baseUrl}?${queryString}`;
    }

    // No UTM params, return base URL
    return baseUrl;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "fn7 Scout",
    "url": "https://www.fn7.io",
    "logo": "https://www.fn7.io/fn7_nav_logo.svg",
    "description": "Scout AI finds real people asking for help with problems your product solves. Turn social conversations into traffic without paid ads.",
    "sameAs": [
      "https://twitter.com/fn7io",
      "https://linkedin.com/company/fn7io"
    ],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.fn7.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Head>
        <title>Scout AI - Turn Social Conversations Into Traffic | fn7</title>
        <meta name="description" content="Scout finds real people asking for help with problems your product solves on Reddit, LinkedIn & X. Turn conversations into traffic without paid ads." />
        <meta name="keywords" content="Scout AI, social media monitoring, conversation marketing, Reddit marketing, LinkedIn engagement, Twitter marketing, organic traffic" />
        <meta name="author" content="fn7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Scout AI - Turn Social Conversations Into Traffic" />
        <meta property="og:description" content="Find real people asking for help with problems your product solves. Generate organic traffic from social conversations." />
        <meta property="og:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta property="og:url" content="https://www.fn7.io" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="fn7 Scout" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Scout AI - Turn Social Conversations Into Traffic" />
        <meta name="twitter:description" content="Find real demand on social media. Turn conversations into organic traffic." />
        <meta name="twitter:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta name="twitter:site" content="@fn7io" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.fn7.io" />

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="flex overflow-hidden flex-col items-center bg-white">
        <div className="flex flex-col items-center self-stretch pb-0 w-full text-center bg-white rounded-full max-md:pb-20 max-md:max-w-full">
          {/* <Header /> */}
          <HeroSection />
        </div>
        <HowItWorksSection />

        <FeatureSection
          title="Real Buyer Demand. Surfaced Daily."
          description="Most ads get ignored. Cold outreach feels like shouting into the void. Scout doesn’t guess. It listens. Every day, it finds real conversations on Reddit, LinkedIn, and X asking for help with problems your product already solves."
          imageSrc="/images/featured-image.png"
        >
        </FeatureSection>

        <FeatureSection
          title="Traffic With No Paid Marketing"
          description="Can you believe a 67% CTR? In one week with zero paid marketing, a beta brand drove 67% of its traffic from 3,782 conversations Scout found, including 412 pain point posts, leading to direct signups and product feedback."
          imageSrc="/images/traffic.png"
          imageAlt="Analytics dashboard showing traffic results"
          buttonText="Get Beta Access"
          buttonOnClick={() => {
            trackSignupClick('Feature Section - Try Scout', getCurrentUTMParams());
            window.location.href = getSignupUrlWithUTM();
          }}
          reverse={true}
        />

        <WhyChooseSection />
        <TestimonialsSection />

        {/* Muse Section */}
        <FeatureSection
          title="Muse Beta — Get Seen While Building"
          description="Muse keeps you top of mind — generating posts for LinkedIn & X that match your tone, topics, and schedule. Stay consistent without the burnout."
          imageSrc="/images/muse-dashboard.svg"
          imageAlt="Muse Dashboard"
          buttonText="Get Beta Access"
          buttonOnClick={() => {
            trackSignupClick('Feature Section - Try Muse', getCurrentUTMParams());
            window.location.href = getSignupUrlWithUTM();
          }}
        />

        {/* Roadmap Section */}
        <FeatureSection
          title="Wait, there's more."
          description="We're building agents to put GTM on autopilot — from finding buyers to staying visible, from outreach to insights. Scout and Muse are the start. Next come Spark, Echo, Nudge, and Oracle to automate the journey."
          imageSrc="/images/roadmap.png"
          imageAlt="Your Go-To-Market. On Autopilot."
          buttonText="View Agent Roadmap"
          buttonOnClick={() => {
            trackEvent('View Roadmap Clicked', { from: 'Home Page' });
            router.push('/roadmap');
          }}
          reverse={true}
        />

        <FAQSection />
        <CTASection />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // Get current year for footer
  const currentYear = new Date().getFullYear();

  return {
    props: {
      currentYear,
    },
  };
};
