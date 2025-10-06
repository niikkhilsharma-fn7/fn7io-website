import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePreserveQueryParams } from "@/hooks/usePreserveQueryParams";

export const Hero = () => {
  const router = useRouter();
  const { navigateWithQuery } = usePreserveQueryParams();
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center self-stretch pb-40 w-full text-center bg-white max-md:pb-20 max-md:max-w-full overflow-hidden">
      <h1 className="mt-36 text-6xl font-semibold text-black max-w-[1200px] leading-tight max-md:mt-20 max-md:max-w-full max-md:text-3xl max-md:px-6">
        Your Go-To-Market.
        <br />
        On Autopilot.
      </h1>
      <p className="mt-5 text-2xl font-normal text-black max-md:max-w-full max-md:text-lg max-md:px-6 max-md:mt-4">
        7 AI agents on duty, scaling your business 24/7.
      </p>
      <button
        onClick={() => router.push("/get-form")}
        className="px-8 py-4 mt-7 mb-0 text-lg font-medium text-white bg-gradient-to-r from-red-400 via-pink-400 to-purple-500 rounded-lg hover:from-red-500 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 max-md:px-6 max-md:py-3 max-md:mb-2.5 max-md:text-base max-md:mt-6"
      >
        Scale Now
      </button>
    </section>
  );
};

// Old section AUg 6, 2025
//  <section className="flex flex-col items-center justify-center px-0 text-center bg-white py-0 relative overflow-hidden h-[calc(100vh-80px)]">
//       <div className="w-full h-full">
//         {/* <AnimatePresence mode="wait">
//           {showFirst ? (
//             <motion.div
//               key="hero-content"
//               className="flex flex-col items-center justify-center w-full h-full gap-14 px-4 sm:px-8"
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="flex flex-col gap-3">
//                 <h1 className="block md:hidden leading-tight tracking-tight text-black hero-title">
//                   Your
//                   <br />
//                   Go-To-Market.
//                   <br />
//                   On Autopilot.
//                 </h1>
//                 <h1 className="hidden md:block leading-tight tracking-tight text-black hero-title">
//                   Your Go-To-Market.
//                   <br />
//                   On Autopilot.
//                 </h1>
//                 <span className="hero-subheading">
//                   7 AI agents on duty, scaling your business 24/7.
//                 </span>
//               </div>
//               <button
//                 onClick={() => router.push("/get-form")}
//                 className=" bg-gradient-to-r from-[#ff482ccc] to-[#a245eecc] text-white w-[127px] md:w-[200px] lg:w-[290px] h-[44px] md:h-[60px] lg:h-[70px] text-base md:text-2xl lg:text-[36px] rounded-[10px] md:rounded-[20px]"
//               >
//                 Scale Now
//               </button>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="hero-image"
//               className="relative flex items-center justify-center w-full h-full bg-white"
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: -100 }}
//               transition={{ duration: 0.7 }}
//             >
//               <div className="relative w-full h-full">
//                 <Image
//                   src="/Final.png"
//                   alt="fn7 at SuperAI Singapore"
//                   fill
//                   className="hidden sm:block object-cover"
//                   sizes="100vw"
//                   priority
//                 />
//                 <Image
//                   src="/image1.png"
//                   alt="fn7 at SuperAI Singapore"
//                   fill
//                   className="block sm:hidden object-contain"
//                   sizes="100vw"
//                   priority
//                 />
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence> */}

//         <div className="flex flex-col items-center justify-center w-full h-full gap-14 px-4 sm:px-8">
//           <div className="flex flex-col gap-3">
//             <h1 className="block md:hidden leading-tight tracking-tight text-black hero-title">
//               Your
//               <br />
//               Go-To-Market.
//               <br />
//               On Autopilot.
//             </h1>
//             <h1 className="hidden md:block leading-tight tracking-tight text-black hero-title">
//               Your Go-To-Market.
//               <br />
//               On Autopilot.
//             </h1>
//             <span className="hero-subheading">
//               7 AI agents on duty, scaling your business 24/7.
//             </span>
//           </div>
//           <button
//             onClick={() => navigateWithQuery("/get-form")}
//             className=" bg-gradient-to-r from-[#ff482ccc] to-[#a245eecc] text-white w-[127px] md:w-[200px] lg:w-[290px] h-[44px] md:h-[60px] lg:h-[70px] text-base md:text-2xl lg:text-[36px] rounded-[10px] md:rounded-[20px]"
//           >
//             Scale Now
//           </button>
//         </div>
//       </div>
//     </section>
