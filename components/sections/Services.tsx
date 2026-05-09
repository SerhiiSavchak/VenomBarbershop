"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, LiquidDivider, CardLiquidCorner } from "@/components/liquid/LiquidElements";
import Image from "next/image";

const services = [
  {
    name: "Haircut",
    price: "$35",
    duration: "45 min",
    description: "Precision cut tailored to your style.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
  },
  {
    name: "Beard Trim",
    price: "$25",
    duration: "30 min",
    description: "Expert beard shaping and maintenance.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
  },
  {
    name: "Haircut + Beard",
    price: "$55",
    duration: "75 min",
    description: "Complete grooming package for the modern gentleman.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
  },
  {
    name: "Classic Shave",
    price: "$30",
    duration: "30 min",
    description: "Traditional hot towel straight razor experience.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80",
  },
  {
    name: "VIP Cut",
    price: "$75",
    duration: "90 min",
    description: "Premium experience with hot towel, massage, and styling.",
    image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80",
  },
];

export function Services() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <LiquidDivider className="-mt-16 relative z-30" />
      
      <section id="services" className="relative py-16 md:py-24 bg-[#050505] overflow-hidden">
        {/* Red ambient glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-accent-red/8 rounded-full blur-[150px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <RevealSection className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div>
              <span className="text-accent-red text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 block">What We Offer</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
                OUR SERVICES
              </h2>
            </div>
            <p className="text-foreground-muted text-sm max-w-xs leading-relaxed md:text-right">
              Premium grooming services crafted with precision and delivered with excellence.
            </p>
          </RevealSection>

          {/* Desktop: 5 cards in a row */}
          <div className="hidden md:grid md:grid-cols-5 gap-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-[#0a0a0a] rounded overflow-hidden border border-white/5 hover:border-accent-red/30 transition-colors h-full">
                  <CardLiquidCorner position="bottom-left" />
                  
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
                    <div className="absolute inset-0 bg-accent-red/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                    
                    {/* Price badge */}
                    <div className="absolute top-2 right-2 bg-accent-red px-2 py-0.5">
                      <span className="font-display text-sm font-bold text-white">{service.price}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <h3 className="font-display text-sm font-bold mb-1 uppercase tracking-wide">{service.name}</h3>
                    <p className="text-[10px] text-foreground-muted leading-relaxed mb-2 line-clamp-2">{service.description}</p>
                    <span className="text-[10px] text-foreground-muted/60 uppercase tracking-wider">{service.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile: Horizontal swipe */}
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
                  <div className="relative bg-[#0a0a0a] rounded overflow-hidden border border-white/5 h-full">
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

          {/* View full menu button */}
          <RevealSection delay={0.3} className="mt-8">
            <button className="px-5 py-2.5 border border-white/20 text-xs uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all">
              View Full Menu
            </button>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
