import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { CheckCircle } from "lucide-react";
import { usePreserveQueryParams } from "@/hooks/usePreserveQueryParams";
export const AgentsThatExecuteSection = () => {
  const router = useRouter();
  const { navigateWithQuery } = usePreserveQueryParams();
  const features = [
    {
      title: "Conversational Agents",
      description: "Facilitate natural, human-like interactions with users",
      imgSrc: "/conversational_optimized.png",
    },
    {
      title: "Creative Agents",
      description: "Generate original content across different formats",
      imgSrc: "/creative_optimized.png",
    },
    {
      title: "Passive Agents",
      description: "Enhance workflows in the background with agentic logic",
      imgSrc: "/passive_optimized.png",
    },
    {
      title: "Active Agents",
      description: "Coordinate multiple actors to drive specific outcomes",
      imgSrc: "/active-agents-thumbnail.svg",
    }
  ];

  const canItems = [
    "Execute against objectives, not prompts",
    "Learn and adapt in production",
    "Operate independently or with you in the loop",
  ];

  return (
    <div style={{ backgroundColor: "#F7F7F6" }}>
      <section className="max-w-[1350px] mx-auto px-6 lg:px-4 lg:px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-y-6 md:gap-y-20 gap-x-4 md:mb-8 items-end">
          {/* Left Header */}
          <div className="flex flex-col ">
            <h2 className="section-heading text-center md:text-start">
              Agents
              <span className="">
                <br />
                You Can
              </span>
              <br />
              Build
            </h2>
            <p className="section-body mt-4 text-center md:text-start">
            Build individual agents or
              <br />
              agentic system.
            </p>
          </div>

          {/* Right Bullets */}
          <div className="!mt-0">
            <h3 className="hidden md:block section-heading font-semibold mb-2 mt-0">
              They:
            </h3>
            <div className="hidden md:block w-[160px] h-[3px] bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-4" />
            <ul className="hidden md:block space-y-2 section-body text-gray-800 list-disc list-inside">
              <li>Execute against objectives, not prompts</li>
              <li>Learn and adapt in production</li>
              <li>Operate independently or with you in the loop</li>
            </ul>
            <div className="flex flex-col items-start text-left section-body leading-snug gap-2 mt-8 md:mt-20 !font-semibold">
               <p>Your AI team, that works 24/7.</p>
            </div>
            <div className="block md:hidden ">
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
        </div>

        {/* Agent Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-[56px] mb-12 mt-20 sm:px-8 md:px-8 lg:px-0 justify-items-center">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="space-y-4 w-full flex flex-col items-center md:items-start text-center md:text-left"
            >
              <Image
                src={feature.imgSrc}
                className="rounded-lg hidden md:block"
                alt="Stack"
                width={470}
                height={400}
              />
              <Image
                src={feature.imgSrc}
                className="block md:hidden rounded-lg mx-auto"
                alt="Stack"
                width={130}
                height={113}
              />
              <h4 className="card-heading">{feature.title}</h4>
              <p className="card-body">{feature.description}</p>
            </div>
          ))}
        </div>


         <div className="w-full">
            <div className="bg-black text-white text-center text-lg sm:text-xl md:text-2xl font-semibold px-6 sm:px-12 py-4 !rounded-lg shadow-md w-full lg:rounded-none lg:max-w-none">
              Multi – Agentic System
            </div>
          </div>
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 flex flex-col items-center">



          {/* Subtext */}
          <p className="mt-4 text-center text-sm sm:text-base md:text-lg text-black max-w-2xl px-2">
            Orchestrate multiple agents that are OKR-driven & have shared memory
          </p>
        </div>

        {/* Footer CTA */}
        <div className=" flex flex-col  md:block mt-12">
          <button
            className=" w-[160px] h-[44px] text-base md:w-[450px] md:h-[120px] md:font-medium text-white rounded-lg md:text-[40px]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,72,44,0.8) 0%, rgba(162,69,238,0.8) 100%)",
            }}
            onClick={() => navigateWithQuery("/get-form")}
          >
            Deploys Yours
          </button>
        </div>
      </section>
    </div>
  );
};
