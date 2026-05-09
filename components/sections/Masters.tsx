"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { RevealSection } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import { Instagram, Award } from "lucide-react";

const masters = [
  {
    name: "Marcus Stone",
    role: "Senior Barber",
    experience: "12 years",
    specialty: "Classic Cuts & Fades",
    description: "Master of precision fades and classic gentleman cuts with over a decade of experience.",
  },
  {
    name: "David Chen",
    role: "Style Director",
    experience: "10 years",
    specialty: "Modern Styles",
    description: "Trendsetter known for innovative techniques and editorial-worthy finishes.",
  },
  {
    name: "James Williams",
    role: "Beard Specialist",
    experience: "8 years",
    specialty: "Beard Sculpting",
    description: "Expert in beard design and hot towel shaves with meticulous attention to detail.",
  },
  {
    name: "Alex Rivera",
    role: "Color Expert",
    experience: "7 years",
    specialty: "Color & Texture",
    description: "Specialist in men&apos;s coloring and textured cuts for a unique personal style.",
  },
];

export function Masters() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="masters" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-red/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <RevealSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-semibold uppercase tracking-widest mb-6">
            Expert Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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
                {/* Image placeholder */}
                <div className="relative aspect-[3/4] bg-gradient-to-b from-background-tertiary to-background-card">
                  {/* Red lighting effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-accent-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border border-foreground/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-display font-bold text-foreground/20">
                        {master.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>

                  {/* Award badge */}
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-accent-red/20 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-accent-red" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold mb-1">{master.name}</h3>
                  <p className="text-accent-red text-sm font-medium mb-2">{master.role}</p>
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
                <div className="absolute inset-x-4 bottom-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
            className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {masters.map((master) => (
              <motion.div
                key={master.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[260px] snap-center"
              >
                <div className="glass rounded-lg overflow-hidden">
                  {/* Image */}
                  <div className="relative aspect-[4/5] bg-gradient-to-b from-background-tertiary to-background-card">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 border border-foreground/10 rounded-full flex items-center justify-center">
                        <span className="text-xl font-display font-bold text-foreground/20">
                          {master.name.split(" ").map(n => n[0]).join("")}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold">{master.name}</h3>
                    <p className="text-accent-red text-sm">{master.role}</p>
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
