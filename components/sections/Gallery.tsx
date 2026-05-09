"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, LiquidImageFrame, CardLiquidCorner, RedGlow } from "@/components/liquid/LiquidElements";
import Image from "next/image";

const galleryImages = [
  { id: 1, label: "Classic Fade", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80" },
  { id: 2, label: "Textured Crop", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80" },
  { id: 3, label: "Beard Sculpt", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80" },
  { id: 4, label: "Modern Style", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80" },
  { id: 5, label: "Slick Back", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80" },
  { id: 6, label: "Buzz Cut", image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80" },
];

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-[#050505] overflow-hidden">
      {/* Background */}
      <RedGlow intensity="low" position="left" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <RevealSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-accent-red text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Portfolio</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              GALLERY
            </h2>
          </div>
          <a href="#" className="text-xs text-foreground-muted hover:text-white uppercase tracking-wider transition-colors group inline-flex items-center gap-2">
            <span>View All Work</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </RevealSection>

        {/* Desktop: Masonry-style grid with liquid frame */}
        <LiquidImageFrame className="hidden md:block">
          <div className="grid grid-cols-3 gap-3">
            {/* Large featured image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="col-span-2 row-span-2 group cursor-pointer relative"
            >
              <CardLiquidCorner position="bottom-right" />
              <div className="relative aspect-[4/3] h-full overflow-hidden">
                <Image
                  src={galleryImages[0].image}
                  alt={galleryImages[0].label}
                  fill
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-accent-red/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                
                {/* Label */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-accent-red font-bold uppercase tracking-wider">{galleryImages[0].label}</span>
                </div>

                {/* Cyan edge */}
                <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-accent-cyan/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>

            {/* Smaller images */}
            {galleryImages.slice(1, 4).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer relative"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute inset-0 bg-accent-red/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                  
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] text-white/80 uppercase tracking-wider">{item.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Bottom row - 3 equal images */}
            {galleryImages.slice(3, 6).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer relative"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-[10px] text-white/80 uppercase tracking-wider">{item.label}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </LiquidImageFrame>

        {/* Mobile: Horizontal swipe */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
          >
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 w-[200px] snap-center"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs text-white font-bold">{item.label}</span>
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
