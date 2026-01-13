export const FeaturesGridSection = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-32">
      {/* The Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-0 relative z-20">
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg feature-card flex flex-col items-start hover:border-blue-200">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 mb-6">
            <span className="material-symbols-outlined text-4xl">forum</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Organic Engagement</h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Find customers without paying for ads.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg feature-card flex flex-col items-start hover:border-emerald-200">
          <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600 mb-6">
            <span className="material-symbols-outlined text-4xl">person_check</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Qualified Leads</h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Find the right people to grow your business.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg feature-card flex flex-col items-start hover:border-amber-200">
          <div className="p-3 bg-amber-50 rounded-2xl text-amber-600 mb-6">
            <span className="material-symbols-outlined text-4xl">lightbulb</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Audience Insights</h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Know what your customers really think.
          </p>
        </div>
        {/* Feature 4 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg feature-card flex flex-col items-start hover:border-violet-200">
          <div className="p-3 bg-violet-50 rounded-2xl text-violet-600 mb-6">
            <span className="material-symbols-outlined text-4xl">ads_click</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Targeted Ad-Campaigns</h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">Launch ads that actually work.</p>
        </div>
        {/* Feature 5 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg feature-card flex flex-col items-start hover:border-rose-200">
          <div className="p-3 bg-rose-50 rounded-2xl text-rose-600 mb-6">
            <span className="material-symbols-outlined text-4xl js-replaced-missing-icon">
              radio_button_unchecked
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Video Studio</h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">Create videos that grab attention.</p>
        </div>
        {/* Feature 6 */}
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg feature-card flex flex-col items-start hover:border-cyan-200">
          <div className="p-3 bg-cyan-50 rounded-2xl text-cyan-600 mb-6">
            <span className="material-symbols-outlined text-4xl">palette</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Image Studio</h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Create images and posts that connect.
          </p>
        </div>
      </div>
      {/* THE FOUNDATION (The Brain - Full Width Base, Compact Height) */}
      <div className="relative w-full z-10 -mt-10 pt-16">
        <div className="w-full bg-slate-900 text-white rounded-t-[3rem] rounded-b-[2rem] p-1 shadow-2xl relative overflow-hidden group border-t border-slate-700">
          {/* Animated Background inside Foundation */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e40af_0%,_transparent_60%)] opacity-30 animate-pulse" />
          <div className="absolute inset-0 foundation-mesh opacity-10" />
          {/* Content Area: Reduced padding for compact look */}
          <div className="bg-slate-900/95 backdrop-blur-sm rounded-t-[2.8rem] rounded-b-[1.8rem] px-8 py-10 md:px-16 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* Connecting Lines Visual from top */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-slate-900 to-transparent z-20" />
            <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left flex-1 w-full justify-start">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-40 rounded-full animate-pulse" />
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-2xl border border-blue-400/30 brain-icon-anim relative z-10">
                  <span className="material-symbols-outlined text-5xl text-white">psychology</span>
                </div>
              </div>
              <div className="flex-1 text-justify md:pr-10">
                <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                  <span className="px-2 py-0.5 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-[10px] font-bold tracking-widest uppercase">
                    The Foundation
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 text-left">Your Brand Brain</h3>
                <p className="text-slate-400 text-base leading-relaxed text-justify w-full">
                  A centralized intelligence core that learns, adapts, and powers every feature above. All your
                  data, connected in one place.
                </p>
              </div>
            </div>
            <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-bold text-base hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl whitespace-nowrap flex-shrink-0 self-center md:self-auto">
              See how it works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
