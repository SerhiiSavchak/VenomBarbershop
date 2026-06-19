"use client";

import { useEffect } from "react";

/**
 * Keeps `--app-vh` in sync with the visible viewport (1% of innerHeight).
 * Telegram / iOS in-app WebViews often mis-report `dvh`; this gives a stable fallback.
 */
export function useStableViewportHeight() {
  useEffect(() => {
    const root = document.documentElement;

    const sync = () => {
      root.style.setProperty("--app-vh", `${window.innerHeight * 0.01}px`);
    };

    sync();
    window.addEventListener("resize", sync, { passive: true });
    window.visualViewport?.addEventListener("resize", sync, { passive: true });

    return () => {
      window.removeEventListener("resize", sync);
      window.visualViewport?.removeEventListener("resize", sync);
    };
  }, []);
}
