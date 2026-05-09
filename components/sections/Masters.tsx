"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, CardLiquidCorner } from "@/components/liquid/LiquidElements";
import { Instagram } from "lucide-react";
import Image from "next/image";

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
                    <Instagram className="w-3.5 h-3.5 text-foreground-muted hover:text-white transition-colors cursor-pointer" />
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
