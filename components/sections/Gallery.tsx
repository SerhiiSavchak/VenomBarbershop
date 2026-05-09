"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection } from "@/components/liquid/LiquidElements";
import Image from "next/image";

const galleryImages = [
  { id: 1, image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80" },
  { id: 2, image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80" },
  { id: 3, image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80" },
  { id: 4, image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80" },
  { id: 5, image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80" },
  { id: 6, image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80" },
];

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="relative py-16 md:py-24 bg-[#050505] overflow-hidden">
      {/* Red ambient glow */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] bg-accent-red/8 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <RevealSection className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            OUR GALLERY
          </h2>
          <a href="#" className="text-xs text-foreground-muted hover:text-white uppercase tracking-wider transition-colors group inline-flex items-center gap-2">
            <span>View All</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </RevealSection>

        {/* Desktop: Dense grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-2">
          {/* Row 1 - 4 images */}
          {galleryImages.slice(0, 4).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group cursor-pointer relative"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Gallery image ${item.id}`}
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-accent-red/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
              </div>
            </motion.div>
          ))}
          
          {/* Row 2 - 2 wider images */}
          {galleryImages.slice(4, 6).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="col-span-2 group cursor-pointer relative"
            >
              <div className="relative aspect-[2/1] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Gallery image ${item.id}`}
                  fill
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-accent-red/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Horizontal swipe */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-2 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
          >
            {galleryImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 w-[180px] snap-center"
              >
                <div className="relative aspect-square overflow-hidden rounded">
                  <Image
                    src={item.image}
                    alt={`Gallery image ${item.id}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
