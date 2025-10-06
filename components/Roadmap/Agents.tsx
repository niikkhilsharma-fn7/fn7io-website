/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
const agentsData = [
  {
    name: "Scout",
    features: {
      purpose: "The Listener",
      description:
        "You don’t have to show up in random threads — I find conversations where you matter",
      benefits: [
        {
          title: "Find engagement opportunities",
          icon: "/eye.svg",
        },
        {
          title: "Extract important market trends",
          icon: "/chart.svg",
        },
        {
          title: "Track close competitor moves",
          icon: "/eyeglass.svg",
        },
      ],

      socialMediaTitle: "I scout on:",
      socialMediaIcons: [
        "/reddit.svg",
        "/twitter.svg",
        "/linkedin.svg",
        "/producthunt.svg",
        "/discord.svg",
      ],
      gain: {
        tile1: {
          title: "10H",
          description: "Saved Weekly",
        },
        tile2: {
          title: "24/7",
          description: "Trend Identification",
        },
        tile3: {
          title: "80%",
          description: "Faster Social Conversation Discovery",
        },
      },
    },
    bg: "bg-[linear-gradient(89.66deg,#4A61A6_0.29%,#9277BE_99.73%)]",
  },
  {
    name: "Muse",
    bg: "bg-[linear-gradient(89.66deg,#3E769B_0.27%,#B9ACA4_99.71%)]",
    features: {
      purpose: "The Marketer",
      description:
        "You don’t have to burn money on agencies — I grow your reach, reputation, and revenue at once",
      benefits: [
        {
          title: "Engineer self-improving campaigns",
          icon: "/settings.svg",
        },
        {
          title: "Decode team voices for effective personal branding",
          icon: "/speech.svg",
        },
        {
          title: "Craft conversion-driven content",
          icon: "/paper.svg",
        },
      ],
      socialMediaTitle: "I create for:",
      socialMediaIcons: [
        "/linkedin.svg",
        "/twitter.svg",
        "/meta.svg",
        "/adsense.svg",
        "/reddit.svg",
      ],
      gain: {
        tile1: {
          title: "5x",
          description: "Faster Content Production",
        },
        tile2: {
          title: "24/7",
          description: "Marketing Optimization",
        },
        tile3: {
          title: "45%",
          description: "Reduction in Ad Spends",
        },
      },
    },
  },
  {
    name: "Hunter",
    features: {
      purpose: "The Prospector",
      description:
        "You don’t have to pitch the wrong people — I find leads that fit like a glove",
      benefits: [
        {
          title: "Hyper-personalize outreach messages",
          icon: "/prospects.svg",
        },
        {
          title: "Strategise outreach sequences",
          icon: "/radar.svg",
        },
        {
          title: "Synchronise multi-channel communication ",
          icon: "/testing_white.svg",
        },
      ],

      socialMediaTitle: "I Hunt on:",
      socialMediaIcons: [
        "/reddit.svg",
        "/twitter.svg",
        "/linkedin.svg",
        "/producthunt.svg",
        "/discord.svg",
        "/cb.svg",
      ],
      gain: {
        tile1: {
          title: "85%",
          description: "Match Rate to Your ICP",
        },
        tile2: {
          title: "24/7",
          description: "Prospect Discovery",
        },
        tile3: {
          title: "45%",
          description: "Reduction in Acquisition Costs",
        },
      },
    },
    bg: "bg-[linear-gradient(89.95deg,#6E5B84_0.04%,#B26896_99.95%)]",
  },
  {
    name: "Spark",
    features: {
      purpose: "The Communicator",
      description:
        "You don’t have to cold DM strangers — I start conversations that get real replies",
      benefits: [
        {
          title: "Hyper-personalize outreach messages",
          icon: "/dna.svg",
        },
        {
          title: "Strategise outreach sequences",
          icon: "/directional_sign.svg",
        },
        {
          title: "Synchronise multi-channel communication ",
          icon: "/exchange.svg",
        },
      ],

      socialMediaTitle: "I Craft on:",
      socialMediaIcons: [
        "/gmail.svg",
        "/linkedin.svg",
        "/outlook.svg",
        "/discord.svg",
        "/zoho.svg",
      ],
      gain: {
        tile1: {
          title: "30%",
          description: "Higher Email Open Rates",
        },
        tile2: {
          title: "24/7",
          description: "Outreach Management",
        },
        tile3: {
          title: "60%",
          description: "Efficiency In Email Crafting",
        },
      },
    },
    bg: "bg-[linear-gradient(89.66deg,#3E769B_0.27%,#B9ACA4_99.71%)]",
  },
  {
    name: "Echo",
    features: {
      purpose: "The Responder",
      description:
        "You don’t have to miss a message that mattered — I answer the moment they reach out",
      benefits: [
        {
          title: "Generate intelligent responses",
          icon: "/lightbulb.svg",
        },
        {
          title: "Deliver timely automated replies",
          icon: "/flash_sale.svg",
        },
        {
          title: "Maintain conversation flow",
          icon: "/chatbot.svg",
        }
      ],

      socialMediaTitle: "I Craft on:",
      socialMediaIcons: [
        "/gmail.svg",
        "/linkedin.svg",
        "/outlook.svg",
        "/discord.svg",
        "/zoho.svg",
      ],
      gain: {
        tile1: {
          title: "11%",
          description: "Higher Reply Rates",
        },
        tile2: {
          title: "24/7",
          description: "Engagement Monitoring",
        },
        tile3: {
          title: "5H",
          description: " Weekly From Drafting Responses",
        },
      },
    },
    bg: "bg-[linear-gradient(270deg,#E9A5A6_0%,#4384DC_100%)]",
  },
  {
    name: "Nudge",
    features: {
      purpose: "The Coordinator",
      description: "You don’t have to chase them down — I nudge with intent they can't ignore",
      benefits: [
        {
          title: "Communicate important updates",
          icon: "/promote.svg",
        },
        {
          title: "Craft non-intrusive reminders",
          icon: "/bell.svg",
        },
        {
          title: "Orchestrate intelligent follow-ups",
          icon: "/confused.svg",
        },
      ],

      socialMediaTitle: "I Nudge on:",
      socialMediaIcons: [
        "/gmail.svg",
        "/linkedin.svg",
        "/outlook.svg",
        "/discord.svg",
        "/zoho.svg",
      ],
      gain: {
        tile1: {
          title: "15%",
          description: "Enhanced re-engagement ",
        },
        tile2: {
          title: "24/7",
          description: "Engagement coordination",
        },
        tile3: {
          title: "3x",
          description: "Higher follow-up consistency",
        },
      },
    },
    bg: "bg-[linear-gradient(89.64deg,#070706_0.25%,#5F65A4_99.65%)]",
  },
  {
    name: "Oracle",
    features: {
      purpose: "The Analyst",
      description: "You don’t have to stare at dashboards — I show you what’s working and what to do next",
      benefits: [
        {
          title: "Analyze interaction patterns",
          icon: "/line_chart.svg",
        },
        {
          title: "Identify optimization opportunities",
          icon: "/wrench.svg",
        },
        {
          title: "Predict market shifts and trends",
          icon: "/profits.svg",
        },
      ],
      socialMediaTitle: "I Analyze on:",
      socialMediaIcons: ["/linkedin.svg", "/twitter.svg", "/cb.svg"],

      gain: {
        tile1: {
          title: "11%",
          description: "Higher Conversion Rates",
        },
        tile2: {
          title: "24/7",
          description: "Performance Monitoring",
        },
        tile3: {
          title: "4",
          description: "Strategic Insights Weekly",
        },
      },
    },
    bg: "bg-[linear-gradient(90deg,#3D314E_0%,#151B32_100%)]",
  },
];

