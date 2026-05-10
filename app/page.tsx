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
    <main className="relative min-h-screen bg-black">
      <Header />
      <Hero />

      <Services />
      <Space />
      <Process />
      <Masters />
      <Gallery />
      <Reviews />
      <Contact />

      <Footer />
    </main>
  );
}
