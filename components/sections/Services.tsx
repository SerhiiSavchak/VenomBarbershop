"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Sparkles, ChevronRight } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, revealLiftInitial, viewportReveal, sectionTitleInset } from "@/lib/motion";
import { useBelowMd } from "@/lib/useBelowMd";
import { useLgUp } from "@/lib/useLgUp";
import { useHorizontalRailVerticalWheelPassthrough } from "@/lib/useHorizontalRailVerticalWheelPassthrough";
import { useSnapCarouselAutoplay } from "@/lib/useSnapCarouselAutoplay";

const serviceTags: Record<string, "popular" | "shape" | "combo" | "razor" | "vip"> = {
  "Хіт": "popular",
  "Popular": "popular",
  "Форма": "shape",
  "Shape": "shape",
  "Комплекс": "combo",
  "Combo": "combo",
  "Бритва": "razor",
  "Razor": "razor",
  "VIP": "vip",
};

const tagColors: Record<string, { bg: string; text: string; glow: string }> = {
  popular: { bg: "bg-[#E50914]/20", text: "text-[#E50914]", glow: "shadow-[0_0_20px_rgba(229,9,20,0.3)]" },
  shape: { bg: "bg-white/10", text: "text-white/90", glow: "" },
  combo: { bg: "bg-[#E50914]/25", text: "text-[#E50914]", glow: "shadow-[0_0_24px_rgba(229,9,20,0.35)]" },
  razor: { bg: "bg-white/8", text: "text-white/80", glow: "" },
  vip: { bg: "bg-gradient-to-r from-[#E50914]/30 to-[#E50914]/10", text: "text-[#E50914]", glow: "shadow-[0_0_28px_rgba(229,9,20,0.4)]" },
};

const mobileRailVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const mobileCardVariants = {
  hidden: { opacity: 0, y: 34, x: -14, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 0.82, ease: mobilePopEase },
  },
};

const desktopGridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

function desktopCardVariants(index: number) {
  return {
    hidden: { opacity: 0, y: 48, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.85, ease: cinematicEase, delay: index * 0.06 },
    },
  };
}

function ServiceCard({
  service,
  index,
  isDesktop,
}: {
  service: {
    name: string;
    tag: string;
    duration: string;
    blurb: string;
    price: string;
  };
  index: number;
  isDesktop: boolean;
}) {
  const { t } = useI18n();
  const tagType = serviceTags[service.tag] || "shape";
  const colors = tagColors[tagType];
  const isVip = tagType === "vip";
  const isCombo = tagType === "combo";
  const isPopular = tagType === "popular";
  const isHighlighted = isVip || isCombo || isPopular;

  return (
    <motion.article
      variants={isDesktop ? desktopCardVariants(index) : mobileCardVariants}
      className={`group relative flex flex-col overflow-hidden transition-all duration-500 ${
        isDesktop ? "min-h-[420px]" : "w-[min(85vw,360px)] shrink-0 snap-center"
      } ${
        isHighlighted
          ? "border border-[#E50914]/30 bg-gradient-to-b from-[#0c0c0c] via-[#080808] to-[#050505]"
          : "border border-white/[0.08] bg-gradient-to-b from-[#0a0a0a] to-[#050505]"
      }`}
      whileHover={isDesktop ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.4, ease: cinematicEase }}
    >
      {/* Animated border glow on hover (desktop) */}
      {isDesktop && (
        <div
          className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
            isHighlighted ? "bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.12)_0%,transparent_60%)]" : "bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.04)_0%,transparent_60%)]"
          }`}
        />
      )}

      {/* Top glossy rim */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
        aria-hidden
      />

      {/* Inner glow */}
      {isHighlighted && (
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(229,9,20,0.08)_0%,transparent_70%)]"
          aria-hidden
        />
      )}

      <div className="relative flex flex-1 flex-col p-6 md:p-7">
        {/* Tag and duration row */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] ${colors.bg} ${colors.text} ${colors.glow}`}
          >
            {isVip && <Sparkles className="h-3 w-3" aria-hidden />}
            {service.tag}
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
            <Clock className="h-3 w-3" aria-hidden />
            {service.duration}
          </span>
        </div>

        {/* Service name */}
        <h3 className="mb-3 font-display text-2xl font-bold uppercase tracking-tight text-white md:text-[1.75rem]">
          {service.name}
        </h3>

        {/* Description */}
        <p className="mb-auto text-sm leading-relaxed text-white/60 md:text-[15px]">
          {service.blurb}
        </p>

        {/* Divider */}
        <div className="my-5 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent md:my-6" />

        {/* Price and CTA row */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
              {t.services.cardStandard}
            </p>
            <p className={`font-display text-3xl font-bold tracking-tight md:text-4xl ${isHighlighted ? "text-[#E50914]" : "text-white"}`}>
              {service.price}
            </p>
          </div>
          <a
            href="#contact"
            className={`group/btn relative flex items-center gap-2 overflow-hidden rounded-sm px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-300 md:px-5 md:py-3.5 md:text-[11px] ${
              isHighlighted
                ? "bg-[#E50914] text-white shadow-[0_8px_24px_-8px_rgba(229,9,20,0.5)] hover:shadow-[0_12px_32px_-8px_rgba(229,9,20,0.6)]"
                : "border border-white/20 bg-white/[0.03] text-white/90 hover:border-[#E50914]/50 hover:bg-[#E50914]/10 hover:text-white"
            }`}
          >
            {/* Shine effect */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
            <span className="relative">{t.services.reserveShort}</span>
            <ChevronRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" aria-hidden />
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      {isHighlighted && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#E50914]/60 to-transparent"
          aria-hidden
        />
      )}
    </motion.article>
  );
}

