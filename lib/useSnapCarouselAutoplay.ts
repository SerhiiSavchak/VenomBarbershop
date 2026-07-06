"use client";

import { useEffect, useRef } from "react";
import { isHorizontalSwipeIntent } from "@/lib/touch-gesture";
import { prefersReducedMotion } from "@/lib/useReducedMotionSafe";

/** Інтервал автопрокрутки для всіх snap-каруселей на сайті. */
export const SLIDER_AUTOPLAY_INTERVAL_MS = 2000;

/** Інтервал автопрокрутки для каруселі послуг (повільніший). */
export const SERVICES_AUTOPLAY_INTERVAL_MS = 6000;

/** Пауза після взаємодії користувача в каруселі послуг. */
export const SERVICES_INTERACTION_PAUSE_MS = 12000;

/** Тривалість плавного програмного скролу між слайдами (мс). */
const AUTOPLAY_SCROLL_DURATION_MS = 800;

export type SnapCarouselAutoplayOptions = {
  /** Затримка перед першим автопрокручуванням (мс). */
  initialDelayMs?: number;
  /** Інтервал між слайдами (мс). */
  intervalMs?: number;
  /** Пауза після свайпу / дотику перед відновленням автопрокрутки (мс). */
  interactionPauseMs?: number;
};

function easeInOutCubic(p: number): number {
  return p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2;
}

/**
 * Плавно переходить до наступного слайда в горизонтальному контейнері зі snap-center.
 * Ціль скролу — точний snap-центр наступної картки, тому CSS snap нічого не «дотягує».
 * Пауза лише під час горизонтальної взаємодії; вертикальний скрол сторінки не блокується.
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

    if (prefersReducedMotion()) return;

    const io = new IntersectionObserver(
      ([e]) => {
        inViewRef.current = Boolean(e?.isIntersecting && (e.intersectionRatio ?? 0) > 0.2);
      },
      { threshold: [0, 0.12, 0.2, 0.35] },
    );
    io.observe(el);

    let resumeTimerId: number | undefined;
    let scrollRafId: number | undefined;
    let activePointer: { id: number; x: number; y: number; horizontal: boolean } | null = null;

    const restoreSnap = () => {
      el.style.scrollSnapType = "";
    };

    const cancelProgrammaticScroll = () => {
      if (scrollRafId !== undefined) {
        cancelAnimationFrame(scrollRafId);
        scrollRafId = undefined;
        restoreSnap();
      }
    };

    const animateScrollTo = (targetLeft: number) => {
      cancelProgrammaticScroll();
      const startLeft = el.scrollLeft;
      const delta = targetLeft - startLeft;
      if (Math.abs(delta) < 1) return;
      /* snap-mandatory «прилипає» до точок при кожному програмному scrollLeft,
         перетворюючи анімацію на стрибок — вимикаємо snap на час анімації */
      el.style.scrollSnapType = "none";
      const t0 = performance.now();

      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / AUTOPLAY_SCROLL_DURATION_MS);
        el.scrollLeft = startLeft + delta * easeInOutCubic(p);
        if (p < 1) {
          scrollRafId = requestAnimationFrame(step);
        } else {
          scrollRafId = undefined;
          restoreSnap();
        }
      };
      scrollRafId = requestAnimationFrame(step);
    };

    const clearResumeTimer = () => {
      if (resumeTimerId !== undefined) {
        window.clearTimeout(resumeTimerId);
        resumeTimerId = undefined;
      }
    };

    const pauseForHorizontalInteraction = () => {
      pausedRef.current = true;
      clearResumeTimer();
      cancelProgrammaticScroll();
    };

    const scheduleResumeAfterInteraction = () => {
      clearResumeTimer();
      resumeTimerId = window.setTimeout(() => {
        pausedRef.current = false;
        resumeTimerId = undefined;
      }, interactionPauseMs);
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;
      activePointer = { id: e.pointerId, x: e.clientX, y: e.clientY, horizontal: false };
      /* Палець на рейці — зупиняємо поточну програмну анімацію, щоб не боротися з жестом */
      cancelProgrammaticScroll();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === "mouse" || !activePointer || activePointer.id !== e.pointerId) return;
      if (activePointer.horizontal) return;
      if (!isHorizontalSwipeIntent(activePointer.x, activePointer.y, e.clientX, e.clientY)) return;
      activePointer.horizontal = true;
      pauseForHorizontalInteraction();
    };

    const finishPointer = (e: PointerEvent) => {
      if (e.pointerType === "mouse" || !activePointer || activePointer.id !== e.pointerId) return;
      if (activePointer.horizontal) scheduleResumeAfterInteraction();
      activePointer = null;
    };

    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", finishPointer);
    el.addEventListener("pointercancel", finishPointer);

    /** Snap-ціль для snap-center: центр картки збігається з центром рейки. */
    const centeredScrollLeft = (child: HTMLElement): number => {
      const railRect = el.getBoundingClientRect();
      const childRect = child.getBoundingClientRect();
      const childCenter = el.scrollLeft + (childRect.left - railRect.left) + childRect.width / 2;
      const target = childCenter - el.clientWidth / 2;
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      return Math.min(maxScroll, Math.max(0, target));
    };

    const tick = () => {
      if (pausedRef.current || !inViewRef.current) return;
      if (scrollRafId !== undefined) return;
      if (el.clientWidth < 8) return;

      const kids = [...el.children].filter((c): c is HTMLElement => c instanceof HTMLElement);
      if (kids.length < 2) return;

      /* Поточний слайд — той, чий центр найближчий до центру рейки */
      const viewCenter = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestScore = Infinity;
      kids.forEach((child, i) => {
        const center = child.offsetLeft + child.offsetWidth / 2;
        const score = Math.abs(center - viewCenter);
        if (score < bestScore) {
          bestScore = score;
          best = i;
        }
      });

      const next = (best + 1) % kids.length;
      animateScrollTo(centeredScrollLeft(kids[next]));
    };

    let intervalId: number | undefined;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(tick, intervalMs);
    }, initialDelayMs);

    return () => {
      window.clearTimeout(startId);
      clearResumeTimer();
      cancelProgrammaticScroll();
      if (intervalId !== undefined) window.clearInterval(intervalId);
      io.disconnect();
      activePointer = null;
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", finishPointer);
      el.removeEventListener("pointercancel", finishPointer);
    };
  }, [container, itemCount, enabled, initialDelayMs, intervalMs, interactionPauseMs]);
}
