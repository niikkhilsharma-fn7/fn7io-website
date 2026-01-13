"use client";
import * as React from "react";
import { useEffect } from "react";

export const TargetAudienceSection = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 4000); // Auto-rotate every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    
    // Resume auto-rotation after 8 seconds of user interaction
    setTimeout(() => {
      setIsPaused(false);
    }, 8000);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-48 text-5xl font-semibold text-center text-black max-md:mt-16 max-md:text-4xl max-md:px-4">
        Who This Is For
      </div>
      <div className="mt-1 text-3xl text-center text-black max-md:max-w-full max-md:text-2xl max-md:px-4">
        Built for those trusted by founders
      </div>
      <div className="mt-10 w-full max-w-[1100px] max-md:max-w-full max-md:mt-8">
        {/* Desktop view - 3 columns */}
        <div className="hidden md:flex gap-5">
          <div className="w-[33%]">
            <div className="flex overflow-hidden flex-col grow items-start py-5 pr-14 pl-5 w-full text-2xl text-black bg-white rounded-3xl shadow-[-2px_2px_6px_rgba(0,0,0,0.25)]">
              <div className="relative bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-xl p-[2px] w-[51px] h-[51px]">
                <div className="bg-white rounded-xl w-full h-full flex items-center justify-center font-semibold text-black">
                  1
                </div>
              </div>
              <div className="mt-5 text-4xl">
                Incubators
              </div>
              <div className="mt-20">
                Giving startups real GTM firepower
              </div>
            </div>
          </div>
          <div className="ml-5 w-[33%]">
            <div className="flex overflow-hidden flex-col grow items-start px-5 py-5 w-full text-2xl text-black bg-white rounded-3xl shadow-[-2px_2px_6px_rgba(0,0,0,0.25)]">
              <div className="relative bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-xl p-[2px] w-[51px] h-[51px]">
                <div className="bg-white rounded-xl w-full h-full flex items-center justify-center font-semibold text-black">
                  2
                </div>
              </div>
              <div className="mt-5 text-4xl">
                Influencers
              </div>
              <div className="self-stretch mt-20">
                Trusted by builders at scale
              </div>
            </div>
          </div>
          <div className="ml-5 w-[33%]">
            <div className="flex overflow-hidden flex-col grow items-start px-5 py-5 w-full text-2xl text-black bg-white rounded-3xl shadow-[-2px_2px_6px_rgba(0,0,0,0.25)]">
              <div className="relative bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-xl p-[2px] w-[51px] h-[51px]">
                <div className="bg-white rounded-xl w-full h-full flex items-center justify-center font-semibold text-black">
                  3
                </div>
              </div>
              <div className="mt-5 text-4xl">
                Mentors
              </div>
              <div className="self-stretch mt-20">
                Working with founders behind the scenes
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden flex flex-col items-center px-4">
          <div className="relative w-full max-w-[340px]">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${activeIndex * 100}%)`
                }}
              >
                <div className="w-full flex-shrink-0 p-2">
                  <div className="flex flex-col items-start pl-6 pr-5 py-6 text-2xl text-black bg-white rounded-3xl shadow-[-2px_2px_6px_rgba(0,0,0,0.25)]">
                  <div className="relative bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-xl p-[2px] w-[51px] h-[51px]">
                    <div className="bg-white rounded-xl w-full h-full flex items-center justify-center font-semibold text-black">
                      1
                    </div>
                  </div>
                  <div className="mt-5 text-3xl">
                    Incubators
                  </div>
                  <div className="mt-8 text-xl">
                    Giving startups real<br />GTM firepower
                  </div>
                </div>
              </div>
              <div className="w-full flex-shrink-0 p-2">
                <div className="flex flex-col items-start pl-6 pr-5 py-6 text-xl text-black bg-white rounded-3xl shadow-[-2px_2px_6px_rgba(0,0,0,0.25)]">
                  <div className="relative bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-xl p-[2px] w-[51px] h-[51px]">
                    <div className="bg-white rounded-xl w-full h-full flex items-center justify-center font-semibold text-black">
                      2
                    </div>
                  </div>
                  <div className="mt-5 text-3xl">
                    Influencers
                  </div>
                  <div className="mt-8 text-xl">
                    Trusted by builders<br />at scale
                  </div>
                </div>
              </div>
              <div className="w-full flex-shrink-0 p-2">
                <div className="flex flex-col items-start pl-6 pr-5 py-6 text-xl text-black bg-white rounded-3xl shadow-[-2px_2px_6px_rgba(0,0,0,0.25)]">
                  <div className="relative bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-xl p-[2px] w-[51px] h-[51px]">
                    <div className="bg-white rounded-xl w-full h-full flex items-center justify-center font-semibold text-black">
                      3
                    </div>
                  </div>
                  <div className="mt-5 text-3xl">
                    Mentors
                  </div>
                  <div className="mt-8 text-xl">
                    Working with founders<br />behind the scenes
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => handleIndicatorClick(0)}
              className={`carousel-indicator transition-all duration-300 ${
                activeIndex === 0
                  ? 'w-8 h-2 bg-gradient-to-r from-red-400 to-purple-500 rounded-full'
                  : 'w-2 h-2 bg-gray-300 rounded-full'
              }`}
              aria-label="Go to slide 1"
            />
            <button
              onClick={() => handleIndicatorClick(1)}
              className={`carousel-indicator transition-all duration-300 ${
                activeIndex === 1
                  ? 'w-8 h-2 bg-gradient-to-r from-red-400 to-purple-500 rounded-full'
                  : 'w-2 h-2 bg-gray-300 rounded-full'
              }`}
              aria-label="Go to slide 2"
            />
            <button
              onClick={() => handleIndicatorClick(2)}
              className={`carousel-indicator transition-all duration-300 ${
                activeIndex === 2
                  ? 'w-8 h-2 bg-gradient-to-r from-red-400 to-purple-500 rounded-full'
                  : 'w-2 h-2 bg-gray-300 rounded-full'
              }`}
              aria-label="Go to slide 3"
            />
          </div>
        </div>
      </div>
      <div className="mt-32 mb-32 text-4xl font-medium text-center max-md:mt-16 max-md:mb-16 max-md:max-w-full max-md:text-3xl max-md:px-4 italic bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
        "Because you believe they need help executing"
      </div>
    </div>
  );
};
