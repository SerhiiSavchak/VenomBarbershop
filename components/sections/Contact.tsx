"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="relative py-12 md:py-16 bg-[#050505] overflow-hidden">
      {/* Red ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-red/15 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          
          {/* Left: CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-red text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">
              Book Your Experience
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl font-black leading-[0.9] mb-4">
              READY FOR A<br />
              <span className="text-accent-red">SHARPER LOOK?</span>
            </h2>
            
            <p className="text-foreground-muted text-sm mb-6 leading-relaxed max-w-xs">
              Experience the difference of premium grooming. Book your appointment today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="primary" size="default">
                Book Appointment
              </Button>
              <Button variant="secondary" size="default">
                Call Us Now
              </Button>
            </div>
          </motion.div>

          {/* Center: Image with liquid frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-[280px] mx-auto overflow-hidden rounded">
              <Image
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80"
                alt="Barbershop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />
              <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
              
              {/* Red glow */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-2/3 h-12 bg-accent-red/30 blur-[40px]" />
            </div>

            {/* Liquid corners */}
            <div className="absolute -top-3 -left-3 w-20 h-20 pointer-events-none">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <path d="M0,0 L60,0 Q40,15 35,30 Q30,45 15,55 Q0,65 0,80 Z" fill="#050505" />
                <path d="M8,15 Q25,12 38,25" stroke="#38E8FF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              </svg>
            </div>
            <div className="absolute -bottom-3 -right-3 w-20 h-20 pointer-events-none">
              <svg viewBox="0 0 80 80" className="w-full h-full">
                <path d="M80,80 L20,80 Q40,65 45,50 Q50,35 65,25 Q80,15 80,0 Z" fill="#050505" />
                <path d="M72,65 Q55,68 42,55" stroke="#38E8FF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
              </svg>
            </div>
          </motion.div>

          {/* Right: Contact details + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Contact details */}
            <div className="space-y-3 mb-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[9px] text-foreground-muted uppercase tracking-wider">Address</p>
                  <p className="text-xs">123 Premium Street, Downtown District</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[9px] text-foreground-muted uppercase tracking-wider">Hours</p>
                  <p className="text-xs">Mon - Sat: 9AM - 9PM | Sun: 10AM - 6PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[9px] text-foreground-muted uppercase tracking-wider">Phone</p>
                  <p className="text-xs">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent-red mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[9px] text-foreground-muted uppercase tracking-wider">Email</p>
                  <p className="text-xs">book@obsidianbarbershop.com</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="relative aspect-video bg-[#0a0a0a] rounded overflow-hidden border border-white/5">
              <div className="absolute inset-0">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={`h${i}`} className="absolute w-full h-px bg-accent-red" style={{ top: `${(i + 1) * 16.66}%` }} />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={`v${i}`} className="absolute w-px h-full bg-accent-red" style={{ left: `${(i + 1) * 16.66}%` }} />
                  ))}
                </div>
                
                {/* Map pin */}
                <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <MapPin className="w-6 h-6 text-accent-red" />
                    <div className="absolute -inset-3 bg-accent-red/20 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large liquid stain background */}
      <div className="absolute -bottom-20 -left-32 w-[500px] h-[400px] pointer-events-none opacity-60">
        <svg viewBox="0 0 500 400" className="w-full h-full">
          <path d="M0,400 L0,200 Q50,150 120,180 Q200,210 280,150 Q360,90 400,140 Q450,190 500,120 L500,400 Z" fill="#000" />
          <path d="M50,220 Q120,180 200,200 Q280,220 350,170 Q420,120 480,150" stroke="#38E8FF" strokeWidth="1" strokeOpacity="0.2" fill="none" />
        </svg>
      </div>
    </section>
  );
}
