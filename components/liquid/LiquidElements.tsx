"use client";

import { motion } from "framer-motion";

export function HeroLiquidLayer({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Top left liquid claw */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-[400px] h-[300px]"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-transparent transform -skew-x-12 origin-top-left" />
          <div className="absolute top-10 left-0 w-64 h-32 bg-gradient-to-r from-background to-transparent rounded-r-full opacity-80" />
          <div className="absolute top-24 left-0 w-48 h-24 bg-gradient-to-r from-background-secondary to-transparent rounded-r-full opacity-60" />
          {/* Cyan highlight */}
          <div className="absolute top-16 left-20 w-32 h-1 bg-gradient-to-r from-accent-cyan/30 to-transparent blur-sm" />
        </div>
      </motion.div>

      {/* Bottom right liquid claw */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 right-0 w-[500px] h-[400px]"
      >
        <div className="relative w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-tl from-background via-background-secondary to-transparent transform skew-x-12 origin-bottom-right" />
          <div className="absolute bottom-10 right-0 w-72 h-40 bg-gradient-to-l from-background to-transparent rounded-l-full opacity-80" />
          <div className="absolute bottom-32 right-0 w-56 h-28 bg-gradient-to-l from-background-secondary to-transparent rounded-l-full opacity-60" />
          {/* Cyan highlight */}
          <div className="absolute bottom-20 right-24 w-40 h-1 bg-gradient-to-l from-accent-cyan/20 to-transparent blur-sm" />
        </div>
      </motion.div>
    </div>
  );
}

export function LiquidSectionDivider({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="relative h-24 md:h-32 overflow-hidden">
      <div className={`absolute inset-0 flex ${inverted ? "flex-row-reverse" : "flex-row"}`}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`w-1/3 h-full bg-gradient-to-r from-background to-background-tertiary ${inverted ? "origin-right" : "origin-left"}`}
        />
        <div className="flex-1 relative">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
            <path
              d={inverted 
                ? "M100,0 Q70,50 100,100 L0,100 L0,0 Z"
                : "M0,0 Q30,50 0,100 L100,100 L100,0 Z"
              }
              fill="var(--background-tertiary)"
              className="opacity-50"
            />
          </svg>
          {/* Cyan reflection line */}
          <div className={`absolute top-1/2 ${inverted ? "right-0" : "left-0"} w-24 h-px bg-gradient-to-r from-accent-cyan/30 to-transparent transform -translate-y-1/2`} />
        </div>
      </div>
    </div>
  );
}

export function LiquidCardCorner({ position = "top-left" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
    "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4 rotate-90",
    "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4 -rotate-90",
    "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4 rotate-180",
  };

  return (
    <div className={`absolute w-16 h-16 pointer-events-none ${positionClasses[position]}`}>
      <div className="w-full h-full bg-gradient-radial from-background-secondary to-transparent rounded-full opacity-80" />
      <div className="absolute inset-2 bg-gradient-to-br from-accent-cyan/10 to-transparent rounded-full blur-sm" />
    </div>
  );
}

export function LiquidBackgroundStain({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className={`absolute pointer-events-none ${className}`}
    >
      <div className="relative">
        <div className="w-[600px] h-[400px] bg-gradient-radial from-background-secondary via-background-tertiary/50 to-transparent rounded-full blur-3xl liquid-breathe" />
        <div className="absolute top-1/4 left-1/4 w-32 h-2 bg-gradient-to-r from-accent-cyan/20 via-accent-cyan/10 to-transparent blur-md transform rotate-12" />
      </div>
    </motion.div>
  );
}

export function RevealSection({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCard({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      className={`relative group ${className}`}
    >
      {/* Hover glow effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-accent-red/0 via-accent-red/20 to-accent-cyan/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}
