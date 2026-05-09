"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroLiquidWrap } from "@/components/liquid/LiquidElements";
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
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050505] to-black" />
      
      {/* Red volumetric glow - top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-red/25 rounded-full blur-[180px]" />
      <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-accent-red/15 rounded-full blur-[120px]" />

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 md:pt-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT: Text content */}
          <div className="max-w-xl pt-8 lg:pt-16">
            {/* Red eyebrow */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent-red text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] mb-4 block"
            >
              Premium Barbershop Experience
            </motion.span>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-[2.75rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] font-black leading-[0.9] tracking-tight mb-6"
            >
              <span className="block">SHARP</span>
              <span className="block">LOOKS.</span>
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
              className="flex flex-wrap gap-3 mb-12"
            >
              <Button variant="primary" size="lg">
                Book Appointment
              </Button>
              <Button variant="secondary" size="lg">
                View Services
              </Button>
            </motion.div>

            {/* Trust indicators - 4 stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.08 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                    <stat.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-foreground-muted" />
                  </div>
                  <div>
                    <span className="block font-display text-base md:text-lg font-bold">{stat.value}</span>
                    <span className="text-[9px] md:text-[10px] text-foreground-muted uppercase tracking-wider">{stat.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Hero image */}
          <div className="relative lg:pt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Image container */}
              <div className="relative aspect-[4/5] max-w-sm md:max-w-md lg:max-w-lg mx-auto lg:ml-auto">
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
                  alt="Dark cinematic barbershop interior with red lighting"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Dark overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30" />
                
                {/* Red tint */}
                <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
                
                {/* Red glow at top of image */}
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-40 bg-accent-red/30 blur-[80px]" />
              </div>

              {/* Cyan accent lines */}
              <div className="absolute -top-1 left-4 w-16 h-0.5 bg-gradient-to-r from-accent-cyan/70 to-transparent" />
              <div className="absolute top-4 -left-1 w-0.5 h-12 bg-gradient-to-b from-accent-cyan/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* MASSIVE liquid wrap */}
      <HeroLiquidWrap />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-0.5 h-1.5 bg-accent-red rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
