"use client";

import { motion } from "framer-motion";
import { RevealSection } from "@/components/liquid/LiquidElements";
import { MessageSquare, Ruler, Sparkles, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "We discuss your style goals, face shape, and lifestyle to create the perfect look.",
  },
  {
    icon: Ruler,
    title: "Shape",
    description: "Expert cutting techniques to sculpt the foundation of your new style.",
  },
  {
    icon: Sparkles,
    title: "Details",
    description: "Precision finishing, texturing, and refinement for flawless results.",
  },
  {
    icon: CheckCircle,
    title: "Final Look",
    description: "Professional styling and product recommendations to maintain your look.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 bg-background-secondary overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-red/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <RevealSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-semibold uppercase tracking-widest mb-6">
            How We Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            THE PROCESS
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Every visit is a journey from consultation to perfection
          </p>
        </RevealSection>

        {/* Process steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Card */}
                <div className="glass rounded-lg p-6 md:p-8 text-center group hover:border-accent-red/30 transition-all duration-300">
                  {/* Icon container */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-background-card rounded-full flex items-center justify-center border border-foreground/10 group-hover:border-accent-red/30 transition-colors">
                      <step.icon className="w-7 h-7 text-accent-red" />
                    </div>
                    {/* Pulse effect */}
                    <div className="absolute inset-0 w-16 h-16 bg-accent-red/20 rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
                  </div>

                  {/* Step number */}
                  <div className="absolute -top-3 right-4 md:right-6">
                    <span className="text-5xl font-display font-bold text-foreground/5 group-hover:text-accent-red/10 transition-colors">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-foreground/20 transform rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
