"use client";
import * as React from "react";

export const ProcessSection = () => {
  return (
    <div className="flex flex-col items-center max-md:px-4 mt-32 max-md:mt-20">
      <div className="text-5xl font-bold text-center text-black mb-16 max-md:text-3xl max-md:mb-10">
        What You Need To Do
      </div>

      <div className="flex flex-col gap-6 w-full max-w-[800px] max-md:gap-4 max-md:max-w-full">
        <div className="bg-white rounded-2xl px-10 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 max-md:px-6 max-md:py-6">
          <div className="text-2xl text-center bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent max-md:text-xl">
            Introduce founders to Scout
          </div>
        </div>

        <div className="bg-white rounded-2xl px-10 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 max-md:px-6 max-md:py-6">
          <div className="text-2xl text-center max-md:text-xl">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Support their onboarding</span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> and wins</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl px-10 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 max-md:px-6 max-md:py-6">
          <div className="text-2xl text-center max-md:text-xl">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Help them execute GTM</span>
            <span className="text-gray-700"> </span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">effectively</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl px-10 py-8 shadow-[0_4px_20px_rgba(0,0,0,0.12)] border border-gray-100 max-md:px-6 max-md:py-6">
          <div className="text-2xl text-center max-md:text-xl">
            <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">Stay connected & </span>
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">grow together</span>
          </div>
        </div>
      </div>
    </div>
  );
};