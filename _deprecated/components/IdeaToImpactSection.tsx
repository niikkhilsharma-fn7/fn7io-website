import React from "react";
import { useRouter } from "next/router";
import { usePreserveQueryParams } from "@/hooks/usePreserveQueryParams";
export const IdeaToImpactSection = () => {
  const router = useRouter();
  const { navigateWithQuery } = usePreserveQueryParams();
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
      <div
        className="mx-auto max-w-3xl rounded-2xl p-12 text-center text-white"
        style={{
          background: "linear-gradient(270deg, #E9A5A6 0%, #4384DC 100%)",
        }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold lg:font-[400] mb-8">
          From Idea to Impact — Fast
        </h2>
        <ul className="space-y-4 text-lg mb-10 list-inside list-disc marker:text-white">
          <li>Go from concept to autonomous agent in weeks</li>
          <li>Scale strategic execution without scaling headcount</li>
          <li>Build your own system. Or bring your team and extend ours.</li>
        </ul>
        <button
          onClick={() => navigateWithQuery("/get-form")}
          className="px-8 py-4 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-900 transition"
        >
          Create impact
        </button>
      </div>
    </section>
  );
};
