"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#space", label: "Space" },
  { href: "#process", label: "Process" },
  { href: "#masters", label: "Masters" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8">
          <nav className="flex items-center justify-between">
            {/* Logo - red circle with O + OBSIDIAN wordmark */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-8 h-8 bg-accent-red rounded-full flex items-center justify-center">
                  <span className="font-display text-sm font-bold text-white">O</span>
                </div>
                <div className="absolute inset-0 bg-accent-red rounded-full blur-sm opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>
              <span className="font-display text-base md:text-lg font-bold tracking-wider text-white">OBSIDIAN</span>
            </a>

            {/* Desktop Navigation - centered */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] font-medium text-foreground-muted hover:text-white uppercase tracking-wider transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <button className="bg-accent-red hover:bg-accent-red-bright text-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-colors hidden sm:block">
                Book Now
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-white hover:text-accent-red transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-lg" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#050505] p-8"
            >
              <div className="flex justify-end mb-12">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white hover:text-accent-red transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-xl font-display font-semibold text-white hover:text-accent-red transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <button className="mt-8 w-full bg-accent-red hover:bg-accent-red-bright text-white px-6 py-3 text-xs font-bold uppercase tracking-wider transition-colors">
                  Book Appointment
                </button>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
