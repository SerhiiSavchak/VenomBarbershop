"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, revealLiftInitial, viewportReveal, sectionTitleInset } from "@/lib/motion";
import { useLgUp } from "@/lib/useLgUp";

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

const masonryVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function tileVariants(lg: boolean) {
  return {
    hidden: lg
      ? { opacity: 0, y: 32, scale: 0.98, x: 0 }
      : { opacity: 0, y: 22, x: -12, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: { duration: 0.76, ease: lg ? cinematicEase : mobilePopEase },
    },
  };
}

export function Gallery() {
  const { t } = useI18n();
  const lg = useLgUp();

  return (
    <section id="gallery" className="relative bg-[#030303] py-24 md:py-32">
      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={revealLiftInitial(lg)}
          whileInView={revealLiftEnter}
          viewport={viewportReveal}
          transition={{ duration: 0.88, ease: lg ? cinematicEase : mobilePopEase }}
          className={`mb-12 ${sectionTitleInset}`}
        >
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#E50914]">{t.gallery.eyebrow}</span>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">{t.gallery.title}</h2>
        </motion.div>

        <motion.div
          className="columns-2 gap-3 md:columns-3 md:gap-4 lg:gap-5"
          initial="hidden"
          whileInView="show"
          viewport={viewportReveal}
          variants={masonryVariants}
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              variants={tileVariants(lg)}
              className={`group relative mb-3 break-inside-avoid overflow-hidden border border-white/[0.06] md:mb-4 ${heights[index % heights.length]}`}
            >
              <motion.div
                initial={lg ? { scale: 1.12 } : { scale: 1.06, y: 14 }}
                whileInView={{ scale: 1, y: 0 }}
                viewport={viewportReveal}
                transition={{ duration: lg ? 1.2 : 0.95, ease: lg ? cinematicEase : mobilePopEase }}
                className="relative h-full w-full"
              >
                <Image
                  src={src}
                  alt={t.gallery.imageAlt(index + 1)}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover brightness-[0.92] contrast-[1.08] transition-transform duration-[1.4s] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-black/35 transition-colors group-hover:bg-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
