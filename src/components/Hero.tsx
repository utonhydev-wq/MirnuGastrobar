import React from "react";
import { RESTAURANT_DATA } from "../data/restaurantData";
import { UtensilsCrossed, MapPin, ExternalLink, Sparkles, ChevronDown } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToLocation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#localizacao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToExperience = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#experiencia");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0a0c10]"
    >
      {/* Background with authentic atmosphere overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle warm amber radial glows */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#e2a84a]/12 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 -right-20 w-[450px] h-[450px] bg-[#c58a31]/10 rounded-full blur-[120px]" />
        
        {/* Background photo featuring the authentic restaurant environment */}
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
          <img
            src="https://i.postimg.cc/Mp2VPbn5/mirnugastrobar-1793628003-4021519517008347413-6189682257.jpg"
            alt="Ambiente Mirnu Gastrobar"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter blur-[1px] scale-105"
          />
        </div>

        {/* Cinematic gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/80 to-[#0a0c10]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,12,16,0.85)_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Established Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-[#e2a84a]/30 text-xs text-[#e2a84a] shadow-inner mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#e2a84a]" />
          <span className="font-medium tracking-wide">Prazeres · Jaboatão dos Guararapes – PE</span>
        </div>

        {/* Brand Logo & Name */}
        <div className="mb-6 relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mx-auto p-1 bg-gradient-to-tr from-[#e2a84a] via-amber-200 to-[#c58a31] shadow-2xl shadow-[#e2a84a]/20 ring-4 ring-[#0a0c10]">
            <img
              src={RESTAURANT_DATA.logoUrl}
              alt="Mirnu Gastrobar"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Main Title (exact suggested title) */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.15] text-balance mb-6">
          {RESTAURANT_DATA.heroTitle}
        </h1>

        {/* Subtitle (exact suggested subtitle) */}
        <p className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed text-pretty font-light mb-10">
          {RESTAURANT_DATA.heroSubtitle}
        </p>

        {/* Two CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14">
          <a
            href={RESTAURANT_DATA.ifoodLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#0a0c10] bg-gradient-to-r from-[#e2a84a] via-[#f0ba5b] to-[#f6cb7d] hover:brightness-105 active:scale-[0.98] shadow-xl shadow-[#e2a84a]/25 transition-all duration-200"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#0a0c10]" />
            <span>Fazer pedido pelo iFood</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#0a0c10]/80" />
          </a>

          <a
            href="#localizacao"
            onClick={scrollToLocation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-medium text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700/80 hover:border-zinc-500 hover:text-white transition-all duration-200 active:scale-[0.98]"
          >
            <MapPin className="w-4 h-4 text-[#e2a84a]" />
            <span>Conhecer nossa localização</span>
          </a>
        </div>

        {/* Feature summary strip */}
        <div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-zinc-800/80 text-left">
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/70">
            <span className="text-[11px] font-semibold text-[#e2a84a] uppercase tracking-wider block">Almoço</span>
            <p className="text-xs sm:text-sm font-medium text-zinc-200 mt-0.5">Todos os Dias</p>
            <p className="text-[11px] text-zinc-400">08h às 15h</p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/70">
            <span className="text-[11px] font-semibold text-[#e2a84a] uppercase tracking-wider block">Happy Hour</span>
            <p className="text-xs sm:text-sm font-medium text-zinc-200 mt-0.5">Quinta a Domingo</p>
            <p className="text-[11px] text-zinc-400">18h às 23h</p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/70">
            <span className="text-[11px] font-semibold text-[#e2a84a] uppercase tracking-wider block">Local</span>
            <p className="text-xs sm:text-sm font-medium text-zinc-200 mt-0.5">Prazeres</p>
            <p className="text-[11px] text-zinc-400">Jaboatão dos Guararapes</p>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/70">
            <span className="text-[11px] font-semibold text-[#e2a84a] uppercase tracking-wider block">Delivery</span>
            <p className="text-xs sm:text-sm font-medium text-zinc-200 mt-0.5">Pelo iFood</p>
            <p className="text-[11px] text-zinc-400">Rápido e quentinho</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#experiencia"
          onClick={scrollToExperience}
          className="mt-12 text-zinc-500 hover:text-[#e2a84a] transition-colors p-2 inline-flex flex-col items-center gap-1 group"
          aria-label="Rolar para a seção de experiência"
        >
          <span className="text-[11px] uppercase tracking-widest font-mono text-zinc-500 group-hover:text-[#e2a84a]">Descubra mais</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
