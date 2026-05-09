"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
  "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&q=80",
  "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=400&q=80",
];

export function Gallery() {
  return (
    <section id="gallery" className="relative min-h-[400px] bg-[#050505] p-4 md:p-6 overflow-hidden border-r border-white/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg md:text-xl font-black tracking-tight text-white">
          OUR GALLERY
        </h2>
        <a href="#" className="text-[10px] text-accent-red hover:text-accent-red-bright uppercase tracking-wider transition-colors inline-flex items-center gap-1">
          <span>View All</span>
          <span>→</span>
        </a>
      </div>

      {/* Dense 4x2 grid exactly like reference */}
      <div className="grid grid-cols-4 gap-1 md:gap-1.5">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.03 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute inset-0 bg-accent-red/15 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
