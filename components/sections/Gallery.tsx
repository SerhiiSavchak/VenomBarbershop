"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection } from "@/components/liquid/LiquidElements";

const galleryImages = [
  { id: 1, label: "Classic Fade" },
  { id: 2, label: "Textured Crop" },
  { id: 3, label: "Beard Sculpt" },
  { id: 4, label: "Modern Pompadour" },
  { id: 5, label: "Slick Back" },
  { id: 6, label: "Buzz Cut" },
  { id: 7, label: "Undercut" },
  { id: 8, label: "Taper Fade" },
];

export function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-red/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-cyan/3 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <RevealSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-semibold uppercase tracking-widest mb-6">
            Our Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            GALLERY
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Showcasing our finest cuts and styles
          </p>
        </RevealSection>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group cursor-pointer ${
                index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative rounded-lg overflow-hidden ${
                index === 0 || index === 5 ? "aspect-square" : "aspect-[4/5]"
              }`}>
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-background-card via-background-tertiary to-background-secondary">
                  {/* Red accent lighting */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-foreground/10 font-display text-4xl font-bold">
                      {String(image.id).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-foreground font-display font-semibold">{image.label}</p>
                    <p className="text-accent-red text-sm">View Details</p>
                  </div>
                </div>

                {/* Cyan reflection line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {galleryImages.map((image) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[200px] snap-center"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background-card via-background-tertiary to-background-secondary">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-foreground/10 font-display text-3xl font-bold">
                        {String(image.id).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background to-transparent">
                    <p className="text-foreground text-sm font-medium">{image.label}</p>
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
