"use client";

import { motion } from "framer-motion";
import { Users, Award, Scissors, Clock } from "lucide-react";
import Image from "next/image";
import { HeroLiquidStack } from "@/components/liquid/HeroLiquidAsset";

const LEFT_READABILITY_BG =
  "linear-gradient(90deg, #000 0%, rgba(0,0,0,.78) 32%, rgba(0,0,0,.28) 54%, transparent 76%)";

const BOTTOM_VIGNETTE_BG =
  "linear-gradient(0deg, rgba(0,0,0,.45) 0%, transparent 45%)";

const HERO_DESKTOP = "/symbiote/hero-desktop.png";
const HERO_MOBILE = "/symbiote/hero-mobile.png";

const stats = [
  { icon: Users, value: "15K+", label: "Happy Clients" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Scissors, value: "5K+", label: "Perfect Cuts" },
  { icon: Clock, value: "24/7", label: "Premium Service" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const bgEase = [0.22, 1, 0.36, 1] as const;

function HeroBackgroundDesktop() {
  return (
    <div className="absolute inset-0 z-[1] hidden overflow-hidden lg:block">
      <div className="absolute inset-y-0 right-0 z-[1] h-full w-[72vw]">
        <motion.div
          className="absolute inset-0 bg-transparent"
          initial={{ scale: 1.02 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.25, ease: bgEase, delay: 0.02 }}
        >
          <Image
            src={HERO_DESKTOP}
            alt=""
            fill
            priority
            quality={92}
            sizes="72vw"
            className="h-full w-full object-cover object-center opacity-100"
          />
        </motion.div>
      </div>

      {/* Narrow strip only — gradient must not cover chair / center-right */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[min(46vw,620px)] max-w-[92vw] bg-transparent"
        aria-hidden
      >
        <div
          className="pointer-events-none absolute inset-0 bg-transparent"
          style={{ background: LEFT_READABILITY_BG }}
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-[2] bg-transparent"
        aria-hidden
      >
        <div
          className="pointer-events-none absolute inset-0 bg-transparent"
          style={{ background: BOTTOM_VIGNETTE_BG }}
          aria-hidden
        />
      </div>
    </div>
  );
}

function HeroBackgroundMobile() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden lg:hidden">
      <motion.div
        className="absolute inset-0 z-[1] bg-transparent"
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.1, ease: bgEase, delay: 0.03 }}
      >
        <Image
          src={HERO_MOBILE}
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[50%_28%] opacity-100"
        />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[min(88vw,440px)] max-w-[92vw] bg-transparent"
        aria-hidden
      >
        <div
          className="pointer-events-none absolute inset-0 bg-transparent"
          style={{ background: LEFT_READABILITY_BG }}
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-[2] bg-transparent"
        aria-hidden
      >
        <div
          className="pointer-events-none absolute inset-0 bg-transparent"
          style={{ background: BOTTOM_VIGNETTE_BG }}
          aria-hidden
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] min-h-[100svh] w-full overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-black" aria-hidden />

      <HeroBackgroundMobile />
      <HeroBackgroundDesktop />

      <HeroLiquidStack variant="desktop" />
      <HeroLiquidStack variant="mobile" />

      <motion.div
        className="relative z-[10] mx-auto flex min-h-[calc(100dvh-9.25rem)] w-full max-w-[1600px] flex-col justify-center px-6 pb-[9.5rem] pt-28 sm:px-8 md:min-h-[calc(100dvh-9.5rem)] md:pb-40 md:pt-32 lg:absolute lg:left-[clamp(2rem,4vw,4.5rem)] lg:right-auto lg:top-[46%] lg:mx-0 lg:max-w-[600px] lg:min-h-0 lg:flex lg:w-auto lg:-translate-y-[46%] lg:translate-x-0 lg:flex-col lg:items-start lg:justify-center lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-0"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="w-full max-w-[600px]">
          <motion.span
            variants={item}
            className="hero-copy mb-2.5 inline-block text-[10px] font-semibold uppercase tracking-[0.38em] text-accent-red md:mb-3 md:text-[11px] lg:mb-2.5"
          >
            Premium Barbershop Experience
          </motion.span>

          <div className="hero-display mb-4 !tracking-[0em] text-[clamp(3rem,11vw,5.5rem)] leading-[0.84] text-white md:mb-4 lg:mb-[1rem] lg:text-[clamp(92px,7vw,136px)] lg:leading-[0.84]">
            <motion.span
              variants={item}
              className="block drop-shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
            >
              Sharp Looks.
            </motion.span>
            <motion.span
              variants={item}
              className="block translate-y-[-0.02em] text-transparent [-webkit-text-stroke:2px_#E50914]"
            >
              Bold Ink.
            </motion.span>
          </div>

          <motion.p
            variants={item}
            className="hero-copy mb-0 max-w-[430px] text-[13px] font-medium leading-[1.74] text-white/86 md:text-[15px] lg:mb-0"
          >
            Experience precision craftsmanship in a cinematic atmosphere. Where every cut is a masterpiece
            and every visit feels like luxury.
          </motion.p>

          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-2.5 md:gap-3 lg:mt-6">
            <a
              href="#contact"
              className="hero-copy inline-flex h-[56px] w-full max-w-[min(100%,280px)] flex-none items-center justify-center bg-[#E50914] px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[#ff1a24] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]/50 sm:max-w-none lg:w-[220px] lg:max-w-[220px] lg:px-4"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="hero-copy inline-flex h-[56px] w-full max-w-[min(100%,260px)] flex-none items-center justify-center border border-[rgba(255,255,255,0.35)] bg-black/50 px-6 text-[11px] font-bold uppercase tracking-[0.08em] text-white/92 transition-colors hover:border-white/55 hover:bg-black/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25 sm:max-w-none lg:w-[190px] lg:max-w-[190px] lg:px-4"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.6, ease: bgEase }}
        className="absolute bottom-0 left-0 right-0 z-[12] min-h-[86px] border-t border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.72)] px-4 py-3 md:px-10 lg:max-h-[92px] lg:min-h-[88px] lg:px-14 lg:py-0"
      >
        <div className="mx-auto grid h-full max-w-[1600px] grid-cols-2 content-center items-center gap-y-5 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/[0.08]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.82 + index * 0.05,
                duration: 0.48,
                ease: bgEase,
              }}
              className="flex min-h-[4.5rem] items-center justify-center gap-3 px-3 py-1 sm:min-h-0 sm:gap-3.5 sm:px-6 md:px-8 lg:min-h-[88px] lg:px-10"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-red bg-black md:h-10 md:w-10">
                <stat.icon className="h-3.5 w-3.5 text-accent-red md:h-4 md:w-4" strokeWidth={1.35} aria-hidden />
              </div>
              <div className="min-w-0">
                <p className="font-display text-lg font-bold leading-none tracking-tight text-white md:text-xl">
                  {stat.value}
                </p>
                <p className="hero-copy mt-1.5 text-[8px] font-semibold uppercase tracking-[0.26em] text-white/55 md:text-[9px]">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
