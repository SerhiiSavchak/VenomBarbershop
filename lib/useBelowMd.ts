"use client";

import { useSyncExternalStore } from "react";

const BELOW_MD_MQ = "(max-width: 767px)";

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia(BELOW_MD_MQ);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(BELOW_MD_MQ).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * true, якщо в’юпорт вужчий за Tailwind `md` (768px) — мобільні горизонтальні рейки.
 * Hydration-safe через useSyncExternalStore.
 */
export function useBelowMd(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
