"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useI18n } from "@/components/providers/I18nProvider";
import { cinematicEase, viewportReveal } from "@/lib/motion";

const InstagramIcon = () => (
  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const masterImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=88",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=88",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&q=88",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&q=88",
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: cinematicEase } },
};

export function Masters() {
  const { t } = useI18n();
  const masters = t.masters.items.map((m, i) => ({
    ...m,
    image: masterImages[i] ?? masterImages[0],
  }));

  return (
    <section id="masters" className="relative overflow-hidden bg-black py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_0%,rgba(209,18,27,0.14)_0%,transparent_55%)]" />

      <div className="relative z-[2] mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReveal}
          transition={{ duration: 0.75 }}
          className="mb-14"
        >
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.35em] text-[#E50914]">{t.masters.eyebrow}</span>
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-white md:text-6xl">{t.masters.title}</h2>
        </motion.div>

        <motion.div
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory md:grid md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={viewportReveal}
          variants={gridVariants}
        >
          {masters.map((master) => (
            <motion.article
              key={master.name}
              variants={cardVariants}
              className="group relative w-[min(82vw,340px)] shrink-0 snap-center overflow-hidden border border-white/[0.08] bg-[#060606] md:w-auto"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={master.image}
                  alt={master.name}
                  fill
                  sizes="(max-width:768px) 85vw, 25vw"
                  className="object-cover object-top grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-90 transition-opacity group-hover:opacity-70" />
                <div className="absolute inset-0 bg-accent-red/0 mix-blend-multiply transition-colors duration-500 group-hover:bg-accent-red/25" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-2xl font-bold uppercase leading-none text-white">{master.name}</p>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#E50914]">{master.role}</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/[0.06] p-4 md:hidden">
                <div>
                  <p className="font-display text-sm font-bold uppercase text-white">{master.name}</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#E50914]">{master.role}</p>
                </div>
                <a href="#" className="text-white/40 transition-colors hover:text-white" aria-label={t.masters.instagramAria}>
                  <InstagramIcon />
                </a>
              </div>
              <a
                href="#"
                className="absolute right-4 top-4 hidden text-white/35 transition-colors hover:text-white md:block"
                aria-label={t.masters.instagramAria}
              >
                <InstagramIcon />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
