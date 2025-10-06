"use client";
import * as React from "react";

export const BenefitsSection = () => {
  return (
    <div className="w-full bg-black py-24 max-md:py-16">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-4">
        <h2 className="text-7xl font-bold text-white text-left mb-20 max-md:text-4xl max-md:mb-12 max-md:text-center">
          What You Will Get
        </h2>

        <div className="grid grid-cols-3 gap-12 max-md:grid-cols-1 max-md:gap-8 max-md:max-w-[400px] max-md:mx-auto">
          {/* Free & Early Access */}
          <div className="flex items-start gap-6">
            <div className="w-1 h-[4.5rem] bg-gradient-to-b from-red-400 via-pink-400 to-purple-500 flex-shrink-0"></div>
            <div className="flex flex-col">
              <h3 className="text-3xl font-semibold text-white mb-2 max-md:text-2xl">
                Free & Early Access
              </h3>
              <p className="text-xl text-gray-300 max-md:text-lg">
                To fn7's GTM agents
              </p>
            </div>
          </div>

          {/* Lifetime Rewards */}
          <div className="flex items-start gap-6">
            <div className="w-1 h-[4.5rem] bg-gradient-to-b from-red-400 via-pink-400 to-purple-500 flex-shrink-0"></div>
            <div className="flex flex-col">
              <h3 className="text-3xl font-semibold text-white mb-2 max-md:text-2xl">
                Lifetime Rewards
              </h3>
              <p className="text-xl text-gray-300 max-md:text-lg">
                tied to founder success
              </p>
            </div>
          </div>

          {/* Dedicated Support */}
          <div className="flex items-start gap-6">
            <div className="w-1 h-[4.5rem] bg-gradient-to-b from-red-400 via-pink-400 to-purple-500 flex-shrink-0"></div>
            <div className="flex flex-col">
              <h3 className="text-3xl font-semibold text-white mb-2 max-md:text-2xl">
                Dedicated Support
              </h3>
              <p className="text-xl text-gray-300 max-md:text-lg">
                whenever you need it
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};