"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, revealLiftInitial, sectionTitleInset } from "@/lib/motion";
import { SectionEyebrow, sectionHeadingVariants } from "@/components/ui/SectionEyebrow";
import { altegioBookingLink } from "@/lib/altegio";
import { useLgUp } from "@/lib/useLgUp";

const reviewCardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

function reviewItemVariants(lg: boolean, index: number) {
  return {
    hidden: lg ? { opacity: 0, y: 28, x: 0 } : { opacity: 0, y: 24, x: -14 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.72, ease: lg ? cinematicEase : mobilePopEase, delay: index * 0.08 },
    },
  };
}

export function Reviews() {
  const { t } = useI18n();
  const reviews = t.reviews.items;
  const lg = useLgUp();

  return (
    <section id="reviews" className="relative overflow-hidden bg-black py-24 md:py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_30%,rgba(209,18,27,0.1)_0%,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(209,18,27,0.06)_0%,transparent_50%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className={`mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between ${sectionTitleInset}`}
        >
          <div>
            <SectionEyebrow text={t.reviews.eyebrow} />
            <motion.h2 
              variants={sectionHeadingVariants}
              className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.reviews.title}
            </motion.h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#E50914] text-[#E50914]" aria-hidden />
              ))}
            </div>
            <span className="text-sm text-white/60">5.0 середня оцінка</span>
          </div>
        </motion.div>

        <div className="relative">
          {/* Featured review */}
          <motion.div
            initial={lg ? { opacity: 0, y: 40, x: 0 } : { opacity: 0, y: 28, x: -16 }}
            whileInView={revealLiftEnter}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.85, ease: lg ? cinematicEase : mobilePopEase }}
            className="group relative overflow-hidden border border-white/[0.08] bg-gradient-to-br from-[#0a0a0a] to-[#050505]"
          >
            {/* Top glossy rim */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
            
            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(229,9,20,0.08)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="grid md:grid-cols-12">
              {/* Image side */}
              <div className="relative aspect-[4/5] md:col-span-5 md:aspect-auto md:min-h-[380px]">
                <Image
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&q=88"
                  alt={t.reviews.featuredImageAlt}
                  fill
                  className="object-cover brightness-[0.88] transition-all duration-700 group-hover:brightness-100 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-[#080808] md:via-black/35" />
                
                {/* Quote icon */}
                <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-sm md:h-14 md:w-14">
                  <Quote className="h-5 w-5 text-[#E50914] md:h-6 md:w-6" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Content side */}
              <div className="flex flex-col justify-center p-8 md:col-span-7 md:p-14">
                {/* Stars */}
                <div className="mb-5 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#E50914] text-[#E50914]" aria-hidden />
                  ))}
                </div>
                
                {/* Quote text */}
                <p className="font-display text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl lg:text-4xl">
                  &ldquo;{reviews[0]?.text}&rdquo;
                </p>
                
                {/* Author */}
                <div className="mt-10 flex items-center gap-4 border-t border-white/[0.08] pt-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E50914]/30 bg-[#E50914]/10">
                    <span className="font-display text-lg font-bold text-[#E50914]">
                      {reviews[0]?.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{reviews[0]?.name}</p>
                    <p className="mt-0.5 text-[11px] font-medium uppercase tracking-[0.2em] text-foreground-muted">
                      Постійний клієнт
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Secondary reviews grid */}
          <motion.div 
            className="mt-6 grid gap-4 md:grid-cols-2"
            variants={reviewCardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
          >
            {reviews.slice(1).map((review, index) => (
              <motion.div
                key={review.name}
                variants={reviewItemVariants(lg, index)}
                className="group relative overflow-hidden border border-white/[0.06] bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-6 transition-all duration-500 hover:border-[#E50914]/30 md:p-8"
              >
                {/* Top glossy rim */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                
                {/* Hover glow */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.06)_0%,transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Quote icon */}
                <Quote className="mb-4 h-6 w-6 text-[#E50914]/40" strokeWidth={1.5} />

                {/* Stars */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#E50914] text-[#E50914]" aria-hidden />
                  ))}
                </div>
                
                {/* Quote text */}
                <p className="text-sm leading-relaxed text-white/75 md:text-base">&ldquo;{review.text}&rdquo;</p>
                
                {/* Author */}
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    <span className="text-sm font-bold text-white/70">{review.name.charAt(0)}</span>
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground-muted">
                    {review.name}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#E50914]/60 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={lg ? { opacity: 0, y: 24 } : { opacity: 0, y: 20, x: -10 }}
          whileInView={revealLiftEnter}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: lg ? cinematicEase : mobilePopEase, delay: 0.15 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 border-t border-white/[0.06] pt-10 text-center md:mt-16 md:flex-row md:gap-4 md:pt-12"
        >
          <p className="text-sm text-white/50 md:text-base">Приєднуйся до задоволених клієнтів</p>
          <a
            {...altegioBookingLink}
            className="text-sm font-semibold text-[#E50914] transition-colors hover:text-white md:text-base"
          >
            Записатися зараз &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
