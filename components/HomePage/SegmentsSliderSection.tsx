export const SegmentsSliderSection = () => {
  const allSegments = [
    {
      title: "A/B Testing Tools",
      description: "High-signal complaint + alternative threads from vocal dev communities",
    },
    {
      title: "Skincare",
      description: "High-volume routine threads + strong search intent for ingredients",
    },
    {
      title: "AI Code Editors",
      description: "Builders compare tools daily — high intent posts on HN + Reddit",
    },
    {
      title: "Haircare",
      description: "Endless routine questions and product comparisons",
    },
    {
      title: "AI Coding Agents",
      description: "Frequent comparisons, objections, and launch chatter on Product Hunt",
    },
    {
      title: "Supplements",
      description: "Constant pain-point discussions + switching drivers around efficacy",
    },
    {
      title: "DevTools",
      description: "Deep technical discussions with clear switching triggers",
    },
    {
      title: "Oral Care",
      description: "High search demand + recurring comparison posts",
    },
    {
      title: "No-Code Platforms",
      description: "Constant 'how do I build X' conversations from launch-heavy founders",
    },
    {
      title: "Pet Products",
      description: "Recommendation-heavy communities with high trust signals",
    },
    {
      title: "Auth & Identity",
      description: "Security-conscious buyers with strong feature and pricing objections",
    },
    {
      title: "Food & Beverage",
      description: "Strong taste tribes with ritual identity and vocal opinions",
    },
    {
      title: "Observability",
      description: "Vocal developer communities with high-signal alternative threads",
    },
    {
      title: "Apparel",
      description: "Style tribes, sizing debates, and quality comparisons",
    },
    {
      title: "LLM Dev Tools",
      description: "Fast-moving category with daily tool comparisons and complaints",
    },
    {
      title: "Home & Living",
      description: "Aesthetic-driven communities with price sensitivity discussions",
    },
    {
      title: "Project Management",
      description: "Workflow debates and switching discussions across team sizes",
    },
    {
      title: "Wellness Wearables",
      description: "Comparison threads and objections vs. incumbents",
    },
    {
      title: "Prompt Engineering",
      description: "Emerging category with active experimentation and tool sharing",
    },
    {
      title: "Fitness & Sports",
      description: "Performance debates and gear recommendation threads",
    },
    {
      title: "API Tools",
      description: "Integration pain points and developer experience complaints",
    },
    {
      title: "Beauty & Makeup",
      description: "Tutorial-driven conversations with ingredient and dupe discussions",
    },
    {
      title: "Analytics",
      description: "Price vs. power debates and migration discussions",
    },
    {
      title: "Baby & Kids",
      description: "Parents asking 'is this safe?' — rich trust-led conversations",
    },
  ];

  return (
    <section className="relative z-10 w-full overflow-hidden bg-slate-50 py-24 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
          Scout7 is fine-tuned for <span className="text-blue-600">100+ segments</span>
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-4xl mx-auto mb-4">
          Pre-built intelligence for your category — tribes, pains, language, and campaign angles ready from day one.
        </p>
        <p className="text-slate-500 italic">
          Don't waste weeks training an AI. Scout7 is pre-trained on your specific niche.
        </p>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
        <div className="slider-track" id="slider-track">
          {allSegments.map((segment, index) => (
            <div className="slider-card" key={`${segment.title}-${index}`}>
              <div className="w-full h-32 bg-slate-50 rounded-xl overflow-hidden mb-2 relative">
                <img
                  src="/images/reddit.png"
                  alt={segment.title}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900 leading-tight">{segment.title}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-slate-500 font-medium mb-4">Don't see your category?</p>
        <a
          className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
          href="#"
        >
          Get Started to see insights for your industry
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </section>
  );
};
