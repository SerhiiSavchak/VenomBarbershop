"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, LiquidDivider, CardLiquidCorner, LiquidStain } from "@/components/liquid/LiquidElements";
import Image from "next/image";

const services = [
  {
    name: "Haircut",
    price: "$35",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
  },
  {
    name: "Beard Trim",
    price: "$25",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
  },
  {
    name: "Full Service",
    price: "$55",
    duration: "75 min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
  },
  {
    name: "Classic Shave",
    price: "$30",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80",
  },
  {
    name: "VIP Package",
    price: "$75",
    duration: "90 min",
    image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80",
  },
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Liquid divider from hero */}
      <LiquidDivider className="-mt-16 relative z-30" />
      
      <section id="services" className="relative py-16 md:py-24 bg-[#050505] overflow-hidden">
        {/* Background liquid stain */}
        <LiquidStain position="right" className="opacity-40" />
        
        {/* Red ambient glow */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-accent-red/8 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Section header - dense, editorial */}
          <RevealSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-accent-red text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Services</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                OUR SERVICES
              </h2>
            </div>
            <p className="text-foreground-muted text-sm max-w-xs leading-relaxed">
              Premium grooming crafted with precision. Each service delivered with mastery.
            </p>
          </RevealSection>

          {/* Desktop: Dense grid with liquid corners */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-[#0a0a0a] rounded overflow-hidden border border-white/5 hover:border-accent-red/30 transition-colors">
                  {/* Liquid corner accent */}
                  <CardLiquidCorner position="bottom-left" />
                  
                  {/* Image - taller aspect */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                    
                    {/* Red rim light on hover */}
                    <div className="absolute inset-0 bg-accent-red/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                    
                    {/* Price badge - top right */}
                    <div className="absolute top-2 right-2 bg-accent-red px-2 py-0.5">
                      <span className="font-display text-sm font-bold text-white">{service.price}</span>
                    </div>
                  </div>

                  {/* Content - compact */}
                  <div className="p-3 relative">
                    <h3 className="font-display text-sm font-bold mb-1 uppercase tracking-wide">{service.name}</h3>
                    <span className="text-[10px] text-foreground-muted uppercase tracking-wider">{service.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal swipe carousel */}
          <div className="md:hidden">
            <div
              ref={scrollRef}
              className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex-shrink-0 w-[160px] snap-center"
                >
                  <div className="relative bg-[#0a0a0a] rounded overflow-hidden border border-white/5">
                    <CardLiquidCorner position="bottom-left" />
                    
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                      <div className="absolute top-2 right-2 bg-accent-red px-1.5 py-0.5">
                        <span className="font-display text-xs font-bold text-white">{service.price}</span>
                      </div>
                    </div>
                    
                    <div className="p-2.5">
                      <h3 className="font-display text-xs font-bold uppercase tracking-wide">{service.name}</h3>
                      <span className="text-[9px] text-foreground-muted">{service.duration}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* View all link */}
          <RevealSection delay={0.3} className="mt-8 text-center md:text-right">
            <a href="#" className="inline-flex items-center gap-2 text-xs text-foreground-muted hover:text-white uppercase tracking-wider transition-colors group">
              <span>View Full Menu</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
