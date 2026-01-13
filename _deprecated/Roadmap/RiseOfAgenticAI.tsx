import Image from "next/image";

const saying = [
  {
    src: "/microsoft_ceo_optimized.png",
    quote:
      "AI will be the defining technology of our times. It's not just a tool, it's a co-pilot in every decision we make.",
    name: "Satya Nadella",
    company: "CEO, Microsoft",
  },
  {
    src: "/nvidia_ceo_optimized.png",
    quote: "AI agents are the new digital workforce.",
    name: "Jensen Huang",
    company: "CEO, NVIDIA",
  },
  {
    src: "/google_ceo_optimized.png",
    quote:
      "AI agents will become the primary way we interact with computers in the future. They will be able to understand our needs and preferences, and proactively help us with tasks and decision making.",
    name: "Sundar Pichai",
    company: "CEO, Google",
  },
];

export const RiseOfAgenticAI = () => {
  return (
    <div className="w-full pb-10 max-md:pb-20 pt-10 md:pt-20">
      <section className="section-heading w-full text-center pl-2 pr-2 md:pl-0 md:pr-0">
        The Rise of Agentic AI
      </section>

      <section className="w-full ultra:max-w-[1600px] mx-auto grid md:grid-cols-[400px_400px_400px] ultra:grid-cols-[458px_458px_458px] justify-center gap-[50px] mt-[60px] max-md:flex max-md:flex-col max-md:items-center max-md:gap-6 md:mb-[100px]">

        {saying.map((s) => (
          <CEOCard
            key={s.src}
            src={s.src}
            quote={s.quote}
            name={s.name}
            company={s.company}
          />
        ))}
      </section>
    </div>
  );
};

interface CEOcard {
  src: string;
  quote: string;
  name: string;
  company: string;
}

const CEOCard = ({ src, quote, name, company }: CEOcard) => {
  return (
    <section className="relative md:w-[400px] ultra:w-[458px] md:h-[630px] ultra:h-[732px] max-md:w-[90%] max-md:h-[450px] rounded-[40px] overflow-hidden shadow-[2px_4px_7px_0px_#00000040] bg-white">
      <div className="absolute top-8 left-8 right-8 z-10">
        <p className="md:text-[24px] ultra:text-[28px] text-[16px] font-light text-black leading-[24px] md:leading-[40px] tracking-[-0.5px] md:tracking-[-1px]">
          {quote}
        </p>

        <div className="mt-[20px] md:mt-[40px]">
          <h3 className="text-[18px] md:text-[24px] font-semibold text-black mb-1">
            {name}
          </h3>
          <p className="text-[16px] md:text-[23px]">{company}</p>
        </div>
      </div>

      <Image
        src={src}
        width={350}
        height={100}
        alt="ceo"
        priority
        quality={100}
        className={`absolute bottom-0 right-0 md:right-0 max-md:translate-x-[10%] ${
          src === "/nvidia_ceo.svg"
            ? "max-md:h-[250px] md:h-[450px] -mr-[60px]"
            : "max-md:h-[200px] md:h-[350px] object-contain"
        }`}
      />

    </section>
  );
};
