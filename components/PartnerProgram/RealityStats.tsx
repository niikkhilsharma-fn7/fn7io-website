"use client";

interface RealityStatsProps {}

export const RealityStats = ({}: RealityStatsProps) => {
  return (
    <section className="w-full bg-black py-32 px-6 max-md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-md:gap-16">
          {/* Left side - The Reality text */}
          <div className="flex-1">
            <h2 className="text-8xl font-bold text-white leading-[1.4] ml-20 max-md:text-5xl max-md:ml-0">
              <span className="max-md:hidden">The<br />Reality</span>
              <span className="md:hidden">The Reality</span>
            </h2>
          </div>

          {/* Right side - Statistics */}
          <div className="flex-1 space-y-12 max-w-2xl max-md:space-y-10 gap-10">
            {/* Stat 1 */}
            <div className="flex items-start gap-6 max-md:gap-4">
              <div className="w-1 h-28 max-md:h-20 bg-gradient-to-b from-red-400 via-pink-400 to-purple-500 rounded-full flex-shrink-0" />
              <div>
                <p className="text-6xl font-bold text-white mb-4 max-md:text-3xl max-md:mb-3">90%</p>
                <p className="text-2xl text-white max-md:text-lg">fail because GTM is broken.</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-start gap-6 max-md:gap-4">
              <div className="w-1 h-28 max-md:h-20 bg-gradient-to-b from-red-400 via-pink-400 to-purple-500 rounded-full flex-shrink-0" />
              <div>
                <p className="text-6xl font-bold text-white mb-4 max-md:text-3xl max-md:mb-3">75%</p>
                <p className="text-2xl text-white max-md:text-lg">rely on peer validation over ads.</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-start gap-6 max-md:gap-4">
              <div className="w-1 h-28 max-md:h-20 bg-gradient-to-b from-red-400 via-pink-400 to-purple-500 rounded-full flex-shrink-0" />
              <div>
                <p className="text-6xl font-bold text-white mb-4 max-md:text-3xl max-md:mb-3">80%</p>
                <p className="text-2xl text-white max-md:text-lg">launch without demand validation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};