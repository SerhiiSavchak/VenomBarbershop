"use client";

import { useEffect, useRef } from "react";

/** Інтервал автопрокрутки для всіх snap-каруселей на сайті. */
export const SLIDER_AUTOPLAY_INTERVAL_MS = 2000;

/** Інтервал автопрокрутки для каруселі послуг (повільніший). */
export const SERVICES_AUTOPLAY_INTERVAL_MS = 6000;

/** Пауза після взаємодії користувача в каруселі послуг. */
export const SERVICES_INTERACTION_PAUSE_MS = 12000;

export type SnapCarouselAutoplayOptions = {
  /** Затримка перед першим автопрокручуванням (мс). */
  initialDelayMs?: number;
  /** Інтервал між слайдами (мс). */
  intervalMs?: number;
  /** Пауза після свайпу / дотику перед відновленням автопрокрутки (мс). */
  interactionPauseMs?: number;
};

/**
 * Плавно переходить до наступного слайда в горизонтальному контейнері з snap.
 * Пауза під час взаємодії (pointer) і коли блок поза екраном; вимкнено при prefers-reduced-motion.
 */
export function useSnapCarouselAutoplay(
  container: HTMLElement | null,
  itemCount: number,
  enabled: boolean,
  options: SnapCarouselAutoplayOptions = {},
) {
  const {
    initialDelayMs = 0,
    intervalMs = SLIDER_AUTOPLAY_INTERVAL_MS,
    interactionPauseMs = 600,
  } = options;
  const pausedRef = useRef(false);
  const inViewRef = useRef(true);

  useEffect(() => {
    const el = container;
    if (!el || !enabled || itemCount < 2) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([e]) => {
        inViewRef.current = Boolean(e?.isIntersecting && (e.intersectionRatio ?? 0) > 0.2);
      },
      { threshold: [0, 0.12, 0.2, 0.35] },
    );
    io.observe(el);

    let resumeTimerId: number | undefined;

    const clearResumeTimer = () => {
      if (resumeTimerId !== undefined) {
        window.clearTimeout(resumeTimerId);
        resumeTimerId = undefined;
      }
    };

    const pauseForInteraction = () => {
      pausedRef.current = true;
      clearResumeTimer();
      el.scrollTo({ left: el.scrollLeft, behavior: "auto" });
    };

    const scheduleResumeAfterInteraction = () => {
      clearResumeTimer();
      resumeTimerId = window.setTimeout(() => {
        pausedRef.current = false;
        resumeTimerId = undefined;
      }, interactionPauseMs);
    };

    el.addEventListener("pointerdown", pauseForInteraction);
    el.addEventListener("pointerup", scheduleResumeAfterInteraction);
    el.addEventListener("pointercancel", scheduleResumeAfterInteraction);
    el.addEventListener("touchstart", pauseForInteraction, { passive: true });
    el.addEventListener("touchend", scheduleResumeAfterInteraction, { passive: true });
    el.addEventListener("touchcancel", scheduleResumeAfterInteraction, { passive: true });

    const tick = () => {
      if (pausedRef.current || !inViewRef.current) return;
      if (el.clientWidth < 8) return;

      const kids = [...el.children].filter((c): c is HTMLElement => c instanceof HTMLElement);
      if (kids.length < 2) return;

      let best = 0;
      let bestScore = Infinity;
      const anchor = el.scrollLeft + el.clientWidth * 0.32;
      kids.forEach((child, i) => {
        const center = child.offsetLeft + child.offsetWidth / 2;
        const score = Math.abs(center - anchor);
        if (score < bestScore) {
          bestScore = score;
          best = i;
        }
      });
      const next = (best + 1) % kids.length;
      const nextEl = kids[next];
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const targetLeft = Math.min(maxScroll, Math.max(0, nextEl.offsetLeft));
      el.scrollTo({ left: targetLeft, behavior: "smooth" });
    };

    let intervalId: number | undefined;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(tick, intervalMs);
    }, initialDelayMs);

    return () => {
      window.clearTimeout(startId);
      clearResumeTimer();
      if (intervalId !== undefined) window.clearInterval(intervalId);
      io.disconnect();
      el.removeEventListener("pointerdown", pauseForInteraction);
      el.removeEventListener("pointerup", scheduleResumeAfterInteraction);
      el.removeEventListener("pointercancel", scheduleResumeAfterInteraction);
      el.removeEventListener("touchstart", pauseForInteraction);
      el.removeEventListener("touchend", scheduleResumeAfterInteraction);
      el.removeEventListener("touchcancel", scheduleResumeAfterInteraction);
    };
  }, [container, itemCount, enabled, initialDelayMs, intervalMs, interactionPauseMs]);
}
