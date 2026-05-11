"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Scissors, Award } from "lucide-react";
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

const masterExperience = ["8+ років", "6+ років", "5+ років", "4+ років"];
const masterSpecialization = ["Класичні стрижки", "Борода та контурінг", "Сучасні стилі", "Фейди та текстури"];

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
    experience: masterExperience[i] ?? masterExperience[0],
    specialization: masterSpecialization[i] ?? masterSpecialization[0],
  }));

  useSnapCarouselAutoplay(mastersRail, masters.length, belowMd);
  useHorizontalRailVerticalWheelPassthrough(mastersRail, belowMd);

  return (
    <section id="masters" className="relative overflow-hidden bg-black py-24 md:py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(209,18,27,0.14)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_100%_100%,rgba(209,18,27,0.08)_0%,transparent_50%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        {/* Section header */}
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

        {/* Cards grid/carousel */}
        <motion.div
          ref={setMastersRail}
          className="flex gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain pb-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:overscroll-auto md:pb-0 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportReveal}
          variants={gridVariants}
        >
          {masters.map((master, index) => (
            <motion.article
              key={master.name}
              variants={cardVariants(lg)}
              className="group relative w-[min(82vw,340px)] shrink-0 snap-center overflow-hidden border border-white/[0.08] bg-gradient-to-b from-[#0c0c0c] to-[#040404] transition-all duration-500 ease-out md:w-auto md:hover:border-[#E50914]/40"
            >
              {/* Top glossy rim */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
              
              {/* Hover glow overlay */}
              <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.12)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={master.image}
                  alt={master.name}
                  fill
                  sizes="(max-width:768px) 85vw, 25vw"
                  className="object-cover object-top grayscale transition-all duration-700 ease-out will-change-transform group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                {/* Gradient overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
                <div className="pointer-events-none absolute inset-0 bg-accent-red/0 mix-blend-multiply transition-colors duration-500 ease-out group-hover:bg-accent-red/15" />

                {/* Experience badge */}
                <div className="absolute right-3 top-3 z-[3] flex items-center gap-1.5 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 group-hover:border-[#E50914]/40 group-hover:bg-black/80">
                  <Award className="h-3 w-3 text-[#E50914]" strokeWidth={2} aria-hidden />
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/80">{master.experience}</span>
                </div>

                {/* Bottom content overlay */}
                <div className="absolute inset-x-0 bottom-0 z-[3] flex flex-col gap-3 p-5 md:gap-4 md:p-6">
                  {/* Name and role */}
                  <div>
                    <p className="font-display text-xl font-bold uppercase leading-none tracking-tight text-white drop-shadow-md md:text-2xl">
                      {master.name}
                    </p>
                    <p className="mt-2 text-[9px] font-semibold uppercase tracking-[0.28em] text-[#E50914] md:text-[10px]">
                      {master.role}
                    </p>
                  </div>

                  {/* Specialization */}
                  <div className="flex items-center gap-2 border-t border-white/[0.08] pt-3">
                    <Scissors className="h-3.5 w-3.5 shrink-0 text-white/40" strokeWidth={1.5} aria-hidden />
                    <span className="text-[10px] font-medium tracking-wide text-white/60 md:text-[11px]">
                      {master.specialization}
                    </span>
                  </div>

                  {/* Book CTA */}
                  <a
                    href="#contact"
                    className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden border border-white/15 bg-white/[0.03] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-[#E50914] hover:bg-[#E50914] hover:text-white md:text-[11px]"
                  >
                    {/* Shine effect */}
                    <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                    <Calendar className="relative h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                    <span className="relative">{t.contact.bookAppointment}</span>
                  </a>
                </div>
              </div>

              {/* Bottom accent line on hover */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#E50914] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA section */}
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
