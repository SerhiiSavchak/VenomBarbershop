"use client";

import { useState, useEffect } from "react";
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
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
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
        className={`fixed left-0 right-0 top-0 z-50 isolate transition-[padding,background] duration-500 ${
          isScrolled
            ? "border-b border-white/[0.06] bg-black/92 py-3.5 backdrop-blur-xl md:py-4"
            : "border-b border-black/40 bg-black/75 py-5 backdrop-blur-md md:py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[min(100%,1820px)] items-center justify-between gap-3 px-4 sm:gap-4 sm:px-8 md:gap-5 md:px-12 lg:gap-7 lg:px-16">
          <div className="min-w-0 shrink">
            <BrandLogo wordmark={t.brand.wordmark} ariaLabel={t.header.logoAria} size="header" />
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
              className="relative z-[2] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.22] bg-[#0a0a0a]/95 text-white shadow-[0_0_0_1px_rgba(229,9,20,0.15),inset_0_1px_0_rgba(255,255,255,0.08)] transition-colors hover:border-[#E50914]/65 hover:bg-[#E50914]/15 hover:text-white lg:hidden"
              aria-label={t.header.openMenu}
            >
              <Menu className="h-6 w-6 text-white" strokeWidth={2} />
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
              className="relative z-[1] flex min-h-[100dvh] w-full cursor-default flex-col border-l border-r border-white/[0.06] bg-gradient-to-b from-[#0a0a0a] via-[#050505] to-black shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
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

              <div className="flex min-h-[3.25rem] items-center justify-between gap-3 border-b border-white/[0.07] bg-black/30 px-5 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-8">
                <div className="min-w-0 shrink" onClick={closeMenu}>
                  <BrandLogo wordmark={t.brand.wordmark} ariaLabel={t.header.logoAria} size="header" />
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/[0.14] bg-black/45 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors hover:border-[#E50914]/50 hover:bg-[#E50914]/12 hover:text-white"
                  aria-label={t.header.closeMenu}
                >
                  <X className="h-6 w-6" strokeWidth={1.85} />
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
