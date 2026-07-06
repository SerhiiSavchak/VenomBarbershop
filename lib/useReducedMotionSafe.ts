"use client";

import { useSyncExternalStore } from "react";

/**
 * Глобальний перемикач: чи поважати системний prefers-reduced-motion.
 * false — сайт завжди показує повні анімації (рішення власника:
 * системний флаг Windows часто увімкнений непомітно для користувача
 * і «вимикав» усі ховери, автоскрол каруселей та анімації Hero).
 * Поверни true, якщо потрібно знову поважати системну настройку.
 */
export const HONOR_REDUCED_MOTION = false;

const REDUCED_MOTION_MQ = "(prefers-reduced-motion: reduce)";

/** Синхронна перевірка (для не-React коду, наприклад хука автопрокрутки). */
export function prefersReducedMotion(): boolean {
  if (!HONOR_REDUCED_MOTION) return false;
  return window.matchMedia(REDUCED_MOTION_MQ).matches;
}

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_MQ);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(REDUCED_MOTION_MQ).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Hydration-safe заміна framer-motion `useReducedMotion`.
 * Під час SSR і гідратації повертає false (як у серверному HTML),
 * одразу після — реальне значення. Без hydration mismatch.
 */
export function useReducedMotionSafe(): boolean {
  const systemValue = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return HONOR_REDUCED_MOTION ? systemValue : false;
}
