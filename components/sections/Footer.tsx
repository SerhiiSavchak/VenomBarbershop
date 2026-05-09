"use client";

import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#space" },
  { label: "Team", href: "#masters" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8 py-10 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent-red rounded-full flex items-center justify-center">
              <span className="font-display text-lg font-bold text-white">V</span>
            </div>
            <span className="font-display text-lg font-bold tracking-wider">VENOM</span>
          </div>

          {/* Nav Links - horizontal */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-foreground-muted hover:text-white uppercase tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
            <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors group">
              <Instagram className="w-4 h-4 text-foreground-muted group-hover:text-accent-red transition-colors" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors group">
              <Facebook className="w-4 h-4 text-foreground-muted group-hover:text-accent-red transition-colors" />
            </a>
            <a href="#" className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors group">
              <Twitter className="w-4 h-4 text-foreground-muted group-hover:text-accent-red transition-colors" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-muted text-[10px] uppercase tracking-wider">
            &copy; {new Date().getFullYear()} VENOM Barbershop. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground-muted text-[10px] uppercase tracking-wider hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="text-foreground-muted text-[10px] uppercase tracking-wider hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
