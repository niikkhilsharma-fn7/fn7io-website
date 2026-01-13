export const ComparisonTableSection = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 pb-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-4">
          What marketing actually costs
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
          Agencies charge $3K–10K/month. DIY eats 20 hours of your week.
          <br />
          There's a better way.
        </p>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[800px] bg-white rounded-[2.5rem] border border-slate-200 shadow-xl p-8 md:p-12">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="py-6 px-4 text-slate-400 font-medium text-sm uppercase tracking-widest w-1/4" />
                <th className="py-6 px-4 text-slate-900 font-bold text-xl w-1/4">Agency</th>
                <th className="py-6 px-4 text-slate-900 font-bold text-xl w-1/4">DIY + AI Tools</th>
                <th className="py-6 px-4 bg-blue-50 text-blue-700 font-bold text-xl w-1/4 rounded-t-2xl border-t border-x border-blue-200">
                  Scout7
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100 comparison-row group">
                <td className="py-6 px-4 font-bold text-slate-800">Monthly cost</td>
                <td className="py-6 px-4 text-slate-600">$3,000–10,000+</td>
                <td className="py-6 px-4 text-slate-600">$200–500 in tools</td>
                <td className="py-6 px-4 bg-blue-50 text-blue-700 font-bold border-x border-blue-200">
                  Free / $29
                </td>
              </tr>
              <tr className="border-b border-slate-100 comparison-row group">
                <td className="py-6 px-4 font-bold text-slate-800">Your time</td>
                <td className="py-6 px-4 text-slate-600">5–10 hrs/week</td>
                <td className="py-6 px-4 text-slate-600">15–20 hrs/week</td>
                <td className="py-6 px-4 bg-blue-50 text-blue-700 font-bold border-x border-blue-200">
                  Under 2 hrs
                </td>
              </tr>
              <tr className="border-b border-slate-100 comparison-row group">
                <td className="py-6 px-4 font-bold text-slate-800">Hidden cost</td>
                <td className="py-6 px-4 text-slate-600">Retainers + revisions</td>
                <td className="py-6 px-4 text-slate-600">Your time = $39K/year*</td>
                <td className="py-6 px-4 bg-blue-50 text-blue-700 font-bold border-x border-blue-200">—</td>
              </tr>
              <tr className="border-b border-slate-100 comparison-row group">
                <td className="py-6 px-4 font-bold text-slate-800">Customer insights</td>
                <td className="py-6 px-4 text-slate-600">Generic personas</td>
                <td className="py-6 px-4 text-slate-600">You guess</td>
                <td className="py-6 px-4 bg-blue-50 text-blue-700 font-bold border-x border-blue-200">
                  Built from real conversations
                </td>
              </tr>
              <tr className="comparison-row group">
                <td className="py-6 px-4 font-bold text-slate-800">Campaign speed</td>
                <td className="py-6 px-4 text-slate-600">2–4 weeks</td>
                <td className="py-6 px-4 text-slate-600">Days (if you know what to say)</td>
                <td className="py-6 px-4 bg-blue-50 text-blue-700 font-bold border-x border-b border-blue-200 rounded-b-2xl">
                  Minutes
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-8 text-center md:text-left">
            <p className="text-sm text-slate-400 italic">
              *At $50/hr, 15 hrs/week = $39,000/year in lost founder time — on top of your tool subscriptions.
            </p>
          </div>
          <div className="mt-12 text-center bg-slate-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e40af_0%,_transparent_60%)] opacity-30" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
              DIY looks cheap. It's not.
            </h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto relative z-10">
              Scout7 gives you agency-quality outputs for $29/month — and 900 hours back every year.
            </p>
            <button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg relative z-10 hover:scale-105 transform">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
