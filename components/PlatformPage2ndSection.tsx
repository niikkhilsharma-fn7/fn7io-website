import React from 'react';
import Image from "next/image";

export const TimeIsNowSection = () => {
  return (
    <div style={{ backgroundColor: '#000000' }}>
    <section className="ml-6 bg-black px-6 sm:px-12 lg:px-32 xl:px-50 py-12 md:py-24 min-h-[530px] flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-16 lg:gap-48">

  {/* Left Side - 60% on lg and above */}
      <div className="flex flex-col items-start text-left md:text-left w-full lg:w-[70%] ml-4">
        <h2 className="text-[30px] md:!text-[50px] font-semibold text-left lg:text-left text-white">
          Agentic triage in action.
        </h2>
        {/* Desktop View */}
        <div className="hidden md:flex flex-col items-start text-left body-text text-white leading-snug gap-2 mt-6 md:mt-20 font-normal">
          <p>Your product isn’t the problem. The problem is</p>
          <p>no one triaging what matters and owning the</p>
          <p>process. Atlas triages every step, acts fast, and</p>
          <p>keeps momentum going. That’s how you scale.</p>

          <h2 className="font-semibold text-white">
            “This isn’t automation. This is adaptation.
          </h2>
        </div>

        {/* Mobile View */}
        <div className="flex md:hidden flex-col items-start text-left body-text text-white leading-snug gap-2 mt-6 font-normal mr-2">
          <p>
            Your product isn’t the problem. The problem is no one triaging what matters
            and owning the process. Atlas triages every step, acts fast, and keeps
            momentum going. That’s how you scale.
          </p>

          <h2 className="font-semibold text-white">
            “This isn’t automation. This is adaptation.
          </h2>
        </div>
      </div>

      {/* Right Side - 40% on lg and above */}
      <div className="mx-auto w-full lg:w-[30%] max-w-[300px] sm:max-w-[400px]">
          <Image
            src="/atlas-section2-text.svg"
            className="w-full h-full"
            alt="Stack"
            width={100}
            height={100}
          />
        </div>
    </section>
    </div>
  );
}
