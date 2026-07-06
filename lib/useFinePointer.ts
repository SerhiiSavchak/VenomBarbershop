"use client";

import { useEffect, useState } from "react";

const FINE_POINTER_MQ = "(hover: hover) and (pointer: fine)";

/** true, если устройство поддерживает точный hover (мышь / трекпад). */
export function useFinePointer(): boolean {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(FINE_POINTER_MQ);
    const sync = () => setFine(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return fine;
}
