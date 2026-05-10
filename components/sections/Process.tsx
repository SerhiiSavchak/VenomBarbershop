"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, viewportReveal } from "@/lib/motion";

const stepParentVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const stepItemVariants = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.85, ease: cinematicEase } },
};

export function Process() {
  const { t } = useI18n();

  return (
    <section id="process" className="relative overflow-hidden bg-[#030303] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(209,18,27,0.1)_0%,transparent_55%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReveal}
              transition={{ duration: 0.8 }}
              className="mb-10 lg:absolute lg:left-0 lg:top-8 lg:mb-0 lg:max-w-md"
            >
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#E50914]">{t.process.eyebrow}</span>
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">{t.process.title}</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.08 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportReveal}
              transition={{ duration: 1.15, ease: cinematicEase }}
              className="relative mt-8 aspect-[3/4] max-h-[min(78vh,720px)] overflow-hidden lg:mt-28"
            >
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1000&q=88"
                alt={t.process.imageAlt}
                fill
                sizes="(max-width:1024px) 100vw, 48vw"
                className="object-cover contrast-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/40" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_70%,rgba(209,18,27,0.2)_0%,transparent_50%)] mix-blend-screen" />
            </motion.div>
          </div>

          <motion.div
            className="relative flex flex-col justify-center lg:col-span-6 lg:pl-8"
            initial="hidden"
            whileInView="show"
            viewport={viewportReveal}
            variants={stepParentVariants}
          >
            {t.process.steps.map((step) => (
              <motion.div
                key={step.number}
                variants={stepItemVariants}
                className="group relative border-b border-white/[0.07] py-10 first:pt-0"
              >
                <span className="pointer-events-none absolute -left-2 top-6 select-none font-display text-[clamp(5rem,18vw,9rem)] font-bold leading-none text-white/[0.04] transition-colors group-hover:text-[#E50914]/15 md:-left-4">
                  {step.number}
                </span>
                <div className="relative flex flex-col gap-3 pl-4 md:pl-8">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white md:text-2xl">{step.title}</h3>
                  <p className="max-w-md text-sm leading-relaxed text-foreground-muted md:text-[15px]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
