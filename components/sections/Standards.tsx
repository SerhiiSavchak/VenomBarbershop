"use client";

import { motion } from "framer-motion";
import { RevealSection } from "@/components/liquid/LiquidElements";
import { Target, Shield, Sparkles, Gem, Heart } from "lucide-react";

const standards = [
  {
    icon: Target,
    title: "Precision",
    description: "Every cut is executed with surgical accuracy and attention to detail.",
  },
  {
    icon: Shield,
    title: "Hygiene",
    description: "Hospital-grade sterilization and single-use tools for your safety.",
  },
  {
    icon: Sparkles,
    title: "Atmosphere",
    description: "Immersive environment designed for relaxation and rejuvenation.",
  },
  {
    icon: Gem,
    title: "Premium Products",
    description: "Only the finest grooming products from world-renowned brands.",
  },
  {
    icon: Heart,
    title: "Personal Approach",
    description: "Tailored consultations to understand and achieve your unique style.",
  },
];

export function Standards() {
  return (
    <section className="relative py-24 md:py-32 bg-background-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-cyan/3 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <RevealSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-semibold uppercase tracking-widest mb-6">
            Our Promise
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            OUR STANDARDS
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Uncompromising quality in every aspect of your experience
          </p>
        </RevealSection>

        {/* Standards grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {standards.map((standard, index) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-lg p-6 text-center h-full hover:border-accent-red/30 transition-all duration-300">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-background-card rounded-full mb-4 group-hover:bg-accent-red/10 transition-colors">
                  <standard.icon className="w-6 h-6 text-accent-red" />
                </div>

                <h3 className="font-display text-lg font-semibold mb-2">{standard.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {standard.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
