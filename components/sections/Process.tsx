"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { SymbioteLayer } from "@/components/symbiote/SymbioteLayer";

const steps = [
  { number: "01", title: "Consultation", desc: "Face shape, growth patterns, lifestyle — mapped like a fitting." },
  { number: "02", title: "Shape", desc: "Weight and silhouette established with clippers and shears under controlled tension." },
  { number: "03", title: "Details", desc: "Perimeter, texture, transitions — the micro-decisions that read on film." },
  { number: "04", title: "Final Look", desc: "Finish, product, mirror moment. You leave set-ready." },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-[#030303] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute -right-1/4 top-0 h-[80%] w-1/2 opacity-40">
        <SymbioteLayer
          band="top"
          blend="screen"
          opacity={0.22}
          drift
          scrollTargetRef={sectionRef}
          parallaxRange={[30, -40]}
          scale={1.05}
          className="h-full w-full"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(209,18,27,0.1)_0%,transparent_55%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-10 lg:absolute lg:left-0 lg:top-8 lg:mb-0 lg:max-w-md"
            >
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-accent-red">
                Process
              </span>
              <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
                Controlled
                <span className="mt-1 block text-white/40">Chaos</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.08 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] as const }}
              className="relative mt-8 aspect-[3/4] max-h-[min(78vh,720px)] overflow-hidden lg:mt-28"
            >
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1000&q=88"
                alt="Process"
                fill
                sizes="(max-width:1024px) 100vw, 48vw"
                className="object-cover contrast-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/40" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_70%,rgba(209,18,27,0.2)_0%,transparent_50%)] mix-blend-screen" />
            </motion.div>
          </div>

          <div className="relative flex flex-col justify-center lg:col-span-6 lg:pl-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ delay: index * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }}
                className="group relative border-b border-white/[0.07] py-10 first:pt-0"
              >
                <span className="pointer-events-none absolute -left-2 top-6 select-none font-display text-[clamp(5rem,18vw,9rem)] font-bold leading-none text-white/[0.04] transition-colors group-hover:text-accent-red/15 md:-left-4">
                  {step.number}
                </span>
                <div className="relative flex flex-col gap-3 pl-4 md:pl-8">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-foreground-muted md:text-[15px]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
