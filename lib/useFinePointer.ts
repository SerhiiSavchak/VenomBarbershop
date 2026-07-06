"use client";

import { useSyncExternalStore } from "react";

const FINE_POINTER_MQ = "(hover: hover) and (pointer: fine)";

function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia(FINE_POINTER_MQ);
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getSnapshot() {
  return window.matchMedia(FINE_POINTER_MQ).matches;
}

function getServerSnapshot() {
  return false;
}

/** true, если устройство поддерживает точный hover (мышь / трекпад). */
export function useFinePointer(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
