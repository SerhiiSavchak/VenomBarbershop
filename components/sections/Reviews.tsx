"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, CardLiquidCorner, LiquidDivider } from "@/components/liquid/LiquidElements";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Michael Thompson",
    rating: 5,
    text: "Best barbershop experience I've ever had. The attention to detail is incredible.",
    date: "2 weeks ago",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Robert Garcia",
    rating: 5,
    text: "Marcus did an amazing job on my fade. The whole experience felt premium from start to finish.",
    date: "1 month ago",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    name: "Daniel Kim",
    rating: 5,
    text: "Finally found a place that understands what a proper gentleman's cut should be.",
    date: "3 weeks ago",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Christopher Lee",
    rating: 5,
    text: "The VIP treatment is something else. Hot towel shave was incredibly relaxing.",
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
];

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <LiquidDivider className="-mb-8" />
      
      <section id="reviews" className="relative py-20 md:py-28 bg-black overflow-hidden">
        {/* Background */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[200px]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          {/* Header */}
          <RevealSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-accent-red text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Testimonials</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
                WHAT OUR<br className="hidden md:block" /> CLIENTS SAY
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-red text-accent-red" />
                ))}
              </div>
              <span className="text-sm text-foreground-muted">
                <span className="font-bold text-white">5.0</span> / 500+ reviews
              </span>
            </div>
          </RevealSection>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-[#0a0a0a] rounded p-5 h-full border border-white/5 hover:border-accent-red/30 transition-colors">
                  {/* Liquid corner */}
                  <CardLiquidCorner position="top-right" />
                  
                  {/* Quote + Stars */}
                  <div className="flex items-start justify-between mb-4">
                    <Quote className="w-6 h-6 text-accent-red/40" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-accent-red text-accent-red" />
                      ))}
                    </div>
                  </div>

                  {/* Review text */}
                  <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                    {`"${review.text}"`}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all"
                      />
                      <div className="absolute inset-0 bg-accent-red/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{review.name}</p>
                      <p className="text-[10px] text-foreground-muted">{review.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Horizontal Scroll */}
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
                    <div className="flex items-center justify-between mb-3">
                      <Quote className="w-5 h-5 text-accent-red/40" />
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-accent-red text-accent-red" />
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground-muted text-sm mb-4 line-clamp-3">
                      {`"${review.text}"`}
                    </p>
                    <div className="flex items-center gap-2 pt-3 border-t border-white/5">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden">
                        <Image
                          src={review.image}
                          alt={review.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{review.name}</p>
                        <p className="text-[10px] text-foreground-muted">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
