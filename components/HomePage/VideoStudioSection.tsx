export const VideoStudioSection = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 border-t border-slate-200">
      <div className="text-center mb-16">
        <span className="text-rose-600 font-bold tracking-widest uppercase text-sm">Video Studio</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mt-2 mb-6">
          Create videos that grab attention
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
          The hard part isn't making the video — it's knowing what to say. Scout7 already knows, because it listened
          to your customers.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Visual */}
        <div className="flex justify-center relative">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 w-full max-w-md relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-50" />
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900">Video Script Generator</h3>
              <span className="material-symbols-outlined text-rose-500">movie</span>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase mb-2 block">Hook (0-3s)</span>
                <p className="text-slate-800 font-bold">"Stop scrolling if you're tired of manual data entry."</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase mb-2 block">Body (3-15s)</span>
                <p className="text-slate-700 text-sm">
                  "Most tools force you to copy-paste all day. [Brand] automates it in one click. Watch this..."
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase mb-2 block">CTA (15s+)</span>
                <p className="text-slate-700 text-sm">"Get your evenings back. Try it free at [Link]."</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Content */}
        <div className="space-y-10">
          <div className="prose prose-lg text-slate-600">
            <p className="text-lg leading-relaxed">
              What hook will stop the scroll? What message will make people care? What words will get them to act?
            </p>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 text-lg">What you get:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-rose-500 mt-1">videocam</span>
                  <span>Video ideas based on what your customers talk about</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-rose-500 mt-1">description</span>
                  <span>Scripts with hooks that grab attention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-rose-500 mt-1">style</span>
                  <span>100+ styles including UGC, Cinematic, and Anime</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-rose-500 mt-1">face</span>
                  <span>Create an avatar from your photo or use Scout7's</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl">
            <h4 className="text-xl font-bold text-rose-900 mb-2">The Result</h4>
            <p className="text-rose-800 font-medium text-lg">
              Other tools wait for you to figure out what to say. Scout7 tells you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
