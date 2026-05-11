"use client";

import { motion } from "framer-motion";
import { ExternalLink, MapPin, Clock, Phone, Mail } from "lucide-react";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, mobilePopEase, revealLiftEnter, revealLiftInitial, viewportReveal, sectionTitleInset } from "@/lib/motion";
import { useLgUp } from "@/lib/useLgUp";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;
  const lg = useLgUp();

  const rows = [
    { icon: MapPin, label: c.addressLabel, text: c.address },
    { icon: Clock, label: c.hoursLabel, text: c.hours },
    { icon: Phone, label: c.phoneLabel, text: c.phone },
    { icon: Mail, label: c.emailLabel, text: c.email },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-black py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_120%,rgba(209,18,27,0.35)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_0%,rgba(209,18,27,0.12)_0%,transparent_50%)]" />

      <div className="relative z-[10] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
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
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-stretch lg:justify-end">
            <a
              href={c.phoneHref}
              className="site-cta-outline order-2 w-full sm:order-1 sm:w-auto"
            >
              {c.callNow}
            </a>
            <a
              href={`mailto:${c.email}?subject=${encodeURIComponent(c.bookAppointment)}`}
              className="red-glow site-cta-primary order-1 w-full sm:order-2 sm:w-auto"
            >
              {c.bookAppointment}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={lg ? { opacity: 0, y: 32, x: 0 } : { opacity: 0, y: 26, x: -14 }}
          whileInView={revealLiftEnter}
          viewport={viewportReveal}
          transition={{ duration: 0.85, ease: lg ? cinematicEase : mobilePopEase }}
          className="mt-24 grid gap-10 border-t border-white/[0.08] pt-16 lg:grid-cols-12 lg:items-start"
        >
          <div className="space-y-10 lg:space-y-12 lg:col-span-5">
            {rows.map((row) => (
              <div key={row.label} className="flex gap-4 sm:gap-5">
                <row.icon className="mt-1 h-5 w-5 shrink-0 text-[#E50914] sm:h-5 sm:w-5" strokeWidth={1.5} aria-hidden />
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-foreground-muted sm:text-[11px]">{row.label}</p>
                  <p className="mt-2.5 whitespace-pre-line text-base leading-relaxed text-white/90 sm:text-[17px] sm:leading-relaxed">
                    {row.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="relative aspect-[16/10] min-h-[220px] overflow-hidden border border-white/[0.08] bg-[#0a0a0a] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
              <iframe
                title={c.mapIframeTitle}
                src={c.googleMapsEmbedSrc}
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.15] contrast-[1.05] [color-scheme:light]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"
                aria-hidden
              />
            </div>
            <a
              href={c.googleMapsOpenUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-max items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75 transition-colors hover:text-[#E50914]"
            >
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#E50914]" aria-hidden />
              <span>{c.openInGoogleMaps}</span>
              <ExternalLink className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
