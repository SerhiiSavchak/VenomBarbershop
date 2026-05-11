"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Clock, ChevronRight } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, revealLiftInitial, sectionTitleInset } from "@/lib/motion";
import { useLgUp } from "@/lib/useLgUp";

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

// Eyebrow animation variants
const eyebrowLineVariants = {
  hidden: { scaleY: 0, opacity: 0 },
  show: {
    scaleY: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: cinematicEase },
  },
};

const eyebrowTextVariants = {
  hidden: { opacity: 0, x: -8 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: cinematicEase, delay: 0.2 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: cinematicEase, delay: 0.35 },
  },
};

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

  // Desktop layout uses asymmetric sizes for visual hierarchy
  const isLarge = isDesktop && (index === 0 || index === 2);
  const aspectClass = isDesktop 
    ? isLarge ? "aspect-[3/4.5]" : "aspect-[3/4]"
    : "aspect-[4/5] w-[min(85vw,340px)] shrink-0 snap-center";

  return (
    <motion.article
      variants={isDesktop ? desktopCardVariants(index) : mobileCardVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      className={`group relative overflow-hidden ${aspectClass}`}
      whileHover={isDesktop ? { y: -10 } : undefined}
      transition={{ duration: 0.5, ease: cinematicEase }}
    >
      {/* Image with parallax-like zoom */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={service.name}
          fill
          sizes={isDesktop ? "(max-width:1024px) 50vw, 33vw" : "85vw"}
          className="object-cover transition-transform duration-[1.2s] ease-out will-change-transform group-hover:scale-[1.12]"
        />
        {/* Cinematic dark overlay - stronger gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        {/* Red tint on hover */}
        <div className="absolute inset-0 bg-[#E50914]/0 mix-blend-multiply transition-colors duration-700 group-hover:bg-[#E50914]/25" />
      </div>

      {/* Top glossy rim */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Border glow on hover */}
      <div className={`pointer-events-none absolute inset-0 border transition-all duration-500 ${
        isHighlighted 
          ? "border-[#E50914]/40 group-hover:border-[#E50914]/70" 
          : "border-white/[0.08] group-hover:border-white/25"
      }`} />

      {/* Tag badge - premium styling */}
      <div className="absolute left-5 top-5 z-10 md:left-6 md:top-6">
        <span className={`inline-flex items-center gap-1.5 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.22em] backdrop-blur-md ${
          isHighlighted 
            ? "bg-[#E50914] text-white shadow-[0_6px_24px_-6px_rgba(229,9,20,0.6)]" 
            : "border border-white/25 bg-black/70 text-white/95"
        }`}>
          {service.tag}
        </span>
      </div>

      {/* Duration badge */}
      <div className="absolute right-5 top-5 z-10 md:right-6 md:top-6">
        <span className="flex items-center gap-1.5 border border-white/15 bg-black/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-md">
          <Clock className="h-3 w-3" strokeWidth={2} aria-hidden />
          {service.duration}
        </span>
      </div>

      {/* Bottom content - cinematic layout */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-5 p-6 md:gap-6 md:p-8">
        {/* Service name with dramatic typography */}
        <div>
          <h3 className="font-display text-2xl font-bold uppercase leading-[0.95] tracking-tight text-white drop-shadow-lg md:text-3xl lg:text-4xl">
            {service.name}
          </h3>
          <p className="mt-3 text-[13px] leading-relaxed text-white/65 md:text-sm lg:text-[15px]">
            {service.blurb}
          </p>
        </div>

        {/* Divider with subtle glow */}
        <div className="relative h-px">
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/20 to-white/5" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E50914]/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        {/* Price and CTA row */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
              {t.services.cardStandard}
            </p>
            <p className={`font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
              isHighlighted ? "text-[#E50914]" : "text-white"
            }`}>
              {service.price}
            </p>
          </div>
          <a
            href="#contact"
            className={`group/btn relative flex items-center gap-2 overflow-hidden px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] transition-all duration-400 md:px-6 md:py-4 md:text-[11px] ${
              isHighlighted
                ? "bg-[#E50914] text-white shadow-[0_10px_30px_-10px_rgba(229,9,20,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(229,9,20,0.7)]"
                : "border border-white/30 bg-white/[0.06] text-white backdrop-blur-sm hover:border-[#E50914] hover:bg-[#E50914]"
            }`}
          >
            {/* Shine effect */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-14deg] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
            <span className="relative">{t.services.reserveShort}</span>
            <ChevronRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" strokeWidth={2.5} aria-hidden />
          </a>
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 transition-transform duration-600 group-hover:scale-x-100 ${
        isHighlighted 
          ? "bg-gradient-to-r from-[#E50914] via-[#ff3d47] to-[#E50914]" 
          : "bg-gradient-to-r from-transparent via-white/50 to-transparent"
      }`} />
    </motion.article>
  );
}

export function Services() {
  const { t } = useI18n();
  const isLg = useLgUp();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const services = t.services.items;

  // Parallax for section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-black py-24 md:py-32 lg:py-40">
      {/* Background ambient glow with parallax */}
      <motion.div 
        className="pointer-events-none absolute inset-0" 
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(209,18,27,0.15)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_100%,rgba(209,18,27,0.1)_0%,transparent_50%)]" />
      </motion.div>

      {/* Subtle brand watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="select-none font-display text-[22vw] font-black uppercase leading-none tracking-tighter text-white/[0.012] md:text-[16vw]">
          VENOM
        </span>
      </div>

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        {/* Section header with vertical red mark */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-14 flex flex-col gap-5 md:mb-18 md:flex-row md:items-end md:justify-between lg:mb-20"
        >
          <div className={sectionTitleInset}>
            {/* Vertical brand mark + eyebrow */}
            <div className="mb-5 flex items-stretch gap-4">
              {/* Vertical red mark - brand identity element */}
              <motion.div 
                variants={eyebrowLineVariants}
                className="relative w-[3px] origin-top self-stretch"
              >
                {/* Main line */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#E50914] via-[#E50914] to-[#E50914]/40" />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#E50914] blur-[3px] opacity-60" />
                {/* Top notch detail */}
                <div className="absolute -top-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#E50914] shadow-[0_0_8px_rgba(229,9,20,0.8)]" />
              </motion.div>
              
              <div className="flex flex-col justify-center">
                <motion.span 
                  variants={eyebrowTextVariants}
                  className="text-[10px] font-bold uppercase tracking-[0.38em] text-[#E50914] md:text-[11px]"
                >
                  {t.services.sectionEyebrow}
                </motion.span>
              </div>
            </div>
            
            <motion.h2 
              variants={headingVariants}
              className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
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
        <div className="flex gap-4 overflow-x-auto overflow-y-hidden overscroll-x-contain px-1 pb-8 scrollbar-hide snap-x snap-mandatory md:hidden">
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

        {/* Desktop asymmetric grid - more visual hierarchy */}
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
          className={`mt-14 flex flex-col items-center justify-center gap-3 border-t border-white/[0.06] pt-12 text-center md:mt-18 md:flex-row md:gap-4 md:pt-14 ${sectionTitleInset}`}
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
