export const OrganicEngagementSection = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 border-t border-slate-200">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Organic Engagement</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mt-2 mb-6">
          Find customers without paying for ads
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
          People talk about products like yours every day — on Reddit, LinkedIn, X, YouTube, Facebook, and
          Instagram.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative min-h-[400px] flex flex-col justify-center gap-6">
          {/* Bubble 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm">
              <span className="material-symbols-outlined text-base">forum</span> Reddit
            </div>
            <p className="text-slate-800 font-medium">"What's the best [product] for [problem]?"</p>
          </div>
          {/* Bubble 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 transform translate-x-8 rotate-1 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm">
              <span className="material-symbols-outlined text-base">post_add</span> LinkedIn
            </div>
            <p className="text-slate-800 font-medium">"Is there something better than [competitor]?"</p>
          </div>
          {/* Bubble 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm">
              <span className="material-symbols-outlined text-base">alternate_email</span> X (Twitter)
            </div>
            <p className="text-slate-800 font-medium">"Has anyone tried [brand]? Worth it?"</p>
          </div>
          {/* Bubble 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 transform translate-x-4 rotate-2 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 mb-2 text-slate-400 text-sm">
              <span className="material-symbols-outlined text-base">group</span> Facebook
            </div>
            <p className="text-slate-800 font-medium">"I need help with [problem] — any suggestions?"</p>
          </div>
        </div>
        <div className="space-y-8">
          <div className="prose prose-lg text-slate-600">
            <p className="text-lg leading-relaxed">
              <strong className="text-slate-900">Scout7 finds these conversations</strong> and helps you reply in a
              helpful way — not salesy.
            </p>
            <p className="text-lg leading-relaxed">
              When you show up and help, people trust you. They buy from you. They tell their friends. And if
              someone complains, you can fix it before it becomes a bigger problem.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
            <h4 className="text-xl font-bold text-blue-900 mb-2">The Result</h4>
            <p className="text-blue-800 font-medium text-lg">
              No ads. No cold outreach. Just real conversations that turn into real customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
