import { useState, useEffect } from 'react';

interface WhyChooseSectionProps {}

const messages = [
  "I've built something good but I don't have customers yet",
  "I can't afford ads — and cold outreach isn't working.",
  "I don't have time to scroll socials & understand what my market wants",
  "I'm tired of guessing if my product has demand."
];

export const WhyChooseSection = ({}: WhyChooseSectionProps) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setIsAnimating(false);
      }, 300);
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="my-40 max-w-[1200px] mx-auto max-md:mt-20 max-md:mb-20 max-md:max-w-full max-md:px-6">
      <h2 className="text-4xl font-semibold text-center text-black max-md:max-w-full max-md:text-3xl">
        Why Founders Use Scout
      </h2>
      <div className="flex overflow-hidden justify-between items-center px-6 py-6 mt-7 w-[1000px] max-md:w-full text-xl font-light text-black bg-white rounded-2xl border border-gray-200 border-solid shadow-[-1px_2px_4px_rgba(0,0,0,0.25)] mx-auto max-md:px-5 max-md:py-5 max-md:text-base max-md:mt-6 min-h-[80px] max-md:min-h-[100px]">
        <p className={`flex-1 max-md:max-w-full transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {messages[currentMessageIndex]}
        </p>
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 13L2 2L7 13L2 24.5L21 13Z" stroke="black"/>
        </svg>
      </div>
    </section>
  );
};
