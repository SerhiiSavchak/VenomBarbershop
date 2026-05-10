"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { SymbioteLayer } from "@/components/symbiote/SymbioteLayer";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-black py-28 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_120%,rgba(209,18,27,0.35)_0%,transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_0%,rgba(209,18,27,0.12)_0%,transparent_50%)]" />

      <div className="pointer-events-none absolute -right-[18%] bottom-[-35%] z-[2] h-[min(72vh,640px)] w-[min(100vw,900px)] opacity-95">
        <div className="relative h-full w-full">
          <SymbioteLayer
            band="top"
            blend="screen"
            opacity={0.45}
            drift
            scrollTargetRef={sectionRef}
            parallaxRange={[24, -36]}
            scale={1.12}
            className="absolute inset-0"
          />
          <SymbioteLayer
            band="mid"
            blend="lighten"
            opacity={0.28}
            drift
            scrollTargetRef={sectionRef}
            parallaxRange={[12, -20]}
            scale={1.08}
            className="absolute inset-0"
          />
        </div>
      </div>

      <div className="relative z-[10] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] as const }}
          className="max-w-5xl"
        >
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.42em] text-accent-red">Final scene</span>
          <h2 className="hero-display text-[clamp(3rem,10vw,6.5rem)] text-white">
            Own the
            <span className="mt-2 block text-stroke-red">Mirror</span>
          </h2>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            One chair. One narrative. Book the cut that reads like a poster — we will hold the date.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="tel:+15551234567"
              className="red-glow inline-flex min-h-[56px] items-center justify-center bg-accent-red px-10 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-accent-red-bright"
            >
              Book appointment
            </a>
            <a
              href="mailto:book@obsidianbarbershop.com"
              className="inline-flex min-h-[56px] items-center justify-center border border-white/40 px-10 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:border-white/65 hover:bg-white/[0.06]"
            >
              Email concierge
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.85 }}
          className="mt-24 grid gap-10 border-t border-white/[0.08] pt-16 lg:grid-cols-12 lg:items-start"
        >
          <div className="space-y-8 lg:col-span-5">
            {[
              { icon: MapPin, label: "Address", text: "123 Premium Street, Downtown District" },
              { icon: Clock, label: "Hours", text: "Mon — Sat · 9:00 — 21:00\nSun · 10:00 — 18:00" },
              { icon: Phone, label: "Phone", text: "+1 (555) 123-4567" },
              { icon: Mail, label: "Email", text: "book@obsidianbarbershop.com" },
            ].map((row) => (
              <div key={row.label} className="flex gap-4">
                <row.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-red" strokeWidth={1.5} />
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
              alt="Obsidian location mood"
              fill
              className="object-cover brightness-[0.75] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-black/50 px-5 py-3 backdrop-blur-md">
                <MapPin className="h-5 w-5 text-accent-red" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Map pin — integrate API</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