export const Agents = () => {
  const [agentIndex, setAgentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isThrottled = useRef(false);
  const [inView, setInView] = useState(false);
  const latestIndex = useRef(agentIndex);
  const [hasLockedOnce, setHasLockedOnce] = useState(false);
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false); // NEW
  const scrolledOnce = useRef(false);
 const [isMobile, setIsMobile] = useState(false);

  const bgColor = "bg-[linear-gradient(89.66deg,#4A61A6_0.29%,#9277BE_99.73%)]";
 useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  useEffect(() => {
    latestIndex.current = agentIndex;
  }, [agentIndex]);
  const handleAgentClick = (index: number) => {
    setAgentIndex(index);
  };
  const agent = agentsData[agentIndex];

  const [contentWidth, setContentWidth] = useState(0);

  const calculateWidth = () => {
    const containerRef = sectionRef;
    if (containerRef.current) {
      const el = containerRef.current;
      const styles = getComputedStyle(el);

      const paddingLeft = parseFloat(styles.paddingLeft);
      const paddingRight = parseFloat(styles.paddingRight);
      let widthWithoutPadding = el.clientWidth - paddingLeft - paddingRight;
      widthWithoutPadding =
        widthWithoutPadding > 1280 ? 1280 : widthWithoutPadding;
      setContentWidth(widthWithoutPadding);
    }
  };
  const getButtonWidth = () => {
    const gap = 16; // 1rem gap
    const buttonsPerRow = 7;
    const totalGaps = (buttonsPerRow - 1) * gap;
    const usableWidth = contentWidth - totalGaps;
    return usableWidth / buttonsPerRow;
  };

  useEffect(() => {
    // Initial calculation
    calculateWidth();

    // Add resize listener
    window.addEventListener("resize", calculateWidth);

    // Clean up on unmount
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []);
  const router= useRouter();
  return (
    <div style={{ backgroundColor: '#F7F7F7' }}>
     <div
      ref={sectionRef}
      className="relative w-full max-w-full px-6 py-8 sm:px-6 md:px-12 lg:px-24 lg:p-10  lg:py-10 flex flex-col items-center overflow-x-hidden bg-[#ecebeb] gap-8"
    >
      <div className="flex flex-col items-center gap-12 z-10 w-full">
        <span className="section-heading text-center w-full">
          Your GTM Crew: 7 AI Agents, Never Offline
        </span>
      </div>

      <div className="flex flex-col w-full gap-4 my-2 md:my-4 ">
        {/* Remove AgentButton row on mobile */}
        <div
          style={{
            width: contentWidth < 586 ? "100%" : `${contentWidth}px`,
          }}
          className={`hidden sm:flex gap-2 flex-row lg:gap-4 mx-auto justify-center items-center flex-wrap sm:flex-nowrap max-w-[420px] sm:max-w-none`}
        >
          {agentsData.map((ag, index) => (
            <AgentButton
              key={ag.name}
              agentName={ag.name}
              selected={ag.name === agent.name}
              onClick={() => handleAgentClick(index)}
              bgColorClass={ag.bg}
              btnWidth={getButtonWidth()}
            />
          ))}
  </div>
       {isMobile ? (
  <div className="w-full flex flex-col items-center gap-6">
    {agentsData.map((ag, idx) => (
      <ScoutCard key={ag.name} agent={ag} />
    ))}
     <button
     onClick={() => router.push("/get-form")}
      className="w-full max-w-sm mt-4 py-4 rounded-xl text-white font-semibold text-lg bg-[linear-gradient(90deg,#3D314E_0%,#151B32_100%)] shadow-md flex items-center justify-center"
    >Hire Now</button>
  </div>
) : (
  <div className="w-full flex justify-center">
    <ScoutCard
      agent={agent}
      agentIndex={agentIndex}
      setAgentIndex={setAgentIndex}
      agentsCount={agentsData.length}
    />
  </div>
)}
      </div>
    </div>
    </div>
  );
};

const AgentButton = ({
  agentName,
  onClick,
  selected,
  bgColorClass,
  btnWidth,
}: {
  agentName: string;
  onClick: () => void;
  selected: boolean;
  bgColorClass: string;
  btnWidth: number;
}) => {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsLg(window.matchMedia("(min-width: 640px)").matches);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <button
      onClick={onClick}
      style={isLg ? { width: `${btnWidth}px` } : { width: `101px` }}
      className={`relative text-sm leading-[35px] h-[35px]  lg:h-[56px] sm:text-[18px]
        rounded-lg font-light overflow-hidden
        ${selected ? "border-0 text-white" : "border border-black"}`}
    >
      <span className="relative z-10">{agentName}</span>
      <span
        className={`absolute inset-0 z-0 ${bgColorClass} origin-left transform
          ${
            selected
              ? "scale-x-100 transition-transform duration-500 ease-out"
              : "scale-x-0 transition-none"
          }`}
      />
    </button>
  );
};

