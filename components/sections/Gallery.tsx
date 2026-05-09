"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, LiquidCorner } from "@/components/liquid/LiquidElements";
import Image from "next/image";

const galleryImages = [
  { id: 1, label: "Classic Fade", image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80" },
  { id: 2, label: "Textured Crop", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80" },
  { id: 3, label: "Beard Sculpt", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80" },
  { id: 4, label: "Modern Pompadour", image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80" },
  { id: 5, label: "Slick Back", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80" },
  { id: 6, label: "Buzz Cut", image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80" },
  { id: 7, label: "Undercut", image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80" },
  { id: 8, label: "Taper Fade", image: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=400&q=80" },
];

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-background-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent-cyan/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <RevealSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-red text-white text-xs font-bold uppercase tracking-widest mb-6">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            GALLERY
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Showcasing our finest cuts and styles
          </p>
        </RevealSection>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-4">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group cursor-pointer relative ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              {/* Liquid corner on featured items */}
              {(index === 0 || index === 5) && (
                <LiquidCorner position="top-right" size="lg" />
              )}
              
              <div className={`relative rounded-lg overflow-hidden ${
                index === 0 || index === 5 ? "aspect-square" : "aspect-[4/5]"
              }`}>
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Red accent lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-foreground font-display font-bold text-lg">{item.label}</p>
                    <p className="text-accent-red text-sm font-semibold">View Details</p>
                  </div>
                </div>

                {/* Cyan reflection line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[240px] snap-center"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-foreground font-display font-bold">{item.label}</p>
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
