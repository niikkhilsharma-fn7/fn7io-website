export const PricingSection = () => {
  const features = [
    "Organic engagement opportunities + ready replies",
    "Qualified leads (buyers, partners, investors)",
    "Audience insights (tribes, pains, triggers, objections)",
    "Targeted ad-campaigns (Meta + Google Search)",
    "Video Studio (100+ styles, scripts, hooks)",
    "Image Studio (ads, carousels, social creatives)",
    "Brand Brain customization",
    "Custom scout research",
    "Unlimited workspaces",
    "Export leads + insights",
  ];

  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 border-t border-slate-200">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Pricing</h2>
        <p className="text-xl text-slate-600 font-medium mb-2">Start free. Scale when you're ready.</p>
        <p className="text-slate-500">All features included in every plan. Only credits differ.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {/* Free Plan */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Free</h3>
            <div className="text-4xl font-black text-slate-900 mb-4">
              $0<span className="text-lg font-medium text-slate-500">/month</span>
            </div>
            <p className="text-slate-600 font-medium">1,000 credits/month</p>
          </div>
          <div className="mt-auto">
            <button className="w-full py-3 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors">
              Start Free
            </button>
          </div>
        </div>
        {/* Pro Plan */}
        <div className="bg-slate-900 text-white rounded-3xl border border-slate-700 p-8 shadow-2xl relative overflow-hidden transform md:-translate-y-4 flex flex-col">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1e40af_0%,_transparent_60%)] opacity-40" />
          <div className="relative z-10 mb-4">
            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
            <div className="text-4xl font-black text-white mb-2">
              $29
              <span className="text-lg font-medium text-slate-400">/month</span>
            </div>
            <p className="text-blue-200 mb-2 font-medium">30,000 credits/month</p>
            <p className="text-slate-400 text-sm">Need more? Buy additional credits anytime.</p>
          </div>
          <div className="relative z-10 mt-auto">
            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 transition-colors shadow-lg">
              Subscribe to Pro
            </button>
          </div>
        </div>
        {/* Auto-Pilot Plan */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm relative overflow-hidden flex flex-col">
          <div className="absolute top-4 right-4 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full uppercase">
            Coming Soon
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Auto-Pilot</h3>
            <div className="text-lg font-bold text-slate-400 mb-4 italic">Custom Pricing</div>
            <p className="text-slate-600 text-sm leading-relaxed">
              AI-powered campaign management — automatic Google + Meta setup, budget optimization, and performance
              tracking.
            </p>
          </div>
          <div className="mt-auto">
            <button className="w-full py-3 border border-slate-300 text-slate-600 font-bold rounded-xl hover:bg-white transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-8 border border-slate-100">
        <h4 className="text-center font-bold text-slate-900 mb-8 uppercase tracking-widest text-sm">
          Every plan includes
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-slate-700 text-sm font-medium">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-green-500">check_circle</span>
              {feature}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-lg font-medium text-slate-900 mb-2">
          No credit card required. No "contact sales" friction.
        </p>
        <p className="text-xl font-bold text-blue-600">Start scouting in 60 seconds.</p>
      </div>
    </section>
  );
};
