"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, AnimatedCard, LiquidCorner } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const services = [
  {
    name: "Haircut",
    price: "$35",
    duration: "45 min",
    description: "Precision cut tailored to your style",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
  },
  {
    name: "Beard Trim",
    price: "$25",
    duration: "30 min",
    description: "Expert beard shaping and maintenance",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
  },
  {
    name: "Haircut + Beard",
    price: "$55",
    duration: "75 min",
    description: "Complete grooming package",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
  },
  {
    name: "Classic Shave",
    price: "$30",
    duration: "30 min",
    description: "Hot towel straight razor experience",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80",
  },
  {
    name: "Styling",
    price: "$20",
    duration: "20 min",
    description: "Professional styling consultation",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
  },
  {
    name: "VIP Experience",
    price: "$75",
    duration: "90 min",
    description: "Premium treatment with massage",
    image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80",
  },
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="relative py-24 md:py-32 bg-background-secondary overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section header */}
        <RevealSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-red text-white text-xs font-bold uppercase tracking-widest mb-6">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6">
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
              <div className="relative glass rounded-lg overflow-hidden h-full group cursor-pointer">
                {/* Liquid corners */}
                <LiquidCorner position="top-right" size="md" />
                <LiquidCorner position="bottom-left" size="sm" />
                
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/50 to-transparent" />
                  
                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-accent-red px-3 py-1.5 rounded">
                    <span className="font-display text-lg font-bold text-white">{service.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-foreground-muted text-sm mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                    <span className="text-xs text-foreground-muted uppercase tracking-wider">
                      {service.duration}
                    </span>
                    <span className="text-xs text-accent-red opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                      Book Now →
                    </span>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-red/10 to-transparent" />
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {services.map((service) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[300px] snap-center"
              >
                <div className="relative glass rounded-lg overflow-hidden h-full">
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-card to-transparent" />
                    <div className="absolute top-3 right-3 bg-accent-red px-2.5 py-1 rounded">
                      <span className="font-display text-base font-bold text-white">{service.price}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-bold mb-1">{service.name}</h3>
                    <p className="text-foreground-muted text-sm mb-3">{service.description}</p>
                    <span className="text-xs text-foreground-muted">{service.duration}</span>
                  </div>
                </div>
              </motion.div>
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
