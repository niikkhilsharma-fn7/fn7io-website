import React from "react";
import Image from "next/image";

export const ArchitectureSchemaSection = () => {
  return (
    <section className="mx-auto py-12 lg:py-20 text-center">
  <h2 className="section-heading">
    Intelligence Stack That Powers Your Product
  </h2>

  <div className="mx-auto w-full mt-10 px-4 sm:px-6 md:px-12 lg:px-20">
    <Image
      src="/platformstack_new_optimized.png"
      className="w-full h-auto"
      alt="Stack"
      width={100}
      height={100}
    />
  </div>
</section>
  );
};
