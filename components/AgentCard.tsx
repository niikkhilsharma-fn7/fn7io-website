"use client";

interface AgentCardProps {
  name: string;
  role: string;
  description: string;
}

export const AgentCard = ({ name, role, description }: AgentCardProps) => {
  return (
    <div className="flex overflow-hidden flex-col items-center rounded-xl border border-white border-solid h-[154px] w-[154px]">
      <div className="flex flex-col pr-1.5 pb-3 rounded-lg bg-stone-300 bg-opacity-30 h-[154px] w-[154px]">
        <div className="flex items-start self-start">
          <div className="flex shrink-0 rounded-full h-[50px] w-[51px]" />
          <div className="mt-4">
            <div className="w-[77px]">
              <h3 className="text-xl tracking-tight leading-none text-black border-black">
                {name}
              </h3>
              <p className="mt-1 text-xs tracking-wide text-black border-black font-[275]">
                {role}
              </p>
            </div>
            <div className="mt-2 max-w-full min-h-0 bg-black border-black opacity-90 w-[115px]" />
            <p className="mt-2 text-xs font-light tracking-wide leading-3 text-black">
              {description}
            </p>
          </div>
        </div>
        <button className="flex gap-2 justify-center items-center px-2 py-2.5 mt-2.5 text-xs font-light tracking-tight leading-3 text-center rounded-md border border-solid border-black border-opacity-30 min-h-[26px]">
          <span className="self-stretch my-auto text-black">
            Coming Soon
          </span>
        </button>
      </div>
    </div>
  );
};