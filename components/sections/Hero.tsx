"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, ChevronRight, Clock, Scissors, Users } from "lucide-react";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { useI18n } from "@/components/providers/I18nProvider";
import { usePageIntro } from "@/components/providers/PageIntroProvider";
import type { HeroStat, Lang } from "@/lib/i18n";
import { cinematicEase, mobilePopEase } from "@/lib/motion";
import { altegioBookingLink } from "@/lib/altegio";
import { SiteContainer } from "@/components/ui/SiteContainer";
import { useLgUp } from "@/lib/useLgUp";
import { useStableViewportHeight } from "@/lib/useStableViewportHeight";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

const LEFT_READABILITY_DESKTOP =
  "linear-gradient(90deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.52) 26%, rgba(0,0,0,0.22) 48%, rgba(0,0,0,0.06) 62%, transparent 78%)";

const BOTTOM_VIGNETTE_DESKTOP =
  "linear-gradient(0deg, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.12) 36%, transparent 62%)";

const MOBILE_HEADER_SCRIM =
  "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.18) 18%, transparent 34%)";

const MOBILE_CONTENT_SCRIM =
  "linear-gradient(180deg, transparent 18%, rgba(0,0,0,0.28) 42%, rgba(0,0,0,0.62) 66%, rgba(0,0,0,0.86) 100%)";

const MOBILE_TEXT_ZONE_SCRIM =
  "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.78) 100%)";

const HERO_DESKTOP = "/symbiote/hero-desktop.webp";
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
        introDone ? { duration: 1.35, ease: [0.2, 0.85, 0.15, 1], delay: 0.08 } : { duration: 0 }
      }
    />
  );
}

function HeroBackgroundDesktop({ reducedMotion, introDone }: { reducedMotion: boolean; introDone: boolean }) {
  const photoInitial = { opacity: 0.97 };
  const photoAnimate = { opacity: 1 };
  const photoTransition = reducedMotion
    ? { duration: 0.35 }
    : { duration: 0.9, ease: cinematicEase, delay: 0 };

  return (
    <div className="absolute inset-0 z-[1] hidden overflow-hidden lg:block" aria-hidden>
      <motion.div
        className="absolute inset-0 bg-black"
        initial={photoInitial}
        animate={introDone ? photoAnimate : photoInitial}
        transition={introDone ? photoTransition : { duration: 0 }}
      >
        <OptimizedImage
          src={HERO_DESKTOP}
          alt=""
          fill
          priority
          fadeIn={false}
          quality={90}
          sizes="(max-width: 1023px) 1px, 100vw"
          className="h-full w-full object-cover object-[52%_center] opacity-100"
        />
        <HeroPhotoShine reducedMotion={reducedMotion} introDone={introDone} />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{ background: LEFT_READABILITY_DESKTOP }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[min(40vh,380px)]"
        style={{ background: BOTTOM_VIGNETTE_DESKTOP }}
      />
    </div>
  );
}

