"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Clock, Phone, Mail, Calendar, ArrowRight } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, revealLiftInitial, viewportReveal, sectionTitleInset } from "@/lib/motion";
import { useLgUp } from "@/lib/useLgUp";

const contactCardVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

function contactItemVariants(lg: boolean) {
  return {
    hidden: lg ? { opacity: 0, y: 20, x: 0 } : { opacity: 0, y: 18, x: -12 },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.65, ease: lg ? cinematicEase : mobilePopEase },
    },
  };
}

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const lg = useLgUp();

  const rows = [
    { icon: MapPin, label: c.addressLabel, text: c.address, href: c.googleMapsOpenUrl },
    { icon: Clock, label: c.hoursLabel, text: c.hours, href: null },
    { icon: Phone, label: c.phoneLabel, text: c.phone, href: c.phoneHref },
    { icon: Mail, label: c.emailLabel, text: c.email, href: `mailto:${c.email}` },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-28 md:py-40">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_120%,rgba(209,18,27,0.35)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_0%,rgba(209,18,27,0.12)_0%,transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_90%_50%,rgba(209,18,27,0.08)_0%,transparent_50%)]" />

      <div className="relative z-[10] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        {/* Main headline */}
        <motion.div
          initial={lg ? { opacity: 0, y: 48, x: 0 } : { opacity: 0, y: 36, x: -18 }}
          whileInView={revealLiftEnter}
          viewport={viewportReveal}
          transition={{ duration: 0.95, ease: lg ? cinematicEase : mobilePopEase }}
          className={`max-w-5xl ${sectionTitleInset}`}
        >
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.42em] text-[#E50914]">{c.eyebrow}</span>
          <h2 className="hero-display text-[clamp(3rem,10vw,6.5rem)] text-white">{c.title}</h2>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">{c.lead}</p>
          
          {/* CTA buttons */}
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch lg:justify-start">
            <a
              href={`mailto:${c.email}?subject=${encodeURIComponent(c.bookAppointment)}`}
              className="group site-cta-primary order-1 w-full sm:order-1 sm:w-auto"
            >
              <Calendar className="h-4 w-4" strokeWidth={2} aria-hidden />
              <span>{c.bookAppointment}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href={c.phoneHref}
              className="site-cta-outline order-2 w-full sm:order-2 sm:w-auto"
            >
              <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
              <span>{c.callNow}</span>
            </a>
          </div>
        </motion.div>

        {/* Contact details and map */}
        <motion.div
          initial={lg ? { opacity: 0, y: 32, x: 0 } : { opacity: 0, y: 26, x: -14 }}
          whileInView={revealLiftEnter}
          viewport={viewportReveal}
          transition={{ duration: 0.85, ease: lg ? cinematicEase : mobilePopEase }}
          className="mt-24 grid gap-10 border-t border-white/[0.08] pt-16 lg:grid-cols-12 lg:items-start lg:gap-12"
        >
          {/* Contact info cards */}
          <motion.div 
            className="space-y-6 lg:col-span-5 lg:space-y-8"
            variants={contactCardVariants}
            initial="hidden"
            whileInView="show"
            viewport={viewportReveal}
          >
            {rows.map((row) => {
              const content = (
                <div className="group flex gap-4 rounded-sm border border-white/[0.06] bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-5 transition-all duration-300 hover:border-[#E50914]/30 hover:bg-gradient-to-br hover:from-[#0c0c0c] hover:to-[#060606] sm:gap-5 sm:p-6">
                  {/* Icon container */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-white/[0.08] bg-white/[0.02] transition-all duration-300 group-hover:border-[#E50914]/40 group-hover:bg-[#E50914]/10 sm:h-14 sm:w-14">
                    <row.icon className="h-5 w-5 text-[#E50914] sm:h-6 sm:w-6" strokeWidth={1.5} aria-hidden />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-foreground-muted sm:text-[11px]">{row.label}</p>
                    <p className="mt-2.5 whitespace-pre-line text-base leading-relaxed text-white/90 sm:text-[17px] sm:leading-relaxed">
                      {row.text}
                    </p>
                  </div>
                  {row.href && (
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-white/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#E50914]" aria-hidden />
                  )}
                </div>
              );

              return (
                <motion.div key={row.label} variants={contactItemVariants(lg)}>
                  {row.href ? (
                    <a href={row.href} target={row.href.startsWith("http") ? "_blank" : undefined} rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Map */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="relative aspect-[16/10] min-h-[280px] overflow-hidden border border-white/[0.08] bg-[#0a0a0a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
              {/* Top glossy rim */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
              
              <iframe
                title={c.mapIframeTitle}
                src={c.googleMapsEmbedSrc}
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[1.05] [color-scheme:light]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Bottom gradient overlay */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/85 via-black/40 to-transparent"
                aria-hidden
              />
              
              {/* Floating location badge */}
              <div className="absolute bottom-4 left-4 right-4 z-[3] flex items-center justify-between gap-4 rounded-sm border border-white/[0.08] bg-black/70 p-4 backdrop-blur-md md:bottom-6 md:left-6 md:right-auto md:max-w-[320px]">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E50914]/40 bg-[#E50914]/10">
                    <MapPin className="h-5 w-5 text-[#E50914]" strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E50914]">Локація</p>
                    <p className="mt-0.5 truncate text-sm text-white/80">{c.address}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a
              href={c.googleMapsOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-max items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60 transition-colors hover:text-[#E50914]"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#E50914]" aria-hidden />
              <span>{c.openInGoogleMaps}</span>
              <ExternalLink className="h-3 w-3 shrink-0 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
