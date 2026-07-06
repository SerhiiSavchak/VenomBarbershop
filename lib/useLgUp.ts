"use client";

import { useSyncExternalStore } from "react";

const LG_MQ = "(min-width: 1024px)";

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia(LG_MQ);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(LG_MQ).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * `lg` в Tailwind — 1024px. Hydration-safe: під час SSR/гідратації false
 * (збігається з серверним HTML), одразу після — реальне значення.
 */
export function useLgUp(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
