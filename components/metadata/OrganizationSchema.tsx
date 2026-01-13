import Script from "next/script";

const OrganizationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "fn7 Scout",
    url: "https://www.fn7.io",
    logo: "https://www.fn7.io/fn7_nav_logo.svg",
    description:
      "Scout AI finds real people asking for help with problems your product solves. Turn social conversations into traffic without paid ads.",
    sameAs: ["https://x.com/fn7_io", "https://linkedin.com/company/fn7io"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.fn7.io/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="fn7-organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default OrganizationSchema;
