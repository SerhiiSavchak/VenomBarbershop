"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionDividerProps {
  variant?: "subtle" | "brand" | "gradient";
  className?: string;
}

export function SectionDivider({ variant = "subtle", className = "" }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Animated line that moves across on scroll
  const scaleX = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  if (variant === "brand") {
    return (
      <div ref={ref} className={`relative h-px w-full overflow-hidden ${className}`}>
        {/* Base line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
        
        {/* Animated red accent line */}
        <motion.div
          className="absolute inset-0 origin-left bg-gradient-to-r from-transparent via-[#E50914]/60 to-transparent"
          style={{ scaleX, opacity }}
        />
        
        {/* Traveling glow dot */}
        <motion.div
          className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#E50914] shadow-[0_0_12px_rgba(229,9,20,0.8)]"
          style={{
            left: useTransform(scrollYProgress, [0, 1], ["-5%", "105%"]),
            opacity: useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]),
          }}
        />
      </div>
    );
  }

  if (variant === "gradient") {
    return (
      <div ref={ref} className={`relative h-16 w-full overflow-hidden ${className}`}>
        {/* Gradient fade transition */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E50914]/5 to-transparent"
          style={{ opacity }}
        />
        
        {/* Center line */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-px w-[80%] -translate-x-1/2 -translate-y-1/2 origin-center bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
          style={{ scaleX }}
        />
      </div>
    );
  }

  // Default subtle variant
  return (
    <div ref={ref} className={`relative h-px w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <motion.div
        className="absolute inset-0 origin-left bg-gradient-to-r from-transparent via-white/[0.08] to-transparent"
        style={{ scaleX }}
      />
    </div>
  );
}
