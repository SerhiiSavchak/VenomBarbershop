"use client";

import { useEffect, useRef } from "react";

/** Інтервал автопрокрутки для всіх snap-каруселей на сайті. */
export const SLIDER_AUTOPLAY_INTERVAL_MS = 2000;

/**
 * Плавно переходить до наступного слайда в горизонтальному контейнері з snap.
 * Пауза під час взаємодії (pointer) і коли блок поза екраном; вимкнено при prefers-reduced-motion.
 */
export function useSnapCarouselAutoplay(
  container: HTMLElement | null,
  itemCount: number,
  enabled: boolean,
) {
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

    const pause = () => {
      pausedRef.current = true;
    };
    const resumeSoon = () => {
      window.setTimeout(() => {
        pausedRef.current = false;
      }, 600);
    };

    el.addEventListener("pointerdown", pause);
    el.addEventListener("pointerup", resumeSoon);
    el.addEventListener("pointercancel", resumeSoon);

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

    const id = window.setInterval(tick, SLIDER_AUTOPLAY_INTERVAL_MS);
    return () => {
      window.clearInterval(id);
      io.disconnect();
      el.removeEventListener("pointerdown", pause);
      el.removeEventListener("pointerup", resumeSoon);
      el.removeEventListener("pointercancel", resumeSoon);
    };
  }, [container, itemCount, enabled]);
}
