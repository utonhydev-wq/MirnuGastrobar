import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { GalleryCarousel } from "./components/GalleryCarousel";
import { OperatingHours } from "./components/OperatingHours";
import { IfoodSection } from "./components/IfoodSection";
import { LocationSection } from "./components/LocationSection";
import { GoogleReviews } from "./components/GoogleReviews";
import { SocialSection } from "./components/SocialSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0d11] text-zinc-100 flex flex-col font-sans selection:bg-[#e2a84a] selection:text-[#0b0d11]">
      {/* 3. Header / Menu de Navegação */}
      <Navbar />

      <main className="flex-grow">
        {/* Seção 1: Hero / Apresentação */}
        <Hero />

        {/* Seção 2: Nossa Experiência */}
        <Experience />

        {/* Seção 3: Galeria Automática */}
        <GalleryCarousel />

        {/* Seção 4: Horários de Funcionamento */}
        <OperatingHours />

        {/* Seção 5: Peça pelo iFood */}
        <IfoodSection />

        {/* Seção 6: Localização */}
        <LocationSection />

        {/* Seção 7: Avalie nosso Atendimento */}
        <GoogleReviews />

        {/* Seção 8: Redes Sociais */}
        <SocialSection />
      </main>

      {/* 4. Rodapé */}
      <Footer />

      {/* Seção 9: Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
