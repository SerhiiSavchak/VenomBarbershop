"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SymbioteAccent } from "@/components/symbiote/SymbioteLayer";

export function Space() {
  return (
    <section id="space" className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_80%,rgba(209,18,27,0.12)_0%,transparent_55%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-5"
          >
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.38em] text-accent-red">
              Atmosphere
            </span>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-[4.25rem]">
              Space as
              <span className="mt-2 block text-stroke-red">Set Design</span>
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/68 md:text-base">
              Obsidian floors, vertical crimson light, and silence weighted like a theater before curtain. You do not
              wait in line — you enter a frame.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex border border-white/30 px-8 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-white transition-colors hover:border-white/55 hover:bg-white/[0.05]"
            >
              Book a visit
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-12%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative lg:col-span-7"
          >
            <SymbioteAccent band="bottom" position="bottom-right" className="opacity-80" />
            <div className="grid gap-3 sm:grid-cols-5 sm:gap-4">
              <div className="relative aspect-[4/5] overflow-hidden sm:col-span-3">
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&q=88"
                  alt="Main floor"
                  fill
                  sizes="(max-width:1024px) 100vw, 55vw"
                  className="object-cover brightness-[0.92] contrast-[1.1]"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(209,18,27,0.25)_0%,transparent_50%)] mix-blend-screen" />
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2 sm:gap-4">
                <div className="relative aspect-[4/3] flex-1 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=88"
                    alt="Chair detail"
                    fill
                    className="object-cover brightness-[0.9] contrast-[1.12]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                </div>
                <div className="relative aspect-[4/3] flex-1 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=88"
                    alt="Tools"
                    fill
                    className="object-cover brightness-[0.9] contrast-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
