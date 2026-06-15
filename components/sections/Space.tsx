"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, sectionTitleInset } from "@/lib/motion";
import { SectionEyebrow, sectionHeadingVariants } from "@/components/ui/SectionEyebrow";
import { altegioBookingLink } from "@/lib/altegio";
import { SiteCta } from "@/components/ui/SiteCta";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { siteSectionYClass } from "@/lib/site-layout";
import { useLgUp } from "@/lib/useLgUp";

export function Space() {
  const { t } = useI18n();
  const lg = useLgUp();
  const featuresList = t.space.features;

  return (
    <section id="space" className={`relative overflow-hidden bg-black ${siteSectionYClass}`}>
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_80%,rgba(209,18,27,0.12)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_20%,rgba(209,18,27,0.08)_0%,transparent_50%)]" />

      <SiteContainer className="relative z-[2]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className={`lg:col-span-5 ${sectionTitleInset}`}
          >
            <SectionEyebrow text={t.space.eyebrow} />
            <motion.h2 
              variants={sectionHeadingVariants}
              className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-[4.25rem]"
            >
              {t.space.title}
            </motion.h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/68 md:text-base">{t.space.body}</p>
            
            {/* Features list */}
            <ul className="mt-8 space-y-3 md:mt-10">
              {featuresList.map((feature, index) => (
                <motion.li
                  key={`${feature}-${index}`}
                  initial={lg ? { opacity: 0, x: -20 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, ease: cinematicEase, delay: 0.2 + index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#E50914]/30 bg-[#E50914]/10">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#E50914]" strokeWidth={2} />
                  </div>
                  <span className="text-sm text-white/70 md:text-base">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <SiteCta {...altegioBookingLink} className="mt-10">
              {t.space.cta}
            </SiteCta>
          </motion.div>

          {/* Images grid */}
          <motion.div
            initial={lg ? { opacity: 0, scale: 1.06, y: 0 } : { opacity: 0, scale: 1.07, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.1, ease: lg ? cinematicEase : mobilePopEase }}
            className="relative lg:col-span-7"
          >
            <div className="grid gap-3 sm:grid-cols-5 sm:gap-4">
              {/* Main large image */}
              <div className="group relative aspect-[4/5] overflow-hidden border border-white/[0.06] sm:col-span-3">
                {/* Top glossy rim */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=88"
                  alt={t.space.imageMain}
                  fill
                  sizes="(max-width:1024px) 100vw, 55vw"
                  className="object-cover brightness-[0.92] contrast-[1.1] transition-all duration-700 group-hover:scale-[1.03] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(209,18,27,0.25)_0%,transparent_50%)] mix-blend-screen" />

                {/* Premium badge */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-[#E50914]" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-white/80">Premium</span>
                </div>
              </div>
              
              {/* Side images */}
              <div className="flex flex-col gap-3 sm:col-span-2 sm:gap-4">
                <div className="group relative aspect-[4/3] flex-1 overflow-hidden border border-white/[0.06]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                  <Image
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=88"
                    alt={t.space.imageChair}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover brightness-[0.9] contrast-[1.12] transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                </div>
                <div className="group relative aspect-[4/3] flex-1 overflow-hidden border border-white/[0.06]">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                  <Image
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=88"
                    alt={t.space.imageTools}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover brightness-[0.9] contrast-[1.1] transition-all duration-700 group-hover:scale-[1.05] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                </div>
              </div>
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: cinematicEase, delay: 0.3 }}
              className="absolute -bottom-4 -left-4 z-10 border border-white/[0.08] bg-black/80 p-4 backdrop-blur-md md:-bottom-6 md:-left-6 md:p-5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E50914]/30 bg-[#E50914]/10">
                  <span className="font-display text-lg font-bold text-[#E50914]">{t.space.statCount}</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E50914]">{t.space.statLabel}</p>
                  <p className="mt-0.5 text-sm text-white/70">{t.space.statCaption}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SiteContainer>
    </section>
  );
}
