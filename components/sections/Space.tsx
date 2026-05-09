"use client";

import { motion } from "framer-motion";
import { RevealSection, LiquidImageFrame } from "@/components/liquid/LiquidElements";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function Space() {
  return (
    <section id="space" className="relative py-16 md:py-24 bg-black overflow-hidden">
      {/* Red ambient glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent-red/10 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Text + small images */}
          <div className="order-2 lg:order-1">
            <RevealSection>
              <span className="text-accent-red text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-2 block">The Experience</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[0.95] mb-6">
                OUR SPACE
              </h2>
              <p className="text-foreground-muted text-sm md:text-base leading-relaxed max-w-md mb-6">
                Step into a world where craftsmanship meets cinematic atmosphere. Every detail designed for your comfort.
              </p>
              <Button variant="secondary" size="md">
                Book a Visit
              </Button>
            </RevealSection>

            {/* Two small images stacked */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&q=80"
                  alt="Barber chair"
                  fill
                  className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&q=80"
                  alt="Products"
                  fill
                  className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </motion.div>
            </div>
          </div>

          {/* Right: Large main image with liquid frame */}
          <div className="order-1 lg:order-2">
            <LiquidImageFrame>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80"
                  alt="Cinematic barbershop interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />
                <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
                
                {/* Red glow at top */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-accent-red/40 blur-[60px]" />
                
                {/* Cyan edge accents */}
                <div className="absolute top-0 left-0 w-20 h-0.5 bg-gradient-to-r from-accent-cyan/60 to-transparent" />
                <div className="absolute top-0 left-0 w-0.5 h-16 bg-gradient-to-b from-accent-cyan/40 to-transparent" />
              </motion.div>
            </LiquidImageFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
