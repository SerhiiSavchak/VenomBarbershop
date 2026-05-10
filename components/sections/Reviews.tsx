"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { SymbioteAccent } from "@/components/symbiote/SymbioteLayer";

const reviews = [
  {
    name: "Michael R.",
    rating: 5,
    text: "Not a haircut — a reset. The room hums like a trailer score and you leave taller.",
    featured: true,
  },
  { name: "David L.", rating: 5, text: "Consistency that feels expensive. They shoot references, not mirrors." },
  { name: "James T.", rating: 5, text: "Every visit is blocked like a scene. I stopped booking anywhere else." },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 bg-accent-red/10 blur-[100px]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-accent-red">Clients</span>
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-5xl">
              Word on the street
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foreground-muted md:text-right">Editorial tone — no star spam, just proof.</p>
        </motion.div>

        <div className="relative">
          <SymbioteAccent band="mid" position="bottom-left" className="opacity-50" />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative overflow-hidden border border-white/[0.08] bg-[#070707]"
          >
            <div className="grid md:grid-cols-12">
              <div className="relative aspect-[4/5] md:col-span-5 md:aspect-auto md:min-h-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&q=88"
                  alt="Client experience"
                  fill
                  className="object-cover brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/50 to-[#070707] md:via-black/30" />
              </div>
              <div className="flex flex-col justify-center p-8 md:col-span-7 md:p-14">
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: reviews[0].rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-red text-accent-red" />
                  ))}
                </div>
                <p className="font-display text-2xl font-medium uppercase leading-snug tracking-tight text-white md:text-3xl">
                  &ldquo;{reviews[0].text}&rdquo;
                </p>
                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.25em] text-foreground-muted">
                  — {reviews[0].name}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reviews.slice(1).map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08, duration: 0.7 }}
                className="border border-white/[0.07] bg-[#060606] p-6 transition-colors hover:border-accent-red/35"
              >
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-accent-red text-accent-red" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-white/75">&ldquo;{review.text}&rdquo;</p>
                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-muted">
                  — {review.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
