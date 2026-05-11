"use client";

import { motion } from "framer-motion";
import { cinematicEase } from "@/lib/motion";

const eyebrowLineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: cinematicEase },
  },
};

const eyebrowTextVariants = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: cinematicEase, delay: 0.2 },
  },
};

interface SectionEyebrowProps {
  text: string;
  className?: string;
}

export function SectionEyebrow({ text, className = "" }: SectionEyebrowProps) {
  return (
    <div className={`mb-5 flex items-stretch gap-4 ${className}`}>
      {/* Vertical red mark - brand identity element */}
      <motion.div 
        variants={eyebrowLineVariants}
        className="relative w-[3px] min-h-[20px] origin-top self-stretch"
      >
        {/* Main line */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E50914] via-[#E50914] to-[#E50914]/40" />
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#E50914] blur-[3px] opacity-60" />
        {/* Top notch detail */}
        <div className="absolute -top-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#E50914] shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
      </motion.div>
      
      <div className="flex flex-col justify-center">
        <motion.span 
          variants={eyebrowTextVariants}
          className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E50914] md:text-[11px]"
        >
          {text}
        </motion.span>
      </div>
    </div>
  );
}

// Heading animation variant for use with section headers
export const sectionHeadingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: cinematicEase, delay: 0.35 },
  },
};
