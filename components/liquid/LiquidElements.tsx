"use client";

import { motion } from "framer-motion";

export function HeroLiquidLayer({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Top left liquid claw - large and dramatic */}
      <motion.div
        initial={{ opacity: 0, x: -200, y: -100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -top-20 -left-20 w-[600px] h-[500px]"
      >
        <svg viewBox="0 0 600 500" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="liquidGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#0A0A0A" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
            <linearGradient id="cyanHighlight1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38E8FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#38E8FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Main liquid shape */}
          <path
            d="M0,0 L400,0 Q500,50 450,150 Q400,250 300,280 Q200,310 150,400 Q100,450 0,500 Z"
            fill="url(#liquidGrad1)"
          />
          {/* Cyan reflection line */}
          <path
            d="M50,100 Q150,120 250,100 Q350,80 400,120"
            stroke="url(#cyanHighlight1)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M30,200 Q100,220 180,200"
            stroke="url(#cyanHighlight1)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Bottom right liquid claw */}
      <motion.div
        initial={{ opacity: 0, x: 200, y: 100 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute -bottom-20 -right-20 w-[700px] h-[600px]"
      >
        <svg viewBox="0 0 700 600" fill="none" className="w-full h-full">
          <defs>
            <linearGradient id="liquidGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#0A0A0A" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
            <linearGradient id="cyanHighlight2" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#38E8FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38E8FF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M700,600 L200,600 Q100,550 150,450 Q200,350 300,300 Q400,250 500,150 Q550,100 700,0 Z"
            fill="url(#liquidGrad2)"
          />
          <path
            d="M650,500 Q550,480 450,500 Q350,520 280,480"
            stroke="url(#cyanHighlight2)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M670,380 Q600,360 520,380"
            stroke="url(#cyanHighlight2)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Floating liquid drips */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-8 h-32 bg-gradient-to-b from-background-tertiary to-transparent rounded-full blur-sm opacity-60"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-6 h-24 bg-gradient-to-t from-background-tertiary to-transparent rounded-full blur-sm opacity-50"
      />
    </div>
  );
}

export function LiquidFrame({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none ${className}`}>
      {/* Top liquid wave */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        className="absolute -top-4 left-0 right-0 h-16 origin-left"
      >
        <svg viewBox="0 0 400 60" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="frameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#0A0A0A" />
              <stop offset="100%" stopColor="#050505" />
            </linearGradient>
          </defs>
          <path
            d="M0,60 Q50,30 100,40 Q150,50 200,35 Q250,20 300,30 Q350,40 400,20 L400,0 L0,0 Z"
            fill="url(#frameGrad)"
          />
          <path
            d="M20,30 Q80,25 140,32 Q200,38 260,28"
            stroke="#38E8FF"
            strokeWidth="1"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Left liquid drip */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        className="absolute top-0 -left-6 w-20 h-full origin-top"
      >
        <svg viewBox="0 0 80 400" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M80,0 Q40,50 50,100 Q60,150 40,200 Q20,250 30,300 Q40,350 20,400 L0,400 L0,0 Z"
            fill="#000000"
          />
          <path
            d="M60,50 Q55,100 60,150"
            stroke="#38E8FF"
            strokeWidth="1"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Right liquid drip */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="absolute top-0 -right-6 w-24 h-full origin-top"
      >
        <svg viewBox="0 0 96 400" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0 Q40,40 30,100 Q20,160 40,220 Q60,280 50,340 Q40,380 60,400 L96,400 L96,0 Z"
            fill="#000000"
          />
          <path
            d="M30,80 Q35,140 28,200"
            stroke="#38E8FF"
            strokeWidth="1"
            strokeOpacity="0.35"
            fill="none"
          />
        </svg>
      </motion.div>

      {/* Bottom liquid wave */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
        className="absolute -bottom-4 left-0 right-0 h-20 origin-right"
      >
        <svg viewBox="0 0 400 80" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0 Q50,30 100,20 Q150,10 200,25 Q250,40 300,30 Q350,20 400,40 L400,80 L0,80 Z"
            fill="#000000"
          />
          <path
            d="M60,35 Q120,28 180,38 Q240,48 300,32"
            stroke="#38E8FF"
            strokeWidth="1"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function LiquidSectionDivider({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="relative h-32 md:h-48 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <svg 
          viewBox="0 0 1440 200" 
          preserveAspectRatio="none" 
          className={`absolute inset-0 w-full h-full ${inverted ? "rotate-180" : ""}`}
        >
          <defs>
            <linearGradient id="dividerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="30%" stopColor="#0A0A0A" />
              <stop offset="70%" stopColor="#0A0A0A" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q200,100 400,120 Q600,140 720,80 Q840,20 1000,60 Q1200,110 1440,50 L1440,0 L0,0 Z"
            fill="url(#dividerGrad)"
          />
          <path
            d="M100,80 Q300,60 500,90 Q700,120 900,70 Q1100,20 1300,60"
            stroke="#38E8FF"
            strokeWidth="1.5"
            strokeOpacity="0.25"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export function LiquidCorner({ position = "top-right", size = "md" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right"; size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32"
  };
  
  const positionClasses = {
    "top-left": "-top-2 -left-2",
    "top-right": "-top-2 -right-2 scale-x-[-1]",
    "bottom-left": "-bottom-2 -left-2 scale-y-[-1]",
    "bottom-right": "-bottom-2 -right-2 scale-[-1]"
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${sizeClasses[size]} pointer-events-none`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          d="M0,0 Q30,5 50,0 Q70,10 80,30 Q90,50 100,80 L100,100 L80,100 Q60,70 40,60 Q20,50 0,40 Z"
          fill="#000000"
        />
        <path
          d="M10,15 Q30,12 45,18"
          stroke="#38E8FF"
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
        />
      </svg>
    </div>
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
      <div className="absolute -inset-px bg-gradient-to-r from-accent-red/0 via-accent-red/20 to-accent-cyan/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}
