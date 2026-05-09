"use client";

import { motion } from "framer-motion";
import { RevealSection } from "@/components/liquid/LiquidElements";
import Image from "next/image";

const steps = [
  { number: "01", title: "Consultation", desc: "We discuss your style goals, face shape, and lifestyle." },
  { number: "02", title: "Shape", desc: "Expert cutting and shaping with precision." },
  { number: "03", title: "Details", desc: "Finishing touches that define your look." },
  { number: "04", title: "Final Look", desc: "Professional styling for the perfect finish." },
];

export function Process() {
  return (
    <section id="process" className="relative py-16 md:py-24 bg-[#050505] overflow-hidden">
      {/* Red ambient glow */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-accent-red/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Image */}
          <RevealSection>
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&q=80"
                alt="Barber at work"
                fill
                className="object-cover grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/20" />
              <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
              
              {/* Red glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-16 bg-accent-red/30 blur-[50px]" />
              
              {/* Cyan edges */}
              <div className="absolute top-0 right-0 w-0.5 h-16 bg-gradient-to-b from-accent-cyan/50 to-transparent" />
              <div className="absolute top-0 right-0 w-12 h-0.5 bg-gradient-to-l from-accent-cyan/50 to-transparent" />
            </div>
          </RevealSection>

          {/* Right: Steps */}
          <div>
            <RevealSection>
              <span className="text-accent-red text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 block">How We Work</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-8">
                THE PROCESS
              </h2>
            </RevealSection>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group flex items-start gap-4 py-3 border-b border-white/5 hover:border-accent-red/30 transition-colors"
                >
                  {/* Red number */}
                  <span className="font-display text-2xl md:text-3xl font-black text-accent-red">
                    {step.number}
                  </span>
                  
                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="font-display text-base md:text-lg font-bold uppercase tracking-wide mb-1">{step.title}</h3>
                    <p className="text-foreground-muted text-xs md:text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
