"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Award, Calendar, ChevronRight, Clock, Scissors, Users } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { usePageIntro } from "@/components/providers/PageIntroProvider";
import type { HeroStat, Lang } from "@/lib/i18n";
import { cinematicEase, mobilePopEase } from "@/lib/motion";
import { useLgUp } from "@/lib/useLgUp";

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

function formatHeroCount(n: number, lang: Lang): string {
  return n.toLocaleString(lang === "uk" ? "uk-UA" : "en-US");
}

function HeroAnimatedCount({
  end,
  suffix,
  lang,
  started,
  delayMs,
}: {
  end: number;
  suffix: string;
  lang: Lang;
  started: boolean;
  delayMs: number;
}) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!started) return;
    let cancelled = false;
    let rafId = 0;
    const timeoutId = window.setTimeout(() => {
      const t0 = performance.now();
      const dur = 2200;
      const step = (now: number) => {
        if (cancelled) return;
        const p = Math.min(1, (now - t0) / dur);
        const eased = 1 - (1 - p) ** 2.75;
        setN(Math.round(end * eased));
        if (p < 1) rafId = requestAnimationFrame(step);
        else setN(end);
      };
      rafId = requestAnimationFrame(step);
    }, delayMs);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [started, end, delayMs]);

  return (
    <span className="tabular-nums">
      {formatHeroCount(n, lang)}
      {suffix}
    </span>
  );
}

function HeroStatValue({
  stat,
  lang,
  started,
  index,
}: {
  stat: HeroStat;
  lang: Lang;
  started: boolean;
  index: number;
}) {
  if (stat.mode === "text") {
    return <span className="tabular-nums">{stat.value}</span>;
  }
  return (
    <HeroAnimatedCount
      end={stat.end}
      suffix={stat.suffix}
      lang={lang}
      started={started}
      delayMs={index * 150}
    />
  );
}

function gateIntro<P extends { initial: object; animate: object; transition: object }>(introDone: boolean, preset: P): P {
  if (introDone) return preset;
  return { ...preset, animate: preset.initial, transition: { duration: 0 } } as P;
}

function HeroPhotoShine({ reducedMotion, introDone }: { reducedMotion: boolean; introDone: boolean }) {
  if (reducedMotion) return null;
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[3] bg-gradient-to-r from-transparent via-white/[0.18] to-transparent"
      aria-hidden
      initial={{ x: "-55%", skewX: -14 }}
      animate={introDone ? { x: "165%", skewX: -14 } : { x: "-55%", skewX: -14 }}
      transition={
        introDone ? { duration: 1.55, ease: [0.2, 0.85, 0.15, 1], delay: 0.42 } : { duration: 0 }
      }
    />
  );
}

