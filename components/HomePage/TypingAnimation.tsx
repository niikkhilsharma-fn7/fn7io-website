"use client";

import { useEffect, useState } from "react";

const TYPING_WORDS = [
  "Organic Engagement",
  "Qualified Leads",
  "Audience Insights",
  "Targeted Ad-Campaigns",
  "Creative Studio",
];

interface TypingAnimationProps {
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export const TypingAnimation = ({
  typeSpeed = 20,
  deleteSpeed = 10,
  delayBetweenWords = 1000,
}: TypingAnimationProps) => {
  const [typingText, setTypingText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setTypingText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setTypingText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }

        // Check if word is complete
        if (!isDeleting && charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, typeSpeed, deleteSpeed, delayBetweenWords]);

  return (
    <span className="block mt-2 md:inline md:mt-0 font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-lg">
      <span>{typingText}</span>
      <span className="typing-cursor" />
    </span>
  );
};
