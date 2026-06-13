"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Clock, ChevronRight } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { SectionEyebrow, sectionHeadingVariants } from "@/components/ui/SectionEyebrow";
import { cinematicEase, mobilePopEase, sectionTitleInset } from "@/lib/motion";
import { useBelowMd } from "@/lib/useBelowMd";
import { useLgUp } from "@/lib/useLgUp";
import { useHorizontalRailVerticalWheelPassthrough } from "@/lib/useHorizontalRailVerticalWheelPassthrough";
import { altegioBookingLink } from "@/lib/altegio";
import { useSnapCarouselAutoplay } from "@/lib/useSnapCarouselAutoplay";

// Service images - premium barber imagery
const serviceImages = [
  "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=90",
  "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=90",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=90",
  "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=90",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=90",
];

const mobileCardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: mobilePopEase },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    transition: { duration: 0.4, ease: cinematicEase },
  },
};

const desktopGridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

function desktopCardVariants(index: number) {
  return {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: cinematicEase, delay: index * 0.08 },
    },
  };
}

function ServiceCard({
  service,
  index,
  isDesktop,
  image,
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
  image: string;
}) {
  const { t } = useI18n();
  const isVip = service.tag === "VIP";
  const isCombo = service.tag === "Комплекс" || service.tag === "Combo";
  const isPopular = service.tag === "Хіт" || service.tag === "Popular";
  const isHighlighted = isVip || isCombo || isPopular;

  const aspectClass = isDesktop
    ? "aspect-[3/4]"
    : "aspect-[4/5] w-[min(85vw,340px)] shrink-0 snap-center";

  return (
    <motion.article
      variants={isDesktop ? desktopCardVariants(index) : mobileCardVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      className={`group relative overflow-hidden ${aspectClass}`}
      whileHover={isDesktop ? { y: -8 } : undefined}
      transition={{ duration: 0.4, ease: cinematicEase }}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={service.name}
          fill
          sizes={isDesktop ? "(max-width:1024px) 50vw, 33vw" : "85vw"}
          className="object-cover transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-[#E50914]/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-[#E50914]/20" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div
        className={`pointer-events-none absolute inset-0 border transition-all duration-500 ${
          isHighlighted
            ? "border-[#E50914]/30 group-hover:border-[#E50914]/60"
            : "border-white/[0.06] group-hover:border-white/20"
        }`}
      />

      <div className="absolute left-4 top-4 z-10 md:left-5 md:top-5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] backdrop-blur-sm ${
            isHighlighted
              ? "bg-[#E50914]/90 text-white shadow-[0_4px_20px_-4px_rgba(229,9,20,0.5)]"
              : "border border-white/20 bg-black/60 text-white/90"
          }`}
        >
          {service.tag}
        </span>
      </div>

      <div className="absolute right-4 top-4 z-10 md:right-5 md:top-5">
        <span className="flex items-center gap-1.5 rounded-sm border border-white/10 bg-black/60 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/80 backdrop-blur-sm">
          <Clock className="h-3 w-3" strokeWidth={2} aria-hidden />
          {service.duration}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-4 p-5 md:gap-5 md:p-6">
        <div>
          <h3 className="font-display text-2xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-lg md:text-3xl">
            {service.name}
          </h3>
          <p className="mt-2 text-[13px] leading-relaxed text-white/70 md:text-sm">
            {service.blurb}
          </p>
        </div>

        <div className="h-px bg-gradient-to-r from-white/10 via-white/20 to-white/10" />

        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50">
              {t.services.cardStandard}
            </p>
            <p
              className={`font-display text-3xl font-bold tracking-tight md:text-4xl ${
                isHighlighted ? "text-[#E50914]" : "text-white"
              }`}
            >
              {service.price}
            </p>
          </div>
          <a
            {...altegioBookingLink}
            className={`group/btn relative flex items-center gap-2 overflow-hidden rounded-sm px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 md:px-5 md:py-3.5 md:text-[11px] ${
              isHighlighted
                ? "bg-[#E50914] text-white shadow-[0_8px_24px_-8px_rgba(229,9,20,0.5)] hover:shadow-[0_12px_32px_-8px_rgba(229,9,20,0.65)]"
                : "border border-white/25 bg-white/5 text-white/95 backdrop-blur-sm hover:border-[#E50914] hover:bg-[#E50914] hover:text-white"
            }`}
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
            <span className="relative">{t.services.reserveShort}</span>
            <ChevronRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" strokeWidth={2.5} aria-hidden />
          </a>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${
          isHighlighted
            ? "bg-gradient-to-r from-transparent via-[#E50914] to-transparent"
            : "bg-gradient-to-r from-transparent via-white/40 to-transparent"
        }`}
      />
    </motion.article>
  );
}

export function Services() {
  const { t } = useI18n();
  const isLg = useLgUp();
  const belowMd = useBelowMd();
  const [servicesRail, setServicesRail] = useState<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const services = t.services.items;

  useSnapCarouselAutoplay(servicesRail, services.length, belowMd);
  useHorizontalRailVerticalWheelPassthrough(servicesRail, belowMd);

  // Parallax for section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-black py-24 md:py-32">
      <motion.div className="pointer-events-none absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(209,18,27,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_100%,rgba(209,18,27,0.08)_0%,transparent_50%)]" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none font-display text-[20vw] font-black uppercase leading-none tracking-tighter text-white/[0.015] md:text-[15vw]">
          VENOM
        </span>
      </div>

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className={`mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between ${sectionTitleInset}`}
        >
          <div>
            <SectionEyebrow text={t.services.sectionEyebrow} />
            <motion.h2
              variants={sectionHeadingVariants}
              className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.services.sectionTitle}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: cinematicEase, delay: 0.4 }}
            className="max-w-sm text-sm leading-relaxed text-foreground-muted md:text-right md:text-base"
          >
            {t.services.sectionLead}
          </motion.p>
        </motion.div>

        {/* Mobile horizontal carousel */}
        <div
          ref={setServicesRail}
          className="flex gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-1 pb-8 scrollbar-hide snap-x snap-mandatory md:hidden"
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.name} 
              service={service} 
              index={index} 
              isDesktop={false} 
              image={serviceImages[index] ?? serviceImages[0]}
            />
          ))}
        </div>

        {/* Desktop grid */}
        <motion.div
          className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:gap-6"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={desktopGridVariants}
        >
          {services.map((service, index) => (
            <ServiceCard 
              key={service.name} 
              service={service} 
              index={index} 
              isDesktop={true} 
              image={serviceImages[index] ?? serviceImages[0]}
            />
          ))}
        </motion.div>

        {/* Bottom CTA section */}
        <motion.div
          initial={isLg ? { opacity: 0, y: 28 } : { opacity: 0, y: 22, x: -12 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: isLg ? cinematicEase : mobilePopEase, delay: 0.2 }}
          className={`mt-12 flex flex-col items-center justify-center gap-3 border-t border-white/[0.06] pt-10 text-center md:mt-16 md:flex-row md:gap-4 md:pt-12 ${sectionTitleInset}`}
        >
          <p className="text-sm text-white/50 md:text-base">{t.services.cardStandardSub}</p>
          <span className="hidden h-1 w-1 rounded-full bg-white/20 md:block" />
          <a
            {...altegioBookingLink}
            className="text-sm font-semibold text-[#E50914] transition-colors hover:text-white md:text-base"
          >
            {t.services.reserve} &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
