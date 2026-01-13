export const WhoItsForSection = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 border-t border-slate-200">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">Who It's For</h2>
        <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">Built for founders building:</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* SaaS Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 relative overflow-hidden group hover:border-blue-300 hover:shadow-2xl transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative z-10">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">cloud</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">SaaS</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Find champions, DevRel leaders, integration partners, and investors. Understand objections, switching
              triggers, and the language that converts technical buyers.
            </p>
          </div>
        </div>
        {/* DTC Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 relative overflow-hidden group hover:border-rose-300 hover:shadow-2xl transition-all">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-100 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 group-hover:opacity-70 transition-opacity" />
          <div className="relative z-10">
            <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl">storefront</span>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">DTC</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Reach retail buyers, distributors, marketplaces, and wholesale partners. Discover tribes by taste,
              identity, price sensitivity, and seasonal triggers.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center max-w-3xl mx-auto">
        <h4 className="text-2xl font-bold text-slate-900 mb-2">
          If you're selling B2B or B2B2C and don't have a marketing team...
        </h4>
        <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Scout7 is for you.
        </p>
      </div>
    </section>
  );
};
