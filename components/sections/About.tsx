"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import {
  cinematicEase,
  mobilePopEase,
  revealLiftEnter,
  revealLiftInitial,
  sectionTitleInset,
} from "@/lib/motion";
import { SectionEyebrow, sectionHeadingVariants } from "@/components/ui/SectionEyebrow";
import { useLgUp } from "@/lib/useLgUp";

const ABOUT_IMAGE_MAIN = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1400&q=88";
const ABOUT_IMAGE_SMALL_TOP = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=900&q=88";
const ABOUT_IMAGE_SMALL_BOTTOM = "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=900&q=88";
const ABOUT_IMAGE_FEATURE = "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1600&q=88";

const pointsParentVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

function pointItemVariants(lg: boolean) {
  return {
    hidden: lg ? { opacity: 0, y: 18, x: 0 } : { opacity: 0, y: 24, x: -14 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.72, ease: lg ? cinematicEase : mobilePopEase },
    },
  };
}

export function About() {
  const { t } = useI18n();
  const a = t.about;
  const lg = useLgUp();

  return (
    <section id="about" className="relative overflow-x-hidden bg-[#030303] py-24 md:py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_88%_35%,rgba(229,9,20,0.1)_0%,transparent_58%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_10%_70%,rgba(229,9,20,0.06)_0%,transparent_50%)]" />

      <div className="relative z-[2] mx-auto max-w-[min(100%,1720px)] px-6 md:px-10 lg:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
          {/* Left content column */}
          <div className={`flex flex-col lg:col-span-5 ${sectionTitleInset}`}>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="mb-10 md:mb-12 lg:mb-14"
            >
              <SectionEyebrow text={a.eyebrow} />
              <motion.h2 
                variants={sectionHeadingVariants}
                className="font-display text-3xl font-bold uppercase tracking-tight text-white md:text-4xl lg:text-5xl"
              >
                {a.title}
              </motion.h2>
            </motion.div>

            <motion.p
              className="max-w-lg text-base leading-relaxed text-white/72 md:text-lg md:leading-relaxed"
              initial={lg ? { opacity: 0, y: 22, x: 0 } : { opacity: 0, y: 20, x: -12 }}
              whileInView={revealLiftEnter}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.82, ease: lg ? cinematicEase : mobilePopEase }}
            >
              {a.subtitle}
            </motion.p>

            {/* Points list */}
            <motion.div
              className="mt-12 flex flex-col gap-0 border-t border-white/[0.08] pt-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={pointsParentVariants}
            >
              {a.points.map((p) => (
                <motion.div
                  key={p.num}
                  variants={pointItemVariants(lg)}
                  className="group relative grid grid-cols-[auto_1fr] gap-5 border-b border-white/[0.06] py-8 first:pt-0 last:border-b-0 last:pb-0"
                >
                  {/* Number badge */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-[#E50914]/30 bg-[#E50914]/10 transition-all duration-300 group-hover:border-[#E50914]/50 group-hover:bg-[#E50914]/20">
                    <span className="font-display text-sm font-bold tabular-nums tracking-wide text-[#E50914]">
                      {p.num}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-[0.12em] text-white transition-colors duration-300 group-hover:text-white md:text-lg">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/55 md:text-[15px] md:leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                  {/* Hover accent */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-gradient-to-b from-[#E50914] to-transparent transition-transform duration-500 group-hover:scale-y-100" />
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={lg ? { opacity: 0, y: 16, x: 0 } : { opacity: 0, y: 22, x: -10 }}
              whileInView={revealLiftEnter}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.72, ease: lg ? cinematicEase : mobilePopEase, delay: 0.35 }}
              className="mt-12"
            >
              <a
                href="#process"
                className="group site-cta-outline inline-flex items-center gap-2"
                aria-label={a.ctaAria}
              >
                <span className="md:hidden">{a.ctaShort}</span>
                <span className="hidden md:inline">{a.cta}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right images grid */}
          <div className="relative min-w-0 lg:col-span-7">
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute -left-[8%] top-[18%] z-0 h-[min(70%,480px)] w-[min(70%,420px)] -translate-y-1/2 opacity-50 blur-[90px]"
              style={{
                background: "radial-gradient(ellipse at center, rgba(229,9,20,0.38) 0%, transparent 68%)",
              }}
              aria-hidden
            />

            <motion.div
              className="relative z-[2] grid min-h-[min(78vh,820px)] w-full grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,0.46fr)] lg:grid-rows-[1fr_1fr_auto] lg:gap-4"
              initial={lg ? { opacity: 0, y: 28, x: 0 } : { opacity: 0, y: 16, x: -18, scale: 0.986 }}
              whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.95, ease: lg ? cinematicEase : mobilePopEase }}
            >
              {/* Main large image */}
              <div className="group relative min-h-[min(52vh,480px)] overflow-hidden border border-white/[0.06] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:min-h-0">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                <Image
                  src={ABOUT_IMAGE_MAIN}
                  alt={a.imageMainAlt}
                  fill
                  sizes="(max-width:1024px) 100vw, 45vw"
                  className="object-cover object-[center_32%] brightness-[0.88] contrast-[1.08] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-black/35" />
              </div>

              {/* Top right image */}
              <div className="group relative min-h-[200px] overflow-hidden border border-white/[0.06] lg:col-start-2 lg:row-start-1 lg:min-h-0">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <Image
                  src={ABOUT_IMAGE_SMALL_TOP}
                  alt={a.imageSmallTopAlt}
                  fill
                  sizes="(max-width:1024px) 100vw, 18vw"
                  className="object-cover object-[center_42%] brightness-[0.86] contrast-[1.1] transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Bottom right image */}
              <div className="group relative min-h-[200px] overflow-hidden border border-white/[0.06] lg:col-start-2 lg:row-start-2 lg:min-h-0">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <Image
                  src={ABOUT_IMAGE_SMALL_BOTTOM}
                  alt={a.imageSmallBottomAlt}
                  fill
                  sizes="(max-width:1024px) 100vw, 18vw"
                  className="object-cover object-[center_28%] brightness-[0.86] contrast-[1.06] transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
              </div>

              {/* Bottom wide image */}
              <div className="group relative min-h-[min(28vw,200px)] overflow-hidden border border-white/[0.06] lg:col-span-2 lg:col-start-1 lg:row-start-3 lg:min-h-[200px] xl:min-h-[220px]">
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <Image
                  src={ABOUT_IMAGE_FEATURE}
                  alt={a.imageFeatureAlt}
                  fill
                  sizes="(max-width:1024px) 100vw, 52vw"
                  className="object-cover object-[center_55%] brightness-[0.85] contrast-[1.05] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />
              </div>
            </motion.div>

            {/* Location badge */}
            <div className="pointer-events-none absolute right-4 top-4 z-[4] sm:right-6 sm:top-6">
              <span className="inline-flex items-center gap-2 border border-[#E50914]/40 bg-[#E50914] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_0_28px_rgba(229,9,20,0.35)]">
                {a.collageLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
