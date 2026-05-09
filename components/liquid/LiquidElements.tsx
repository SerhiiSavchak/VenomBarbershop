"use client";

import { motion } from "framer-motion";

// Massive hero liquid wrap - the signature element that wraps the hero image
export function HeroLiquidWrap() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible z-20">
      {/* Main massive liquid arc wrapping from bottom-right, curving around the hero */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute -bottom-32 -right-48 w-[900px] h-[900px] md:w-[1200px] md:h-[1000px]"
      >
        <svg viewBox="0 0 1000 900" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="liquidMain" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="40%" stopColor="#080808" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
            <linearGradient id="cyanEdge1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38E8FF" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#38E8FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38E8FF" stopOpacity="0" />
            </linearGradient>
            <filter id="liquidGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          
          {/* Main massive liquid body - thick organic shape */}
          <path
            d="M1000,900 
               L1000,200 
               Q980,100 900,80 
               Q750,50 600,100 
               Q450,150 350,250 
               Q250,350 200,500 
               Q150,650 100,750 
               Q50,850 0,900 
               Z"
            fill="url(#liquidMain)"
          />
          
          {/* Secondary tendril reaching up */}
          <path
            d="M900,0 
               Q850,50 820,120 
               Q790,190 750,220 
               Q700,250 680,200 
               Q660,150 700,80 
               Q740,10 800,0 
               Z"
            fill="url(#liquidMain)"
          />
          
          {/* Cyan reflection edge - outer curve */}
          <path
            d="M950,150 Q850,100 700,130 Q550,160 400,280 Q280,400 200,550"
            stroke="url(#cyanEdge1)"
            strokeWidth="3"
            fill="none"
            filter="url(#liquidGlow)"
          />
          
          {/* Inner cyan reflection */}
          <path
            d="M920,250 Q800,200 650,250 Q500,300 380,420"
            stroke="#38E8FF"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
          
          {/* Glossy highlight spots */}
          <ellipse cx="800" cy="300" rx="40" ry="15" fill="#38E8FF" fillOpacity="0.08" />
          <ellipse cx="600" cy="450" rx="30" ry="10" fill="#38E8FF" fillOpacity="0.06" />
        </svg>
      </motion.div>

      {/* Top-left liquid claw reaching down */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute -top-20 -left-32 w-[500px] h-[600px] md:w-[600px] md:h-[700px]"
      >
        <svg viewBox="0 0 500 600" fill="none" className="w-full h-full">
          <path
            d="M0,0 
               L300,0 
               Q400,20 380,100 
               Q360,180 300,250 
               Q240,320 200,420 
               Q160,520 100,580 
               Q50,620 0,600 
               Z"
            fill="#000000"
          />
          <path
            d="M50,80 Q150,60 250,100 Q320,130 340,180"
            stroke="#38E8FF"
            strokeWidth="2"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}

// Liquid section divider - thick organic wave between sections
export function LiquidDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`relative h-24 md:h-40 overflow-hidden ${className}`}>
      <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="divGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="50%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#000000" />
          </linearGradient>
        </defs>
        <path
          d="M0,160 
             L0,80 
             Q100,40 250,60 
             Q400,80 550,30 
             Q700,0 850,20 
             Q1000,40 1150,10 
             Q1300,0 1440,40 
             L1440,160 
             Z"
          fill="url(#divGrad)"
        />
        <path
          d="M50,70 Q200,50 350,65 Q500,80 650,40 Q800,10 950,30 Q1100,50 1250,25"
          stroke="#38E8FF"
          strokeWidth="2"
          strokeOpacity="0.25"
          fill="none"
        />
      </svg>
    </div>
  );
}

// Liquid frame that wraps around images/cards
export function LiquidImageFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Liquid corners and edges */}
      <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M0,0 L80,0 Q60,20 50,40 Q40,60 20,70 Q0,80 0,100 Z" fill="#000000" />
          <path d="M10,20 Q30,15 45,30" stroke="#38E8FF" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
        </svg>
      </div>
      
      <div className="absolute -bottom-4 -right-4 w-32 h-32 md:w-40 md:h-40 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M100,100 L20,100 Q40,80 50,60 Q60,40 80,30 Q100,20 100,0 Z" fill="#000000" />
          <path d="M90,80 Q70,85 55,70" stroke="#38E8FF" strokeWidth="1.5" strokeOpacity="0.5" fill="none" />
        </svg>
      </div>

      {children}
    </div>
  );
}

// Large background liquid stain for sections
export function LiquidStain({ position = "left", className = "" }: { position?: "left" | "right" | "center"; className?: string }) {
  const posClasses = {
    left: "-left-64 top-1/2 -translate-y-1/2",
    right: "-right-64 top-1/2 -translate-y-1/2",
    center: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  };

  return (
    <div className={`absolute ${posClasses[position]} w-[600px] h-[800px] pointer-events-none opacity-60 ${className}`}>
      <svg viewBox="0 0 400 600" className="w-full h-full">
        <defs>
          <radialGradient id="stainGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="70%" stopColor="#050505" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <ellipse cx="200" cy="300" rx="180" ry="280" fill="url(#stainGrad)" />
        <path
          d="M100,150 Q150,200 200,180 Q250,160 280,220 Q310,280 270,350"
          stroke="#38E8FF"
          strokeWidth="1"
          strokeOpacity="0.15"
          fill="none"
        />
      </svg>
    </div>
  );
}

// Card corner liquid accent
export function CardLiquidCorner({ position = "bottom-left" }: { position?: "bottom-left" | "bottom-right" | "top-left" | "top-right" }) {
  const posClasses = {
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0 scale-x-[-1]",
    "top-left": "top-0 left-0 scale-y-[-1]",
    "top-right": "top-0 right-0 scale-[-1]"
  };

  return (
    <div className={`absolute ${posClasses[position]} w-16 h-16 md:w-20 md:h-20 pointer-events-none z-10`}>
      <svg viewBox="0 0 80 80" className="w-full h-full">
        <path
          d="M0,80 L0,30 Q10,40 25,35 Q40,30 45,45 Q50,60 70,55 Q80,53 80,80 Z"
          fill="#000000"
        />
        <path
          d="M5,50 Q20,45 30,55"
          stroke="#38E8FF"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
}

// Animated reveal wrapper
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Red ambient glow overlay
export function RedGlow({ intensity = "medium", position = "right" }: { intensity?: "low" | "medium" | "high"; position?: "left" | "right" | "center" }) {
  const opacities = { low: "0.1", medium: "0.2", high: "0.3" };
  const posClasses = {
    left: "left-0",
    right: "right-0",
    center: "left-1/2 -translate-x-1/2"
  };

  return (
    <div className={`absolute ${posClasses[position]} top-0 w-2/3 h-full pointer-events-none`}>
      <div 
        className="absolute inset-0 blur-[150px]"
        style={{
          background: `radial-gradient(ellipse at center, rgba(209, 18, 27, ${opacities[intensity]}) 0%, transparent 70%)`
        }}
      />
    </div>
  );
}
