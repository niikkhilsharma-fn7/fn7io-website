import * as React from "react";

export const PricingHeroSection = () => {
  return (
    <section className="relative flex flex-col items-center self-stretch pb-20 w-full text-center bg-white max-md:pb-20 max-md:max-w-full overflow-hidden">
      <h1 className="mt-10 text-6xl font-semibold text-black max-w-[1200px] leading-tight max-md:mt-20 max-md:max-w-full max-md:text-3xl max-md:px-6">
        <span className="hidden md:block">Reforming Go-To-Market,<br />One Conversation at a Time.</span>
        <span className="md:hidden">Reforming Go-To-Market, One Conversation at a Time.</span>
      </h1>
      <p className="mt-5 text-2xl font-normal text-black max-md:max-w-full max-md:text-lg max-md:px-6 max-md:mt-4">
        Two plans. Built for founders who ship.
      </p>
    </section>
  );
};
