"use client";

import { useEffect, useState } from "react";

/** true, якщо в’юпорт вужчий за Tailwind `md` (768px) — мобільні горизонтальні рейки. */
export function useBelowMd(): boolean {
  const [v, setV] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setV(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return v;
}
