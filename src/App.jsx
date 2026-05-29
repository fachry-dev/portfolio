import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Projetcs from "./sections/Projetcs";
import Certifications from "./sections/Certifications";
import About from "./sections/About";
import Contact from "./sections/Contact";

import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#090514] text-slate-200 selection:bg-accent-purple/30 overflow-x-hidden">
      <Navbar />

      <main className="relative z-10 space-y-12">
        <Hero />

        <ScrollReveal>
          <Services />
        </ScrollReveal>

        <ScrollReveal>
          <Projetcs />
        </ScrollReveal>

        <ScrollReveal>
          <Certifications />
        </ScrollReveal>

        <ScrollReveal>
          <About />
        </ScrollReveal>

        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  );
}
