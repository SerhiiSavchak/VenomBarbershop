"use client";

import { motion } from "framer-motion";
import { RevealSection, LiquidStain, RedGlow } from "@/components/liquid/LiquidElements";
import Image from "next/image";

const steps = [
  { number: "01", title: "Consultation", desc: "Discuss your goals" },
  { number: "02", title: "Shape", desc: "Expert cutting" },
  { number: "03", title: "Details", desc: "Precision finishing" },
  { number: "04", title: "Final Look", desc: "Professional styling" },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 md:py-28 bg-[#050505] overflow-hidden">
      {/* Background liquid stain */}
      <LiquidStain position="center" className="opacity-30" />
      <RedGlow intensity="low" position="center" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Large image collage */}
          <RevealSection>
            <div className="relative">
              {/* Main large image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0"
              >
                <Image
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&q=80"
                  alt="Barber at work"
                  fill
                  className="object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />
                <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
                
                {/* Overlay text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] text-accent-red font-bold uppercase tracking-[0.15em]">The Craft</span>
                  <h3 className="font-display text-2xl font-bold mt-1">Precision in Every Cut</h3>
                </div>

                {/* Cyan edge */}
                <div className="absolute top-0 right-0 w-0.5 h-20 bg-gradient-to-b from-accent-cyan/60 to-transparent" />
              </motion.div>

              {/* Small floating image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-8 -right-4 md:right-8 w-32 h-40 md:w-40 md:h-52 border-2 border-black"
              >
                <Image
                  src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=300&q=80"
                  alt="Detail work"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </motion.div>
            </div>
          </RevealSection>

          {/* Right: Steps list */}
          <div className="lg:pl-8">
            <RevealSection>
              <span className="text-accent-red text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Process</span>
              <h2 className="font-display text-4xl md:text-5xl font-black tracking-tight mb-10">
                THE JOURNEY
              </h2>
            </RevealSection>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="flex items-start gap-6 p-4 bg-black/30 border border-white/5 rounded hover:border-accent-red/30 transition-colors">
                    {/* Number */}
                    <div className="relative">
                      <span className="font-display text-4xl md:text-5xl font-black text-white/10 group-hover:text-accent-red/30 transition-colors">
                        {step.number}
                      </span>
                      {/* Red dot indicator */}
                      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    {/* Content */}
                    <div className="pt-2">
                      <h3 className="font-display text-xl font-bold mb-1">{step.title}</h3>
                      <p className="text-foreground-muted text-sm">{step.desc}</p>
                    </div>
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
