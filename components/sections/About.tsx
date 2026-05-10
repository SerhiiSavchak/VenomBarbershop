"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, viewportReveal } from "@/lib/motion";

/** Same Unsplash assets as `Space` — already used across the site */
const ABOUT_IMAGE_MAIN =
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=88&auto=format&fit=crop";
const ABOUT_IMAGE_SMALL_TOP =
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=88&auto=format&fit=crop";
const ABOUT_IMAGE_SMALL_BOTTOM =
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=88&auto=format&fit=crop";

const pointsParentVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.28 },
  },
};

const pointItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: cinematicEase } },
};

const smallStackVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.42 },
  },
};

const smallImgVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.78, ease: cinematicEase } },
};

export function About() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section id="about" className="relative overflow-x-hidden bg-[#030303] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_85%_50%,rgba(229,9,20,0.09)_0%,transparent_55%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="flex flex-col lg:col-span-5">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReveal}
              transition={{ duration: 0.65, ease: cinematicEase }}
              className="mb-4 block text-[10px] font-bold uppercase tracking-[0.38em] text-[#E50914]"
            >
              {a.eyebrow}
            </motion.span>

            <motion.h2
              className="font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={viewportReveal}
              transition={{ duration: 1.05, ease: cinematicEase }}
            >
              {a.title}
            </motion.h2>

            <motion.p
              className="mt-8 max-w-md text-sm leading-relaxed text-white/68 md:text-base"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReveal}
              transition={{ duration: 0.82, ease: cinematicEase, delay: 0.12 }}
            >
              {a.subtitle}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col gap-6 border-t border-white/[0.07] pt-10"
              initial="hidden"
              whileInView="show"
              viewport={viewportReveal}
              variants={pointsParentVariants}
            >
              {a.points.map((p) => (
                <motion.div key={p.num} variants={pointItemVariants} className="flex gap-5">
                  <span className="shrink-0 font-display text-xs font-bold tabular-nums tracking-[0.2em] text-[#E50914]/90">
                    {p.num}
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white md:text-base">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReveal}
              transition={{ duration: 0.72, ease: cinematicEase, delay: 0.55 }}
              className="mt-10"
            >
              <a
                href="#process"
                className="inline-flex border border-white/30 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white transition-colors hover:border-white/55 hover:bg-white/[0.05]"
                aria-label={a.ctaAria}
              >
                {a.cta}
              </a>
            </motion.div>
          </div>

          <div className="relative min-w-0 lg:col-span-7">
            <div
              className="pointer-events-none absolute -left-[12%] top-1/2 z-0 h-[min(88%,520px)] w-[72%] -translate-y-1/2 opacity-55 blur-[80px]"
              style={{
                background: "radial-gradient(ellipse at center, rgba(229,9,20,0.42) 0%, transparent 68%)",
              }}
              aria-hidden
            />

            <div className="relative z-[2] flex min-w-0 gap-3 sm:gap-4">
              <motion.div
                className="relative min-h-[min(52vh,440px)] min-w-0 flex-[1.15] overflow-hidden border border-white/[0.12] sm:min-h-[min(60vh,560px)]"
                initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                viewport={viewportReveal}
                transition={{ duration: 1.05, ease: cinematicEase }}
              >
                <Image
                  src={ABOUT_IMAGE_MAIN}
                  alt={a.imageMainAlt}
                  fill
                  sizes="(max-width:1024px) 100vw, 42vw"
                  className="object-cover object-[center_38%] brightness-[0.9] contrast-[1.08]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-black/25" />
              </motion.div>

              <motion.div
                className="flex min-w-0 w-[34%] max-w-[220px] flex-col gap-3 sm:w-[32%] sm:gap-4 sm:max-w-none"
                initial="hidden"
                whileInView="show"
                viewport={viewportReveal}
                variants={smallStackVariants}
              >
                <motion.div
                  variants={smallImgVariants}
                  className="relative aspect-[4/5] min-h-0 flex-1 overflow-hidden border border-white/[0.12]"
                >
                  <Image
                    src={ABOUT_IMAGE_SMALL_TOP}
                    alt={a.imageSmallTopAlt}
                    fill
                    sizes="(max-width:1024px) 28vw, 16vw"
                    className="object-cover object-[center_45%] brightness-[0.88] contrast-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                </motion.div>
                <motion.div
                  variants={smallImgVariants}
                  className="relative aspect-[4/5] min-h-0 flex-1 overflow-hidden border border-white/[0.12]"
                >
                  <Image
                    src={ABOUT_IMAGE_SMALL_BOTTOM}
                    alt={a.imageSmallBottomAlt}
                    fill
                    sizes="(max-width:1024px) 28vw, 16vw"
                    className="object-cover object-[center_30%] brightness-[0.88] contrast-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                </motion.div>
              </motion.div>
            </div>

            <div className="pointer-events-none absolute right-3 top-3 z-[4] sm:right-5 sm:top-5">
              <span className="inline-block bg-accent-red px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.28em] text-white shadow-[0_0_28px_rgba(229,9,20,0.35)]">
                {a.collageLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
