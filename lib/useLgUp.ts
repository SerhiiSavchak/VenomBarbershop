"use client";

import { useEffect, useState } from "react";

/** `lg` в Tailwind — 1024px */
export function useLgUp(): boolean {
  const [lg, setLg] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setLg(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return lg;
}
