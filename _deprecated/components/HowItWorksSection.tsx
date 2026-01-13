import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Image from 'next/image';

interface HowItWorksSectionProps {}

export const HowItWorksSection = ({}: HowItWorksSectionProps) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="pb-20 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto"
    >
      {/* Title */}
      <h2 className={`text-2xl sm:text-3xl tablet:text-[32px] sm-desktop:text-[35px] font-semibold text-center text-black mb-8 sm:mb-12 tablet:mb-16 sm-desktop:mb-[72px] transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ fontFamily: 'Sora, -apple-system, Roboto, Helvetica, sans-serif' }}>
        How Scout Works
      </h2>

      {/* Large Desktop view - horizontal cards with connecting line */}
      <div className="hidden sm-desktop:block relative max-w-[1200px] mx-auto">
        {/* Connecting line */}
        <div className="absolute top-[88px] left-[138px] w-[793px] h-px bg-black z-0"></div>

        <div className="flex items-stretch justify-between gap-[37px] relative z-10">
          {/* Card 1 - Finds conversations */}
          <div
            className={`flex flex-col bg-black rounded-[20px] p-6 w-[350px] h-[172px] shadow-sm transition-all ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDuration: '700ms',
              transitionDelay: '100ms'
            }}
          >
            <h3 className="text-[25px] font-semibold text-left text-white leading-normal mt-[12px] ml-[27px]"
                style={{ fontFamily: 'Sora, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Finds conversations
            </h3>
            {/* Social media platform icons */}
            <div className="flex gap-[1.8rem] mt-4 ml-5">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={40} height={40} className="object-cover" />
              </div>
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <Image src="/images/reddit.png" alt="Reddit" width={40} height={40} className="object-cover" />
              </div>
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <Image src="/images/abstract logo x.png" alt="X" width={40} height={40} className="object-cover" />
              </div>
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <Image src="/images/Blue plus.png" alt="More" width={40} height={40} className="object-cover" />
              </div>
            </div>
          </div>

          {/* Card 2 - Drafts replies */}
          <div
            className={`flex flex-col bg-black rounded-[20px] p-6 w-[350px] h-[172px] shadow-sm transition-all ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDuration: '700ms',
              transitionDelay: '200ms'
            }}
          >
            <h3 className="text-[25px] font-semibold text-white text-left leading-normal mt-[12px] ml-[27px]"
                style={{ fontFamily: 'Sora, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Drafts replies
            </h3>
            <p className="text-[22px] font-normal text-white text-left mt-[16px] ml-[27px]"
               style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', lineHeight: '1.3' }}>
              In your tone with <br /> UTM links
            </p>
          </div>

          {/* Card 3 - Posts & tracks */}
          <div
            className={`flex flex-col bg-black rounded-[20px] p-6 w-[350px] h-[172px] shadow-sm transition-all ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDuration: '700ms',
              transitionDelay: '300ms'
            }}
          >
            <h3 className="text-[25px] font-semibold text-white text-left leading-normal mt-[12px] ml-[27px]"
                style={{ fontFamily: 'Sora, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Posts & tracks
            </h3>
            <p className="text-[22px] font-normal text-white text-left mt-[13px] ml-[27px]"
               style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', lineHeight: '1.3' }}>
              Publishes as you, measures results
            </p>
          </div>
        </div>
      </div>

      {/* Tablet view - 2 cards top, 1 centered bottom */}
      <div className={`hidden tablet:block sm-desktop:hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex flex-col gap-6 max-w-[700px] mx-auto">
          {/* Top row - 2 cards */}
          <div className="flex gap-6 justify-center">
            {/* Card 1 - Finds conversations */}
            <div className="flex flex-col bg-black rounded-[20px] p-6 w-[320px] h-[160px] shadow-sm transition-all"
                 style={{
                   transitionDuration: '700ms',
                   transitionDelay: '100ms'
                 }}>
              <h3 className="text-[24px] font-semibold text-white leading-normal mt-4"
                  style={{ fontFamily: 'Sora, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Finds conversations
              </h3>
              {/* Social media platform icons */}
              <div className="flex gap-2 mt-3">
                <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <Image src="/images/linkedin.png" alt="LinkedIn" width={36} height={36} className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <Image src="/images/reddit.png" alt="Reddit" width={36} height={36} className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <Image src="/images/abstract logo x.png" alt="X" width={36} height={36} className="object-cover" />
                </div>
                <div className="w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <Image src="/images/Blue plus.png" alt="More" width={36} height={36} className="object-cover" />
                </div>
              </div>
            </div>

            {/* Card 2 - Drafts replies */}
            <div className="flex flex-col bg-black rounded-[20px] p-6 w-[320px] h-[160px] shadow-sm transition-all"
                 style={{
                   transitionDuration: '700ms',
                   transitionDelay: '200ms'
                 }}>
              <h3 className="text-[24px] font-semibold text-white text-center leading-normal mt-4"
                  style={{ fontFamily: 'Sora, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Drafts replies
              </h3>
              <p className="text-[20px] font-normal text-white text-center mt-3"
                 style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', lineHeight: '1.3' }}>
                In your tone with UTM links
              </p>
            </div>
          </div>

          {/* Bottom row - 1 centered card */}
          <div className="flex justify-center">
            <div className="flex flex-col bg-black rounded-[20px] p-6 w-[320px] h-[160px] shadow-sm transition-all"
                 style={{
                   transitionDuration: '700ms',
                   transitionDelay: '300ms'
                 }}>
              <h3 className="text-[24px] font-semibold text-white leading-normal mt-4"
                  style={{ fontFamily: 'Sora, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Posts & tracks
              </h3>
              <p className="text-[20px] font-normal text-white mt-3"
                 style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', lineHeight: '1.3' }}>
                Publishes as you, measures results
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view - stacked layout */}
      <div className={`tablet:hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Card 1 - Finds conversations */}
          <div className="flex flex-col bg-black rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 min-h-[100px] sm:min-h-[120px] shadow-sm">
            <h3 className="text-lg sm:text-[22px] font-semibold text-white leading-normal"
                style={{ fontFamily: 'Sora, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Finds conversations
            </h3>
            {/* Social media platform icons */}
            <div className="flex gap-2 mt-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <Image src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <Image src="/images/reddit.png" alt="Reddit" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <Image src="/images/abstract logo x.png" alt="X" width={32} height={32} className="object-cover" />
              </div>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                <Image src="/images/Blue plus.png" alt="More" width={32} height={32} className="object-cover" />
              </div>
            </div>
          </div>

          {/* Card 2 - Drafts replies */}
          <div className="flex flex-col bg-black rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 min-h-[120px] sm:min-h-[140px] shadow-sm">
            <h3 className="text-lg sm:text-[22px] font-semibold text-white text-center leading-normal"
                style={{ fontFamily: 'Sora, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Drafts replies
            </h3>
            <p className="text-base sm:text-[18px] font-normal text-white text-center mt-2 sm:mt-3"
               style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', lineHeight: '1.3' }}>
              In your tone with UTM links
            </p>
          </div>

          {/* Card 3 - Posts & tracks */}
          <div className="flex flex-col bg-black rounded-[16px] sm:rounded-[20px] p-4 sm:p-6 min-h-[120px] sm:min-h-[140px] shadow-sm">
            <h3 className="text-lg sm:text-[22px] font-semibold text-white leading-normal"
                style={{ fontFamily: 'Sora, -apple-system, Roboto, Helvetica, sans-serif' }}>
              Posts & tracks
            </h3>
            <p className="text-base sm:text-[18px] font-normal text-white mt-2 sm:mt-3"
               style={{ fontFamily: 'Poppins, -apple-system, Roboto, Helvetica, sans-serif', lineHeight: '1.3' }}>
              Publishes as you, measures results
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
