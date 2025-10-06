"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay as SwiperAutoplay } from "swiper/modules";
export const Fn7Need = () => {
  const swiper1Ref = useRef<{ swiper: SwiperClass } | null>(null);

  const slides1 = [
    { id: 1, title: "Great product, but no one knows." },
    { id: 2, title: `High ad-spends, low ROI.` },
    { id: 3, title: "Sent 100 emails. Got 2 replies." },
    { id: 4, title: "Forgot follow-ups. Lost deals." },
  ];

  const slides2 = [
    {
      id: 1,
      content: "Agentic Social Engagement",
      content2: "47% increase in social media visibility",
    },
    {
      id: 2,
      content: "Smart Campaign Optimizer",
      content2: "45% reduction in acquisition costs",
    },
    {
      id: 3,
      content: "Hyper-Research Prospecting",
      content2: "30% boost in email engagement",
    },
    {
      id: 4,
      content: "Adaptive Reply Intelligence",
      content2: "30hrs saved on follow-ups monthly",
    },
  ];

  const Autoplay = SwiperAutoplay;

  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-12 lg:gap-20 justify-between items-start lg:h-[970px] lg:items-center">
      <div className="md:max-w-[1470px] w-[90%] md:w-full mx-auto flex flex-col gap-3 md:gap-8 py-16 pb-20 items-center md:items-stretch">
        <h2 className="section-heading font-bold text-center mb-4 md:mb-0">
          Why exactly do you need{" "}
          <span className="relative">
            fn7
            <div className="absolute top-full left-0 w-full h-[3px] bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded mt-1"></div>
          </span>
          ?
        </h2>

        <section className="flex items-center justify-center w-full ">
          <div className="flex flex-col gap-6 md:flex-row  justify-between items-start w-[85%] ultra:w-[95%]">
            <div className="w-full max-w-xl ultra:max-w-2xl h-[60px] md:h-[121px] flex items-center gap-4 md:ml-10">
              <Image
                src="/lock.svg"
                className="hidden md:block"
                alt="lock"
                width={80}
                height={80}
              />
              <Image
                src="/lock.svg"
                className="block md:hidden"
                alt="lock"
                width={24}
                height={24}
              />
              <span className="text-[#EF4D4D] body-text font-medium self-center mt-0 lg:mt-4">
                Your growth machine is broken.
              </span>
            </div>

            <div className="w-full max-w-2xl h-[60px] md:h-[121px] flex items-center mt-0 lg:mt-2">
              <div className="flex items-center gap-3 md:max-w-xl lg:max-w-4xl ">
                <Image
                  src="/close.svg"
                  alt="close"
                  width={35}
                  height={35}
                  className="hidden md:block flex-shrink-0  -mt-10  sm:mt-0"
                />
                <Image
                  src="/close.svg"
                  alt="close"
                  width={24}
                  height={24}
                  className="block md:hidden flex-shrink-0  -mt-10  sm:mt-0"
                />
                <Swiper
                  ref={swiper1Ref}
                  direction="vertical"
                  slidesPerView={1}
                  speed={400}
                  spaceBetween={12}
                  autoHeight
                  allowTouchMove={false}
                  simulateTouch={false}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="w-full"
                >
                  {slides1.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <span className="body-text font-medium">
                        {slide.title}
                      </span>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <hr className="border-black w-[100%]" />

        <section className="flex items-center justify-center w-full ">
          <div className="flex flex-col gap-6 md:flex-row  justify-between items-start w-[85%] ultra:w-[95%]">
            <div className="w-full max-w-xl h-[60px] md:h-[150px] flex items-start gap-4 md:ml-10">
              <Image
                src="/startup.svg"
                className="hidden md:block mt-4"
                alt="lock"
                width={80}
                height={80}
              />
              <Image
                src="/startup.svg"
                className="block md:hidden mt-4"
                alt="lock"
                width={24}
                height={24}
              />
              <span className="body-text font-medium mt-4">
                Accelerate your growth engine with fn7
              </span>
            </div>

            <div className="w-full max-w-2xl h-[60px] md:h-[121px] flex items-center mt-0 lg:mt-2">
              <div className="flex flex-col gap-4 w-full">
                <Swiper
                  direction="vertical"
                  slidesPerView={1}
                  speed={400}
                  spaceBetween={16}
                  autoHeight
                  allowTouchMove={false}
                  simulateTouch={false}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="w-full"
                >
                  {slides2.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <Image
                            src="/circle-tick.svg"
                            alt="tick"
                            width={35}
                            height={35}
                          />
                          <span className="body-text font-medium">
                            {slide.content}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Image
                            src="/circle-tick.svg"
                            alt="tick"
                            width={35}
                            height={35}
                          />
                          <span className="body-text font-medium">
                            {slide.content2}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
