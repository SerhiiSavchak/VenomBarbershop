"use client";

import { motion } from "framer-motion";
import { RevealSection, LiquidSectionDivider } from "@/components/liquid/LiquidElements";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We discuss your style goals, face shape, and lifestyle to create the perfect look.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
  },
  {
    number: "02",
    title: "Shape",
    description: "Expert cutting techniques to sculpt the foundation of your new style.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
  },
  {
    number: "03",
    title: "Details",
    description: "Precision finishing, texturing, and refinement for flawless results.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80",
  },
  {
    number: "04",
    title: "Final Look",
    description: "Professional styling and product recommendations to maintain your look.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
  },
];

export function Process() {
  return (
    <section id="process" className="relative bg-background-secondary overflow-hidden">
      {/* Liquid divider top */}
      <LiquidSectionDivider />

      <div className="py-24 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-accent-red/5 rounded-full blur-[250px]" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <RevealSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent-red text-white text-xs font-bold uppercase tracking-widest mb-6">
              How We Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              THE PROCESS
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              Every visit is a journey from consultation to perfection
            </p>
          </RevealSection>

          {/* Process steps - Editorial layout */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  index % 2 === 1 ? "md:direction-rtl" : ""
                }`}
              >
                {/* Image side */}
                <div className={`relative ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden group">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Red ambient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-${index % 2 === 0 ? 'r' : 'l'} from-accent-red/20 to-transparent`} />
                    
                    {/* Step number overlay */}
                    <div className="absolute top-4 left-4">
                      <span className="font-display text-6xl md:text-7xl font-black text-white/10">{step.number}</span>
                    </div>
                  </div>
                  
                  {/* Cyan accent */}
                  <div className={`absolute -bottom-2 ${index % 2 === 0 ? '-right-2' : '-left-2'} w-24 h-1 bg-gradient-to-r from-accent-cyan/50 to-transparent`} />
                </div>

                {/* Content side */}
                <div className={`${index % 2 === 1 ? "md:order-1 md:text-right" : ""}`}>
                  <span className="font-display text-8xl md:text-9xl font-black text-accent-red/10 block leading-none mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 -mt-12 relative z-10">
                    {step.title}
                  </h3>
                  <p className="text-foreground-muted text-lg leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Liquid divider bottom */}
      <LiquidSectionDivider inverted />
    </section>
  );
}
