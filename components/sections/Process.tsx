"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  { number: "01", title: "Consultation", desc: "We discuss your style goals, face shape, and lifestyle." },
  { number: "02", title: "Shape", desc: "Expert cutting and shaping with precision." },
  { number: "03", title: "Details", desc: "Finishing touches that define your look." },
  { number: "04", title: "Final Look", desc: "Professional styling for the perfect finish." },
];

export function Process() {
  return (
    <section id="process" className="relative min-h-[500px] bg-[#050505] p-6 md:p-8 overflow-hidden">
      {/* Liquid decorations */}
      <div className="absolute top-0 right-0 w-[200px] h-[300px] pointer-events-none">
        <svg viewBox="0 0 200 300" className="w-full h-full">
          <path d="M200,0 L200,300 L150,300 Q120,250 150,200 Q180,150 140,100 Q100,50 150,0 Z" fill="#000000" />
          <path d="M170,50 Q140,100 165,150 Q190,200 155,250" stroke="#38E8FF" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
        </svg>
      </div>

      {/* Red glow */}
      <div className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-accent-red/15 blur-[80px] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-6 h-full">
        {/* Left: Image */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[3/4] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&q=80"
              alt="Barber at work"
              fill
              className="object-cover grayscale-[20%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />
            <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
            
            {/* Red glow at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-accent-red/40 blur-[40px]" />
          </motion.div>
        </div>

        {/* Right: Steps */}
        <div className="flex flex-col">
          <div className="mb-4 md:mb-6">
            <span className="text-accent-red text-[10px] font-bold uppercase tracking-[0.2em] mb-1 block">How We Work</span>
            <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-black tracking-tight text-white">
              THE PROCESS
            </h2>
          </div>

          <div className="space-y-3 md:space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group flex items-start gap-3"
              >
                {/* Red number */}
                <span className="font-display text-xl md:text-2xl font-black text-accent-red leading-none">
                  {step.number}
                </span>
                
                {/* Content */}
                <div>
                  <h3 className="font-display text-xs md:text-sm font-bold uppercase tracking-wide mb-0.5 text-white">{step.title}</h3>
                  <p className="text-foreground-muted text-[10px] md:text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
