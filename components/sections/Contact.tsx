"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, viewportReveal } from "@/lib/motion";

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;

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
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReveal}
          transition={{ duration: 0.95, ease: cinematicEase }}
          className="max-w-5xl"
        >
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.42em] text-[#E50914]">{c.eyebrow}</span>
          <h2 className="hero-display text-[clamp(3rem,10vw,6.5rem)] text-white">{c.title}</h2>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">{c.lead}</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={`mailto:${c.email}?subject=${encodeURIComponent(c.bookAppointment)}`}
              className="red-glow inline-flex min-h-[56px] items-center justify-center bg-[#E50914] px-10 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-accent-red-bright"
            >
              {c.bookAppointment}
            </a>
            <a
              href={c.phoneHref}
              className="inline-flex min-h-[56px] items-center justify-center border border-white/40 px-10 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-[#E50914]/65 hover:bg-white/[0.06]"
            >
              {c.callNow}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReveal}
          transition={{ duration: 0.85 }}
          className="mt-24 grid gap-10 border-t border-white/[0.08] pt-16 lg:grid-cols-12 lg:items-start"
        >
          <div className="space-y-8 lg:col-span-5">
            {rows.map((row) => (
              <div key={row.label} className="flex gap-4">
                <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-[#E50914]" strokeWidth={1.5} aria-hidden />
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-foreground-muted">{row.label}</p>
                  <p className="mt-2 whitespace-pre-line text-sm text-white/85">{row.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative aspect-[16/10] overflow-hidden border border-white/[0.08] lg:col-span-7">
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=88"
              alt={c.mapImageAlt}
              fill
              className="object-cover brightness-[0.75] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/50 px-5 py-3 backdrop-blur-md">
                <MapPin className="h-5 w-5 text-[#E50914]" aria-hidden />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">{c.mapPlaceholder}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
