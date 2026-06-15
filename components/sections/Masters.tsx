"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, sectionTitleInset } from "@/lib/motion";
import { SectionEyebrow, sectionHeadingVariants } from "@/components/ui/SectionEyebrow";
import { useLgUp } from "@/lib/useLgUp";
import { altegioBookingLink } from "@/lib/altegio";
import { MASTER_PHOTO_SRC } from "@/lib/masters";

function cardVariants(lg: boolean) {
  return {
    hidden: lg ? { opacity: 0, y: 50, x: 0 } : { opacity: 0, y: 40, x: -20 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.75, ease: lg ? cinematicEase : mobilePopEase },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.4, ease: cinematicEase },
    },
  };
}

const tapSpring = { type: "spring" as const, stiffness: 520, damping: 32 };

export function Masters() {
  const { t } = useI18n();
  const lg = useLgUp();
  const sectionRef = useRef<HTMLElement>(null);
  const master = t.masters.items[0];

  if (!master) return null;

  return (
    <section ref={sectionRef} id="masters" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(209,18,27,0.12)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_100%_100%,rgba(209,18,27,0.06)_0%,transparent_50%)]" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none font-display text-[25vw] font-black uppercase leading-none tracking-tighter text-white/[0.012] md:text-[18vw]">
          TEAM
        </span>
      </div>

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <motion.div
          className={`mb-14 ${sectionTitleInset}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <SectionEyebrow text={t.masters.eyebrow} />
          <motion.h2
            variants={sectionHeadingVariants}
            className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-6xl"
          >
            {t.masters.title}
          </motion.h2>
        </motion.div>

        <div className="flex justify-start">
          <motion.article
            variants={cardVariants(lg)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            className="group relative w-full max-w-[380px] overflow-hidden border border-white/[0.06] bg-gradient-to-b from-[#0a0a0a] to-[#030303] transition-all duration-500 ease-out md:max-w-[420px] md:hover:border-[#E50914]/40"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
            <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.1)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative aspect-[3/4.2] overflow-hidden">
              <Image
                src={MASTER_PHOTO_SRC}
                alt={master.imageAlt}
                fill
                sizes="(max-width:768px) 90vw, 420px"
                className="object-cover object-top grayscale transition-all duration-700 ease-out will-change-transform group-hover:scale-[1.04] group-hover:grayscale-0"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-accent-red/0 mix-blend-multiply transition-colors duration-500 ease-out group-hover:bg-accent-red/12" />
            </div>

            <div className="absolute inset-x-0 bottom-0 z-[3] flex flex-col gap-4 bg-gradient-to-t from-black via-black/95 to-transparent p-5 pt-12 md:p-6 md:pt-16">
              <div>
                <p className="font-display text-xl font-bold uppercase leading-none tracking-tight text-white drop-shadow-md md:text-2xl">
                  {master.name}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#E50914] md:text-[11px]">
                  {master.role}
                </p>
              </div>

              <a
                {...altegioBookingLink}
                className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden border border-white/15 bg-white/[0.03] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm transition-all duration-300 hover:border-[#E50914] hover:bg-[#E50914] hover:text-white md:text-[11px]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                <Calendar className="relative h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                <span className="relative">{t.contact.bookAppointment}</span>
              </a>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#E50914] to-transparent transition-transform duration-500 group-hover:scale-x-100" />
          </motion.article>
        </div>

        <motion.div
          initial={lg ? { opacity: 0, y: 28, x: 0 } : { opacity: 0, y: 36, x: -14 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: lg ? cinematicEase : mobilePopEase, delay: 0.08 }}
          className={`mt-14 flex flex-col gap-6 border-t border-white/[0.08] pt-10 md:mt-16 md:flex-row md:items-center md:justify-between md:gap-10 md:pt-12 ${sectionTitleInset}`}
        >
          <p className="max-w-xl text-sm leading-relaxed text-foreground-muted md:text-base">{t.masters.ctaLead}</p>
          <div className="flex w-full shrink-0 flex-col gap-3 sm:ml-auto sm:w-auto sm:flex-row sm:items-stretch sm:justify-end sm:gap-3">
            <motion.a
              {...altegioBookingLink}
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
