"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Expand } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, sectionTitleInset, sectionViewport } from "@/lib/motion";
import { SectionEyebrow, sectionHeadingVariants } from "@/components/ui/SectionEyebrow";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { altegioBookingLink } from "@/lib/altegio";
import { siteSectionYClass } from "@/lib/site-layout";
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
      : { opacity: 0, y: 22, x: -12 },
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
    <section id="gallery" className={`relative overflow-hidden bg-[#030303] ${siteSectionYClass}`}>
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(209,18,27,0.08)_0%,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_20%,rgba(209,18,27,0.06)_0%,transparent_50%)]" />

      <SiteContainer className="relative z-[2]">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport(lg)}
          className={`mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between ${sectionTitleInset}`}
        >
          <div>
            <SectionEyebrow text={t.gallery.eyebrow} />
            <motion.h2 
              variants={sectionHeadingVariants}
              className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.gallery.title}
            </motion.h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-foreground-muted md:text-right md:text-base">
            {t.gallery.lead}
          </p>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          className="columns-2 gap-3 md:columns-3 md:gap-4 lg:gap-5"
          initial="hidden"
          whileInView="show"
          viewport={sectionViewport(lg)}
          variants={masonryVariants}
        >
          {galleryImages.map((src, index) => (
            <motion.div
              key={src}
              variants={tileVariants(lg)}
              className={`group relative mb-3 break-inside-avoid overflow-hidden border border-white/[0.06] md:mb-4 ${heights[index % heights.length]}`}
            >
              {/* Top glossy rim */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
              
              {/* Image container */}
              <div className="relative h-full w-full">
                <Image
                  src={src}
                  alt={t.gallery.imageAlt(index + 1)}
                  fill
                  sizes="(max-width:768px) 50vw, 33vw"
                  className="object-cover brightness-[0.92] contrast-[1.08] transition-[transform,filter] duration-700 fine-group-hover:scale-[1.06] fine-group-hover:brightness-100"
                />
                
                {/* Overlay gradients */}
                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 fine-group-hover:bg-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                
                {/* Red accent on hover */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.15)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 fine-group-hover:opacity-100" />
              </div>

              {/* Hover overlay with expand icon */}
              <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center opacity-0 transition-opacity duration-500 fine-group-hover:opacity-100">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/60 backdrop-blur-sm">
                  <Expand className="h-5 w-5 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#E50914] to-transparent transition-transform duration-500 fine-group-hover:scale-x-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={lg ? { opacity: 0, y: 24 } : { opacity: 0, y: 20, x: -10 }}
          whileInView={revealLiftEnter}
          viewport={sectionViewport(lg)}
          transition={{ duration: 0.75, ease: lg ? cinematicEase : mobilePopEase, delay: 0.1 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-white/[0.06] pt-10 text-center md:mt-16 md:flex-row md:gap-4 md:pt-12"
        >
          <p className="text-sm text-white/50 md:text-base">{t.gallery.ctaLead}</p>
          <a
            {...altegioBookingLink}
            className="text-sm font-semibold text-[#E50914] transition-colors hover:text-white md:text-base"
          >
            {t.gallery.bookCta} &rarr;
          </a>
        </motion.div>
      </SiteContainer>
    </section>
  );
}
