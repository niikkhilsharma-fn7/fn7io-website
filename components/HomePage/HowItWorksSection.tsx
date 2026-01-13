export const HowItWorksSection = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">How Scout7 Works</h2>
        <p className="text-xl text-slate-600 font-medium mb-12">From signup to campaign in under 10 minutes</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-100 -z-10 transform translate-y-1/2" />
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-50 shadow-xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-5xl text-blue-600">settings</span>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              1
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Set up your Brand Brain</h3>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 relative w-full h-full flex items-center justify-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-blue-50 transform rotate-45 border-t border-l border-blue-100" />
            <p className="text-blue-900 font-medium italic">
              Answer a few questions about your product, audience, and voice.
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-purple-50 shadow-xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-5xl text-purple-600">radar</span>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              2
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Scout7 scans your market</h3>
          <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 relative w-full h-full flex items-center justify-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-50 transform rotate-45 border-t border-l border-purple-100" />
            <p className="text-purple-900 font-medium">
              Tell it who to listen to. Scout7 scans millions of conversations across LinkedIn, Reddit, X, YouTube,
              and more to find the signal in the noise.
            </p>
          </div>
        </div>
        {/* Step 3 */}
        <div className="flex flex-col items-center text-center group">
          <div className="w-24 h-24 bg-white rounded-full border-4 border-green-50 shadow-xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-300">
            <span className="material-symbols-outlined text-5xl text-green-600">rocket_launch</span>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Get everything ready to launch</h3>
          <div className="bg-green-50 p-6 rounded-2xl border border-green-100 relative w-full h-full flex items-center justify-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-green-50 transform rotate-45 border-t border-l border-green-100" />
            <p className="text-green-900 font-medium">
              Tribes, insights, campaigns, video scripts, ad copy, and creative — generated and ready to go in
              minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
