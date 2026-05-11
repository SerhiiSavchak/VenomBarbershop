"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { useI18n } from "@/components/providers/I18nProvider";
import type { Lang } from "@/lib/i18n";
import { cinematicEase, mobilePopEase } from "@/lib/motion";

const menuListVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.065, delayChildren: 0.14 },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: mobilePopEase },
  },
};

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t.nav.about },
    { href: "#process", label: t.nav.process },
    { href: "#services", label: t.nav.services },
    { href: "#space", label: t.nav.space },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) return;
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useLayoutEffect(() => {
    if (!isMobileMenuOpen) return;

    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    const prev = {
      htmlOverflow: html.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
      bodyTouchAction: body.style.touchAction,
    };

    /* Не чіпаємо scrollbar-gutter і не додаємо padding-right — з `scrollbar-gutter: stable` у globals це часто дає подвійний зсув. */
    html.style.overscrollBehavior = "none";
    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.touchAction = "none";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      html.style.overflow = prev.htmlOverflow;
      html.style.overscrollBehavior = prev.htmlOverscroll;
      body.style.position = prev.bodyPosition;
      body.style.top = prev.bodyTop;
      body.style.left = prev.bodyLeft;
      body.style.right = prev.bodyRight;
      body.style.width = prev.bodyWidth;
      body.style.touchAction = prev.bodyTouchAction;
      /* html { scroll-behavior: smooth } інакше дає «проскрол» при scrollTo після unlock */
      const prevScrollBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      html.style.scrollBehavior = prevScrollBehavior;
      queueMicrotask(() => setIsScrolled(window.scrollY > 40));
    };
  }, [isMobileMenuOpen]);

  const switchLang = (next: Lang) => setLang(next);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.95, ease: cinematicEase }}
        className={`fixed left-0 right-0 top-0 z-50 isolate border-b ${
          /* Мобілка: один стиль завжди — зміна padding/blur від scroll або lock не рухає шапку. */
          "max-lg:border-white/[0.06] max-lg:bg-black/92 max-lg:backdrop-blur-xl max-lg:transition-[background-color,border-color] max-lg:duration-500 max-lg:motion-reduce:transition-none " +
          /* Десктоп: компактність від скролу + анімація padding. */
          (isScrolled
            ? "lg:border-white/[0.06] lg:bg-black/92 lg:py-3.5 lg:backdrop-blur-xl lg:md:py-4 lg:transition-[padding-top,padding-bottom,background-color,border-color] lg:duration-500 lg:motion-reduce:transition-none"
            : "lg:border-black/40 lg:bg-black/75 lg:py-5 lg:backdrop-blur-md lg:md:py-6 lg:transition-[padding-top,padding-bottom,background-color,border-color] lg:duration-500 lg:motion-reduce:transition-none")
        }`}
      >
        <div className="mx-auto flex w-full max-w-[min(100%,1820px)] items-center justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-7 max-lg:min-h-[64px] max-lg:px-4 max-lg:pb-3 max-lg:pt-[max(0.35rem,env(safe-area-inset-top,0px))] sm:max-lg:px-8 sm:max-lg:pb-3.5 sm:max-lg:pt-[max(0.55rem,env(safe-area-inset-top,0px))] md:max-lg:px-12 lg:px-16 lg:py-0">
          <div className="min-w-0 shrink">
            <BrandLogo emphasizeMobile wordmark={t.brand.wordmark} ariaLabel={t.header.logoAria} size="header" />
          </div>

          <nav className="hidden items-center justify-center gap-9 xl:gap-11 2xl:gap-12 lg:flex" aria-label={t.header.navPrimaryAria}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75 antialiased transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex min-w-0 shrink-0 items-center justify-end gap-2 sm:gap-2.5 md:gap-3.5">
            <div
              className="hidden shrink-0 items-center gap-0.5 rounded border border-white/[0.14] bg-black/55 p-0.5 lg:flex"
              role="group"
              aria-label={t.header.langSwitcherAria}
            >
              <button
                type="button"
                aria-pressed={lang === "uk"}
                onClick={() => switchLang("uk")}
                className={`min-h-[36px] min-w-[2.75rem] px-2.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                  lang === "uk" ? "bg-white/14 text-white" : "text-white/55 hover:text-white/85"
                }`}
              >
                {t.header.langUk}
              </button>
              <span className="text-white/25 select-none" aria-hidden>
                |
              </span>
              <button
                type="button"
                aria-pressed={lang === "en"}
                onClick={() => switchLang("en")}
                className={`min-h-[36px] min-w-[2.75rem] px-2.5 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                  lang === "en" ? "bg-white/14 text-white" : "text-white/55 hover:text-white/85"
                }`}
              >
                {t.header.langEn}
              </button>
            </div>

            <div className="hidden items-center lg:flex">
              <a href="#contact" className="site-cta-primary">
                <span className="xl:hidden">{t.header.bookNowShort}</span>
                <span className="hidden xl:inline">{t.header.bookNow}</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="relative z-[2] flex h-16 w-16 min-h-[64px] min-w-[64px] shrink-0 items-center justify-center rounded-2xl text-white transition-colors hover:text-[#E50914] active:opacity-80 lg:hidden touch-manipulation [-webkit-tap-highlight-color:transparent]"
              aria-label={t.header.openMenu}
            >
              <Menu className="h-8 w-8" strokeWidth={2.1} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.header.navMobileAria}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[60] flex items-stretch justify-center lg:hidden"
          >
            <motion.button
              type="button"
              aria-label={t.header.closeMenuBackdrop}
              className="absolute inset-0 z-0 bg-black/88 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="relative z-[1] flex min-h-[100svh] w-full cursor-default flex-col bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: cinematicEase }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/75 to-transparent"
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-x-0 top-24 h-40 bg-[radial-gradient(ellipse_70%_80%_at_50%_0%,rgba(229,9,20,0.12)_0%,transparent_72%)]" aria-hidden />

              <div className="flex max-lg:min-h-[64px] items-center justify-between gap-3 border-b border-white/[0.07] bg-black/30 px-4 pb-3 pt-[max(0.35rem,env(safe-area-inset-top,0px))] sm:px-8 sm:pb-3.5 sm:pt-[max(0.55rem,env(safe-area-inset-top,0px))]">
                <div className="min-w-0 shrink" onClick={closeMenu}>
                  <BrandLogo emphasizeMobile wordmark={t.brand.wordmark} ariaLabel={t.header.logoAria} size="header" />
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-16 w-16 min-h-[64px] min-w-[64px] shrink-0 items-center justify-center rounded-2xl text-white transition-colors hover:text-[#E50914] active:opacity-80 touch-manipulation [-webkit-tap-highlight-color:transparent]"
                  aria-label={t.header.closeMenu}
                >
                  <X className="h-8 w-8" strokeWidth={2.1} />
                </button>
              </div>

              <motion.nav
                className="flex min-h-0 flex-1 flex-col items-center justify-center gap-0 overflow-y-auto px-6 py-8"
                variants={menuListVariants}
                initial="hidden"
                animate="show"
                aria-label={t.header.navMobileAria}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={menuItemVariants}
                    onClick={closeMenu}
                    className="group relative block w-full max-w-sm py-3.5 text-center font-display text-[1.375rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:text-[#E50914] sm:text-2xl sm:tracking-[0.14em]"
                  >
                    <span className="relative z-[1] inline-block">{link.label}</span>
                    <span
                      className="pointer-events-none absolute inset-x-6 bottom-0 h-px origin-center scale-x-75 bg-gradient-to-r from-transparent via-white/[0.12] to-transparent group-last:hidden"
                      aria-hidden
                    />
                  </motion.a>
                ))}
              </motion.nav>

              <div className="shrink-0 border-t border-white/[0.08] bg-black/50 px-5 py-6 backdrop-blur-sm sm:px-8 sm:py-7">
                <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-5">
                  <div
                    className="flex items-center gap-1 rounded-full border border-white/[0.12] bg-black/60 p-1"
                    role="group"
                    aria-label={t.header.langSwitcherAria}
                  >
                    <button
                      type="button"
                      aria-pressed={lang === "uk"}
                      onClick={() => switchLang("uk")}
                      className={`min-h-[40px] min-w-[3.25rem] rounded-full px-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-all ${
                        lang === "uk"
                          ? "bg-[#E50914] text-white shadow-[0_0_24px_-4px_rgba(229,9,20,0.55)]"
                          : "text-white/55 hover:text-white/85"
                      }`}
                    >
                      {t.header.langUk}
                    </button>
                    <button
                      type="button"
                      aria-pressed={lang === "en"}
                      onClick={() => switchLang("en")}
                      className={`min-h-[40px] min-w-[3.25rem] rounded-full px-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-all ${
                        lang === "en"
                          ? "bg-[#E50914] text-white shadow-[0_0_24px_-4px_rgba(229,9,20,0.55)]"
                          : "text-white/55 hover:text-white/85"
                      }`}
                    >
                      {t.header.langEn}
                    </button>
                  </div>
                  <a
                    href="#contact"
                    onClick={closeMenu}
                    className="site-cta-primary w-full max-w-sm justify-center text-center"
                  >
                    {t.header.bookNowShort}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
