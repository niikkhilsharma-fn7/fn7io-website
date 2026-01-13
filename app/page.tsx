import {
  HeroSection,
  MeetScout7Section,
  FeaturesGridSection,
  HowItWorksSection,
  ComparisonTableSection,
  SegmentsSliderSection,
  OrganicEngagementSection,
  QualifiedLeadsSection,
  AudienceInsightsSection,
  AdCampaignsSection,
  VideoStudioSection,
  ImageStudioSection,
  WhoItsForSection,
  PricingSection,
  FAQSection,
} from "@/components/HomePage";

export default function Home() {
  return (
    <div className="selection:bg-blue-100 selection:text-blue-900 font-sora">
      <HeroSection />
      <MeetScout7Section />
      <FeaturesGridSection />
      <HowItWorksSection />
      <ComparisonTableSection />
      <SegmentsSliderSection />
      <OrganicEngagementSection />
      <QualifiedLeadsSection />
      <AudienceInsightsSection />
      <AdCampaignsSection />
      <VideoStudioSection />
      <ImageStudioSection />
      <WhoItsForSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}
