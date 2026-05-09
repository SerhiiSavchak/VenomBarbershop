"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroLiquidLayer } from "@/components/liquid/LiquidElements";
import { Scissors, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Scissors, value: "15K+", label: "Haircuts Done" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Users, value: "5K+", label: "Happy Clients" },
  { icon: Clock, value: "24/7", label: "Online Booking" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background-secondary to-background" />
        
        {/* Red volumetric light - right side */}
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-red/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-accent-red/10 rounded-full blur-[100px]" />
        </div>

        {/* Fog/smoke effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background-secondary/50 to-transparent" />
      </div>

      {/* Liquid frame elements */}
      <HeroLiquidLayer />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: "60px 60px"
      }} />

      {/* Main content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left side - Text content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-semibold uppercase tracking-widest">
                Premium Barbershop Experience
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight mb-6"
            >
              <span className="block">SHARP</span>
              <span className="block">LOOKS.</span>
              <span className="block text-accent-red">CLEAN CUTS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-foreground-muted max-w-lg mb-8 leading-relaxed"
            >
              Experience precision craftsmanship in a cinematic atmosphere. 
              Where every cut is a masterpiece and every visit feels like luxury.
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

          {/* Right side - Hero image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] max-w-lg mx-auto">
              {/* Image container with cinematic frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-background-card via-background-tertiary to-background-secondary rounded-lg overflow-hidden">
                {/* Red volumetric lighting */}
                <div className="absolute top-0 right-0 w-3/4 h-1/2 bg-gradient-to-bl from-accent-red/30 to-transparent" />
                <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent-red/20 to-transparent" />
                
                {/* Barber chair silhouette placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 border border-foreground/10 rounded-lg flex items-center justify-center">
                      <Scissors className="w-12 h-12 text-foreground/30" />
                    </div>
                    <p className="text-foreground-muted text-sm">Premium Grooming</p>
                  </div>
                </div>

                {/* Reflective floor effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background to-transparent" />
              </div>

              {/* Cyan reflection accents */}
              <div className="absolute -top-2 -left-2 w-24 h-1 bg-gradient-to-r from-accent-cyan/40 to-transparent" />
              <div className="absolute -bottom-2 -right-2 w-32 h-1 bg-gradient-to-l from-accent-cyan/30 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 lg:mt-24"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="relative group"
              >
                <div className="glass rounded-lg p-4 md:p-6 text-center transition-all duration-300 group-hover:border-accent-red/30">
                  <stat.icon className="w-6 h-6 mx-auto mb-3 text-accent-red" />
                  <div className="font-display text-2xl md:text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-foreground-muted uppercase tracking-wider">{stat.label}</div>
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
