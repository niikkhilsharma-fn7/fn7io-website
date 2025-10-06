import { useState } from "react";

type AccordionProps = {
  children: React.ReactNode;
  title: string;
  renderDottedIndicator?: boolean;
  defaultExpanded?: boolean;
};

export const Accordion = ({
  children,
  title,
  renderDottedIndicator = false,
  defaultExpanded = false,
}: AccordionProps) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpand = () => setExpanded((prev) => !prev);

  return (
    <div className="relative mb-4">
      <div className="flex items-center relative">
        {/* Icon + Line container */}
        <div className="relative mr-2">
          {/* SVG Icon */}
          <svg
            fill="#5f5f5f"
            height="17px"
            width="17px"
            viewBox="0 0 490.05 490.05"
            className="z-10"
          >
            <g>
              <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z" />
            </g>
          </svg>

          {/* Dotted line (extending dynamically) */}
          {false && (
            <div className="absolute top-[18px] left-[8px] w-px h-full">
              <div
                className={`w-px h-full border-l border-dotted border-gray-400 transition-all duration-300`}
              />
            </div>
          )}
        </div>

        {/* Header Title */}
        <button
          onClick={toggleExpand}
          className="w-full text-left flex-1 flex justify-between cursor-pointer"
        >
          <span>{title}</span>
        </button>
      </div>

      {/* Content wrapper drives height for dotted line */}
      <div
        className={`relative flex ${
          renderDottedIndicator ? "ml-[26px]" : ""
        } transition-all duration-300 ease-in-out overflow-hidden ${
          expanded ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className={`${renderDottedIndicator ? "pl-2" : "pl-9"} py-2`}>{children}</div>
      </div>
    </div>
  );
};