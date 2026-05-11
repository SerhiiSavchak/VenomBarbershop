"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, revealLiftInitial, viewportReveal, sectionTitleInset } from "@/lib/motion";
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

export function Process() {
  const { t } = useI18n();
  const lg = useLgUp();
  const steps = t.process.steps;
  const n = steps.length;

  const sectionRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ratiosRef = useRef<number[]>([]);

  const [active, setActive] = useState(0);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const [dotTops, setDotTops] = useState<number[]>(() => new Array(n).fill(0));
  const [lineFill, setLineFill] = useState(0);

  // Smooth spring animation for the progress line
  const smoothLineFill = useSpring(lineFill, { stiffness: 120, damping: 30 });

  const measureRail = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const rb = rail.getBoundingClientRect();
    const tops = stepRefs.current.slice(0, n).map((el) => {
      if (!el) return 0;
      const eb = el.getBoundingClientRect();
      return eb.top + eb.height / 2 - rb.top;
    });
    setDotTops(tops);
    const safe = Math.max(0, Math.min(tops.length - 1, active));
    setIndicatorTop(tops[safe] ?? 0);
  }, [active, n]);

  const updateLineFill = useCallback(() => {
    const first = stepRefs.current[0];
    const last = stepRefs.current[n - 1];
    if (!first || !last) return;
    const vh = typeof window !== "undefined" ? window.innerHeight : 800;
    const anchor = vh * 0.42;
    const fr = first.getBoundingClientRect();
    const lr = last.getBoundingClientRect();
    const start = fr.top + fr.height * 0.35;
    const end = lr.top + lr.height * 0.35;
    const span = end - start || 1;
    const t = Math.max(0, Math.min(1, (anchor - start) / span));
    setLineFill(t);
  }, [n]);

  useLayoutEffect(() => {
    measureRail();
    updateLineFill();
    const onScroll = () => {
      measureRail();
      updateLineFill();
    };
    window.addEventListener("resize", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, [measureRail, updateLineFill]);

  useEffect(() => {
    ratiosRef.current = Array.from({ length: n }, () => 0);
    const els = stepRefs.current.slice(0, n).filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const idx = els.indexOf(e.target as HTMLDivElement);
          if (idx >= 0) {
            ratiosRef.current[idx] = e.intersectionRatio;
          }
        }
        let best = -1;
        let bestI = 0;
        ratiosRef.current.forEach((r, i) => {
          if (r > best) {
            best = r;
            bestI = i;
          }
        });
        if (best > 0.08) setActive(bestI);
      },
      { threshold: [0, 0.08, 0.15, 0.25, 0.4, 0.55, 0.7, 0.85, 1], rootMargin: "-26% 0px -26% 0px" },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [n]);

  const dotProgress = (i: number) => {
    if (n <= 1) return lineFill;
    return i / (n - 1);
  };

  const isDotFilled = (i: number) => dotProgress(i) <= lineFill + 0.04;

  return (
    <section ref={sectionRef} id="process" className="relative overflow-hidden bg-[#030303] py-24 md:py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(209,18,27,0.1)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_0%_80%,rgba(209,18,27,0.06)_0%,transparent_50%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        {/* Section header */}
        <motion.div
          initial={revealLiftInitial(lg)}
          whileInView={revealLiftEnter}
          viewport={viewportReveal}
          transition={{ duration: 0.88, ease: lg ? cinematicEase : mobilePopEase }}
          className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between lg:mb-16"
        >
          <div className={sectionTitleInset}>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#E50914]">
              {t.process.eyebrow}
            </span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl lg:text-6xl">
              {t.process.title}
            </h2>
          </div>
          <div className="hidden min-h-[1px] flex-1 md:block" aria-hidden />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-0">
          {/* Left image */}
          <motion.div
            initial={lg ? { opacity: 0, scale: 1.06, y: 0 } : { opacity: 0, scale: 1.09, y: 22 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={viewportReveal}
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
              viewport={viewportReveal}
              variants={stepParentVariants}
            >
              {/* Progress line rail */}
              <div
                ref={railRef}
                className="pointer-events-none absolute left-0 top-0 h-full w-10 lg:w-12"
                aria-hidden
              >
                {/* Background track */}
                <div
                  className="absolute left-[18px] top-8 bottom-8 w-[2px] overflow-hidden rounded-full bg-white/[0.08]"
                  style={{ transform: "translateX(-50%)" }}
                >
                  {/* Filled progress */}
                  <motion.div
                    className="absolute left-0 top-0 w-full origin-top bg-gradient-to-b from-[#E50914] via-[#E50914] to-[#ff3d47]"
                    style={{ height: "100%", scaleY: smoothLineFill }}
                  />
                </div>

                {/* Animated glow along the line */}
                <motion.div
                  className="absolute left-[18px] w-4 h-8 -translate-x-1/2 rounded-full bg-[#E50914]/60 blur-md"
                  style={{
                    top: useTransform(smoothLineFill, [0, 1], ["32px", "calc(100% - 32px)"]),
                  }}
                />

                {/* Step dots */}
                {dotTops.map((top, i) =>
                  i === active ? null : (
                    <span
                      key={steps[i]?.number ?? i}
                      className={`absolute left-[18px] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 ${
                        isDotFilled(i)
                          ? "border-[#E50914] bg-[#E50914] shadow-[0_0_16px_rgba(229,9,20,0.6)]"
                          : "border-white/20 bg-[#0a0a0a]"
                      }`}
                      style={{ top }}
                    />
                  ),
                )}

                {/* Active indicator (larger, animated) */}
                <motion.span
                  className="absolute left-[18px] z-[2] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#E50914] bg-[#E50914] shadow-[0_0_24px_rgba(229,9,20,0.75),0_0_48px_rgba(229,9,20,0.35)]"
                  animate={{ top: indicatorTop }}
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                >
                  {/* Inner pulse */}
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#E50914]/40" />
                </motion.span>
              </div>

              {/* Step cards */}
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  variants={stepItemVariants(lg)}
                  className={`group relative border-b border-white/[0.06] py-10 first:pt-0 lg:py-10 lg:pl-6 ${
                    active === index ? "opacity-100" : "opacity-60"
                  } transition-opacity duration-500`}
                >
                  {/* Large watermark number */}
                  <span className="pointer-events-none absolute -left-2 top-4 select-none font-display text-[clamp(4rem,14vw,7rem)] font-bold leading-none text-white/[0.03] transition-colors duration-500 group-hover:text-[#E50914]/8 md:left-0 lg:-left-1">
                    {step.number}
                  </span>
                  
                  <div className="relative flex min-w-0 flex-col gap-3 pl-4 md:pl-6 lg:pl-6">
                    {/* Step number badge */}
                    <span className="mb-1 inline-flex w-max items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white/50">
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
          viewport={viewportReveal}
          transition={{ duration: 0.75, ease: lg ? cinematicEase : mobilePopEase, delay: 0.1 }}
          className="mt-14 flex flex-col items-center justify-center gap-4 border-t border-white/[0.06] pt-10 text-center md:mt-16 md:flex-row md:pt-12"
        >
          <p className="text-sm text-white/50 md:text-base">Готовий почати свій візит?</p>
          <a
            href="#contact"
            className="site-cta-primary"
          >
            {t.contact.bookAppointment}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
