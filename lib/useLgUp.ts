"use client";

import { useEffect, useState } from "react";

const LG_MQ = "(min-width: 1024px)";

/** `lg` в Tailwind — 1024px */
export function useLgUp(): boolean {
  const [lg, setLg] = useState(
    () => typeof window !== "undefined" && window.matchMedia(LG_MQ).matches,
  );

  useEffect(() => {
    const mq = window.matchMedia(LG_MQ);
    const sync = () => setLg(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return lg;
}
