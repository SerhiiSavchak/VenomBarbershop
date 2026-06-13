"use client";

import { useCallback, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, sectionTitleInset } from "@/lib/motion";
import { SectionEyebrow, sectionHeadingVariants } from "@/components/ui/SectionEyebrow";
import { altegioBookingLink } from "@/lib/altegio";
import { useLgUp } from "@/lib/useLgUp";

const stepParentVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

function stepItemVariants(lg: boolean) {
  return {
    hidden: lg ? { opacity: 0, x: 28, y: 0 } : { opacity: 0, x: 0, y: 30 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.85, ease: lg ? cinematicEase : mobilePopEase },
    },
  };
}

const MARKER_ACTIVE_CLASSES = [
  "border-[#E50914]",
  "bg-[#E50914]",
  "shadow-[0_0_16px_rgba(229,9,20,0.6)]",
] as const;
const MARKER_INACTIVE_CLASSES = ["border-white/20", "bg-[#0a0a0a]"] as const;

const ACTIVATION_OFFSET = 16;
const DEACTIVATION_OFFSET = 24;
const SCRUB_LERP = 0.14;

function getStepMarkerAnchor(stepEl: HTMLElement, timelineTop: number): number {
  const badge = stepEl.querySelector<HTMLElement>("[data-process-marker-anchor]");
  if (badge) {
    const badgeRect = badge.getBoundingClientRect();
    return badgeRect.top + badgeRect.height / 2 - timelineTop;
  }

  const stepRect = stepEl.getBoundingClientRect();
  return stepRect.top + stepRect.height / 2 - timelineTop;
}

function setMarkerDomActive(marker: HTMLSpanElement, active: boolean) {
  if (active) {
    marker.classList.remove(...MARKER_INACTIVE_CLASSES);
    marker.classList.add(...MARKER_ACTIVE_CLASSES);
  } else {
    marker.classList.remove(...MARKER_ACTIVE_CLASSES);
    marker.classList.add(...MARKER_INACTIVE_CLASSES);
  }
}

function setStepDomActive(step: HTMLDivElement, active: boolean) {
  step.classList.toggle("opacity-100", active);
  step.classList.toggle("opacity-60", !active);
}

