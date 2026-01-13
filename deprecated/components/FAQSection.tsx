import { useState } from "react";
import Link from "next/link";

interface FAQSectionProps {}

interface FAQItem {
  question: string;
  answer?: string;
  hasLink?: boolean;
}

const faqs: FAQItem[] = [
  {
    question: "How does Scout find qualified prospects?",
    answer:
      "Scout listens across Reddit, LinkedIn and X for real time conversations where people are describing problems your product solves. It filters out noise and surfaces posts with clear buying intent or pain points so every lead is relevant.",
  },
  {
    question: "Do I need to connect my social accounts?",
    answer:
      "Yes. Connecting your accounts allows Scout to draft replies in your voice and lets you approve and post directly which saves you the manual work.",
  },
  {
    question: "How many posts can Scout find in 1 day?",
    answer:
      "Scout surfaces up to 20 high intent opportunities per platform each day based on your product, category and target audience.",
  },
  {
    question: "How fast can I see results?",
    answer:
      "From day one. You will see conversations ready for engagement immediately after setup and early traffic can start flowing within hours of posting.",
  },
  {
    question: "Do I need an analytical tool to track results?",
    answer:
      "No. Scout includes an impact dashboard showing clicks, traffic sources and top performing replies all in one place.",
  },
  {
    question: "What is the price of Scout?",
    answer:
      "Plans start from our Basic tier for Reddit and LinkedIn and a Pro tier adds X integration and advanced analytics. Pricing depends on the plan you choose.",
    hasLink: true,
  },
  {
    question: "Do I need to message people manually?",
    answer:
      "No. Scout drafts replies for every opportunity. You simply review, approve and post or tweak them to add your personal touch.",
  },
];

export const FAQSection = ({}: FAQSectionProps) => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpandedItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  return (
    <section className="mt-48 max-w-[1200px] mx-auto max-md:mt-20 max-md:max-w-full px-6 max-md:px-4">
      <h2 className="text-5xl font-semibold text-center text-black max-md:text-4xl max-md:max-w-full">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col items-center mt-12 space-y-4 w-[1000px] max-md:w-full mx-auto">
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <button
                onClick={() => toggleExpand(index)}
                className="flex justify-between items-center w-full px-8 py-6 text-left text-xl font-medium hover:bg-gray-50 transition-colors text-gray-800 max-md:px-5 max-md:text-lg"
              >
                <span className="pr-4">{faq.question}</span>
                <svg
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    expandedItems.includes(index) ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v12m6-6H6"
                    className={expandedItems.includes(index) ? "hidden" : "block"}
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 12H6"
                    className={expandedItems.includes(index) ? "block" : "hidden"}
                  />
                </svg>
              </button>
              {expandedItems.includes(index) && faq.answer && (
                <div className="px-8 py-6 text-lg text-gray-600 bg-gray-50 border-t border-gray-100 max-md:px-5 max-md:text-base">
                  {faq.answer}
                  {faq.hasLink && (
                    <Link
                      href="/pricing"
                      className="inline-flex items-center ml-2 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      View pricing →
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