const AgentHireNow = () => {
  const router = useRouter();
  return (
    <div
      className="border-2 rounded-xl border-white h-[70px] sm:h-[110px] flex items-center justify-center font-normal text-lg sm:text-2xl -mt-2 cursor-pointer"
      onClick={() => router.push("/get-form")}
    >
      Hire Now{" "}
      <Image
        src="/arrow.svg"
        alt="Arrow"
        width={25}
        height={24}
        className="ml-8 mt-1"
      />
    </div>
  );
};
const AgentSocials = ({ agent }: { agent: any }) => (
  <div className="bg-black/50 min-h-[60px] sm:h-[110px] border-1 rounded-xl border-black/50 px-4 sm:px-6 py-2 sm:py-4 mt-4 overflow-hidden">
    <p className="body-text font-light text-[0.95rem] sm:text-base">
      {agent?.features?.socialMediaTitle}
    </p>
    <div className="flex flex-wrap gap-2 text-xl mt-2 w-full overflow-hidden">
      {agent?.features?.socialMediaIcons?.map((icon, index) => {
        const isLargeIcon = ["/apollo.svg", "/zoho.svg"].includes(icon);
        return (
          <Image
            key={index}
            src={icon}
            alt="Scout"
            width={isLargeIcon ? 80 : 32}
            height={32}

          />
        );
      })}
    </div>
  </div>
);

