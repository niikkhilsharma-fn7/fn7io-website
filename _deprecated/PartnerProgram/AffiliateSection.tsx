"use client";
import * as React from "react";
import { useRouter } from 'next/router';

const CheckIcon = () => (
  <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.667 5L7.5 14.167L3.333 10"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AffiliateSection = () => {
  const router = useRouter();

  return (
    <div className="mt-32 w-full max-w-[1200px] max-md:mt-12 max-md:max-w-full max-md:px-4">
      <h2 className="text-5xl font-bold text-black mb-16 max-md:text-3xl max-md:mb-10">
        What Is Partner Program?
      </h2>

      <div className="flex gap-20 max-md:flex-col max-md:gap-10">
        <div className="flex-1 max-md:w-full">
          <div className="space-y-4 max-md:space-y-6">
            <div className="flex items-start gap-2">
              <div className="mt-2 flex-shrink-0">
                <CheckIcon />
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed max-md:text-lg">
                A selective partnership for those already trusted by founders
              </p>
            </div>

            <div className="flex items-start gap-2">
              <div className="mt-2 flex-shrink-0">
                <CheckIcon />
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed max-md:text-lg">
                We equip you with fn7 GTM agents
              </p>
            </div>

            <div className="flex items-start gap-2">
              <div className="mt-2 flex-shrink-0">
                <CheckIcon />
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed max-md:text-lg">
                You guide founders through execution so they succeed
              </p>
            </div>

            <div className="flex items-start gap-2">
              <div className="mt-2 flex-shrink-0">
                <CheckIcon />
              </div>
              <p className="text-2xl text-gray-800 leading-relaxed max-md:text-lg">
                You receive lifetime rewards for every founder you help grow
              </p>
            </div>
          </div>

          <button
            onClick={() => router.push('/partner-application')}
            className="mt-12 px-8 py-4 bg-black text-white text-xl font-medium rounded-xl hover:bg-gray-800 transition-colors max-md:hidden">
            Submit Application
          </button>
        </div>

        <div className="flex-1 flex md:flex-col justify-center md:items-center gap-8 max-md:gap-3 max-md:w-full max-md:flex-row">
          <div className="relative w-full max-w-[500px] max-md:flex-1">
            <div className="bg-white rounded-xl p-10 shadow-xl border border-gray-100 max-md:rounded-lg max-md:px-2 max-md:py-3 max-md:shadow-md">
              <div className="text-4xl font-semibold bg-gradient-to-r from-red-600 via-pink-400 to-purple-500 bg-clip-text text-transparent text-center max-md:text-xs max-md:font-medium">
                Selective<br className="md:hidden" /> Partnership
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[500px] max-md:flex-1">
            <div className="bg-white rounded-xl p-10 shadow-xl border border-gray-100 max-md:rounded-lg max-md:px-2 max-md:py-3 max-md:shadow-md">
              <div className="text-4xl font-semibold bg-gradient-to-r from-red-600 via-pink-400 to-purple-500 bg-clip-text text-transparent text-center max-md:text-xs max-md:font-medium">
                Guide<br className="md:hidden" /> Founders
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[500px] max-md:flex-1">
            <div className="bg-white rounded-xl p-10 shadow-xl border border-gray-100 max-md:rounded-lg max-md:px-2 max-md:py-3 max-md:shadow-md">
              <div className="text-4xl font-semibold bg-gradient-to-r from-red-600 via-pink-400 to-purple-500 bg-clip-text text-transparent text-center max-md:text-xs max-md:font-medium">
                Lifetime<br className="md:hidden" /> Rewards
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-only button - placed below the cards */}
      <button
        onClick={() => router.push('/partner-application')}
        className="hidden max-md:block mt-8 w-full px-8 py-4 bg-black text-white text-lg font-medium rounded-xl hover:bg-gray-800 transition-colors">
        Submit Application
      </button>
    </div>
  );
};