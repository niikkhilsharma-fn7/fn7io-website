"use client";

import { useState, useCallback } from "react";

export const FAQSection = () => {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  const toggleFaq = useCallback((index: number) => {
    setActiveFaqIndex((prev) => (prev === index ? null : index));
  }, []);

  const faqs = [
    {
      question: "Is this spammy?",
      answer:
        'No. Scout7 finds conversations where people are already asking for help. You reply with value — not cold pitches. Every opportunity includes "what to avoid" guardrails.',
    },
    {
      question: "How fresh is the data?",
      answer:
        "Scout7 continuously monitors social platforms. Insights and opportunities update regularly based on your plan.",
    },
    {
      question: "What if my category isn't supported?",
      answer:
        "We support 100+ categories across SaaS and DTC. If yours isn't listed, Scout7 can run custom research for any audience.",
    },
    {
      question: "How do credits work?",
      answer:
        "Credits power all features — insights, leads, campaigns, video, and images. Different actions use different amounts. Free tier gives you 1,000 credits/month to explore.",
    },
    {
      question: "What platforms does Scout7 listen to?",
      answer: "LinkedIn, Reddit, X, YouTube, Facebook, Instagram — more coming soon.",
    },
    {
      question: "Do you use private data?",
      answer: "No. Scout7 only analyzes public social conversations and any assets you choose to connect.",
    },
  ];

  return (
    <section className="relative z-10 w-full max-w-4xl mx-auto px-6 py-24 border-t border-slate-200">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">FAQ</h2>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl border border-slate-200 p-6 faq-item ${
              activeFaqIndex === index ? "active" : ""
            }`}
          >
            <div className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              <span className="material-symbols-outlined faq-icon">expand_more</span>
            </div>
            <div className="faq-answer">
              <p className="pt-4 text-slate-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