export const ScoutCard = ({agent,agentIndex,setAgentIndex, agentsCount,
}: {agent: any;agentIndex: number;setAgentIndex: (idx: number) => void;
  agentsCount: number;
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.firstChild instanceof HTMLElement ? container.firstChild.offsetWidth : 0;
      container.scrollTo({ left: cardIndex * cardWidth, behavior: "smooth" });
    }
  }, [cardIndex, isMobile]);

  const handleArrow = (dir: "left" | "right") => {
    setCardIndex((prev) => {
      if (dir === "left") return prev === 0 ? 0 : prev - 1;
      if (dir === "right") return prev === 2 ? 2 : prev + 1;
      return prev;
    });
  };

  const handleDot = (idx: number) => setCardIndex(idx);

  let bg = "bg-[linear-gradient(89.66deg,_#4A61A6_0.29%,_#9277BE_99.73%)]";

  switch (agent?.name) {
    case "Scout":
      bg = "bg-[linear-gradient(89.66deg,#4A61A6_0.29%,#9277BE_99.73%)]";
      break;
    case "Muse":
      bg = "bg-[linear-gradient(89.66deg,#3E769B_0.27%,#B9ACA4_99.71%)]";
      break;
    case "Hunter":
      bg = "bg-[linear-gradient(89.95deg,#6E5B84_0.04%,#B26896_99.95%)]";
      break;
    case "Spark":
      bg = "bg-[linear-gradient(89.66deg,#3E769B_0.27%,#B9ACA4_99.71%)]";
      break;
    case "Echo":
      bg = "bg-[linear-gradient(270deg,#E9A5A6_0%,#4384DC_100%)]";
      break;
    case "Nudge":
      bg = "bg-[linear-gradient(89.64deg,#070706_0.25%,#5F65A4_99.65%)]";
      break;
    case "Oracle":
      bg = "bg-[linear-gradient(90deg,#3D314E_0%,#151B32_100%)]";
      break;
  }

  return (
    <div
  className={`
    w-full h-auto max-w-full sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1100px] xl:max-w-[1280px]
    mx-auto ${bg} text-white rounded-xl p-2 sm:p-4 relative
    flex items-center justify-center md:h-[unset] md:min-h-[400px] lg:min-h-0 lg:block
  `}
>
      <div className="relative w-full">
       {!isMobile && (
          <>
            <button
              onClick={() => setAgentIndex(agentIndex === 0 ? 0 : agentIndex - 1)}
              disabled={agentIndex === 0}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center transition-opacity ${
                agentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'
              }`}
              style={{ fontSize: "2rem" }}
              aria-label="Previous Agent"
            >
              <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
             <button
              onClick={() => setAgentIndex(agentIndex === agentsCount - 1 ? agentsCount - 1 : agentIndex + 1)}
              disabled={agentIndex === agentsCount - 1}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center transition-opacity ${
                agentIndex === agentsCount - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'
              }`}
              style={{ fontSize: "2rem" }}
              aria-label="Next Agent"
            >
              <svg className="w-7 h-7 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
    <div
  ref={scrollRef}
  className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:gap-4 md:overflow-x-visible items-center md:items-stretch px-4 md:px-0"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
>
<div className="flex-shrink-0 w-[85vw] max-w-sm md:w-auto md:max-w-none snap-start col-span-1 flex flex-col gap-4 min-h-[280px] sm:min-h-0">
<div className="border-2 rounded-xl border-white p-4 sm:p-6 mr-2 sm:mr-2 h-full flex flex-col">
    <h2 className="section-heading text-[1.5rem] sm:text-2xl">
      {agent.name}
    </h2>
    <p className="body-text text-white font-thin text-[0.95rem] sm:text-base">
      {agent.features?.purpose}
    </p>
    <hr className="my-2 border-white/30" />
    <span className="body-text font-thin text-[0.95rem] sm:text-base flex-1">
      {agent.features?.description}
    </span>
    <div className="mt-6">
      <AgentSocials agent={agent} />
    </div>
  </div>
</div>

    <div className="h-[289px] md:h-full flex-shrink-0 w-[85vw] max-w-sm md:w-auto md:max-w-none snap-start col-span-1 flex flex-col gap-4 min-h-[280px] sm:min-h-0">
  <div
    className={`
      h-[311px]  border-1 rounded-xl border-black/50 p-4 sm:p-6
      flex flex-col bg-black/50  flex-1
      min-h-[280px] sm:min-h-0 items-center justify-center gap-6 md:h-full
    `}
  >
    {agent.features?.benefits.map((benefit, index) => (
      <div key={index} className="flex items-center gap-4 w-full">
        <Image src={benefit.icon} alt="Scout" width={40} height={40} />
        <p className="body-text font-light text-[0.95rem] sm:text-base">
          {benefit.title}
        </p>
      </div>
    ))}
  </div>
<div className={`${isMobile ? "hidden" : "block"}`}>
  <AgentHireNow />
</div>
</div>
<div className="flex-shrink-0 w-[85vw] max-w-sm md:w-auto md:max-w-none snap-start col-span-1 flex flex-col gap-4 min-h-[280px] sm:min-h-0  bg-black/50 p-4 rounded-xl border-1 border-black/50">
  <h3 className="body-text font-light text-[1rem] sm:text-lg text-center">
    So You Gain:
  </h3>
  <div className="grid grid-cols-2 gap-4 text-center w-full max-w-md mx-auto">
    <div className="bg-white/20 rounded-lg p-3 min-h-[90px] sm:h-[150px] flex flex-col items-center justify-center">
      <p className="text-xl sm:text-3xl font-normal">
        {agent?.features?.gain.tile1?.title}
      </p>
      <p className="body-text mt-1 font-light text-[0.9rem] sm:text-base w-[90px] sm:w-[140px]">
        {agent?.features?.gain.tile1?.description}
      </p>
    </div>
    <div className="bg-white/20 rounded-lg p-3 min-h-[90px] sm:h-[150px] flex flex-col items-center justify-center overflow-x-auto">
      <p className="text-xl sm:text-3xl font-normal">
        {agent?.features?.gain?.tile2?.title}
      </p>
      <p className="body-text mt-1 font-light text-[0.9rem] sm:text-base w-[70px] sm:w-[110px]">
        {agent?.features?.gain.tile2?.description}
      </p>
    </div>
    <div className="bg-white/20 rounded-lg p-3 text-center col-span-2 w-full min-h-[90px] sm:h-[150px] flex flex-col items-center justify-center">
      <p className="text-xl sm:text-3xl font-normal">
        {agent?.features?.gain?.tile3?.title}
      </p>
      <p className="body-text mt-1 font-light text-[0.9rem] sm:text-base">
        {agent?.features?.gain.tile3?.description}
      </p>
    </div>
  </div>
</div>
        </div>
        {isMobile && (
          <>
            <button
              onClick={() => handleArrow("left")}
              disabled={cardIndex === 0}
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-opacity ${
                cardIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => handleArrow("right")}
              disabled={cardIndex === 2}
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-opacity ${
                cardIndex === 2 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

          </>
        )}
      </div>
    </div>
  );
};