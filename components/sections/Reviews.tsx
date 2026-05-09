"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, LiquidCorner } from "@/components/liquid/LiquidElements";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const reviews = [
  {
    name: "Michael Thompson",
    rating: 5,
    text: "Best barbershop experience I've ever had. The attention to detail is incredible, and the atmosphere is unmatched.",
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
    text: "Finally found a place that understands what a proper gentleman's cut should be. Worth every penny.",
    date: "3 weeks ago",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    name: "Christopher Lee",
    rating: 5,
    text: "The VIP treatment is something else. Hot towel shave was incredibly relaxing. Already booked my next appointment.",
    date: "1 week ago",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
  {
    name: "Andrew Martinez",
    rating: 5,
    text: "Clean, professional, and stylish. These guys know exactly what they're doing. Highly recommend!",
    date: "2 months ago",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
];

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-accent-red/5 rounded-full blur-[200px]" />
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-accent-cyan/3 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <RevealSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-red text-white text-xs font-bold uppercase tracking-widest mb-6">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            WHAT CLIENTS SAY
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
        </RevealSection>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative glass rounded-lg p-6 h-full hover:border-accent-red/30 transition-all duration-300 group">
                {/* Liquid corner */}
                <LiquidCorner position="top-right" size="sm" />
                
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-accent-red/30 mb-4 group-hover:text-accent-red/50 transition-colors" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent-red text-accent-red" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                  {`"${review.text}"`}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={review.image}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold">{review.name}</p>
                    <p className="text-xs text-foreground-muted">{review.date}</p>
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
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-4 px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[300px] snap-center"
              >
                <div className="glass rounded-lg p-5 h-full">
                  <Quote className="w-6 h-6 text-accent-red/30 mb-3" />
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent-red text-accent-red" />
                    ))}
                  </div>
                  <p className="text-foreground-muted text-sm mb-4 line-clamp-4">
                    {`"${review.text}"`}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{review.name}</p>
                      <p className="text-xs text-foreground-muted">{review.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Overall rating */}
        <RevealSection delay={0.3} className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 glass rounded-full px-8 py-4">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent-red text-accent-red" />
              ))}
            </div>
            <span className="text-foreground-muted">
              <span className="font-bold text-foreground">5.0</span> from 500+ reviews
            </span>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
