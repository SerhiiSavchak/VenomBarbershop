"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection } from "@/components/liquid/LiquidElements";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Michael Thompson",
    rating: 5,
    text: "Best barbershop experience I&apos;ve ever had. The attention to detail is incredible, and the atmosphere is unmatched.",
    date: "2 weeks ago",
  },
  {
    name: "Robert Garcia",
    rating: 5,
    text: "Marcus did an amazing job on my fade. The whole experience felt premium from start to finish.",
    date: "1 month ago",
  },
  {
    name: "Daniel Kim",
    rating: 5,
    text: "Finally found a place that understands what a proper gentleman&apos;s cut should be. Worth every penny.",
    date: "3 weeks ago",
  },
  {
    name: "Christopher Lee",
    rating: 5,
    text: "The VIP treatment is something else. Hot towel shave was incredibly relaxing. Already booked my next appointment.",
    date: "1 week ago",
  },
  {
    name: "Andrew Martinez",
    rating: 5,
    text: "Clean, professional, and stylish. These guys know exactly what they&apos;re doing. Highly recommend!",
    date: "2 months ago",
  },
];

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-background-secondary overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[180px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <RevealSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-semibold uppercase tracking-widest mb-6">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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
              <div className="glass rounded-lg p-6 h-full hover:border-accent-red/30 transition-all duration-300 group">
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
                  {review.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
                  <div className="w-10 h-10 bg-background-card rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-foreground/50">
                      {review.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{review.name}</p>
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
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
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
                    {review.text}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-background-card rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-foreground/50">
                        {review.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{review.name}</p>
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
              <span className="font-semibold text-foreground">5.0</span> from 500+ reviews
            </span>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
