"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, CardLiquidCorner, LiquidImageFrame } from "@/components/liquid/LiquidElements";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Michael R.",
    rating: 5,
    text: "Best barbershop experience I've ever had. The attention to detail is unmatched.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "David L.",
    rating: 5,
    text: "The atmosphere is next level. The team is professional and talented.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Consistent quality every time. Highly recommend.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reviews" className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Red ambient glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-red/8 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <RevealSection className="flex items-end justify-between mb-10">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight">
            WHAT OUR CLIENTS SAY
          </h2>
          <a href="#" className="text-xs text-foreground-muted hover:text-white uppercase tracking-wider transition-colors group inline-flex items-center gap-2">
            <span>View All</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </RevealSection>

        {/* Desktop: Featured review + 2 side reviews */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {/* Featured review - large with image */}
          <LiquidImageFrame className="col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative bg-[#0a0a0a] rounded overflow-hidden border border-white/5 h-full"
            >
              <div className="grid md:grid-cols-2 h-full">
                {/* Image side */}
                <div className="relative aspect-square md:aspect-auto overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80"
                    alt="Client experience"
                    fill
                    className="object-cover grayscale-[20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]" />
                  <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
                </div>
                
                {/* Content side */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-red text-accent-red" />
                    ))}
                  </div>
                  <p className="text-base md:text-lg leading-relaxed mb-6">
                    {`"${reviews[0].text}"`}
                  </p>
                  <p className="text-sm">
                    <span className="text-white font-semibold">— {reviews[0].name}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </LiquidImageFrame>

          {/* Side reviews - stacked */}
          <div className="flex flex-col gap-4">
            {reviews.slice(1).map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex-1 group"
              >
                <div className="relative bg-[#0a0a0a] rounded p-5 h-full border border-white/5 hover:border-accent-red/30 transition-colors">
                  <CardLiquidCorner position="bottom-left" />
                  
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent-red text-accent-red" />
                    ))}
                  </div>
                  
                  <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                    {`"${review.text}"`}
                  </p>
                  
                  <p className="text-xs">
                    <span className="text-white">— {review.name}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Horizontal swipe */}
        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4"
          >
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex-shrink-0 w-[280px] snap-center"
              >
                <div className="bg-[#0a0a0a] rounded p-4 h-full border border-white/5">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent-red text-accent-red" />
                    ))}
                  </div>
                  <p className="text-foreground-muted text-sm mb-4">
                    {`"${review.text}"`}
                  </p>
                  <p className="text-xs text-white">— {review.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
