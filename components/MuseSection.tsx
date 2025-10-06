"use client";

import Image from 'next/image';

interface MuseSectionProps {}

export const MuseSection = ({}: MuseSectionProps) => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex gap-12 items-center max-md:flex-col">
        {/* Left side - Text content */}
        <div className="flex-1 max-md:w-full">
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold text-black mb-6 max-md:text-3xl">
              Muse Beta — Get Seen While Building
            </h2>
            <div className="w-60 h-1 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full mb-8" />
            <p className="text-xl text-gray-700 mb-8 leading-relaxed max-md:text-lg">
              Muse keeps you top of mind — generating posts for LinkedIn & X that
              match your tone, topics, and schedule. Stay consistent without the burnout.
            </p>
            <button className="px-8 py-4 bg-black text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Request Early Access
            </button>
          </div>
        </div>

        {/* Right side - Dashboard mockup */}
        <div className="flex-1 max-md:w-full">
          <div className="relative bg-white rounded-2xl max-w-2xl mx-auto">
            <Image
              src="/images/muse-dashboard.svg"
              alt="Muse Dashboard"
              width={603}
              height={354}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};