function HeroBackgroundMobile({ reducedMotion, introDone }: { reducedMotion: boolean; introDone: boolean }) {
  /* Форма анімації не залежить від reducedMotion (hydration/flip-safe):
     ціль завжди нейтральна, reduce лише робить трансформи миттєвими. */
  const photoInitial = { scale: 1.05, y: "2%", opacity: 0.96 };
  const photoAnimate = { scale: 1, y: 0, opacity: 1 };
  const photoTransition = reducedMotion
    ? { scale: { duration: 0 }, y: { duration: 0 }, opacity: { duration: 0.35 } }
    : { duration: 1.1, ease: mobilePopEase, delay: 0.04 };

  return (
    <div className="absolute inset-0 z-[1] overflow-hidden lg:hidden" aria-hidden>
      <motion.div
        className="absolute inset-0 z-[1] overflow-hidden bg-black"
        initial={photoInitial}
        animate={introDone ? photoAnimate : photoInitial}
        transition={introDone ? photoTransition : { duration: 0 }}
      >
        <OptimizedImage
          src={HERO_MOBILE}
          alt=""
          fill
          priority
          fadeIn={false}
          quality={92}
          sizes="(min-width: 1024px) 1px, 100vw"
          className="object-cover object-[50%_40%] opacity-100"
        />
        <HeroPhotoShine reducedMotion={reducedMotion} introDone={introDone} />
      </motion.div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[28%]"
        style={{ background: MOBILE_HEADER_SCRIM }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{ background: MOBILE_CONTENT_SCRIM }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[68%]"
        style={{ background: MOBILE_TEXT_ZONE_SCRIM }}
      />
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
  const reduce = useReducedMotionSafe();
  useStableViewportHeight();

  const statsStarted = introDone && (isLg || statsInView);

  /* reduce впливає лише на transition (трансформи миттєво, opacity — фейдом).
     initial/animate однакові за формою — безпечно і для гідратації,
     і для перемикання reduce після монтування. */
  const instantTransforms = {
    x: { duration: 0 },
    y: { duration: 0 },
    scale: { duration: 0 },
  } as const;

  const reduceFade = (duration: number, delay: number) => ({
    ...instantTransforms,
    opacity: { duration, delay },
    default: { duration: 0 },
  });

  const venomMotion = {
    initial: { x: "-103%", opacity: 1 },
    animate: { x: 0, opacity: 1 },
    transition: reduce
      ? reduceFade(0.3, 0.1)
      : { duration: 0.88, ease: cinematicEase, delay: 0 },
  };

  const barberMotion = {
    initial: { x: "103%", opacity: 1 },
    animate: { x: 0, opacity: 1 },
    transition: reduce
      ? reduceFade(0.3, 0.16)
      : { duration: 0.88, ease: cinematicEase, delay: 0.1 },
  };

  const descMotion = {
    initial: isLg ? { opacity: 0, y: 22, x: 0 } : { opacity: 0, y: 28, x: -12 },
    animate: { opacity: 1, y: 0, x: 0 },
    transition: reduce
      ? reduceFade(0.45, 0.24)
      : { duration: 0.82, ease: isLg ? cinematicEase : mobilePopEase, delay: isLg ? 0.34 : 0.4 },
  };

  const ctaGroupMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: reduce
      ? { duration: 0.4, delay: 0.3 }
      : { duration: 0.5, delay: isLg ? 0.34 : 0.38, ease: isLg ? cinematicEase : mobilePopEase },
  };

  const statsStripMotion = {
    initial: isLg ? { opacity: 0, y: 28 } : { opacity: 0, y: 48 },
    animate: { opacity: 1, y: 0 },
    transition: reduce
      ? reduceFade(0.4, 0.35)
      : { delay: isLg ? 0.62 : 0.72, duration: 0.88, ease: isLg ? cinematicEase : mobilePopEase },
  };

  const statItemInitial = isLg
    ? { opacity: 0, y: 14, x: 0 }
    : { opacity: 0, y: 22, x: -10 };

  return (
    <section
      id="hero"
      className="hero-mobile-viewport relative flex w-full flex-col bg-black max-lg:overflow-x-clip max-lg:overflow-y-visible lg:block lg:min-h-[100dvh] lg:overflow-visible"
    >
      <HeroBackgroundMobile reducedMotion={reduce} introDone={introDone} />
      <HeroBackgroundDesktop reducedMotion={reduce} introDone={introDone} />

      <div className="relative flex flex-1 flex-col max-lg:min-h-[calc(var(--app-vh,1vh)*100)] max-lg:min-h-[100svh] max-lg:min-h-[100dvh] lg:absolute lg:inset-0 lg:max-h-[100dvh] lg:min-h-[100dvh] lg:flex-none">
        <SiteContainer className="relative z-[10] flex flex-1 flex-col max-lg:justify-end max-lg:pb-10 max-lg:pt-[calc(var(--mobile-header-height)+0.375rem)] lg:h-full lg:min-h-0 lg:flex-1 lg:flex-col lg:justify-center lg:pb-[6.75rem] lg:pt-[calc(5.75rem+env(safe-area-inset-top,0px))]">
          <div className="hero-content flex w-full max-w-[640px] flex-col items-start max-lg:mt-auto max-lg:shrink-0 max-lg:pb-1 lg:w-full lg:max-w-[36rem] lg:self-start">
            <div className="hero-display mb-3 flex w-full min-w-0 max-w-full shrink-0 flex-col items-start gap-0 uppercase tracking-[0.01em] text-[clamp(58px,16vw,86px)] max-lg:[text-shadow:0_2px_18px_rgba(0,0,0,0.45)] lg:mb-5 lg:text-[clamp(88px,6.9vw,140px)]">
              <div className="hero-title-reveal w-full lg:overflow-visible">
                <motion.span
                  className="block w-full max-w-full text-left font-normal leading-[0.96] text-[#E50914] lg:leading-[0.9]"
                  {...gateIntro(introDone, venomMotion)}
                >
                  VENOM
                </motion.span>
              </div>
              <div className="hero-title-reveal w-full [-webkit-font-smoothing:antialiased] lg:overflow-visible">
                <motion.span
                  className="block w-full max-w-full text-left font-normal leading-[0.96] text-white lg:leading-[0.9]"
                  {...gateIntro(introDone, barberMotion)}
                >
                  BARBERSHOP
                </motion.span>
              </div>
            </div>

            <div className="flex w-full max-w-full flex-col items-start max-lg:shrink-0 max-lg:gap-4 lg:min-h-0 lg:gap-8">
              <motion.p
                key={isLg ? "hero-desc-lg" : "hero-desc-sm"}
                className="hero-copy m-0 w-full max-w-xl shrink-0 text-left text-[15px] font-medium leading-[1.6] text-white [overflow-wrap:anywhere] text-pretty max-lg:max-w-[22rem] max-lg:[text-shadow:0_1px_14px_rgba(0,0,0,0.65),0_2px_32px_rgba(0,0,0,0.42)] lg:max-w-none lg:text-[15px] lg:leading-[1.72] lg:text-white/88 lg:[text-shadow:none]"
                {...gateIntro(introDone, descMotion)}
              >
                {hero.description}
              </motion.p>

              <motion.div
                className="hero-cta-group m-0 w-full max-w-full shrink-0 max-lg:pt-0 lg:mt-0"
                {...gateIntro(introDone, ctaGroupMotion)}
              >
                <a
                  {...altegioBookingLink}
                  aria-label={hero.primaryCtaAria}
                  className="hero-copy hero-cta hero-cta--primary"
                >
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
        </SiteContainer>

        <motion.div
          ref={statsRef}
          {...gateIntro(introDone, statsStripMotion)}
          className="relative z-[12] mt-auto shrink-0 border-t border-[rgba(255,255,255,0.08)] bg-[rgba(0,0,0,0.72)] py-4 backdrop-blur-[2px] lg:absolute lg:bottom-0 lg:left-0 lg:right-0 lg:mt-0 lg:max-h-[92px] lg:min-h-[88px] lg:py-0 lg:backdrop-blur-none"
        >
          <SiteContainer className="grid grid-cols-2 content-center items-center gap-x-3 gap-y-5 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-white/[0.08]">
            {hero.stats.map((stat, index) => {
              const Icon = statIcons[index] ?? Users;
              return (
                <motion.div
                  key={stat.label}
                  initial={statItemInitial}
                  animate={introDone ? { opacity: 1, y: 0, x: 0 } : statItemInitial}
                  transition={
                    !introDone
                      ? { duration: 0 }
                      : reduce
                        ? reduceFade(0.35, 0.4 + index * 0.05)
                        : {
                            delay: (isLg ? 0.68 : 0.78) + index * (isLg ? 0.05 : 0.07),
                            duration: 0.72,
                            ease: isLg ? cinematicEase : mobilePopEase,
                          }
                  }
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
          </SiteContainer>
        </motion.div>
      </div>
    </section>
  );
}
