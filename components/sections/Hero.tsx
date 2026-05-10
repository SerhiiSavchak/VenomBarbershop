"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ChevronRight, Clock, Scissors, Users } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase } from "@/lib/motion";

const LEFT_READABILITY_DESKTOP =
  "linear-gradient(90deg, #000 0%, rgba(0,0,0,.72) 28%, rgba(0,0,0,.22) 52%, transparent 76%)";

const BOTTOM_VIGNETTE_DESKTOP =
  "linear-gradient(0deg, rgba(0,0,0,.52) 0%, rgba(0,0,0,.18) 38%, transparent 68%)";

const MOBILE_TOP_READABILITY =
  "linear-gradient(180deg, rgba(0,0,0,.92) 0%, rgba(0,0,0,.42) 38%, transparent 72%)";

const MOBILE_BOTTOM_READABILITY =
  "linear-gradient(0deg, rgba(0,0,0,.9) 0%, rgba(0,0,0,.4) 42%, transparent 74%)";

const RED_AMBIENT =
  "radial-gradient(ellipse 72% 58% at 72% 42%, rgba(229,9,20,0.14) 0%, transparent 58%)";

const HERO_DESKTOP = "/symbiote/hero-desktop.png";
const HERO_MOBILE = "/symbiote/hero-mobile.png";

const statIcons = [Users, Award, Scissors, Clock] as const;

const bgZoom = {
  initial: { scale: 1.04 },
  animate: { scale: 1 },
  transition: { duration: 1.05, ease: cinematicEase, delay: 0.02 },
};

const ctaVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.66 },
  },
};

const ctaItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.82, ease: cinematicEase },
  },
};

function HeroBackgroundDesktop() {
  return (
    <div className="absolute inset-0 z-[1] hidden overflow-hidden lg:block">
      <div className="absolute inset-y-0 right-0 z-[1] h-full w-[72vw]">
        <motion.div className="absolute inset-0 bg-transparent" {...bgZoom}>
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

      <div
        className="pointer-events-none absolute inset-0 z-[2] bg-transparent"
        style={{ background: RED_AMBIENT }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[3] w-[min(46vw,620px)] max-w-[92vw] bg-transparent"
        aria-hidden
      >
        <div className="pointer-events-none absolute inset-0 bg-transparent" style={{ background: LEFT_READABILITY_DESKTOP }} aria-hidden />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-[min(48vh,460px)] bg-transparent" aria-hidden>
        <div className="pointer-events-none absolute inset-0 bg-transparent" style={{ background: BOTTOM_VIGNETTE_DESKTOP }} aria-hidden />
      </div>
    </div>
  );
}

function HeroBackgroundMobile() {
  return (
    <div className="absolute inset-0 z-[1] overflow-hidden lg:hidden">
      <motion.div className="absolute inset-0 z-[1] bg-black" initial={{ scale: 1.04 }} animate={{ scale: 1 }} transition={{ duration: 1.05, ease: cinematicEase, delay: 0.03 }}>
        <Image
          src={HERO_MOBILE}
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[50%_26%] opacity-100"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-[2] bg-transparent" style={{ background: RED_AMBIENT }} aria-hidden />

      <div className="pointer-events-none absolute inset-0 z-[3] bg-transparent" aria-hidden>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[52%] bg-transparent" style={{ background: MOBILE_TOP_READABILITY }} aria-hidden />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-transparent" style={{ background: MOBILE_BOTTOM_READABILITY }} aria-hidden />
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useI18n();
  const { hero } = t;

  return (
    <section id="hero" className="relative flex min-h-[100dvh] w-full flex-col overflow-hidden bg-black lg:block">
      <HeroBackgroundMobile />
      <HeroBackgroundDesktop />

      <div className="relative flex flex-1 flex-col lg:absolute lg:inset-0 lg:min-h-[100dvh] lg:flex-none">
        <div className="relative z-[10] flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 pb-8 pt-[calc(6rem+env(safe-area-inset-top,0px))] sm:px-8 lg:mx-auto lg:max-w-none lg:flex-none lg:justify-center lg:px-0 lg:pb-36 lg:pt-[calc(5rem+env(safe-area-inset-top,0px))]">
          <div className="w-full max-w-[600px] lg:absolute lg:left-[clamp(2rem,4vw,4.5rem)] lg:top-[46%] lg:-translate-y-[46%]">
            <motion.span
              className="hero-copy mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.38em] text-[#E50914] md:mb-3 lg:mb-2.5"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.88, ease: cinematicEase, delay: 0.2 }}
            >
              {hero.eyebrow}
            </motion.span>

            <div className="hero-display mb-5 max-w-full text-[clamp(52px,15vw,76px)] leading-[0.88] text-white lg:mb-[1rem] lg:text-[clamp(92px,7vw,136px)] lg:leading-[0.84]">
              <motion.span
                className="block text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.35)]"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.88, ease: cinematicEase }}
              >
                {hero.headline1}
              </motion.span>
              <motion.span
                className="block translate-y-[-0.02em] text-[#E50914]"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.44, duration: 0.88, ease: cinematicEase }}
              >
                {hero.headline2}
              </motion.span>
            </div>

            <motion.p
              className="hero-copy mb-0 max-w-[430px] text-[15px] font-medium leading-[1.6] text-white/88 lg:text-[15px] lg:leading-[1.74]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.56, duration: 0.88, ease: cinematicEase }}
            >
              {hero.description}
            </motion.p>

            <motion.div className="hero-cta-group" initial="hidden" animate="show" variants={ctaVariants}>
              <motion.a
                href="#contact"
                aria-label={hero.primaryCtaAria}
                className="hero-copy hero-cta hero-cta--primary group"
                variants={ctaItem}
              >
                <Calendar className="hero-cta-icon h-4 w-4" strokeWidth={2} aria-hidden />
                <span>{hero.ctaPrimary}</span>
              </motion.a>
              <motion.a
                href="#services"
                aria-label={hero.secondaryCtaAria}
                className="hero-copy hero-cta hero-cta--secondary group"
                variants={ctaItem}
              >
                <span>{hero.ctaSecondary}</span>
                <ChevronRight className="hero-cta-icon h-4 w-4" strokeWidth={2.25} aria-hidden />
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88, duration: 0.95, ease: cinematicEase }}
          className="relative z-[12] mt-auto shrink-0 border-t border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.72)] px-4 py-4 backdrop-blur-[2px] md:px-10 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:mt-0 lg:max-h-[92px] lg:min-h-[88px] lg:px-14 lg:py-0 lg:backdrop-blur-none"
        >
          <div className="mx-auto grid max-w-[1600px] grid-cols-2 content-center items-center gap-x-3 gap-y-5 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/[0.08]">
            {hero.stats.map((stat, index) => {
              const Icon = statIcons[index] ?? Users;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.94 + index * 0.06,
                    duration: 0.72,
                    ease: cinematicEase,
                  }}
                  className="flex min-h-[4.25rem] items-center justify-center gap-3 px-2 py-1 sm:min-h-0 sm:gap-3.5 sm:px-6 md:px-8 lg:min-h-[88px] lg:px-10"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E50914] bg-black md:h-10 md:w-10">
                    <Icon className="h-3.5 w-3.5 text-[#E50914] md:h-4 md:w-4" strokeWidth={1.35} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-lg font-bold leading-none tracking-tight text-white md:text-xl">{stat.value}</p>
                    <p className="hero-copy mt-1.5 text-[8px] font-semibold uppercase tracking-[0.26em] text-white/55 md:text-[9px]">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
