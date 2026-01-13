// import { Footer } from "@/components/Footer";
import { TermsAndConditions } from "@/components/terms-and-conditions";

export default function TermsAndConditionsPage() {
  return (
    <div className="relative overflow-hidden">
    <TermsAndConditions />
    {/* <Footer /> */}
   <div className="w-screen absolute bottom-[0px] left-0 z-20 hidden text-center leading-none font-normal text-white opacity-30 select-none md:block pointer-events-none">
        <span  className="block w-full lg:text-[20vw]">Autopilot</span>
      </div>
  </div>
  );
}
