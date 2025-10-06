import { FAQSection } from "@/components/FAQSection";
import Head from "next/head";
import { GetServerSideProps } from "next";

interface FAQPageProps {
  currentYear: number;
}

export default function FAQPage({ currentYear }: FAQPageProps) {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Agentic AI, and how is it different from other AI tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agentic AI doesn't wait for prompts. Each agent on fn7 has a mission — like finding leads or writing ads — and works on it continuously, just like a real teammate. You set the goal; they take it from there."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to be technical or have AI experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. fn7 is built for founders and small teams, not engineers. It's simple to set up and intuitive to use. The smart stuff happens behind the scenes."
        }
      },
      {
        "@type": "Question",
        "name": "How much of my time will this take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Very little. You'll guide the agents and check in via the dashboard, but they run on their own. Think of it as managing a team that doesn't need daily check-ins."
        }
      },
      {
        "@type": "Question",
        "name": "Can I control what the agents do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. You can set preferences like tone of voice, ICPs, campaign rules, and more. You stay in control — the agents just handle the heavy lifting."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Your data stays protected with enterprise-grade security. It's only used to help the agents work better for your business."
        }
      },
      {
        "@type": "Question",
        "name": "What tools does fn7 integrate with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reddit, X (Twitter), LinkedIn, Product Hunt, and email platforms."
        }
      }
    ]
  };

  return (
    <>
      <Head>
        <title>FAQs - Frequently Asked Questions | fn7 AI Agents</title>
        <meta name="description" content="Get answers to common questions about fn7's AI agents, Agentic AI technology, data security, integrations, and how our platform helps scale your business." />
        <meta name="keywords" content="fn7 FAQ, AI agents questions, Agentic AI FAQ, business automation FAQ, AI security, fn7 integrations" />
        <meta name="author" content="fn7" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="FAQs - fn7 AI Agents Platform" />
        <meta property="og:description" content="Quick answers to what you're wondering about fn7's AI agents and how they can scale your business 24/7." />
        <meta property="og:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta property="og:url" content="https://www.fn7.io/faqs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="fn7" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQs - fn7 AI Agents" />
        <meta name="twitter:description" content="Get answers about fn7's AI agents, security, integrations, and more." />
        <meta name="twitter:image" content="https://www.fn7.io/fn7_logo.jpeg" />
        <meta name="twitter:site" content="@fn7io" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.fn7.io/faqs" />

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </Head>

      <div className="relative overflow-hidden">
        <FAQSection />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<FAQPageProps> = async (context) => {
  // Preserve query parameters for analytics
  const { query } = context;

  // You can fetch any dynamic data here if needed
  const currentYear = new Date().getFullYear();

  // Could fetch FAQs from an API or CMS here
  // const faqs = await fetchFAQs();

  return {
    props: {
      currentYear,
    },
  };
};
