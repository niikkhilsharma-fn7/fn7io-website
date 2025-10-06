import { BetaBuzzCard } from "./BetaBuzzCard";

export const BetaBuzz = () => {
  return (
    <div className=" py-10 lg:py-20 px-6 md:px-10 lg:px-20 flex flex-col items-center justify-center  bg-[#E9E9E9]">
      <div className=" flex flex-col items-center gap-12">
        <span className="section-heading text-center">The Beta Buzz</span>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          <BetaBuzzCard />
          <BetaBuzzCard />
          <BetaBuzzCard />
        </div>
      </div>
    </div>
  );
};
