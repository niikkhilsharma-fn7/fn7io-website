import { useState, useEffect } from "react";

interface TestimonialsSectionProps {}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I had interns doing this job for me. It still took so much manual effort. Honestly, this is one of the best finds. Please integrate more platforms to connect with.",
    author: "Daniel",
    role: "CEO & CTO",
  },
  {
    quote: "I booked 6 meetings for the month. That's actually crazy. For a solopreneur like me, this is gold.",
    author: "Novac",
    role: "Founder",
  },
  {
    quote:
      "Ads were really draining me. This is by far the best tool I have come across to find buyers with actual need! I got 87 beta users in 1 week.",
    author: "Daya",
    role: "CEO",
  },
];

export const TestimonialsSection = ({}: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 md:px-6 max-w-[1200px] mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-10 sm:mb-12 md:mb-14 lg:mb-16">
        Beta Proof
      </h2>

      {/* Desktop and Tablet view - responsive grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-2xl lg:rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col justify-between min-h-[350px] md:min-h-[380px] lg:min-h-[400px] relative"
          >
            {/* Quote marks */}
            <div className="text-6xl font-serif mb-4 opacity-80">
              <svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M0.56 26.6V18.08C0.56 15.84 0.76 13.76 1.16 11.84C1.64 9.92 2.4 8.04 3.44 6.2C4.56 4.28 6 2.44 7.76 0.679997L12.44 4.16C11.08 5.67999 10 7.12 9.2 8.48C8.4 9.84 7.84 11.16 7.52 12.44C7.2 13.72 7.04 15.04 7.04 16.4L4.16 14.36H12.8V26.6H0.56ZM20.48 26.6V18.08C20.48 15.84 20.68 13.76 21.08 11.84C21.56 9.92 22.32 8.04 23.36 6.2C24.48 4.28 25.92 2.44 27.68 0.679997L32.36 4.16C31 5.67999 29.92 7.12 29.12 8.48C28.32 9.84 27.76 11.16 27.44 12.44C27.12 13.72 26.96 15.04 26.96 16.4L24.08 14.36H32.72V26.6H20.48Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* Quote text */}
            <p className="text-lg leading-relaxed flex-grow mb-8">{testimonial.quote}</p>

            {/* Author info */}
            <div className="mt-auto">
              <p className="text-lg font-bold">{testimonial.author},</p>
              <p className="text-lg font-normal opacity-90">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile view - carousel */}
      <div className="md:hidden flex flex-col items-center">
        <div className="relative overflow-hidden px-2 w-full max-w-[400px]">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <div className="bg-black text-white rounded-3xl p-6 flex flex-col justify-between min-h-[360px] mx-auto">
                  {/* Quote marks */}
                  <svg
                    width="32"
                    height="26"
                    viewBox="0 0 33 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4 opacity-90"
                  >
                    <path
                      d="M0.56 26.6V18.08C0.56 15.84 0.76 13.76 1.16 11.84C1.64 9.92 2.4 8.04 3.44 6.2C4.56 4.28 6 2.44 7.76 0.679997L12.44 4.16C11.08 5.67999 10 7.12 9.2 8.48C8.4 9.84 7.84 11.16 7.52 12.44C7.2 13.72 7.04 15.04 7.04 16.4L4.16 14.36H12.8V26.6H0.56ZM20.48 26.6V18.08C20.48 15.84 20.68 13.76 21.08 11.84C21.56 9.92 22.32 8.04 23.36 6.2C24.48 4.28 25.92 2.44 27.68 0.679997L32.36 4.16C31 5.67999 29.92 7.12 29.12 8.48C28.32 9.84 27.76 11.16 27.44 12.44C27.12 13.72 26.96 15.04 26.96 16.4L24.08 14.36H32.72V26.6H20.48Z"
                      fill="white"
                    />
                  </svg>

                  {/* Quote text */}
                  <p className="text-base leading-relaxed flex-grow mb-6">{testimonial.quote}</p>

                  {/* Author info */}
                  <div className="mt-auto">
                    <p className="text-base font-bold">{testimonial.author},</p>
                    <p className="text-base font-normal opacity-90">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`carousel-indicator transition-all duration-300 ${
                activeIndex === index
                  ? "w-8 h-2 bg-gradient-to-r from-red-400 to-purple-500 rounded-full"
                  : "w-2 h-2 bg-gray-300 rounded-full"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
