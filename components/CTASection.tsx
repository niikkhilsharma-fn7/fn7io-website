import Image from "next/image";
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { trackSignupClick, getCurrentUTMParams } from '@/utils/amplitude';

interface CTASectionProps {}

export const CTASection = ({}: CTASectionProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Function to preserve UTM parameters when redirecting to beta access form
  const getSignupUrlWithUTM = () => {
    const baseUrl = 'https://www.fn7.io/get-form';
    const utmParams: Record<string, string> = {};

    // Collect all UTM parameters from current URL
    searchParams.forEach((value, key) => {
      if (key.startsWith('utm_')) {
        utmParams[key] = value;
      }
    });

    // If there are UTM parameters, append them to the signup URL
    if (Object.keys(utmParams).length > 0) {
      const queryString = new URLSearchParams(utmParams).toString();
      return `${baseUrl}?${queryString}`;
    }

    // No UTM params, return base URL
    return baseUrl;
  };

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
              window.location.href = getSignupUrlWithUTM();
            }}
            className="mt-8 px-8 py-4 bg-black text-white text-lg font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Get Beta Access
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
            window.location.href = getSignupUrlWithUTM();
          }}
          className="px-6 py-3 bg-black text-white text-base font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Show Me My Buyers
        </button>
      </div>
    </section>
  );
};
