"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="relative min-h-[350px] bg-[#050505] p-6 md:p-8 overflow-hidden">
      {/* Liquid background stain */}
      <div className="absolute -bottom-20 -left-32 w-[500px] h-[400px] pointer-events-none opacity-60">
        <svg viewBox="0 0 500 400" className="w-full h-full">
          <path d="M0,400 L0,200 Q50,150 120,180 Q200,210 280,150 Q360,90 400,140 Q450,190 500,120 L500,400 Z" fill="#000" />
          <path d="M50,220 Q120,180 200,200 Q280,220 350,170 Q420,120 480,150" stroke="#38E8FF" strokeWidth="1" strokeOpacity="0.2" fill="none" />
        </svg>
      </div>

      {/* Red ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent-red/15 rounded-full blur-[80px]" />

      <div className="relative z-10 grid lg:grid-cols-3 gap-6 md:gap-8 items-center">
        
        {/* Left: CTA Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-accent-red text-[10px] font-bold uppercase tracking-[0.3em] mb-2 block">
            Book Your Experience
          </span>
          
          <h2 className="font-display text-2xl md:text-3xl font-black leading-[0.9] mb-4 text-white">
            READY FOR A<br />
            <span className="text-accent-red">SHARPER LOOK?</span>
          </h2>
          
          <p className="text-foreground-muted text-xs md:text-sm mb-5 leading-relaxed max-w-xs">
            Experience the difference of premium grooming. Book your appointment today.
          </p>
          
          <div className="flex flex-wrap gap-3">
            <button className="bg-accent-red hover:bg-accent-red-bright text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors">
              Book Appointment
            </button>
            <button className="border border-white/30 hover:border-white/60 text-white px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-colors hover:bg-white/5">
              Call Us Now
            </button>
          </div>
        </motion.div>

        {/* Center: Image with liquid frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] max-w-[220px] mx-auto overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80"
              alt="Barbershop interior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30" />
            <div className="absolute inset-0 bg-accent-red/10 mix-blend-overlay" />
            
            {/* Red glow at top */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-2/3 h-8 bg-accent-red/40 blur-[30px]" />
          </div>

          {/* Liquid corners */}
          <div className="absolute -top-2 -left-2 w-16 h-16 pointer-events-none">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <path d="M0,0 L45,0 Q30,12 25,25 Q20,38 10,45 Q0,52 0,60 Z" fill="#050505" />
              <path d="M6,12 Q20,10 30,20" stroke="#38E8FF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
            </svg>
          </div>
          <div className="absolute -bottom-2 -right-2 w-16 h-16 pointer-events-none">
            <svg viewBox="0 0 60 60" className="w-full h-full">
              <path d="M60,60 L15,60 Q30,48 35,35 Q40,22 50,15 Q60,8 60,0 Z" fill="#050505" />
              <path d="M54,48 Q40,51 30,40" stroke="#38E8FF" strokeWidth="1" strokeOpacity="0.4" fill="none" />
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
          <div className="space-y-2.5 mb-4">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-3.5 h-3.5 text-accent-red mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[8px] text-foreground-muted uppercase tracking-wider">Address</p>
                <p className="text-[11px] text-white">123 Premium Street, Downtown District</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2.5">
              <Clock className="w-3.5 h-3.5 text-accent-red mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[8px] text-foreground-muted uppercase tracking-wider">Hours</p>
                <p className="text-[11px] text-white">Mon - Sat: 9AM - 9PM<br />Sun: 10AM - 6PM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2.5">
              <Phone className="w-3.5 h-3.5 text-accent-red mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[8px] text-foreground-muted uppercase tracking-wider">Phone</p>
                <p className="text-[11px] text-white">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2.5">
              <Mail className="w-3.5 h-3.5 text-accent-red mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[8px] text-foreground-muted uppercase tracking-wider">Email</p>
                <p className="text-[11px] text-white">book@obsidianbarbershop.com</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="relative aspect-[16/9] bg-[#0a0a0a] overflow-hidden border border-white/5">
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-15">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={`h${i}`} className="absolute w-full h-px bg-accent-red" style={{ top: `${(i + 1) * 20}%` }} />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={`v${i}`} className="absolute w-px h-full bg-accent-red" style={{ left: `${(i + 1) * 20}%` }} />
              ))}
            </div>
            
            {/* Red glow on map */}
            <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent-red/30 rounded-full blur-[30px]" />
            
            {/* Map pin */}
            <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <MapPin className="w-5 h-5 text-accent-red" />
                <div className="absolute -inset-2 bg-accent-red/20 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
