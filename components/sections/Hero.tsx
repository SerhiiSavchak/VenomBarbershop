"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroLiquidLayer, LiquidFrame } from "@/components/liquid/LiquidElements";
import { Scissors, Award, Users, Star } from "lucide-react";
import Image from "next/image";

const stats = [
  { icon: Scissors, value: "15K+", label: "Haircuts Done" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Users, value: "5K+", label: "Happy Clients" },
  { icon: Star, value: "4.9", label: "Client Rating" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
        
        {/* Red volumetric light - right side */}
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent-red/15 via-accent-red/5 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent-red/20 rounded-full blur-[200px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[300px] h-[300px] bg-accent-red/15 rounded-full blur-[150px]" />
        </div>

        {/* Fog/smoke layers */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Liquid frame elements */}
      <HeroLiquidLayer />

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* Left side - Text content */}
          <div className="max-w-2xl z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-accent-red text-white text-xs font-bold uppercase tracking-widest">
                Premium Barbershop
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.85] tracking-tighter mb-8"
            >
              <span className="block">SHARP</span>
              <span className="block">LOOKS.</span>
              <span className="block text-stroke-red">CLEAN CUTS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground-muted max-w-md mb-10 leading-relaxed"
            >
              Experience precision craftsmanship in a cinematic atmosphere. 
              Where every cut is a masterpiece.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg">
                Book Appointment
              </Button>
              <Button variant="secondary" size="lg">
                View Services
              </Button>
            </motion.div>
          </div>

          {/* Right side - Hero image with liquid frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:block"
          >
            <div className="relative aspect-[4/5] max-w-xl mx-auto">
              {/* Liquid frame wrapper */}
              <LiquidFrame className="absolute -inset-8 md:-inset-12" />
              
              {/* Main image */}
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80"
                  alt="Premium barber chair in cinematic lighting"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Red volumetric overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-l from-accent-red/20 via-transparent to-transparent" />
                
                {/* Reflective floor effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
              </div>

              {/* Cyan reflection accents */}
              <div className="absolute -top-4 -left-4 w-32 h-1 bg-gradient-to-r from-accent-cyan/60 to-transparent blur-sm" />
              <div className="absolute -bottom-4 -right-4 w-40 h-1 bg-gradient-to-l from-accent-cyan/50 to-transparent blur-sm" />
              <div className="absolute top-1/2 -right-6 w-1 h-32 bg-gradient-to-b from-accent-cyan/40 to-transparent blur-sm" />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 lg:mt-28"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative group"
              >
                <div className="glass rounded-lg p-5 md:p-6 text-center transition-all duration-300 group-hover:border-accent-red/30">
                  <stat.icon className="w-5 h-5 mx-auto mb-3 text-accent-red" />
                  <div className="font-display text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                  <div className="text-xs text-foreground-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent-red rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
