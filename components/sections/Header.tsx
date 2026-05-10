"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import type { Lang } from "@/lib/i18n";
import { cinematicEase } from "@/lib/motion";

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

  const switchLang = (next: Lang) => setLang(next);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.95, ease: cinematicEase }}
        className={`fixed left-0 right-0 top-0 z-50 isolate transition-[padding,background] duration-500 ${
          isScrolled
            ? "border-b border-white/[0.06] bg-black/92 py-3 backdrop-blur-xl"
            : "border-b border-black/40 bg-black/75 py-5 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-3 px-5 md:gap-4 md:px-10 lg:px-14">
          <a href="#hero" aria-label={t.header.logoAria} className="group flex shrink-0 items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-accent-red">
              <span className="font-display text-sm font-bold text-white">V</span>
              <span className="pointer-events-none absolute inset-0 rounded-full bg-accent-red opacity-35 blur-[10px] transition-opacity group-hover:opacity-55" />
            </div>
            <span className="font-display text-sm font-bold tracking-[0.18em] text-white md:text-base">{t.brand.wordmark}</span>
          </a>

          <nav className="hidden items-center justify-center gap-8 lg:flex" aria-label={t.header.navPrimaryAria}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 antialiased transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <div
              className="flex items-center gap-0.5 rounded border border-white/[0.12] bg-black/50 p-0.5"
              role="group"
              aria-label={t.header.langSwitcherAria}
            >
              <button
                type="button"
                aria-pressed={lang === "uk"}
                onClick={() => switchLang("uk")}
                className={`min-h-[32px] min-w-[2.25rem] px-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${
                  lang === "uk" ? "bg-white/12 text-white" : "text-white/55 hover:text-white/85"
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
                className={`min-h-[32px] min-w-[2.25rem] px-2 text-[10px] font-bold uppercase tracking-[0.14em] transition-colors ${
                  lang === "en" ? "bg-white/12 text-white" : "text-white/55 hover:text-white/85"
                }`}
              >
                {t.header.langEn}
              </button>
            </div>

            <a
              href="#contact"
              className="hidden bg-accent-red px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-accent-red-bright sm:inline-flex"
            >
              {t.header.bookNow}
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 text-white/80 transition-colors hover:text-white lg:hidden"
              aria-label={t.header.openMenu}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/90 backdrop-blur-lg"
              aria-label={t.header.closeMenuBackdrop}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-[#050505] px-8 pb-10 pt-6 shadow-2xl shadow-black"
            >
              <div className="mb-10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                  aria-label={t.header.closeMenu}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-1 flex-col gap-6" aria-label={t.header.navMobileAria}>
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-2xl font-semibold uppercase tracking-wide text-white"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-auto w-full bg-accent-red py-4 text-center text-xs font-bold uppercase tracking-[0.2em] text-white"
              >
                {t.header.bookAppointment}
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
