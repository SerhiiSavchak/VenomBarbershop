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
import { LiquidDivider } from "@/components/liquid/LiquidElements";

export default function Home() {
  return (
    <main className="relative bg-black">
      <Header />
      
      {/* Row 1: Hero full width */}
      <Hero />
      
      <LiquidDivider />
      
      {/* Row 2: Services full width */}
      <Services />
      
      <LiquidDivider />
      
      {/* Row 3: Space + Process side by side */}
      <div className="grid lg:grid-cols-2">
        <Space />
        <Process />
      </div>
      
      <LiquidDivider />
      
      {/* Row 4: Masters + Gallery + Reviews three columns */}
      <div className="grid lg:grid-cols-3">
        <Masters />
        <Gallery />
        <Reviews />
      </div>
      
      <LiquidDivider />
      
      {/* Row 5: Contact + Footer */}
      <Contact />
      <Footer />
    </main>
  );
}
