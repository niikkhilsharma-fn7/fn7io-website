import React from "react";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/router";
import { usePreserveQueryParams } from "@/hooks/usePreserveQueryParams";
export const FullControlSection = () => {
  const router = useRouter();
  const { navigateWithQuery } = usePreserveQueryParams();
  const ownItems = [
    "Your agent logic",
    "Your knowledge graph",
    "Your data, rules, and objectives"
  ];
  const canItems = [
    "License our GTM agents",
    "Purchase our Atlas Platform source code",
    "Transition out your POD team",
  ];

  return (
    <div style={{ backgroundColor: "#F7F7F6" }}>
      <section className="max-w-[1350px] mx-auto px-6 py-16  lg:py-20">
        {/* Intro Text */}
        <div className="md:text-left mb-12 max-w-[1300px] mx-auto flex flex-col items-center justify-center md:block">
          <p className="section-body text-gray-700 text-center lg:text-start">
            You own the platform. You define the edge.
          </p>
          <h2 className=" text-center  md:text-left text-[32px] lg:text-[60px] font-normal mt-2">
            Full Control. Transition Out. Zero Compromise.
          </h2>
          <p className="section-body mt-2 text-gray-400">With Atlas Platform</p>
          <div className="mt-4 flex justify-start">
            <div className="w-[80px] md:w-[290px] h-[4px] border rounded bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded" />
          </div>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-20 mb-12">
          {/* You Own */}
          <div className="flex flex-col  md:block ">
            <h3 className="section-body !font-semibold mb-4">You Own</h3>

            {ownItems.map((text, idx) => (
              <React.Fragment key={text}>
                <div className="flex md:justify-start items-start py-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="card-body ml-3 text-gray-800">{text}</span>
                </div>
                {idx !== ownItems.length - 1 && (
                  <hr className="w-full h-px bg-gray-300 my-2 border-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* You Can */}
          <div className="flex flex-col  md:block ">
            <h3 className="section-body !font-semibold mb-4">You Can</h3>

            {canItems.map((text, idx) => (
              <React.Fragment key={text}>
                <div className="flex md:justify-start items-start py-4">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="card-body ml-3 text-gray-800">{text}</span>
                </div>
                {idx !== canItems.length - 1 && (
                  <hr className="w-full h-px bg-gray-300 my-2 border-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center md:justify-start">
          <button
            className=" w-[160px] h-[44px] text-base md:w-[450px] md:h-[120px] md:font-medium text-white rounded-lg md:text-[40px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,72,44,0.8) 0%, rgba(162,69,238,0.8) 100%)",
            }}
            onClick={() => navigateWithQuery("/get-form")}
          >
            Get started
          </button>
        </div>
      </section>
    </div>
  );
};
