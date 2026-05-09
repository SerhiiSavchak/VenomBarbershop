"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, CardLiquidCorner } from "@/components/liquid/LiquidElements";
import Image from "next/image";

const InstagramIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const masters = [
  {
    name: "Marcus Stone",
    role: "Senior Barber",
    experience: "8 Years Experience",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "David Chen",
    role: "Style Director",
    experience: "10 Years Experience",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "James Williams",
    role: "Beard Specialist",
    experience: "8 Years Experience",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Alex Rivera",
    role: "Color Expert",
    experience: "6 Years Experience",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
];

export function Masters() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="masters" className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Red ambient glow */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-accent-red/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <RevealSection className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            OUR MASTERS
          </h2>
          <a href="#" className="text-xs text-foreground-muted hover:text-white uppercase tracking-wider transition-colors group inline-flex items-center gap-2">
            <span>View All</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </RevealSection>

        {/* Desktop: 4 cards in a row */}
        <div className="hidden md:grid md:grid-cols-4 gap-4">
          {masters.map((master, index) => (
            <motion.div
              key={master.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-[#0a0a0a] rounded overflow-hidden border border-white/5 hover:border-accent-red/30 transition-all">
                <CardLiquidCorner position="bottom-left" />
                
                {/* Portrait */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={master.image}
                    alt={master.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                  <div className="absolute inset-0 bg-accent-red/15 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-display text-base font-bold uppercase tracking-wide">{master.name}</h3>
                  <p className="text-accent-red text-xs font-semibold mb-1">{master.role}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-foreground-muted">{master.experience}</span>
                    <span className="text-foreground-muted hover:text-white transition-colors cursor-pointer"><InstagramIcon /></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Horizontal swipe */}
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
                className="flex-shrink-0 w-[160px] snap-center"
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
                  </div>
                  
                  <div className="p-3">
                    <h3 className="font-display text-xs font-bold uppercase">{master.name}</h3>
                    <p className="text-accent-red text-[10px]">{master.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
