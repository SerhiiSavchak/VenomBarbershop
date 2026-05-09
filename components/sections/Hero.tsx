"use client";

import { motion } from "framer-motion";
import { Users, Award, Scissors, Clock } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Users, value: "15K+", label: "Happy Clients" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Scissors, value: "5K+", label: "Perfect Cuts" },
  { icon: Clock, value: "24/7", label: "Premium Service" },
];

export function Hero() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden bg-black border-r border-white/5">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&q=80"
          alt="Dark barbershop interior"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Red volumetric glow at top */}
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-accent-red/30 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-accent-red/20 blur-[80px] pointer-events-none" />

      {/* MASSIVE LIQUID WRAP - Bottom and right side */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg 
          className="absolute -bottom-10 -left-20 w-[120%] h-[500px]" 
          viewBox="0 0 1200 400" 
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroLiquid" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#050505" />
              <stop offset="100%" stopColor="#0a0a0a" />
            </linearGradient>
          </defs>
          {/* Main liquid body */}
          <path
            d="M0,400 L0,200 Q100,180 200,220 Q350,280 500,200 Q650,120 800,180 Q950,240 1100,160 Q1200,100 1200,400 Z"
            fill="url(#heroLiquid)"
          />
          {/* Cyan edge highlight */}
          <path
            d="M50,200 Q150,180 280,230 Q420,290 560,210 Q700,130 840,190 Q980,250 1120,170"
            stroke="#38E8FF"
            strokeWidth="2"
            strokeOpacity="0.4"
            fill="none"
          />
        </svg>
        
        {/* Right side liquid tendril */}
        <svg 
          className="absolute -right-20 top-0 w-[300px] h-full" 
          viewBox="0 0 200 800" 
          preserveAspectRatio="none"
        >
          <path
            d="M200,0 L200,800 L100,800 Q80,700 120,600 Q160,500 100,400 Q40,300 100,200 Q160,100 120,0 Z"
            fill="#000000"
          />
          <path
            d="M150,100 Q120,200 150,300 Q180,400 130,500"
            stroke="#38E8FF"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10 lg:p-12 pt-24 md:pt-28">
        <div className="max-w-lg">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent-red text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Premium Barbershop Experience
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tight mb-6"
          >
            <span className="block text-white">SHARP</span>
            <span className="block text-white">LOOKS.</span>
            <span className="block text-stroke-red">BOLD INK.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-foreground-muted text-sm md:text-base max-w-md mb-8 leading-relaxed"
          >
            Experience precision craftsmanship in a cinematic atmosphere. Where every cut is a masterpiece and every visit feels like luxury.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-3"
          >
            <button className="bg-accent-red hover:bg-accent-red-bright text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors">
              Book Appointment
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-white/5">
              View Services
            </button>
          </motion.div>
        </div>

        {/* Trust indicators at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-auto pt-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.08 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                <stat.icon className="w-3.5 h-3.5 text-foreground-muted" />
              </div>
              <div>
                <span className="block font-display text-base md:text-lg font-bold text-white">{stat.value}</span>
                <span className="text-[9px] text-foreground-muted uppercase tracking-wider">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
