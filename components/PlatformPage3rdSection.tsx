import React from "react";
import { CheckCircle } from "lucide-react";

export const AgenticOSSection = () => {
  const features = [
    "Adaptive Intel",
    "Memory & OKR Driven",
    "Proactive Execution",
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF !important' }}>
      <section className="ml-6 bg-white px-6 sm:px-12 lg:px-32 xl:px-50 py-24 md:py-40 min-h-[530px] flex flex-col lg:flex-row items-center justify-center gap-0 md:gap-16 lg:gap-48 -pl-3">
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-12 lg:gap-32 items-center">
            {/* Left Column */}
            <div>
              <h2 className="section-heading text-left lg:text-left">
                Not a tool.
                <br />
                Your Mutating Agent.
              </h2>
              <p className="section-body mt-10 text-gray-800 text-left lg:text-left">
                Agents adapt in real time - reshaping
                <br />
                flows, reassigning tasks, and flagging
                <br />
                risks to keep growth fast, smart, and
                <br />
                disruption-proof.
              </p>
            </div>

            {/* Right Column */}
            <div className="lg:max-w-[450px] flex flex-col items-start">
              {features.map((text, idx) => (
                <React.Fragment key={text}>
                  <div className="flex items-center py-4">
                    <CheckCircle className="w-10 h-10 text-teal-500 flex-shrink-0" />
                    <span className="section-body ml-4 text-gray-800">
                      {text}
                    </span>
                  </div>
                  {idx !== features.length - 1 && (
                    <hr className="w-full h-px bg-gray-300 my-2 border-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
