"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, AnimatedCard } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import { Scissors, Wind, Sparkles, CircleDot, Crown, Star } from "lucide-react";

const services = [
  {
    icon: Scissors,
    name: "Haircut",
    price: "$35",
    duration: "45 min",
    description: "Precision cut tailored to your style and face shape",
  },
  {
    icon: Wind,
    name: "Beard Trim",
    price: "$25",
    duration: "30 min",
    description: "Expert beard shaping and maintenance",
  },
  {
    icon: Sparkles,
    name: "Haircut + Beard",
    price: "$55",
    duration: "75 min",
    description: "Complete grooming package for the modern gentleman",
  },
  {
    icon: CircleDot,
    name: "Classic Shave",
    price: "$30",
    duration: "30 min",
    description: "Traditional hot towel straight razor experience",
  },
  {
    icon: Star,
    name: "Styling",
    price: "$20",
    duration: "20 min",
    description: "Professional styling and product consultation",
  },
  {
    icon: Crown,
    name: "VIP Cut",
    price: "$75",
    duration: "90 min",
    description: "Premium experience with hot towel, massage, and styling",
  },
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-background-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-red/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <RevealSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-semibold uppercase tracking-widest mb-6">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            OUR SERVICES
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Premium grooming services crafted with precision and delivered with excellence
          </p>
        </RevealSection>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={service.name} delay={index * 0.1}>
              <div className="glass rounded-lg p-6 h-full group cursor-pointer transition-all duration-300 hover:border-accent-red/30">
                {/* Icon */}
                <div className="w-12 h-12 bg-accent-red/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent-red/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent-red" />
                </div>

                {/* Content */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold">{service.name}</h3>
                  <span className="font-display text-2xl font-bold text-accent-red">{service.price}</span>
                </div>
                
                <p className="text-foreground-muted text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                  <span className="text-xs text-foreground-muted uppercase tracking-wider">
                    {service.duration}
                  </span>
                  <span className="text-xs text-accent-red opacity-0 group-hover:opacity-100 transition-opacity">
                    Book Now →
                  </span>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-lg">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-accent-cyan/10 to-transparent transform translate-x-4 -translate-y-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[280px] snap-center"
              >
                <div className="glass rounded-lg p-5 h-full">
                  <div className="w-10 h-10 bg-accent-red/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5 text-accent-red" />
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-semibold">{service.name}</h3>
                    <span className="font-display text-xl font-bold text-accent-red">{service.price}</span>
                  </div>
                  <p className="text-foreground-muted text-sm mb-3">{service.description}</p>
                  <span className="text-xs text-foreground-muted">{service.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Scroll indicator */}
          <div className="flex justify-center gap-1 mt-4">
            {services.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-foreground/20" />
            ))}
          </div>
        </div>

        {/* CTA */}
        <RevealSection delay={0.4} className="text-center mt-12">
          <Button variant="primary" size="lg">
            View Full Price List
          </Button>
        </RevealSection>
      </div>
    </section>
  );
}
