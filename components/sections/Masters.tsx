"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, viewportReveal, sectionTitleInset } from "@/lib/motion";
import { useBelowMd } from "@/lib/useBelowMd";
import { useLgUp } from "@/lib/useLgUp";
import { useHorizontalRailVerticalWheelPassthrough } from "@/lib/useHorizontalRailVerticalWheelPassthrough";
import { useSnapCarouselAutoplay } from "@/lib/useSnapCarouselAutoplay";

const masterImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=88",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=88",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&q=88",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=88",
];

const titleParentVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.06 } },
};

function titleChildVariants(lg: boolean) {
  return {
    hidden: lg ? { opacity: 0, y: 22, x: 0 } : { opacity: 0, y: 30, x: -10 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.72, ease: lg ? cinematicEase : mobilePopEase },
    },
  };
}

function cardVariants(lg: boolean) {
  return {
    hidden: lg ? { opacity: 0, y: 40, x: 0 } : { opacity: 0, y: 36, x: -28 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.78, ease: lg ? cinematicEase : mobilePopEase },
    },
  };
}

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const tapSpring = { type: "spring" as const, stiffness: 520, damping: 32 };

export function Masters() {
  const { t } = useI18n();
  const lg = useLgUp();
  const belowMd = useBelowMd();
  const [mastersRail, setMastersRail] = useState<HTMLDivElement | null>(null);
  const masters = t.masters.items.map((m, i) => ({
    ...m,
    image: masterImages[i] ?? masterImages[0],
  }));

  useSnapCarouselAutoplay(mastersRail, masters.length, belowMd);
  useHorizontalRailVerticalWheelPassthrough(mastersRail, belowMd);

  return (
    <section id="masters" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(209,18,27,0.14)_0%,transparent_55%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <motion.div
          className={`mb-14 ${sectionTitleInset}`}
          initial="hidden"
          whileInView="show"
          viewport={viewportReveal}
          variants={titleParentVariants}
        >
          <motion.span variants={titleChildVariants(lg)} className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#E50914]">
            {t.masters.eyebrow}
          </motion.span>
          <motion.h2 variants={titleChildVariants(lg)} className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">
            {t.masters.title}
          </motion.h2>
        </motion.div>

        <motion.div
          ref={setMastersRail}
          className="flex gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:overscroll-auto md:pb-0 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportReveal}
          variants={gridVariants}
        >
          {masters.map((master) => (
            <motion.article
              key={master.name}
              variants={cardVariants(lg)}
              className="group relative w-[min(82vw,340px)] shrink-0 snap-center overflow-hidden rounded-[2px] border border-white/[0.1] bg-gradient-to-b from-[#0c0c0c] to-[#040404] shadow-[0_22px_56px_-28px_rgba(0,0,0,0.92)] transition-[border-color,box-shadow] duration-500 ease-out md:w-auto md:hover:border-[#E50914]/35 md:hover:shadow-[0_28px_64px_-22px_rgba(229,9,20,0.12)]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={master.image}
                  alt={master.name}
                  fill
                  sizes="(max-width:768px) 85vw, 25vw"
                  className="object-cover object-top grayscale transition-[filter,transform] duration-500 ease-out will-change-transform group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/20" />
                <div className="pointer-events-none absolute inset-0 bg-accent-red/0 mix-blend-multiply transition-colors duration-500 ease-out group-hover:bg-accent-red/18" />

                <div className="absolute inset-x-0 bottom-0 z-[3] flex flex-col gap-1 p-5 md:gap-2">
                  <div>
                    <p className="font-display text-xl font-bold uppercase leading-none tracking-tight text-white drop-shadow-md md:text-2xl">
                      {master.name}
                    </p>
                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#E50914] md:text-[10px]">
                      {master.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={lg ? { opacity: 0, y: 28, x: 0 } : { opacity: 0, y: 36, x: -14 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={viewportReveal}
          transition={{ duration: 0.8, ease: lg ? cinematicEase : mobilePopEase, delay: 0.08 }}
          className={`mt-14 flex flex-col gap-6 border-t border-white/[0.08] pt-10 md:mt-16 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-12 ${sectionTitleInset}`}
        >
          <p className="max-w-xl text-sm leading-relaxed text-foreground-muted md:text-base">{t.masters.ctaLead}</p>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:ml-auto sm:w-auto sm:flex-row sm:items-stretch sm:justify-end sm:gap-3">
            <motion.a
              href="#contact"
              aria-label={t.masters.bookCtaAria}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={tapSpring}
              className="site-cta-primary sm:min-w-[12.5rem]"
            >
              {t.contact.bookAppointment}
            </motion.a>
            <a href="#services" className="site-cta-outline sm:min-w-[10rem]">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
