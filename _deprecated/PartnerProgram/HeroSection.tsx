import * as React from "react";
import { useRouter } from 'next/router';

export const HeroSection = () => {
  const router = useRouter();
  
  return (
    <section className="relative flex flex-col items-center self-stretch pb-40 w-full text-center bg-white max-md:pb-20 max-md:max-w-full overflow-hidden">
      <h1 className="mt-36 text-6xl font-semibold text-black max-w-[1200px] leading-tight max-md:mt-20 max-md:max-w-full max-md:text-3xl max-md:px-6">
        90% startups fail.
        <br />
        42% lack product-market fit.
        <br />
        Are you guiding them right?
      </h1>
      <p className="mt-5 text-2xl font-normal text-black max-md:max-w-full max-md:text-lg max-md:px-6 max-md:mt-4">
        Let's help them create impact together. Join, guide, & earn.
      </p>
      <button 
        onClick={() => router.push('/partner-application')}
        className="px-8 py-4 mt-7 mb-0 text-lg font-medium text-white bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-lg hover:from-red-500 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 max-md:px-6 max-md:py-3 max-md:mb-2.5 max-md:text-base max-md:mt-6"
      >
        Apply Now
      </button>
    </section>
  );
};
