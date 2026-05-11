"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { useI18n } from "@/components/providers/I18nProvider";

const easeOut = [0.22, 1, 0.36, 1] as const;

type PageLoaderProps = {
  /** Після повного зникнення оверлею (exit Framer) — для старту анімацій Hero тощо */
  onIntroComplete?: () => void;
};

export function PageLoader({ onIntroComplete }: PageLoaderProps) {
  const { t } = useI18n();
  const reduce = useReducedMotion() ?? false;
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (reduce) {
      const id = window.setTimeout(() => setShow(false), 320);
      return () => window.clearTimeout(id);
    }

    const minMs = 920;
    const t0 = performance.now();
    let hideTimer = 0;

    const done = () => {
      const wait = Math.max(0, minMs - (performance.now() - t0));
      hideTimer = window.setTimeout(() => setShow(false), wait);
    };

    if (document.readyState === "complete") {
      done();
    } else {
      window.addEventListener("load", done, { once: true });
    }

    return () => {
      window.removeEventListener("load", done);
      if (hideTimer) window.clearTimeout(hideTimer);
    };
  }, [reduce]);

  return (
    <AnimatePresence onExitComplete={onIntroComplete}>
      {show && (
        <motion.div
          key="venom-page-loader"
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label={t.meta.title}
          className="fixed inset-0 z-[300] flex items-center justify-center overflow-hidden bg-[#020202]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.28 : 0.65, ease: easeOut }}
        >
          {/* Layer A — conic wash + vignette */}
          <div
            className="pointer-events-none absolute inset-[-40%] opacity-70"
            style={{
              background:
                "conic-gradient(from 120deg at 50% 50%, rgba(229,9,20,0.45) 0deg, transparent 90deg, rgba(229,9,20,0.2) 180deg, transparent 270deg, rgba(229,9,20,0.35) 360deg)",
              animation: reduce ? "none" : "venom-sweep 4.2s linear infinite",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_50%,transparent_0%,rgba(0,0,0,0.88)_72%,#000_100%)]"
            aria-hidden
          />

          {/* Layer B — three ring shells */}
          <div className="pointer-events-none absolute flex h-[min(72vw,280px)] w-[min(72vw,280px)] items-center justify-center" aria-hidden>
            <div
              className="absolute inset-0 rounded-full border border-white/[0.07]"
              style={{
                animation: reduce ? "none" : "venom-orbit 5.5s linear infinite",
              }}
            />
            <div
              className="absolute inset-[10%] rounded-full border border-[#E50914]/25 shadow-[0_0_42px_-8px_rgba(229,9,20,0.55)]"
              style={{
                animation: reduce ? "none" : "venom-orbit-rev 3.8s linear infinite",
              }}
            />
            <div
              className="absolute inset-[22%] rounded-full border border-white/[0.12]"
              style={{
                animation: reduce ? "none" : "venom-orbit 2.6s linear infinite",
              }}
            />
            <div
              className="absolute inset-[34%] rounded-full bg-[radial-gradient(circle_at_50%_40%,rgba(229,9,20,0.2),transparent_62%)]"
              style={{
                animation: reduce ? "none" : "venom-breathe 2.4s ease-in-out infinite",
              }}
            />
          </div>

          {/* Layer C — logo stack + glass plate */}
          <div className="relative z-[2] flex flex-col items-center gap-5 px-6">
            <motion.div
              className="relative rounded-2xl border border-white/[0.1] bg-black/55 px-10 py-8 shadow-[0_0_0_1px_rgba(229,9,20,0.12),0_24px_80px_-24px_rgba(0,0,0,0.95),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md"
              initial={reduce ? undefined : { scale: 0.92, opacity: 0 }}
              animate={reduce ? undefined : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.55, ease: easeOut, delay: 0.08 }}
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-80"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(229,9,20,0.35) 0%, transparent 38%, transparent 62%, rgba(229,9,20,0.2) 100%)",
                  mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: "1px",
                }}
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent opacity-50" aria-hidden />
              <div className="relative scale-[1.08]">
                <BrandLogo asStatic wordmark={t.brand.wordmark} ariaLabel={t.header.logoAria} size="header" />
              </div>
            </motion.div>
            <div className="flex gap-1.5" aria-hidden>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1 w-1 rounded-full bg-[#E50914]/70"
                  style={{
                    animation: reduce ? "none" : `venom-breathe 1.1s ease-in-out ${i * 0.18}s infinite`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
