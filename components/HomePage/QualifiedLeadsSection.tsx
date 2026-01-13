export const QualifiedLeadsSection = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 border-t border-slate-200">
      <div className="text-center mb-16">
        <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Qualified Leads</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mt-2 mb-6">
          Find the right people to grow your business
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
          Other tools give you millions of random contacts. You waste time guessing who to reach out to. Scout7 does
          the work for you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-10 order-2 lg:order-1">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <span className="material-symbols-outlined text-emerald-500">psychology_alt</span>
              How it works
            </h3>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-slate-600 mb-4 font-medium">Tell Scout7 what you need:</p>
              <div className="flex flex-col gap-3">
                <div className="bg-slate-50 p-3 rounded-lg text-slate-700 italic border-l-4 border-emerald-400">
                  "Find companies who might need my product"
                </div>
                <div className="bg-slate-50 p-3 rounded-lg text-slate-700 italic border-l-4 border-emerald-400">
                  "Find stores that might sell my product"
                </div>
              </div>
              <p className="text-slate-600 mt-4 font-medium">
                Scout7 finds the right people and tells you how to reach out.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">Who Scout7 finds</h3>
            <div className="flex flex-wrap gap-3">
              {["Buyers", "Store Owners", "Distributors", "Partners", "Agencies", "Investors"].map((type) => (
                <span key={type} className="px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-bold text-sm">
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl">
            <h4 className="text-xl font-bold text-emerald-900 mb-2">The Result</h4>
            <p className="text-emerald-800 font-medium text-lg">
              No random lists. No wasted time. Just the right people for what you need right now.
            </p>
          </div>
        </div>
        {/* Right: Visual (Lead Card Mockup) */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 w-full max-w-md relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-50" />
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-slate-200 overflow-hidden">
                <img
                  alt="Lead Avatar"
                  className="w-full h-full object-cover"
                  src="/images/reddit.png"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900">Sarah Jenkins</h4>
                <p className="text-slate-500 text-sm">Marketing Director at TechFlow</p>
                <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold mt-1">
                  <span className="material-symbols-outlined text-sm">star</span>
                  98% Match
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Why good fit</h5>
                <p className="text-sm text-slate-700">
                  TechFlow recently raised Series B and is actively hiring for sales roles. They use HubSpot
                  (compatible) and Sarah posted about scaling lead gen last week.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Talking Points</h5>
                <ul className="text-sm text-slate-700 space-y-1 list-disc list-inside">
                  <li>Mention their Series B news</li>
                  <li>Reference her LinkedIn post on scaling</li>
                  <li>Highlight HubSpot integration</li>
                </ul>
              </div>
              <button className="w-full py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">send</span>
                Generate Outreach Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
