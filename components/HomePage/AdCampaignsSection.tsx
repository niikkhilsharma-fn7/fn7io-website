export const AdCampaignsSection = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 border-t border-slate-200">
      <div className="text-center mb-16">
        <span className="text-violet-600 font-bold tracking-widest uppercase text-sm">Targeted Ad-Campaigns</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mt-2 mb-6">
          Launch ads that actually work
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
          Running ads is hard. Scout7 creates the experiments for you — ready to launch on Meta and Google Search.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              Most founders waste money trying different combinations until something works. That takes time and
              budget you don't have.
            </p>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 text-lg">What you get:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-violet-500 mt-1">layers</span>
                  <div>
                    <strong className="text-slate-800">Multiple campaign variations to test</strong>
                    <p className="text-sm text-slate-500">Different angles for different customer segments.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-violet-500 mt-1">groups</span>
                  <div>
                    <strong className="text-slate-800">Audiences based on real insights</strong>
                    <p className="text-sm text-slate-500">Targeting built from actual customer data.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-violet-500 mt-1">edit_note</span>
                  <div>
                    <strong className="text-slate-800">Ad copy using customer words</strong>
                    <p className="text-sm text-slate-500">Speak their language, not marketing jargon.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-violet-50 border-l-4 border-violet-500 p-6 rounded-r-xl">
            <h4 className="text-xl font-bold text-violet-900 mb-2">The Result</h4>
            <p className="text-violet-800 font-medium text-lg">
              You still control the budget. Scout7 gives you the experiments to run.
            </p>
          </div>
        </div>
        {/* Right: Visual (Ad Campaign Interface Mockup) */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 w-full max-w-md relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-50" />
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Campaign Ready</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">
                Launch
              </span>
            </div>
            {/* Meta Tab */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-blue-600">public</span>
                <span className="font-bold text-slate-700">Meta (Facebook/Instagram)</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Audience:</span>
                  <span className="font-medium text-slate-900">Lookalike 1% (High Intent)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Angle:</span>
                  <span className="font-medium text-slate-900">"Stop wasting time"</span>
                </div>
                <div className="p-3 bg-white rounded border border-slate-200 mt-2">
                  <p className="text-slate-600 italic">
                    "Still doing manual data entry? See how [Brand] automates 90% of your workflow..."
                  </p>
                </div>
              </div>
            </div>
            {/* Google Tab */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-red-500">search</span>
                <span className="font-bold text-slate-700">Google Search</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">Keywords:</span>
                  <span className="font-medium text-slate-900">"Automate data entry", "Best tools for X"</span>
                </div>
                <div className="p-3 bg-white rounded border border-slate-200 mt-2">
                  <p className="text-blue-600 font-medium underline">Automate Your Workflow | Save 20 Hrs/Week</p>
                  <p className="text-slate-500 text-xs">Ad · www.yourbrand.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
