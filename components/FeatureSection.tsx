import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
  reverse?: boolean;
  children?: React.ReactNode;
}

export const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonText,
  buttonOnClick,
  reverse = false,
  children,
}: FeatureSectionProps) => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="mt-20 sm:mt-24 md:mt-28 lg:mt-36 w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-6">
      {/* Desktop and Tablet Layout */}
      <div className="hidden md:flex gap-8 lg:gap-16 xl:gap-32 items-center">
        <div
          className={`${reverse ? "md:w-[45%] lg:w-[40%] xl:w-[35%] order-2" : "md:w-[45%] lg:w-[40%] xl:w-[35%]"} transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : reverse ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10'
          }`}
        >
          <div
            className={`flex flex-col grow text-black ${reverse ? "items-end" : "items-start"}`}
          >
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight ${reverse ? "text-right" : ""}`}>
              {title.split(".").map((line, index) => {
                const trimmedLine = line.trim();
                if (!trimmedLine) return null;
                return (
                  <span key={index}>
                    {trimmedLine}{index < title.split(".").length - 1 && trimmedLine && "."}
                    {index < title.split(".").length - 1 && trimmedLine && <br />}
                  </span>
                );
              })}
            </h2>
            <div
              className="shrink-0 mt-5 md:mt-6 lg:mt-7 max-w-full h-[3px] md:h-[4px] w-[200px] md:w-[240px] lg:w-[280px] bg-gradient-to-r from-orange-400 to-purple-500 rounded-full"
            />
            <p
              className={`self-stretch mt-5 md:mt-6 lg:mt-7 text-base md:text-lg lg:text-xl ${reverse ? "text-right" : ""}`}
            >
              {description.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < description.split("\n").length - 1 && <br />}
                </span>
              ))}
            </p>
            {buttonText && (
              <button
                onClick={buttonOnClick}
                className="px-6 py-3 md:px-7 md:py-3.5 lg:px-8 lg:py-4 mt-6 md:mt-7 lg:mt-8 text-base md:text-lg font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
        <div
          className={`${reverse ? "md:w-[55%] lg:w-[55%] xl:w-[55%] order-1" : "md:ml-0 lg:ml-5 md:w-[55%] lg:w-[55%] xl:w-[55%]"} transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : reverse ? 'opacity-0 -translate-x-10' : 'opacity-0 translate-x-10'
          }`}
        >
          {imageSrc ? (
            <div className="relative rounded-2xl overflow-hidden">

              {/* Image with glass overlay */}
              <img
                src={imageSrc}
                alt={imageAlt || ""}
                className="relative z-10 object-contain w-full rounded-2xl shadow-xl max-md:mt-8 max-md:max-w-full"
              />
            </div>
          ) : (
            children
          )}
        </div>
      </div>

      {/* Mobile Layout - Title, Line, Image, Description, Button */}
      <div className={`md:hidden flex flex-col items-center transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Title with centered bottom line */}
        <h2 className="text-2xl sm:text-3xl font-semibold leading-tight text-center">
          {title.split(".").map((line, index) => {
            const trimmedLine = line.trim();
            if (!trimmedLine) return null;
            return (
              <span key={index}>
                {trimmedLine}{index < title.split(".").length - 1 && trimmedLine && "."}
                {index < title.split(".").length - 1 && trimmedLine && <br />}
              </span>
            );
          })}
        </h2>
        <div className="shrink-0 mt-4 sm:mt-5 h-[3px] sm:h-[4px] w-[150px] sm:w-[200px] bg-gradient-to-r from-orange-400 to-purple-500 rounded-full" />

        {/* Image */}
        {imageSrc ? (
          <div className="relative rounded-2xl overflow-hidden w-full mt-8">
            <img
              src={imageSrc}
              alt={imageAlt || ""}
              className="relative z-10 object-contain w-full rounded-2xl aspect-[1.25] shadow-xl"
            />
          </div>
        ) : (
          <div className="w-full mt-8">
            {children}
          </div>
        )}

        {/* Description */}
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-center">
          {description.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </p>

        {/* Button */}
        {buttonText && (
          <button
            onClick={buttonOnClick}
            className="px-6 py-3 sm:px-7 sm:py-3.5 mt-5 sm:mt-6 text-base sm:text-lg font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};
