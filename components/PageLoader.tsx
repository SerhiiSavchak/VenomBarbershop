"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { useI18n } from "@/components/providers/I18nProvider";
import { useReducedMotionSafe } from "@/lib/useReducedMotionSafe";

const easeOut = [0.22, 1, 0.36, 1] as const;
const MIN_VISIBLE_MS = { desktop: 880, mobile: 1020 } as const;
const EXIT_MS = { normal: 0.48, reduce: 0.24 } as const;

type PageLoaderProps = {
  /** Коли лоадер починає зникати — старт анімацій Hero під оверлеєм */
  onIntroReady?: () => void;
};

export function PageLoader({ onIntroReady }: PageLoaderProps) {
  const { t } = useI18n();
  const reduce = useReducedMotionSafe();
  const [show, setShow] = useState(true);
  const [portalReady, setPortalReady] = useState(false);
  const readyFired = useRef(false);
  const mountedAt = useRef(0);

  const fireReady = () => {
    if (readyFired.current) return;
    readyFired.current = true;
    onIntroReady?.();
  };

  const hide = () => {
    fireReady();
    setShow(false);
  };

  useLayoutEffect(() => {
    mountedAt.current = performance.now();
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!portalReady) return;

    const minMs = window.matchMedia("(min-width: 1024px)").matches
      ? MIN_VISIBLE_MS.desktop
      : MIN_VISIBLE_MS.mobile;

    const scheduleHide = () => {
      const elapsed = performance.now() - mountedAt.current;
      const wait = Math.max(0, minMs - elapsed);
      return window.setTimeout(hide, wait);
    };

    if (reduce) {
      const id = scheduleHide();
      return () => window.clearTimeout(id);
    }

    let hideTimer = 0;
    let cancelled = false;

    const done = () => {
      if (cancelled) return;
      hideTimer = scheduleHide();
    };

    if (document.readyState === "complete") {
      done();
    } else {
      window.addEventListener("load", done, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", done);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, [reduce, portalReady]);

  const loader = (
    <AnimatePresence>
      {show && (
        <motion.div
          key="venom-page-loader"
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label={t.meta.title}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#020202]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? EXIT_MS.reduce : EXIT_MS.normal, ease: easeOut }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_42%_at_50%_48%,rgba(229,9,20,0.1)_0%,transparent_68%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_0%,rgba(0,0,0,0.55)_72%,#000_100%)]"
            aria-hidden
          />

          <div className="relative z-[1] flex flex-col items-center gap-7 px-6">
            <motion.div
              className="relative"
              initial={reduce ? false : { opacity: 0.92, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduce ? 0.2 : 0.36, ease: easeOut }}
            >
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E50914]/20 blur-3xl"
                style={{ animation: reduce ? "none" : "venom-loader-glow 2.4s ease-in-out infinite" }}
                aria-hidden
              />
              <div className="relative scale-[1.14]">
                <BrandLogo
                  asStatic
                  emphasizeMobile
                  wordmark={t.brand.wordmark}
                  ariaLabel={t.header.logoAria}
                  size="header"
                />
              </div>
            </motion.div>

            <div className="h-px w-[5.5rem] overflow-hidden rounded-full bg-white/[0.1]" aria-hidden>
              <motion.div
                className="h-full origin-left rounded-full bg-gradient-to-r from-[#E50914]/40 via-[#E50914] to-[#ff2a32]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: reduce ? 0.28 : 0.72,
                  ease: easeOut,
                  delay: reduce ? 0.05 : 0.1,
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!portalReady || typeof document === "undefined") {
    return loader;
  }

  return createPortal(loader, document.body);
}
