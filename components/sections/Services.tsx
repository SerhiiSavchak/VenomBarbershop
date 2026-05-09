"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    name: "Haircut",
    price: "$35",
    duration: "45 MIN",
    description: "Precision cut tailored to your style.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&q=80",
  },
  {
    name: "Beard Trim",
    price: "$25",
    duration: "30 MIN",
    description: "Expert beard shaping and maintenance.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&q=80",
  },
  {
    name: "Haircut + Beard",
    price: "$55",
    duration: "75 MIN",
    description: "Complete grooming package for the modern gentleman.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&q=80",
  },
  {
    name: "Classic Shave",
    price: "$30",
    duration: "30 MIN",
    description: "Traditional hot towel straight razor experience.",
    image: "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=400&q=80",
  },
  {
    name: "VIP Cut",
    price: "$75",
    duration: "90 MIN",
    description: "Premium experience with hot towel, massage, and styling.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80",
  },
];

export function Services() {
  return (
    <section id="services" className="relative min-h-[700px] lg:min-h-[800px] bg-[#050505] p-6 md:p-8 lg:p-10 pt-24 md:pt-28 overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <span className="text-accent-red text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">What We Offer</span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-white">
            OUR SERVICES
          </h2>
        </div>
        <p className="text-foreground-muted text-[11px] max-w-[180px] leading-relaxed text-right hidden md:block">
          Premium grooming services crafted with precision and delivered with excellence.
        </p>
      </div>

      {/* Services Grid - 5 cards exactly like reference */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3 mb-6">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            className="group cursor-pointer"
          >
            <div className="relative bg-[#0a0a0a] overflow-hidden border border-white/5 hover:border-accent-red/40 transition-all duration-300">
              {/* Liquid corner */}
              <div className="absolute bottom-0 left-0 w-12 h-12 pointer-events-none z-10">
                <svg viewBox="0 0 50 50" className="w-full h-full">
                  <path d="M0,50 L0,20 Q10,25 20,20 Q30,15 35,30 Q40,45 50,50 Z" fill="#000000" />
                  <path d="M5,35 Q15,32 22,38" stroke="#38E8FF" strokeWidth="1" strokeOpacity="0.5" fill="none" />
                </svg>
              </div>
              
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
                <div className="absolute inset-0 bg-accent-red/10 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                
                {/* Red price badge */}
                <div className="absolute top-2 right-2 bg-accent-red px-2 py-0.5">
                  <span className="font-display text-sm font-bold text-white">{service.price}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-2.5 md:p-3">
                <h3 className="font-display text-xs md:text-sm font-bold mb-1 uppercase tracking-wide text-white">{service.name}</h3>
                <p className="text-[9px] md:text-[10px] text-foreground-muted leading-relaxed mb-1.5 line-clamp-2">{service.description}</p>
                <span className="text-[9px] text-foreground-muted/60 uppercase tracking-wider">{service.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View full menu button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <button className="w-full md:w-auto px-6 py-2.5 border border-white/20 text-[10px] uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all text-white">
          View Full Menu
        </button>
      </motion.div>

      {/* Bottom liquid wave */}
      <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
        <svg viewBox="0 0 800 80" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,80 L0,40 Q100,20 200,50 Q300,80 400,40 Q500,0 600,30 Q700,60 800,40 L800,80 Z"
            fill="#000000"
          />
          <path
            d="M50,45 Q150,25 250,55 Q350,85 450,45"
            stroke="#38E8FF"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
