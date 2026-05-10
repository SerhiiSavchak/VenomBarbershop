"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SymbioteAccent } from "@/components/symbiote/SymbioteLayer";

const galleryImages = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&q=88",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=88",
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=900&q=88",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&q=88",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=88",
  "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=900&q=88",
  "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=900&q=88",
  "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=900&q=88",
  "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=900&q=88",
];

const heights = ["h-64", "h-80", "h-72", "h-96", "h-72", "h-64", "h-96", "h-72", "h-80"];

export function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#030303] py-24 md:py-32">
      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-accent-red">Gallery</span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
              Evidence
            </h2>
          </motion.div>
          <p className="max-w-xs text-sm text-foreground-muted">Masonry rhythm — uneven heights, dark margins, slow zoom on reveal.</p>
        </div>

        <div className="relative">
          <SymbioteAccent band="top" position="bottom-right" className="opacity-40" />
          <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:gap-5">
            {galleryImages.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ delay: (index % 3) * 0.06, duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
                className={`group relative mb-3 break-inside-avoid overflow-hidden border border-white/[0.06] md:mb-4 ${heights[index % heights.length]}`}
              >
                <motion.div
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    fill
                    sizes="(max-width:768px) 50vw, 33vw"
                    className="object-cover brightness-[0.92] contrast-[1.08] transition-transform duration-[1.4s] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/10" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
