"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroLiquidWrap, RedGlow } from "@/components/liquid/LiquidElements";
import { Scissors, Shield, Clock, Award } from "lucide-react";
import Image from "next/image";

const features = [
  { icon: Scissors, label: "Precision Cuts" },
  { icon: Shield, label: "Premium Products" },
  { icon: Clock, label: "On-Time Service" },
  { icon: Award, label: "Master Barbers" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Deep black gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050505] to-black" />
      
      {/* Red volumetric glow - right side */}
      <RedGlow intensity="high" position="right" />
      
      {/* Additional red ambient spots */}
      <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-accent-red/20 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-accent-red/15 rounded-full blur-[120px]" />
      
      {/* Fog/smoke at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent" />

      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 md:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-start lg:items-center min-h-[calc(100vh-200px)]">
          
          {/* LEFT: Text content - poster style */}
          <div className="max-w-xl z-20 pt-8 lg:pt-0">
            {/* Red premium label */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-accent-red text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                Premium Barbershop & Tattoo Studio
              </span>
            </motion.div>

            {/* Huge headline - poster typography */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[7rem] font-black leading-[0.85] tracking-tight mb-6"
            >
              <span className="block">SHARP</span>
              <span className="block">LOOKS.</span>
              <span className="block text-stroke-red mt-2">BOLD INK.</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-foreground-muted text-base md:text-lg max-w-md mb-8 leading-relaxed"
            >
              Experience cinematic precision in every cut. Where craftsmanship meets artistry in a dark, luxurious atmosphere.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button variant="primary" size="lg">
                Book Appointment
              </Button>
              <Button variant="secondary" size="lg">
                View Services
              </Button>
            </motion.div>

            {/* Location hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-foreground-muted text-sm flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-accent-red rounded-full" />
              <span>Downtown • Open Daily 10AM - 9PM</span>
            </motion.div>
          </div>

          {/* RIGHT: Hero image with massive liquid wrap */}
          <div className="relative lg:pl-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="relative"
            >
              {/* Main image container */}
              <div className="relative aspect-[3/4] max-w-md lg:max-w-lg mx-auto lg:ml-auto">
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80"
                  alt="Dark cinematic barbershop interior"
                  fill
                  className="object-cover rounded-sm"
                  priority
                />
                
                {/* Dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/50" />
                
                {/* Red tint overlay */}
                <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
              </div>

              {/* Cyan edge accents */}
              <div className="absolute -top-2 left-8 w-24 h-0.5 bg-gradient-to-r from-accent-cyan/80 to-transparent" />
              <div className="absolute top-8 -left-2 w-0.5 h-20 bg-gradient-to-b from-accent-cyan/60 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Bottom feature icons row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 lg:mt-0"
        >
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="flex items-center gap-3 text-foreground-muted"
              >
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                  <feature.icon className="w-4 h-4 text-accent-red" />
                </div>
                <span className="text-xs uppercase tracking-wider">{feature.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* MASSIVE liquid wrap overlay - the signature element */}
      <HeroLiquidWrap />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-9 border border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent-red rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
