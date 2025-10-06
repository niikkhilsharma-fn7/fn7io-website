"use client";

import { useRouter } from 'next/navigation';

interface RoadmapSectionProps {}

export const RoadmapSection = ({}: RoadmapSectionProps) => {
  const router = useRouter();
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex gap-12 items-center max-lg:flex-col">
        {/* Left side - Card with heading */}
        <div className="flex-1 max-lg:w-full">
          <div className="bg-gray-50 rounded-3xl p-12 shadow-xl max-w-2xl text-center flex flex-col items-center justify-center">
            <h2 className="font-bold text-black leading-tight max-md:text-2xl" style={{ fontSize: '2.8rem' }}>
              Your Go-To-Market.
            </h2>
            <h2 className="font-bold text-black leading-tight max-md:text-2xl" style={{ fontSize: '2.8rem' }}>
              On Autopilot.
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              7 AI agents on duty, scaling your business 24/7.
            </p>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1 max-lg:w-full">
          <div className="max-w-xl">
            <h3 className="text-4xl font-bold text-black mb-4 max-md:text-2xl">
              Wait, there's more.
            </h3>
            <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full mb-8" />
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-md:text-base">
              We're building agents to put GTM on autopilot — from finding buyers to staying 
              visible, from outreach to insights. Scout and Muse are the start. Next come Spark, Echo, 
              Nudge, and Oracle to automate the journey.
            </p>
            <button 
              onClick={() => router.push('/roadmap')}
              className="px-8 py-4 bg-black text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              View Agent Roadmap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};