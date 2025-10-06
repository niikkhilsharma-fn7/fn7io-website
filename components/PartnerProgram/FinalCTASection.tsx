"use client";
import * as React from "react";
import { useRouter } from 'next/router';
import { trackEvent, getCurrentUTMParams } from '@/utils/amplitude';

export const FinalCTASection = () => {
  const router = useRouter();
  
  return (
    <div className="flex flex-col items-center px-20 py-16 mt-36 mb-4 mx-auto w-full text-center border border-white border-solid max-w-[1150px] rounded-[30px] shadow-[-2px_2px_4px_rgba(0,0,0,0.71),0px_4px_8px_rgba(0,0,0,0.15)] max-md:px-6 max-md:py-10 max-md:mt-16 max-md:mb-6 max-md:mx-4 max-md:max-w-[calc(100%-32px)]">
      <div className="text-5xl text-black max-md:text-2xl">
        This program is not for everyone.
        <br className="max-md:hidden" />
        <span className="max-md:block max-md:mt-2" style={{ color: "rgba(105,105,105,1)" }}>
          It is for people already doing the work.
        </span>
      </div>
      <button 
        onClick={() => {
          trackEvent('CTA Clicked', {
            cta_name: 'Guide & Grow',
            page: 'Partner Program',
            location: 'Final CTA Section',
            destination: '/partner-application',
            ...getCurrentUTMParams()
          });
          router.push('/partner-application');
        }}
        className="px-8 py-4 mt-16 text-2xl text-white bg-black rounded-xl hover:bg-gray-800 transition-colors max-md:px-6 max-md:py-3 max-md:mt-8 max-md:text-lg max-md:w-full max-md:max-w-[280px]">
        Guide & Grow
      </button>
    </div>
  );
};
