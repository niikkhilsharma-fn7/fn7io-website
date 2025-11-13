import Image from "next/image";
import { useCallback } from 'react';
import { trackSignupClick, getCurrentUTMParams } from '@/utils/amplitude';

interface CTASectionProps {}

export const CTASection = ({}: CTASectionProps) => {
  const handleGetStarted = useCallback(() => {
    const heroElement = document.getElementById('hero-section');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    window.dispatchEvent(new Event('trigger-hero-input'));
  }, []);

  return (
    <section className="flex items-center justify-center px-8 py-20 mt-32 max-w-[1200px] mx-auto w-full max-md:mt-20 max-md:px-6 max-md:py-16">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center gap-12 w-full">
        {/* Left side content - 40% */}
        <div className="w-[40%]">
          <p className="text-2xl font-semibold mb-4">These metrics can be yours. <br/>
            Scout puts you where your buyers are.
          </p>
          <button
            onClick={() => {
              trackSignupClick('CTA Section - Desktop', getCurrentUTMParams());
              handleGetStarted();
            }}
            className="mt-8 px-8 py-4 bg-black text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get Started
          </button>
        </div>

        {/* Right side image - 60% */}
        <div className="w-[60%]">
          <div className="relative w-full">
            <Image
              src="/images/CTAImage.png"
              alt="CTA Dashboard"
              width={720}
              height={347}
              className="w-full h-auto object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout - Image, Description, Button */}
      <div className="md:hidden flex flex-col items-center w-full">
        {/* Image First */}
        <div className="w-full mb-8">
          <div className="overflow-hidden bg-white">
            <Image
              src="/images/CTAImage.png"
              alt="CTA Dashboard"
              width={639}
              height={308}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-xl font-semibold mb-6 text-center">
          These metrics can be yours. <br/>
          Scout puts you where your buyers are.
        </p>

        {/* Button */}
        <button
          onClick={() => {
            trackSignupClick('CTA Section - Mobile', getCurrentUTMParams());
            handleGetStarted();
          }}
          className="px-6 py-3 bg-black text-white text-base font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};
