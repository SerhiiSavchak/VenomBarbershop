"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const InstagramIcon = () => (
  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
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
  return (
    <section id="masters" className="relative min-h-[400px] bg-black p-4 md:p-6 overflow-hidden border-r border-white/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg md:text-xl font-black tracking-tight text-white">
          OUR MASTERS
        </h2>
        <a href="#" className="text-[10px] text-accent-red hover:text-accent-red-bright uppercase tracking-wider transition-colors inline-flex items-center gap-1">
          <span>View All</span>
          <span>→</span>
        </a>
      </div>

      {/* 4 portrait cards in 2x2 grid */}
      <div className="grid grid-cols-2 gap-2 md:gap-3">
        {masters.map((master, index) => (
          <motion.div
            key={master.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="group cursor-pointer"
          >
            <div className="relative bg-[#0a0a0a] overflow-hidden border border-white/5 hover:border-accent-red/30 transition-all">
              {/* Portrait */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={master.image}
                  alt={master.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                <div className="absolute inset-0 bg-accent-red/15 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
              </div>

              {/* Info */}
              <div className="p-2 md:p-3">
                <h3 className="font-display text-[11px] md:text-xs font-bold uppercase tracking-wide text-white">{master.name}</h3>
                <p className="text-accent-red text-[9px] md:text-[10px] font-semibold mb-0.5">{master.role}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] md:text-[9px] text-foreground-muted">{master.experience}</span>
                  <span className="text-foreground-muted hover:text-white transition-colors cursor-pointer"><InstagramIcon /></span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
