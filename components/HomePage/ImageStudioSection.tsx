export const ImageStudioSection = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 border-t border-slate-200">
      <div className="text-center mb-16">
        <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">Image Studio</span>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mt-2 mb-6">
          Create images and posts that connect
        </h2>
        <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">
          Making images is easy. Knowing what to put on them is hard. Scout7 knows what your customers believe,
          fear, want, and compare.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-10 order-2 lg:order-1">
          <div className="prose prose-lg text-slate-600">
            <p className="text-lg leading-relaxed">
              What message will make someone stop scrolling? What words will make them click? What will make them
              trust you?
            </p>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 text-lg">What you get:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-500 mt-1">lightbulb</span>
                  <span>Image ideas based on real customer language</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-500 mt-1">edit</span>
                  <span>Copy that speaks to what your audience cares about</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-500 mt-1">image</span>
                  <span>Single images for ads and social</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-500 mt-1">view_carousel</span>
                  <span>Carousels for education, comparison, and proof</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-6 rounded-r-xl">
            <h4 className="text-xl font-bold text-cyan-900 mb-2">The Result</h4>
            <p className="text-cyan-800 font-medium text-lg">
              Other tools ask you for a prompt. Scout7 gives you the prompt — and the words that work.
            </p>
          </div>
        </div>
        {/* Right: Visual */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 w-full max-w-md relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100 rounded-full blur-3xl -mr-10 -mt-10 opacity-50" />
            <div className="grid grid-cols-2 gap-4">
              {/* Image 1 */}
              <div className="space-y-2">
                <div className="bg-slate-200 rounded-lg h-32 overflow-hidden relative">
                  <img
                    alt="Social Post 1"
                    className="w-full h-full object-cover"
                    src="/images/reddit.png"
                  />
                </div>
                <p className="text-xs text-slate-500 font-medium">"20 Hours Saved"</p>
              </div>
              {/* Image 2 */}
              <div className="space-y-2">
                <div className="bg-slate-200 rounded-lg h-32 overflow-hidden relative">
                  <img
                    alt="Social Post 2"
                    className="w-full h-full object-cover"
                    src="/images/reddit.png"
                  />
                </div>
                <p className="text-xs text-slate-500 font-medium">"Automate Everything"</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <p className="text-sm font-bold text-slate-900 mb-1">Generated Caption:</p>
              <p className="text-xs text-slate-600 italic">
                "Why work weekends? Our users save 20+ hours a week by automating the boring stuff. See how 👇"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
