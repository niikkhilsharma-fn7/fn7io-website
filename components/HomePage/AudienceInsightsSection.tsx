export const AudienceInsightsSection = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 border-t border-slate-200">
      <div className="text-center mb-16">
        <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Audience Insights</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mt-2 mb-6">
          Know what your customers really think
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
          Most founders fly blind. They guess what customers want. Scout7 searches social media and pulls out what
          matters.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Visual (Insights Dashboard Mockup) */}
        <div className="flex justify-center relative">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 w-full max-w-md relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-50" />
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-amber-500">lightbulb</span>
              Customer Mindset Analysis
            </h3>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Top Pain Point</span>
                  <span className="text-xs font-bold text-red-500">High Urgency</span>
                </div>
                <p className="text-slate-800 font-medium">"Current tools are too complex for my team"</p>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3">
                  <div className="bg-red-500 h-1.5 rounded-full" style={{ width: "85%" }} />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Key Desire</span>
                  <span className="text-xs font-bold text-green-500">Growth Driver</span>
                </div>
                <p className="text-slate-800 font-medium">"I want to automate the boring stuff"</p>
                <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3">
                  <div className="bg-green-500 h-1.5 rounded-full" style={{ width: "92%" }} />
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase">Pricing Sensitivity</span>
                </div>
                <p className="text-slate-800 font-medium">Willing to pay premium for ease of use.</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-100">
                <span className="text-xs font-bold text-amber-700 uppercase mb-1 block">Magic Words to Use</span>
                <p className="text-amber-900 font-bold">
                  "Set it and forget it", "No learning curve", "Instant results"
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Content */}
        <div className="space-y-10">
          <div className="prose prose-lg text-slate-600">
            <p className="text-lg leading-relaxed">
              The truth is buried in thousands of social media conversations. You don't have time to read them all.
              <strong className="text-slate-900"> Scout7 does it for you.</strong>
            </p>
            <p className="text-lg leading-relaxed">For each type of customer, Scout7 extracts:</p>
            <ul className="space-y-3 mt-4 list-none pl-0">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-500">check_circle</span>
                Their biggest pains &amp; frustrations
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-500">check_circle</span>
                What they're truly trying to achieve
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-500">check_circle</span>
                How much price matters to them
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-500">check_circle</span>
                What triggers them to buy or switch
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-amber-500">check_circle</span>
                The exact words that grab their attention
              </li>
            </ul>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
            <h4 className="text-xl font-bold text-amber-900 mb-2">The Result</h4>
            <p className="text-amber-800 font-medium text-lg">
              No more guessing. No more flying blind. Just a clear picture of who your customers are and what makes
              them act.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