export function Process() {
  const { t } = useI18n();
  const lg = useLgUp();
  const steps = t.process.steps;
  const n = steps.length;

  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const markerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const layoutRef = useRef({
    markerTops: [] as number[],
    lineTop: 0,
    lineSpan: 0,
  });
  const activeMarkersRef = useRef<boolean[]>(new Array(n).fill(false));

  const measureLayout = useCallback(() => {
    const timeline = timelineRef.current;
    if (!timeline) return false;

    const stepsReady = stepRefs.current.slice(0, n);
    if (stepsReady.length < n || stepsReady.some((el) => !el)) return false;

    const timelineRect = timeline.getBoundingClientRect();

    stepsReady.forEach((stepEl, i) => {
      const marker = markerRefs.current[i];
      if (!stepEl || !marker) return;
      const anchorTop = getStepMarkerAnchor(stepEl, timelineRect.top);
      marker.style.top = `${anchorTop}px`;
    });

    const markerCenters = markerRefs.current.slice(0, n).map((marker) => {
      if (!marker) return 0;
      const markerRect = marker.getBoundingClientRect();
      return markerRect.top + markerRect.height / 2 - timelineRect.top;
    });

    const lineTop = markerCenters[0] ?? 0;
    const lineSpan = Math.max(0, (markerCenters[n - 1] ?? lineTop) - lineTop);
    if (lineSpan <= 0) return false;

    layoutRef.current = { markerTops: markerCenters, lineTop, lineSpan };

    if (trackRef.current) {
      trackRef.current.style.top = `${lineTop}px`;
      trackRef.current.style.height = `${lineSpan}px`;
    }

    return true;
  }, [n]);

  const computeTargetProgress = useCallback(() => {
    const timeline = timelineRef.current;
    const { markerTops, lineSpan } = layoutRef.current;

    if (!timeline || markerTops.length < n || lineSpan <= 0) return 0;

    const timelineRect = timeline.getBoundingClientRect();
    const viewportAnchor = window.innerHeight * 0.42;
    const startY = timelineRect.top + (markerTops[0] ?? 0);
    const endY = timelineRect.top + (markerTops[n - 1] ?? 0);
    const scrollSpan = endY - startY || 1;

    return Math.max(0, Math.min(1, (viewportAnchor - startY) / scrollSpan));
  }, [n]);

  const updateMarkerStates = useCallback(
    (progress: number) => {
      const { markerTops: tops, lineTop, lineSpan } = layoutRef.current;
      if (tops.length < n || lineSpan <= 0) return;

      const activationPad = ACTIVATION_OFFSET / lineSpan;
      const deactivationPad = DEACTIVATION_OFFSET / lineSpan;
      const active = activeMarkersRef.current;

      for (let i = 0; i < n; i += 1) {
        const markerProgress = ((tops[i] ?? 0) - lineTop) / lineSpan;
        const wasActive = active[i] ?? false;
        let isActive = wasActive;

        if (wasActive) {
          if (progress < markerProgress - deactivationPad) isActive = false;
        } else if (progress >= markerProgress - activationPad) {
          isActive = true;
        }

        if (isActive === wasActive) continue;

        active[i] = isActive;

        const marker = markerRefs.current[i];
        if (marker) setMarkerDomActive(marker, isActive);

        const step = stepRefs.current[i];
        if (step) setStepDomActive(step, isActive);
      }
    },
    [n],
  );

  const applySmoothedProgress = useCallback(
    (progress: number) => {
      const { lineSpan } = layoutRef.current;
      if (lineSpan <= 0) return;

      const clamped = Math.max(0, Math.min(1, progress));

      if (progressLineRef.current) {
        progressLineRef.current.style.height = `${clamped * 100}%`;
      }

      updateMarkerStates(clamped);
    },
    [updateMarkerStates],
  );

  useLayoutEffect(() => {
    let rafId = 0;
    let targetProgress = 0;
    let smoothProgress = 0;

    activeMarkersRef.current = new Array(n).fill(false);

    const scheduleTick = () => {
      if (!rafId) rafId = requestAnimationFrame(tick);
    };

    const syncLayout = () => {
      if (!measureLayout()) {
        scheduleTick();
        return false;
      }
      targetProgress = computeTargetProgress();
      smoothProgress = targetProgress;
      applySmoothedProgress(smoothProgress);
      return true;
    };

    const tick = () => {
      targetProgress = computeTargetProgress();
      smoothProgress += (targetProgress - smoothProgress) * SCRUB_LERP;

      if (Math.abs(targetProgress - smoothProgress) < 0.0008) {
        smoothProgress = targetProgress;
      }

      applySmoothedProgress(smoothProgress);

      if (Math.abs(targetProgress - smoothProgress) > 0.0008) {
        rafId = requestAnimationFrame(tick);
      } else {
        rafId = 0;
      }
    };

    syncLayout();
    scheduleTick();

    window.addEventListener("scroll", scheduleTick, { passive: true });
    window.addEventListener("resize", syncLayout);

    const stepsContainer = timelineRef.current?.parentElement;
    const resizeObserver = new ResizeObserver(syncLayout);
    if (sectionRef.current) resizeObserver.observe(sectionRef.current);
    if (stepsContainer) resizeObserver.observe(stepsContainer);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleTick);
      window.removeEventListener("resize", syncLayout);
      resizeObserver.disconnect();
    };
  }, [applySmoothedProgress, computeTargetProgress, measureLayout, n, steps.length]);

  return (
    <section ref={sectionRef} id="process" className="relative overflow-hidden bg-[#030303] py-24 md:py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(209,18,27,0.1)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_0%_80%,rgba(209,18,27,0.06)_0%,transparent_50%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16"
        >
          <div className={sectionTitleInset}>
            <SectionEyebrow text={t.process.eyebrow} />
            <motion.h2
              variants={sectionHeadingVariants}
              className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.process.title}
            </motion.h2>
          </div>
          <div className="hidden min-h-[1px] flex-1 md:block" aria-hidden />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-0">
          {/* Left image */}
          <motion.div
            initial={lg ? { opacity: 0, scale: 1.06, y: 0 } : { opacity: 0, scale: 1.09, y: 22 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.1, ease: lg ? cinematicEase : mobilePopEase }}
            className="relative aspect-[3/4] max-h-[min(78vh,720px)] min-h-[min(52vh,420px)] overflow-hidden border border-white/[0.06] lg:col-span-6 lg:aspect-[4/5] lg:max-h-[min(82vh,760px)] lg:min-h-[min(58vh,600px)]"
          >
            <Image
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&q=88"
              alt={t.process.imageAlt}
              fill
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover contrast-[1.08]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/40" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_70%,rgba(209,18,27,0.2)_0%,transparent_50%)] mix-blend-screen" />

            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 right-6 z-[3] border border-white/[0.08] bg-black/70 p-4 backdrop-blur-md md:bottom-10 md:left-10 md:right-auto md:max-w-[280px]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E50914]/40 bg-[#E50914]/10">
                  <CheckCircle2 className="h-5 w-5 text-[#E50914]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E50914]">Premium</p>
                  <p className="mt-0.5 text-sm text-white/70">Якість без компромісів</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right steps rail */}
          <div className="relative z-[1] flex min-h-0 w-full self-stretch border-white/[0.06] lg:col-span-6 lg:border-l lg:pl-5 xl:pl-7">
            <motion.div
              className="relative flex w-full min-w-0 flex-1 flex-col justify-center pl-10 md:pl-8 lg:min-h-full lg:pl-3 xl:pl-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={stepParentVariants}
            >
              {/* Progress line rail */}
              <div
                ref={timelineRef}
                className="pointer-events-none absolute left-0 top-0 h-full w-10 lg:w-12"
                aria-hidden
              >
                {/* Timeline track — clipped strictly between first and last marker */}
                <div
                  ref={trackRef}
                  className="absolute left-[18px] z-[1] w-[2px] -translate-x-1/2 overflow-hidden bg-white/[0.08]"
                  style={{ top: 0, height: 0 }}
                >
                  <div
                    ref={progressLineRef}
                    className="absolute left-0 top-0 w-full bg-gradient-to-b from-[#E50914] via-[#E50914] to-[#ff3d47]"
                    style={{ height: "0%" }}
                  />
                </div>

                {/* Tailwind scan anchor for marker active utilities */}
                <span
                  className="hidden border-[#E50914] bg-[#E50914] shadow-[0_0_16px_rgba(229,9,20,0.6)]"
                  aria-hidden
                />

                {/* Step markers */}
                {steps.map((step, i) => (
                  <span
                    key={step.number}
                    ref={(el) => {
                      markerRefs.current[i] = el;
                    }}
                    className="absolute left-[18px] z-[2] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/20 bg-[#0a0a0a] transition-[border-color,background-color,box-shadow,transform] duration-500 ease-out"
                  />
                ))}
              </div>

              {/* Step cards */}
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  variants={stepItemVariants(lg)}
                  className="group relative border-b border-white/[0.06] py-10 opacity-60 transition-opacity duration-500 first:pt-0 lg:py-10 lg:pl-6"
                >
                  {/* Large watermark number */}
                  <span className="pointer-events-none absolute -left-2 top-4 select-none font-display text-[clamp(4rem,14vw,7rem)] font-bold leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-[#E50914]/8 md:left-0 lg:-left-1">
                    {step.number}
                  </span>

                  <div className="relative flex min-w-0 flex-col gap-3 pl-4 md:pl-6 lg:pl-6">
                    {/* Step number badge */}
                    <span
                      data-process-marker-anchor
                      className="mb-1 inline-flex w-max items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#E50914]" />
                      Крок {step.number}
                    </span>

                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="max-w-md text-sm leading-relaxed text-foreground-muted md:text-[15px] lg:max-w-none">
                      {step.desc}
                    </p>
                  </div>

                  {/* Hover accent */}
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top scale-y-0 bg-gradient-to-b from-[#E50914] to-transparent transition-transform duration-500 group-hover:scale-y-100" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={lg ? { opacity: 0, y: 24 } : { opacity: 0, y: 20, x: -10 }}
          whileInView={revealLiftEnter}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: lg ? cinematicEase : mobilePopEase, delay: 0.1 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 border-t border-white/[0.06] pt-10 text-center md:mt-16 md:flex-row md:pt-12"
        >
          <p className="text-sm text-white/50 md:text-base">Готовий почати свій візит?</p>
          <a {...altegioBookingLink} className="site-cta-primary">
            {t.contact.bookAppointment}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
