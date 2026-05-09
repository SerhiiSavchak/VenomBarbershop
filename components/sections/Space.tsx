"use client";

import { motion } from "framer-motion";
import { RevealSection, LiquidSectionDivider } from "@/components/liquid/LiquidElements";
import Image from "next/image";

export function Space() {
  return (
    <section id="space" className="relative bg-background overflow-hidden">
      {/* Liquid divider top */}
      <LiquidSectionDivider />

      <div className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <RevealSection className="mb-16">
            <span className="inline-block px-4 py-2 bg-accent-red text-white text-xs font-bold uppercase tracking-widest mb-6">
              The Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black mb-6">
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
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80"
                  alt="Premium barbershop interior"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Red ambient lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-red/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                
                {/* Title overlay */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-xs text-accent-red font-semibold uppercase tracking-wider">Main Hall</span>
                  <h3 className="font-display text-2xl font-bold mt-1">Premium Experience</h3>
                </div>

                {/* Cyan accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=80"
                  alt="Barbershop waiting area"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-accent-red/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-foreground-muted uppercase tracking-wider">Waiting Area</span>
                </div>
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
                <Image
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80"
                  alt="Styling station"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-accent-red/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-foreground-muted uppercase tracking-wider">Styling Station</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Atmosphere description */}
          <RevealSection delay={0.4} className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-bold mb-3">Dark Aesthetic</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Immerse yourself in our carefully designed space with dramatic lighting and premium finishes.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-bold mb-3">Premium Comfort</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Luxury seating, climate control, and amenities designed for your complete relaxation.
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-display text-xl font-bold mb-3">Private Setting</h3>
              <p className="text-foreground-muted text-sm leading-relaxed">
                Individual stations ensure privacy while maintaining the social atmosphere you love.
              </p>
            </div>
          </RevealSection>
        </div>
      </div>

      {/* Liquid divider bottom */}
      <LiquidSectionDivider inverted />
    </section>
  );
}
