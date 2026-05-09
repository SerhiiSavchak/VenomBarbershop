"use client";

import { motion } from "framer-motion";
import { RevealSection, LiquidBackgroundStain } from "@/components/liquid/LiquidElements";

export function Space() {
  return (
    <section id="space" className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background liquid stain */}
      <LiquidBackgroundStain className="-top-20 -right-40 opacity-50" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <RevealSection className="mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent-red/10 border border-accent-red/30 text-accent-red text-xs font-semibold uppercase tracking-widest mb-6">
            The Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            OUR SPACE
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl">
            Step into a world where craftsmanship meets cinematic atmosphere
          </p>
        </RevealSection>

        {/* Image grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:row-span-2"
          >
            <div className="relative h-full min-h-[400px] md:min-h-[600px] rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-background-card via-background-tertiary to-background-secondary">
                {/* Red ambient lighting */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-red/20 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent-red/30 to-transparent" />
                
                {/* Content placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-4 border border-foreground/10 rounded-lg flex items-center justify-center">
                      <span className="text-4xl font-display font-bold text-foreground/20">V</span>
                    </div>
                    <p className="text-foreground-muted text-sm uppercase tracking-wider">Main Hall</p>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent-red/0 group-hover:bg-accent-red/10 transition-colors duration-500" />
              
              {/* Cyan accent line */}
              <div className="absolute bottom-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-accent-cyan/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Top right image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative h-[280px] md:h-[290px] rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-bl from-background-card via-background-tertiary to-background-secondary">
                <div className="absolute inset-0 bg-gradient-to-bl from-accent-red/15 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-foreground-muted text-sm uppercase tracking-wider">Waiting Area</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-accent-red/0 group-hover:bg-accent-red/10 transition-colors duration-500" />
            </div>
          </motion.div>

          {/* Bottom right image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative h-[280px] md:h-[290px] rounded-lg overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tl from-background-card via-background-tertiary to-background-secondary">
                <div className="absolute inset-0 bg-gradient-to-tl from-accent-red/15 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-foreground-muted text-sm uppercase tracking-wider">Styling Station</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-accent-red/0 group-hover:bg-accent-red/10 transition-colors duration-500" />
            </div>
          </motion.div>
        </div>

        {/* Atmosphere description */}
        <RevealSection delay={0.4} className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold mb-3">Dark Aesthetic</h3>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Immerse yourself in our carefully designed space with dramatic lighting and premium finishes.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold mb-3">Premium Comfort</h3>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Luxury seating, climate control, and amenities designed for your complete relaxation.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-display text-xl font-semibold mb-3">Private Setting</h3>
            <p className="text-foreground-muted text-sm leading-relaxed">
              Individual stations ensure privacy while maintaining the social atmosphere you love.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
