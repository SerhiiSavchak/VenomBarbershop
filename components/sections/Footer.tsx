"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Haircut", href: "#services" },
    { label: "Beard Trim", href: "#services" },
    { label: "Shave", href: "#services" },
    { label: "VIP Package", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#space" },
    { label: "Our Team", href: "#masters" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
  ],
  support: [
    { label: "Contact", href: "#contact" },
    { label: "Book Online", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Careers", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-background-secondary border-t border-foreground/5">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-accent-red rounded-full flex items-center justify-center">
                  <span className="font-display text-xl font-bold text-foreground">V</span>
                </div>
              </div>
              <span className="font-display text-xl font-bold tracking-wider">VENOM</span>
            </motion.div>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-sm mb-6">
              Premium barbershop experience where craftsmanship meets cinematic atmosphere. 
              Every cut is a masterpiece.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-background-card rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors group">
                <Instagram className="w-4 h-4 text-foreground-muted group-hover:text-accent-red transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-background-card rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors group">
                <Facebook className="w-4 h-4 text-foreground-muted group-hover:text-accent-red transition-colors" />
              </a>
              <a href="#" className="w-10 h-10 bg-background-card rounded-full flex items-center justify-center hover:bg-accent-red/20 transition-colors group">
                <Twitter className="w-4 h-4 text-foreground-muted group-hover:text-accent-red transition-colors" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-foreground-muted text-sm hover:text-accent-red transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-foreground-muted text-sm hover:text-accent-red transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold uppercase tracking-wider text-sm mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-foreground-muted text-sm hover:text-accent-red transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground-muted text-xs">
            &copy; {new Date().getFullYear()} VENOM Barbershop. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-foreground-muted text-xs hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground-muted text-xs hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
