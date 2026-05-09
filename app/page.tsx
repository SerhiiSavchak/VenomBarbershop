"use client";

import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Space } from "@/components/sections/Space";
import { Process } from "@/components/sections/Process";
import { Masters } from "@/components/sections/Masters";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Header />
      
      {/* Bento Grid Layout matching reference exactly */}
      <div className="max-w-[1440px] mx-auto">
        
        {/* ROW 1: Hero (left ~55%) + Services (right ~45%) */}
        <div className="grid lg:grid-cols-[55fr_45fr] border-b border-white/5">
          <Hero />
          <Services />
        </div>
        
        {/* ROW 2: Space (left ~55%) + Process (right ~45%) */}
        <div className="grid lg:grid-cols-[55fr_45fr] border-b border-white/5">
          <Space />
          <Process />
        </div>
        
        {/* ROW 3: Masters + Gallery + Reviews (3 columns) */}
        <div className="grid lg:grid-cols-3 border-b border-white/5">
          <Masters />
          <Gallery />
          <Reviews />
        </div>
        
        {/* ROW 4: Contact (full width) */}
        <Contact />
        
      </div>
      
      <Footer />
    </main>
  );
}
