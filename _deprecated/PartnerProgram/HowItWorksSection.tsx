"use client";
import * as React from "react";

export const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Apply",
      description: "Submit the partner form",
    },
    {
      number: 2,
      title: "Review",
      description: "We confirm the fit",
    },
    {
      number: 3,
      title: "Onboard",
      description: "Get enablement materials",
    },
    {
      number: 4,
      title: "Guide",
      description: "Help founders succeed",
    },
    {
      number: 5,
      title: "Earn",
      description: "lifetime rewards as they win",
    },
  ];

  return (
    <div className="flex flex-col items-center max-md:px-4 mt-32 max-md:mt-20">
      <div className="text-5xl font-bold text-center text-black mb-4 max-md:text-3xl">
        How It Works
      </div>
      <div className="text-2xl text-center text-gray-600 mb-16 max-md:text-xl max-md:mb-10">
        Simple, Selective, Strategic
      </div>

      {/* Desktop view - horizontal layout */}
      <div className="hidden md:flex items-start justify-center max-w-[1400px] w-full gap-20">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative flex items-center">
              <div className="w-[7rem] h-[7rem] bg-black rounded-2xl flex items-center justify-center text-white text-6xl">
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute left-[80px] top-1/2 transform -translate-y-1/2 w-[12rem] h-[2px] bg-black"></div>
              )}
            </div>
            <div className="mt-6 text-3xl font-medium text-black">
              {step.title}
            </div>
            <div className="mt-2 text-xl text-gray-500 text-center max-w-[175px]">
              {step.description}
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view - vertical timeline layout */}
      <div className="md:hidden w-full max-w-[400px]">
        <div className="relative pl-4">
          {/* Vertical line connecting all steps */}
          <div className="absolute left-[38px] top-6 bottom-6 w-[2px] bg-black"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="flex items-start relative pb-12 last:pb-0">
              {/* Number box */}
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white text-lg relative z-10">
                {step.number}
              </div>

              {/* Text content */}
              <div className="ml-6">
                <h3 className="text-xl font-semibold text-black">
                  {step.title}
                </h3>
                <p className="text-base text-gray-500 mt-1">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};