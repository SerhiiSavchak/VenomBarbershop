"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection, LiquidCorner } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import { Instagram, Award } from "lucide-react";
import Image from "next/image";

const masters = [
  {
    name: "Marcus Stone",
    role: "Senior Barber",
    experience: "12 years",
    specialty: "Classic Cuts & Fades",
    description: "Master of precision fades and classic gentleman cuts.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "David Chen",
    role: "Style Director",
    experience: "10 years",
    specialty: "Modern Styles",
    description: "Trendsetter known for innovative techniques.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "James Williams",
    role: "Beard Specialist",
    experience: "8 years",
    specialty: "Beard Sculpting",
    description: "Expert in beard design and hot towel shaves.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Alex Rivera",
    role: "Color Expert",
    experience: "7 years",
    specialty: "Color & Texture",
    description: "Specialist in coloring and textured cuts.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  },
];

export function Masters() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="masters" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[200px]" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <RevealSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-red text-white text-xs font-bold uppercase tracking-widest mb-6">
            Expert Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            MEET THE MASTERS
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            Skilled artisans dedicated to perfecting your look
          </p>
        </RevealSection>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {masters.map((master, index) => (
            <motion.div
              key={master.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative glass rounded-lg overflow-hidden hover:border-accent-red/30 transition-all duration-300">
                {/* Liquid corners */}
                <LiquidCorner position="top-right" size="md" />
                
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={master.image}
                    alt={master.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                  {/* Red lighting effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Award badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-accent-red rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold mb-1">{master.name}</h3>
                  <p className="text-accent-red text-sm font-semibold mb-2">{master.role}</p>
                  <p className="text-foreground-muted text-xs mb-3 line-clamp-2">
                    {master.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-3 border-t border-foreground/10">
                    <span className="text-xs text-foreground-muted">{master.experience}</span>
                    <button className="text-foreground-muted hover:text-accent-red transition-colors">
                      <Instagram className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hover book button */}
                <div className="absolute inset-x-4 bottom-24 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button variant="primary" size="sm" className="w-full">
                    Book with {master.name.split(" ")[0]}
                  </Button>
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
            {masters.map((master) => (
              <motion.div
                key={master.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[280px] snap-center"
              >
                <div className="glass rounded-lg overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={master.image}
                      alt={master.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-display text-lg font-bold">{master.name}</h3>
                    <p className="text-accent-red text-sm font-semibold">{master.role}</p>
                    <p className="text-foreground-muted text-xs mt-2">{master.specialty}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
