"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, CardLiquidCorner, LiquidDivider, RedGlow } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const masters = [
  {
    name: "Marcus Stone",
    role: "Senior Barber",
    experience: "12 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "David Chen",
    role: "Style Director",
    experience: "10 years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "James Williams",
    role: "Beard Specialist",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Alex Rivera",
    role: "Color Expert",
    experience: "7 years",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
];

export function Masters() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <LiquidDivider className="-mb-8" />
      
      <section id="masters" className="relative py-20 md:py-28 bg-black overflow-hidden">
        {/* Red rim lighting effect */}
        <RedGlow intensity="medium" position="right" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[180px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <RevealSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-accent-red text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Expert Team</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                MEET THE MASTERS
              </h2>
            </div>
            <a href="#" className="text-xs text-foreground-muted hover:text-white uppercase tracking-wider transition-colors group inline-flex items-center gap-2">
              <span>View All</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </RevealSection>

          {/* Desktop Grid - dark portrait cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {masters.map((master, index) => (
              <motion.div
                key={master.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-[#0a0a0a] rounded overflow-hidden border border-white/5 hover:border-accent-red/40 transition-all duration-300">
                  {/* Liquid corner */}
                  <CardLiquidCorner position="bottom-left" />
                  
                  {/* Portrait image - tall aspect */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={master.image}
                      alt={master.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    {/* Dark vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                    
                    {/* Red rim light on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent-red/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-bl from-accent-red/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Cyan edge accent */}
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-cyan/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Info - compact */}
                  <div className="p-4 relative">
                    <h3 className="font-display text-base font-bold mb-0.5">{master.name}</h3>
                    <p className="text-accent-red text-xs font-semibold mb-2">{master.role}</p>
                    <span className="text-[10px] text-foreground-muted uppercase tracking-wider">{master.experience}</span>
                    
                    {/* Hover CTA */}
                    <div className="absolute inset-x-4 -top-12 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button variant="primary" size="sm" className="w-full text-xs">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
            >
              {masters.map((master, index) => (
                <motion.div
                  key={master.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex-shrink-0 w-[200px] snap-center"
                >
                  <div className="relative bg-[#0a0a0a] rounded overflow-hidden border border-white/5">
                    <CardLiquidCorner position="bottom-left" />
                    
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={master.image}
                        alt={master.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
                      <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
                    </div>
                    
                    <div className="p-3">
                      <h3 className="font-display text-sm font-bold">{master.name}</h3>
                      <p className="text-accent-red text-[10px] font-semibold">{master.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
