import React, { useState, useEffect } from 'react';

export default function HomeScoutLoadingBox() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);

  const brandLearningMessages = [
    { action: 'Studying your brand', result: 'Analyzing your website content and brand positioning' },
    { action: 'Learning your key products', result: 'Identifying your core products and services offerings' },
    { action: 'Exploring what makes you different', result: 'Understanding your unique value proposition and differentiators' },
    { action: 'Mapping your target market', result: 'Discovering your ideal customer profiles and market segments' },
    { action: 'Understanding your voice', result: 'Learning your brand tone and communication style' }
  ];

  const brandInsights = [
    { content: 'Analyzing brand identity...', top: '35%', left: '5%' },
    { content: 'Discovering key offerings...', top: '35%', right: '5%' },
    { content: 'Mapping unique value...', bottom: '10%', left: '5%' },
    { content: 'Building brand profile...', bottom: '10%', right: '5%' },
    { content: brandLearningMessages[currentMessageIndex].result, top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % brandLearningMessages.length);
      setCurrentInsightIndex((prev) => (prev + 1) % brandInsights.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative p-2 bg-gradient-to-r from-[#ff482c26] to-[#a245ee26] rounded-xl h-[200px] w-full overflow-hidden" style={{boxShadow: '0 0 25px rgba(0, 0, 0, 0.1)'}}>
      <div className="bg-white rounded-xl p-5 h-full flex flex-col relative overflow-hidden">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900">
            {brandLearningMessages[currentMessageIndex].action}...
          </h3>
        </div>

        {/* Loading Content Area with skeleton loaders */}
        <div className="flex-1 grid grid-cols-2 gap-5">
          {/* Left column */}
          <div className="space-y-2.5">
            <div className="h-2.5 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-2.5 bg-gray-200 rounded animate-pulse w-5/6"></div>
            <div className="h-2.5 bg-gray-200 rounded animate-pulse w-4/6"></div>
            <div className="h-2.5 bg-gray-200 rounded animate-pulse w-full mt-3"></div>
            <div className="h-2.5 bg-gray-200 rounded animate-pulse w-4/5"></div>
          </div>

          {/* Right column */}
          <div className="space-y-2.5">
            <div className="h-2.5 bg-gray-200 rounded animate-pulse w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded animate-pulse w-3/4"></div>
            <div className="h-2.5 bg-gray-200 rounded animate-pulse w-5/6"></div>
            <div className="h-2.5 bg-gray-200 rounded animate-pulse w-2/3 mt-3"></div>
            <div className="h-2.5 bg-gray-200 rounded animate-pulse w-full"></div>
          </div>
        </div>

        {/* Brand Insight Boxes positioned absolutely */}
        {brandInsights.map((insight, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ${
              index === currentInsightIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              ...(insight.top && { top: insight.top }),
              ...(insight.bottom && { bottom: insight.bottom }),
              ...(insight.left && { left: insight.left }),
              ...(insight.right && { right: insight.right }),
              ...(insight.transform && { transform: insight.transform }),
              maxWidth: '200px',
              zIndex: 5
            }}
          >
            <div className="relative p-[1px] bg-gradient-to-br from-[#ff482c33] to-[#a245ee33] rounded-lg">
              <div className="bg-white rounded-lg px-3 py-2.5" style={{boxShadow: index === currentInsightIndex ? '0 4px 12px rgba(0, 0, 0, 0.08)' : 'none'}}>
                <div className="flex items-start gap-2">
                  <div className="flex-shrink-0 mt-0.5">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_homeScout"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                        style={{ maskType: 'alpha' }}
                      >
                        <rect width="24" height="24" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_homeScout)">
                        <path
                          d="M4 15C3.16667 15 2.45833 14.7083 1.875 14.125C1.29167 13.5417 1 12.8333 1 12C1 11.1667 1.29167 10.4583 1.875 9.875C2.45833 9.29167 3.16667 9 4 9V7C4 6.45 4.19583 5.97917 4.5875 5.5875C4.97917 5.19583 5.45 5 6 5H9C9 4.16667 9.29167 3.45833 9.875 2.875C10.4583 2.29167 11.1667 2 12 2C12.8333 2 13.5417 2.29167 14.125 2.875C14.7083 3.45833 15 4.16667 15 5H18C18.55 5 19.0208 5.19583 19.4125 5.5875C19.8042 5.97917 20 6.45 20 7V9C20.8333 9 21.5417 9.29167 22.125 9.875C22.7083 10.4583 23 11.1667 23 12C23 12.8333 22.7083 13.5417 22.125 14.125C21.5417 14.7083 20.8333 15 20 15V19C20 19.55 19.8042 20.0208 19.4125 20.4125C19.0208 20.8042 18.55 21 18 21H6C5.45 21 4.97917 20.8042 4.5875 20.4125C4.19583 20.0208 4 19.55 4 19V15ZM9 13C9.41667 13 9.77083 12.8542 10.0625 12.5625C10.3542 12.2708 10.5 11.9167 10.5 11.5C10.5 11.0833 10.3542 10.7292 10.0625 10.4375C9.77083 10.1458 9.41667 10 9 10C8.58333 10 8.22917 10.1458 7.9375 10.4375C7.64583 10.7292 7.5 11.0833 7.5 11.5C7.5 11.9167 7.64583 12.2708 7.9375 12.5625C8.22917 12.8542 8.58333 13 9 13ZM15 13C15.4167 13 15.7708 12.8542 16.0625 12.5625C16.3542 12.2708 16.5 11.9167 16.5 11.5C16.5 11.0833 16.3542 10.7292 16.0625 10.4375C15.7708 10.1458 15.4167 10 15 10C14.5833 10 14.2292 10.1458 13.9375 10.4375C13.6458 10.7292 13.5 11.0833 13.5 11.5C13.5 11.9167 13.6458 12.2708 13.9375 12.5625C14.2292 12.8542 14.5833 13 15 13ZM8 17H16V15H8V17Z"
                          fill="url(#paint0_linear_homeScout)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_homeScout"
                          x1="1"
                          y1="11.5"
                          x2="23"
                          y2="11.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FF6C57" />
                          <stop offset="1" stopColor="#B56AF1" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-xs font-medium text-gray-800 leading-relaxed">
                    {insight.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}