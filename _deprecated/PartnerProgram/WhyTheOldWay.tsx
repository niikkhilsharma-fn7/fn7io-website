"use client";

interface WhyTheOldWayProps {}

export const WhyTheOldWay = ({}: WhyTheOldWayProps) => {
  return (
    <section className="w-full pb-20 pt-20 px-20 max-md:px-6 max-md:pb-12 max-md:pt-12 max-md:mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-6xl font-bold text-center text-black mb-16 max-md:text-4xl">
          Why The Old Way?
        </h2>

        {/* Desktop: Side by side headers | Mobile: Traditional GTM section first */}
        <div className="max-md:hidden grid lg:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          <h3 className="text-3xl font-semibold text-[#999999] text-left">
            Traditional GTM
          </h3>
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 bg-clip-text text-transparent text-left">
            fn7 GTM
          </h3>
        </div>

        {/* Desktop Grid Layout */}
        <div className="max-md:hidden space-y-6 max-w-4xl mx-auto">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="bg-[#999999] text-white rounded-2xl p-6 min-h-[100px] flex items-center">
              <p className="text-2xl leading-relaxed">
                35.7% of internet users block ads.
              </p>
            </div>
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-red-400 via-pink-400 to-purple-500">
              <div className="bg-white rounded-[calc(1rem-2px)] p-6 min-h-[100px] flex items-center">
                <p className="text-2xl text-black leading-relaxed">
                  67% CTR with scout replies alone.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="bg-[#999999] text-white rounded-2xl p-6 min-h-[100px] flex items-center">
              <p className="text-2xl leading-relaxed">
                SEO takes 6-12 months to rank.
              </p>
            </div>
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-red-400 via-pink-400 to-purple-500">
              <div className="bg-white rounded-[calc(1rem-2px)] p-6 min-h-[100px] flex items-center">
                <p className="text-2xl text-black leading-relaxed">
                  3,782 buyer conversations surfaced.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid lg:grid-cols-2 gap-4">
            <div className="bg-[#999999] text-white rounded-2xl p-6 min-h-[100px] flex items-center">
              <p className="text-2xl leading-relaxed">
                Outreach is like shouting into the void.
              </p>
            </div>
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-red-400 via-pink-400 to-purple-500">
              <div className="bg-white rounded-[calc(1rem-2px)] p-6 min-h-[100px] flex items-center">
                <p className="text-2xl text-black leading-relaxed">
                  412 high pain-point posts identified.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout: Traditional GTM first, then fn7 GTM */}
        <div className="md:hidden space-y-8 max-w-5xl mx-auto">
          {/* Traditional GTM Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#999999] text-left mb-4">
              Traditional GTM
            </h3>
            <div className="bg-[#999999] text-white rounded-2xl p-5 min-h-[80px] flex items-center">
              <p className="text-xl">
                35.7% of internet users block ads.
              </p>
            </div>
            <div className="bg-[#999999] text-white rounded-2xl p-5 min-h-[80px] flex items-center">
              <p className="text-xl">
                SEO takes 6-12 months to rank.
              </p>
            </div>
            <div className="bg-[#999999] text-white rounded-2xl p-5 min-h-[80px] flex items-center">
              <p className="text-xl">
                Outreach is like shouting into the void.
              </p>
            </div>
          </div>

          {/* fn7 GTM Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 bg-clip-text text-transparent text-left mb-4">
              fn7 GTM
            </h3>
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-red-400 via-pink-400 to-purple-500">
              <div className="bg-white rounded-[calc(1rem-2px)] p-5 min-h-[80px] flex items-center">
                <p className="text-xl text-black">
                  67% CTR with scout replies alone.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-red-400 via-pink-400 to-purple-500">
              <div className="bg-white rounded-[calc(1rem-2px)] p-5 min-h-[80px] flex items-center">
                <p className="text-xl text-black">
                  3,782 buyer conversations surfaced.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-red-400 via-pink-400 to-purple-500">
              <div className="bg-white rounded-[calc(1rem-2px)] p-5 min-h-[80px] flex items-center">
                <p className="text-xl text-black">
                  412 high pain-point posts identified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};