function HeroBackgroundDesktop({ reducedMotion, introDone }: { reducedMotion: boolean; introDone: boolean }) {
  const photoInitial = reducedMotion
    ? { opacity: 0.85 }
    : { scale: 1.09, x: "3.5%", rotate: 0.35, opacity: 1 };
  const photoAnimate = reducedMotion ? { opacity: 1 } : { scale: 1, x: 0, rotate: 0, opacity: 1 };
  const photoTransition = reducedMotion
    ? { duration: 0.35 }
    : { duration: 1.38, ease: cinematicEase, delay: 0.02 };

  return (
    <div className="absolute inset-0 z-[1] hidden overflow-hidden lg:block">
      <div className="absolute inset-y-0 right-0 z-[1] h-full w-[72vw] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black"
          initial={photoInitial}
          animate={introDone ? photoAnimate : photoInitial}
          transition={introDone ? photoTransition : { duration: 0 }}
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
          <HeroPhotoShine reducedMotion={reducedMotion} introDone={introDone} />
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

function HeroBackgroundMobile({ reducedMotion, introDone }: { reducedMotion: boolean; introDone: boolean }) {
  const photoInitial = reducedMotion
    ? { opacity: 0.88 }
    : { scale: 1.15, y: "8%", opacity: 1 };
  const photoAnimate = reducedMotion ? { opacity: 1 } : { scale: 1, y: 0, opacity: 1 };
  const photoTransition = reducedMotion
    ? { duration: 0.35 }
    : { duration: 1.22, ease: mobilePopEase, delay: 0.04 };

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden lg:hidden">
      <motion.div
        className="absolute inset-0 z-[1] overflow-hidden bg-black"
        initial={photoInitial}
        animate={introDone ? photoAnimate : photoInitial}
        transition={introDone ? photoTransition : { duration: 0 }}
      >
        <Image
          src={HERO_MOBILE}
          alt=""
          fill
          priority
          quality={92}
          sizes="100vw"
          className="object-cover object-[50%_26%] opacity-100"
        />
        <HeroPhotoShine reducedMotion={reducedMotion} introDone={introDone} />
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
  const { t, lang } = useI18n();
  const { introDone } = usePageIntro();
  const { hero } = t;
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.08, margin: "0px 0px 120px 0px" });
  const isLg = useLgUp();
  const reduce = useReducedMotion() ?? false;

  const statsStarted = introDone && (isLg || statsInView);

  const venomMotion = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.2 } }
    : {
        initial: { x: "-103%", opacity: 1 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.92, ease: cinematicEase, delay: 0.18 },
      };

  const barberMotion = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.32 } }
    : {
        initial: { x: "103%", opacity: 1 },
        animate: { x: 0, opacity: 1 },
        transition: { duration: 0.92, ease: cinematicEase, delay: 0.3 },
      };

  const descMotion = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.45, delay: 0.38 } }
    : isLg
      ? {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: cinematicEase, delay: 0.52 },
        }
      : {
          initial: { opacity: 0, y: 28, x: -12 },
          animate: { opacity: 1, y: 0, x: 0 },
          transition: { duration: 0.82, ease: mobilePopEase, delay: 0.4 },
        };

  const ctaGroupMotion = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4, delay: 0.35 } }
    : isLg
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.55, delay: 0.52, ease: cinematicEase } }
      : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.5, delay: 0.38, ease: mobilePopEase } };

  const statsStripMotion = reduce
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5, duration: 0.4 } }
    : isLg
      ? { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.88, duration: 0.95, ease: cinematicEase } }
      : { initial: { opacity: 0, y: 48 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.72, duration: 0.88, ease: mobilePopEase } };

  const statItemInitial = reduce
    ? { opacity: 0 }
    : isLg
      ? { opacity: 0, y: 14 }
      : { opacity: 0, y: 22, x: -10 };

  return (
    <section id="hero" className="relative flex min-h-[100dvh] w-full flex-col bg-black max-lg:overflow-hidden lg:block lg:overflow-visible">
      <HeroBackgroundMobile reducedMotion={reduce} introDone={introDone} />
      <HeroBackgroundDesktop reducedMotion={reduce} introDone={introDone} />

      <div className="relative flex flex-1 flex-col lg:absolute lg:inset-0 lg:max-h-[100dvh] lg:min-h-[100dvh] lg:flex-none">
        <div className="relative z-[10] flex w-full max-w-[1600px] flex-1 flex-col px-5 pb-6 max-lg:min-h-0 max-lg:flex-1 max-lg:justify-start max-lg:pt-[calc(10.25rem+env(safe-area-inset-top,0px))] sm:px-8 lg:mx-auto lg:h-full lg:min-h-0 lg:max-w-none lg:flex-1 lg:flex-col lg:justify-center lg:px-0 lg:pb-[6.75rem] lg:pt-[calc(5.75rem+env(safe-area-inset-top,0px))]">
          <div className="my-auto w-full max-w-[640px] pb-1 max-lg:mb-0 max-lg:my-0 max-lg:flex max-lg:min-h-0 max-lg:flex-1 max-lg:flex-col max-lg:-translate-y-2 lg:my-0 lg:max-w-[min(54rem,calc(100vw-4.5rem))] lg:flex-none lg:translate-y-0 lg:pb-0 lg:relative lg:pl-[clamp(3.35rem,6.35vw,7.35rem)] lg:pr-8 lg:self-start">
            <div className="hero-display mb-4 flex w-full min-w-0 max-w-full shrink-0 flex-col gap-0 uppercase tracking-[0.01em] text-[clamp(58px,16vw,86px)] lg:mb-6 lg:max-w-none lg:text-[clamp(88px,6.9vw,140px)]">
              <div className="overflow-x-clip overflow-y-visible pb-[0.06em] lg:overflow-x-visible">
                <motion.span className="block w-max max-w-full font-normal leading-[0.92] text-[#E50914] lg:max-w-none lg:leading-[0.9]" {...gateIntro(introDone, venomMotion)}>
                  VENOM
                </motion.span>
              </div>
              <div className="overflow-x-clip overflow-y-visible pb-[0.06em] pr-[2px] [-webkit-font-smoothing:antialiased] lg:overflow-x-visible">
                <motion.span className="block w-max max-w-full font-normal leading-[0.92] text-white lg:max-w-none lg:leading-[0.9]" {...gateIntro(introDone, barberMotion)}>
                  BARBERSHOP
                </motion.span>
              </div>
            </div>

            <div className="flex w-full min-h-0 max-w-full flex-1 flex-col gap-8 max-lg:flex-1 max-lg:gap-0 lg:flex-none lg:gap-9">
              <motion.p
                className="hero-copy m-0 w-full max-w-xl shrink-0 text-[15px] font-medium leading-[1.6] text-white/88 [overflow-wrap:anywhere] text-pretty max-lg:-mt-1 max-lg:max-w-xl lg:mt-0 lg:max-w-none lg:pl-[0.45rem] lg:text-[15px] lg:leading-[1.72]"
                {...gateIntro(introDone, descMotion)}
              >
                {hero.description}
              </motion.p>

              <div className="hidden w-full min-h-0 max-lg:flex max-lg:min-h-[min(26dvh,220px)] max-lg:flex-1 max-lg:basis-0" aria-hidden />

              <motion.div
                className="hero-cta-group m-0 mt-auto w-full max-w-full shrink-0 max-lg:pt-2 lg:mt-0 lg:pl-[0.45rem]"
                {...gateIntro(introDone, ctaGroupMotion)}
              >
                <a
                  href="#contact"
                  aria-label={hero.primaryCtaAria}
                  className="hero-copy hero-cta hero-cta--primary group"
                >
                  <Calendar className="hero-cta-icon h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  <span className="hero-cta-text">{hero.ctaPrimary}</span>
                </a>
                <a
                  href="#services"
                  aria-label={hero.secondaryCtaAria}
                  title={hero.ctaSecondary}
                  className="hero-copy hero-cta hero-cta--secondary group"
                >
                  <span className="hero-cta-text">{hero.ctaSecondaryShort}</span>
                  <ChevronRight className="hero-cta-icon h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          ref={statsRef}
          {...gateIntro(introDone, statsStripMotion)}
          className="relative z-[12] mt-auto shrink-0 border-t border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.72)] px-4 py-4 backdrop-blur-[2px] md:px-10 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:mt-0 lg:max-h-[92px] lg:min-h-[88px] lg:px-14 lg:py-0 lg:backdrop-blur-none"
        >
          <div className="mx-auto grid max-w-[1600px] grid-cols-2 content-center items-center gap-x-3 gap-y-5 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/[0.08]">
            {hero.stats.map((stat, index) => {
              const Icon = statIcons[index] ?? Users;
              return (
                <motion.div
                  key={stat.label}
                  initial={statItemInitial}
                  animate={introDone ? { opacity: 1, y: 0, x: 0 } : statItemInitial}
                  transition={{
                    delay: introDone ? (isLg ? 0.94 : 0.78) + index * (isLg ? 0.06 : 0.07) : 0,
                    duration: introDone ? (reduce ? 0.35 : 0.72) : 0,
                    ease: isLg ? cinematicEase : mobilePopEase,
                  }}
                  className="flex min-h-[4.25rem] items-center justify-center gap-3 px-2 py-1 sm:min-h-0 sm:gap-3.5 sm:px-6 md:px-8 lg:min-h-[88px] lg:px-10"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#E50914] bg-black md:h-10 md:w-10">
                    <Icon className="h-3.5 w-3.5 text-[#E50914] md:h-4 md:w-4" strokeWidth={1.35} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="font-display text-lg font-bold leading-none tracking-tight text-white md:text-xl">
                      <HeroStatValue stat={stat} lang={lang} started={statsStarted} index={index} />
                    </p>
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
