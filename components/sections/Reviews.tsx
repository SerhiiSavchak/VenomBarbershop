"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const reviews = [
  { name: "Michael R.", rating: 5, text: "Best barbershop experience I've ever had. The attention to detail is unmatched." },
  { name: "David L.", rating: 5, text: "The atmosphere is next level. The team is professional and talented." },
  { name: "James T.", rating: 5, text: "Consistent quality every time. Highly recommend." },
];

export function Reviews() {
  return (
    <div id="reviews" className="relative min-h-[400px] bg-black p-5 md:p-6 overflow-hidden">
      {/* Red ambient glow */}
      <div className="absolute top-1/2 right-0 w-32 h-32 bg-accent-red/15 rounded-full blur-[60px]" />

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-lg md:text-xl font-bold leading-tight">WHAT OUR<br />CLIENTS SAY</h2>
        <a href="#" className="text-[10px] text-accent-red hover:text-accent-red-bright uppercase tracking-wider transition-colors">
          View All →
        </a>
      </div>

      {/* Featured review with image */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-[#0a0a0a] rounded overflow-hidden border border-white/5 mb-3"
      >
        <div className="grid grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80"
              alt="Client"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]" />
            <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
          </div>
          
          {/* Content */}
          <div className="p-4 flex flex-col justify-center">
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-accent-red text-accent-red" />
              ))}
            </div>
            <p className="text-xs leading-relaxed mb-2">
              {`"${reviews[0].text}"`}
            </p>
            <p className="text-[10px] text-foreground-muted">— {reviews[0].name}</p>
          </div>
        </div>

        {/* Liquid corner */}
        <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none">
          <svg viewBox="0 0 32 32" className="w-full h-full">
            <path d="M0,32 L0,14 Q4,16 10,14 Q16,12 18,18 Q20,24 28,22 Q32,21 32,32 Z" fill="#000" />
          </svg>
        </div>
      </motion.div>

      {/* Side reviews stacked */}
      <div className="space-y-2">
        {reviews.slice(1).map((review, index) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + index * 0.08 }}
            className="bg-[#0a0a0a] rounded p-3 border border-white/5 hover:border-accent-red/30 transition-colors"
          >
            <div className="flex gap-0.5 mb-2">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-accent-red text-accent-red" />
              ))}
            </div>
            <p className="text-foreground-muted text-[10px] leading-relaxed mb-1.5">
              {`"${review.text}"`}
            </p>
            <p className="text-[9px] text-white">— {review.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
