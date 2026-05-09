"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Space() {
  return (
    <section id="space" className="relative min-h-[500px] bg-black p-6 md:p-8 overflow-hidden border-r border-white/5">
      {/* Liquid wrap at top and bottom */}
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none">
        <svg viewBox="0 0 800 60" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0 L800,0 L800,30 Q700,60 550,40 Q400,20 250,50 Q100,80 0,40 Z" fill="#050505" />
          <path d="M100,35 Q250,55 400,30 Q550,5 700,40" stroke="#38E8FF" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
        <svg viewBox="0 0 800 80" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,80 L0,50 Q150,20 300,50 Q450,80 600,40 Q750,0 800,30 L800,80 Z" fill="#050505" />
          <path d="M50,55 Q200,25 350,55 Q500,85 650,45" stroke="#38E8FF" strokeWidth="1.5" strokeOpacity="0.25" fill="none" />
        </svg>
      </div>

      {/* Red glow */}
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-accent-red/15 blur-[100px] pointer-events-none" />

      <div className="relative z-10 pt-8">
        {/* Header */}
        <div className="mb-6">
          <span className="text-accent-red text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">The Experience</span>
          <h2 className="font-display text-2xl md:text-3xl font-black tracking-tight text-white mb-4">
            OUR SPACE
          </h2>
          <p className="text-foreground-muted text-xs md:text-sm leading-relaxed max-w-xs mb-4">
            Step into a world where craftsmanship meets cinematic atmosphere. Every detail designed for your comfort.
          </p>
          <button className="px-4 py-2 border border-white/20 text-[10px] uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all text-white">
            Book a Visit
          </button>
        </div>

        {/* Image grid - 1 large + 2 small like reference */}
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {/* Large main image spanning 2 columns */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="col-span-2 row-span-2 relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80"
              alt="Cinematic barbershop interior"
              fill
              className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
            {/* Red glow at top */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-accent-red/40 blur-[40px]" />
          </motion.div>

          {/* Two smaller stacked images */}
          <div className="flex flex-col gap-2 md:gap-3">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative aspect-square overflow-hidden flex-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80"
                alt="Barber chair"
                fill
                className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative aspect-square overflow-hidden flex-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80"
                alt="Barber tools"
                fill
                className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