export function Services() {
  const { t } = useI18n();
  const isLg = useLgUp();
  const belowMd = useBelowMd();
  const [mobileRail, setMobileRail] = useState<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const services = t.services.items;

  useSnapCarouselAutoplay(mobileRail, services.length, belowMd);
  useHorizontalRailVerticalWheelPassthrough(mobileRail, belowMd);

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-black py-24 md:py-32">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(209,18,27,0.1)_0%,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_100%,rgba(209,18,27,0.08)_0%,transparent_50%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        {/* Section header */}
        <motion.div
          initial={revealLiftInitial(isLg)}
          whileInView={revealLiftEnter}
          viewport={viewportReveal}
          transition={{ duration: 0.88, ease: cinematicEase }}
          className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div className={sectionTitleInset}>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#E50914]">
              {t.services.sectionEyebrow}
            </span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
              {t.services.sectionTitle}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-foreground-muted md:text-right md:text-base">
            {t.services.sectionLead}
          </p>
        </motion.div>

        {/* Mobile horizontal carousel */}
        <motion.div
          ref={setMobileRail}
          className="flex gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-1 pb-8 scrollbar-hide snap-x snap-mandatory md:hidden"
          initial="hidden"
          whileInView="show"
          viewport={viewportReveal}
          variants={mobileRailVariants}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} isDesktop={false} />
          ))}
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:gap-6"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={desktopGridVariants}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} isDesktop={true} />
          ))}
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          initial={isLg ? { opacity: 0, y: 28 } : { opacity: 0, y: 22, x: -12 }}
          whileInView={revealLiftEnter}
          viewport={viewportReveal}
          transition={{ duration: 0.8, ease: isLg ? cinematicEase : mobilePopEase, delay: 0.2 }}
          className={`mt-12 flex flex-col items-center justify-center gap-3 border-t border-white/[0.06] pt-10 text-center md:mt-16 md:flex-row md:gap-4 md:pt-12 ${sectionTitleInset}`}
        >
          <p className="text-sm text-white/50 md:text-base">{t.services.cardStandardSub}</p>
          <span className="hidden h-1 w-1 rounded-full bg-white/20 md:block" />
          <a
            href="#contact"
            className="text-sm font-semibold text-[#E50914] transition-colors hover:text-white md:text-base"
          >
            {t.services.reserve} &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
