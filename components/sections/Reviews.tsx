"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  { name: "Michael R.", rating: 5, text: "Best barbershop experience I've ever had. The attention to detail is unmatched.", featured: true },
  { name: "David L.", rating: 5, text: "The atmosphere is next level. The team is professional and talented." },
  { name: "James T.", rating: 5, text: "Consistent quality every time. Highly recommend." },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative min-h-[400px] bg-black p-4 md:p-6 overflow-hidden">
      {/* Red ambient glow */}
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-accent-red/15 rounded-full blur-[60px]" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg md:text-xl font-black tracking-tight text-white leading-tight">
          WHAT OUR CLIENTS SAY
        </h2>
        <a href="#" className="text-[10px] text-accent-red hover:text-accent-red-bright uppercase tracking-wider transition-colors inline-flex items-center gap-1">
          <span>View All</span>
          <span>→</span>
        </a>
      </div>

      {/* Featured review card with image */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-[#0a0a0a] overflow-hidden border border-white/5 mb-3"
      >
        <div className="grid grid-cols-3 gap-0">
          {/* Image on left */}
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80"
              alt="Happy client"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]" />
            <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
          </div>
          
          {/* Content on right spanning 2 cols */}
          <div className="col-span-2 p-4 flex flex-col justify-center">
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-accent-red text-accent-red" />
              ))}
            </div>
            <p className="text-xs md:text-sm text-white leading-relaxed mb-2">
              {`"${reviews[0].text}"`}
            </p>
            <p className="text-[10px] text-foreground-muted">— {reviews[0].name}</p>
          </div>
        </div>
      </motion.div>

      {/* Two smaller review cards side by side */}
      <div className="grid grid-cols-2 gap-2">
        {reviews.slice(1).map((review, index) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + index * 0.08 }}
            className="bg-[#0a0a0a] p-3 border border-white/5 hover:border-accent-red/30 transition-colors"
          >
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-accent-red text-accent-red" />
              ))}
            </div>
            <p className="text-foreground-muted text-[9px] md:text-[10px] leading-relaxed mb-1.5">
              {`"${review.text}"`}
            </p>
            <p className="text-[8px] md:text-[9px] text-white">— {review.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        <div className="w-1.5 h-1.5 rounded-full bg-accent-red" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
      </div>
    </section>
  );
}
