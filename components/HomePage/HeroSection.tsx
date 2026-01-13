"use client";

import { TypingAnimation } from "./TypingAnimation";
import { BrandIntelligence } from "./BrandIntelligence";
import { WebsiteInputForm } from "./WebsiteInputForm";

export const HeroSection = () => {
  return (
    <>
      {/* Fluid Smoke Canvas (rendered once, fixed position) */}
      <BrandIntelligence showCard={false} showCanvas={true} />

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-32 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 mb-8 hover:border-blue-300 transition-colors cursor-default shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600" />
          </span>
          Built for founder-led brands
        </div>
        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[1.1] max-w-5xl text-slate-900">
          The complete AI marketing stack for <span className="text-gradient">founder-led brands</span>
        </h1>
        {/* Subheadline with Typing Animation */}
        <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl font-medium min-h-[3.5rem] md:min-h-auto flex flex-col md:block items-center">
          Launch and scale your brand with Scout7
          <br className="hidden md:inline" />
          <TypingAnimation />
        </p>

        {/* Website Input Form */}
        <WebsiteInputForm />

        {/* Interactive Diagram Container */}
        <div className="w-full relative mt-8 select-none min-h-[700px] flex items-center justify-center bg-slate-50/50 rounded-3xl border border-slate-200 overflow-hidden shadow-inner">
          {/* SVG Connector Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Left Inputs to Center */}
            <path
              className="flow-line hidden md:block"
              d="M 280 140 C 400 140, 400 350, 560 350"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            <path
              className="flow-line hidden md:block"
              d="M 280 220 C 400 220, 400 350, 560 350"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            <path
              className="flow-line hidden md:block"
              d="M 280 300 C 400 300, 400 350, 560 350"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            <path
              className="flow-line hidden md:block"
              d="M 280 380 C 400 380, 400 350, 560 350"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            <path
              className="flow-line hidden md:block"
              d="M 280 460 C 400 460, 400 350, 560 350"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            <path
              className="flow-line hidden md:block"
              d="M 280 540 C 400 540, 400 350, 560 350"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            {/* Center to Right Outputs */}
            <path
              className="flow-line hidden md:block"
              d="M 720 350 C 800 350, 800 120, 920 120"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            <path
              className="flow-line hidden md:block"
              d="M 720 350 C 800 350, 800 235, 920 235"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            <path
              className="flow-line hidden md:block"
              d="M 720 350 C 800 350, 800 350, 920 350"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            <path
              className="flow-line hidden md:block"
              d="M 720 350 C 800 350, 800 465, 920 465"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            <path
              className="flow-line hidden md:block"
              d="M 720 350 C 800 350, 800 580, 920 580"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
            />
            {/* Top to Center */}
            <line
              className="hidden md:block"
              stroke="#e2e8f0"
              strokeDasharray={4}
              strokeWidth={2}
              x1={640}
              x2={640}
              y1={210}
              y2={260}
            />
            {/* Center to Bottom */}
            <line
              className="hidden md:block"
              stroke="#e2e8f0"
              strokeDasharray={4}
              strokeWidth={2}
              x1={640}
              x2={640}
              y1={440}
              y2={520}
            />
          </svg>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10 w-full px-4">
            {/* Left Side: Inputs */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-5 items-center md:items-start md:pl-12">
              <div className="s7-card-base p-4 flex items-center gap-4 w-52 hover:-translate-y-1 group">
                <div className="w-8 h-8 rounded bg-[#0077b5] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm">work</span>
                </div>
                <span className="text-sm font-bold text-slate-700">LinkedIn</span>
              </div>
              <div className="s7-card-base p-4 flex items-center gap-4 w-52 hover:-translate-y-1 group">
                <div className="w-8 h-8 rounded bg-[#FF4500] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm js-replaced-missing-icon">
                    radio_button_unchecked
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-700">Reddit</span>
              </div>
              <div className="s7-card-base p-4 flex items-center gap-4 w-52 hover:-translate-y-1 group">
                <div className="w-8 h-8 rounded bg-black flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm">close</span>
                </div>
                <span className="text-sm font-bold text-slate-700">X (Twitter)</span>
              </div>
              <div className="s7-card-base p-4 flex items-center gap-4 w-52 hover:-translate-y-1 group">
                <div className="w-8 h-8 rounded bg-[#FF0000] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm">play_arrow</span>
                </div>
                <span className="text-sm font-bold text-slate-700">YouTube</span>
              </div>
              <div className="s7-card-base p-4 flex items-center gap-4 w-52 hover:-translate-y-1 group">
                <div className="w-8 h-8 rounded bg-[#1877F2] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm js-replaced-missing-icon">
                    radio_button_unchecked
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-700">Facebook</span>
              </div>
              <div className="s7-card-base p-4 flex items-center gap-4 w-52 hover:-translate-y-1 group">
                <div className="w-8 h-8 rounded bg-gradient-to-tr from-yellow-400 to-purple-600 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-sm">photo_camera</span>
                </div>
                <span className="text-sm font-bold text-slate-700">Instagram</span>
              </div>
            </div>
            {/* Center Column */}
            <div className="col-span-1 md:col-span-6 flex flex-col items-center justify-center h-full relative">
              {/* Top Card: Brand Intelligence Game */}
              <BrandIntelligence showCard={true} showCanvas={false} />
              {/* Center Shape: Scout7 Marketing Agent */}
              <div className="relative w-48 h-48 flex items-center justify-center z-10 group my-4">
                <div className="core-pulse" />
                <div className="core-pulse-2" />
                <div className="w-36 h-36 bg-slate-900 rounded-full shadow-2xl flex items-center justify-center relative z-20 overflow-hidden ring-4 ring-white border border-slate-200">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="relative z-10 flex flex-col items-center justify-center text-center px-2">
                    <div className="text-xl font-black text-white tracking-tighter mb-1">Scout7</div>
                    <div className="text-[9px] font-bold text-blue-400 uppercase tracking-widest leading-snug">
                      Your
                      <br />
                      Marketing
                      <br />
                      Agent
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full h-20 bg-blue-600 blur-xl opacity-60" />
                </div>
              </div>
              {/* Bottom Card: Your Goals */}
              <div className="mt-12 w-72 s7-card-base px-6 py-5 flex items-center gap-4 hover:-translate-y-1">
                <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                  <span className="material-symbols-outlined">track_changes</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Target</span>
                  <span className="font-bold text-lg text-slate-800">Your Goals</span>
                </div>
              </div>
            </div>
            {/* Right Side: Outputs (Flip Cards) */}
            <div className="col-span-1 md:col-span-3 flex flex-col gap-5 items-center md:items-end md:pr-12">
              {/* Output 1: Left Align */}
              <div className="flip-card w-72 h-28 group cursor-pointer">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="p-2 bg-blue-50 rounded text-blue-600">
                      <span className="material-symbols-outlined text-3xl">forum</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg text-left">Organic Engagement</h3>
                  </div>
                  <div className="flip-card-back">
                    <h4 className="font-bold text-blue-600 text-sm uppercase mb-1 tracking-wider">
                      Conversation Mining
                    </h4>
                    <p className="text-sm text-slate-700 font-bold leading-relaxed">
                      Turn social chatter into customers instantly without ads.
                    </p>
                  </div>
                </div>
              </div>
              {/* Output 2: Left Align */}
              <div className="flip-card w-72 h-28 group cursor-pointer">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="p-2 bg-emerald-50 rounded text-emerald-600">
                      <span className="material-symbols-outlined text-3xl">person_check</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg text-left">Qualified Leads</h3>
                  </div>
                  <div className="flip-card-back">
                    <h4 className="font-bold text-emerald-600 text-sm uppercase mb-1 tracking-wider">High Intent</h4>
                    <p className="text-sm text-slate-700 font-bold leading-relaxed">
                      Identify buyers signaling they are ready to switch.
                    </p>
                  </div>
                </div>
              </div>
              {/* Output 3: Left Align */}
              <div className="flip-card w-72 h-28 group cursor-pointer">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="p-2 bg-amber-50 rounded text-amber-600">
                      <span className="material-symbols-outlined text-3xl">lightbulb</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg text-left">Audience Insights</h3>
                  </div>
                  <div className="flip-card-back">
                    <h4 className="font-bold text-amber-600 text-sm uppercase mb-1 tracking-wider">Deep Analysis</h4>
                    <p className="text-sm text-slate-700 font-bold leading-relaxed">
                      Know their pains and triggers before you write copy.
                    </p>
                  </div>
                </div>
              </div>
              {/* Output 4: Left Align */}
              <div className="flip-card w-72 h-28 group cursor-pointer">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="p-2 bg-violet-50 rounded text-violet-600">
                      <span className="material-symbols-outlined text-3xl">ads_click</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg text-left">Ad Campaigns</h3>
                  </div>
                  <div className="flip-card-back">
                    <h4 className="font-bold text-violet-600 text-sm uppercase mb-1 tracking-wider">Auto-Generated</h4>
                    <p className="text-sm text-slate-700 font-bold leading-relaxed">
                      Meta &amp; Google ads created from data, ready to launch.
                    </p>
                  </div>
                </div>
              </div>
              {/* Output 5: Left Align */}
              <div className="flip-card w-72 h-28 group cursor-pointer">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="p-2 bg-rose-50 rounded text-rose-600">
                      <span className="material-symbols-outlined text-3xl js-replaced-missing-icon">
                        radio_button_unchecked
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg text-left">Creative Studio</h3>
                  </div>
                  <div className="flip-card-back">
                    <h4 className="font-bold text-rose-600 text-sm uppercase mb-1 tracking-wider">Viral Content</h4>
                    <p className="text-sm text-slate-700 font-bold leading-relaxed">
                      Viral scripts, hooks, and images generated based on trends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
