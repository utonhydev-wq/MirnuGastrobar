import React from "react";
import { RESTAURANT_DATA } from "../data/restaurantData";
import { ExternalLink, ShoppingBag, Clock, PackageCheck, Utensils } from "lucide-react";

export const IfoodSection: React.FC = () => {
  return (
    <section id="cardapio" className="py-24 sm:py-32 bg-[#0a0c10] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ea1d2c]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#161a22] via-zinc-900 to-[#12141a] border border-zinc-800 shadow-2xl relative overflow-hidden">
          {/* Subtle iFood Red decorative accent */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#ea1d2c]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="text-center lg:text-left max-w-xl">
              {/* Category pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea1d2c]/15 border border-[#ea1d2c]/30 text-xs font-semibold text-rose-400 mb-5">
                <ShoppingBag className="w-3.5 h-3.5 text-[#ea1d2c]" />
                <span>Delivery Oficial via iFood</span>
              </div>

              {/* Exact Requested Title */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                Seu Mirnu favorito, a poucos cliques de distância!
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mb-8">
                Bateu a fome no almoço ou quer saborear uma refeição com gostinho de comida caseira de verdade? Peça nossas marmitas selecionadas e delícias gastronômicas com comodidade no iFood.
              </p>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-left">
                <div className="p-3.5 rounded-xl bg-black/40 border border-zinc-800/80">
                  <Clock className="w-4 h-4 text-[#e2a84a] mb-1.5" />
                  <p className="text-xs font-semibold text-white">Preparo Ágil</p>
                  <p className="text-[11px] text-zinc-400">Direto da cozinha para seu endereço</p>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-zinc-800/80">
                  <PackageCheck className="w-4 h-4 text-[#e2a84a] mb-1.5" />
                  <p className="text-xs font-semibold text-white">Embalagem Segura</p>
                  <p className="text-[11px] text-zinc-400">Mantém tudo quente e saboroso</p>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-zinc-800/80">
                  <Utensils className="w-4 h-4 text-[#e2a84a] mb-1.5" />
                  <p className="text-xs font-semibold text-white">Tempero Mirnu</p>
                  <p className="text-[11px] text-zinc-400">Qualidade diária garantida</p>
                </div>
              </div>

              {/* Primary Requested CTA Button */}
              <div>
                <a
                  href={RESTAURANT_DATA.ifoodLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#ea1d2c] to-[#c7111e] hover:from-[#c7111e] hover:to-[#ea1d2c] shadow-xl shadow-[#ea1d2c]/30 hover:shadow-[#ea1d2c]/50 transition-all duration-200 active:scale-[0.98] w-full sm:w-auto tracking-wide"
                >
                  <span>FAZER PEDIDO NO IFOOD</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-xs text-zinc-400 mt-3 font-mono">
                  Atendimento em Prazeres, Jaboatão dos Guararapes e região.
                </p>
              </div>
            </div>

            {/* Right Card / Visual representation */}
            <div className="w-full lg:w-72 shrink-0">
              <div className="p-6 rounded-2xl bg-zinc-950/90 border border-zinc-800 shadow-xl flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 ring-2 ring-[#e2a84a]/60 shadow-lg">
                  <img
                    src={RESTAURANT_DATA.logoUrl}
                    alt="Mirnu Gastrobar no iFood"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  Mirnu Gastrobar
                </h3>
                <span className="text-xs text-zinc-400 mb-3">Marmitas & Gastrobar</span>
                
                <div className="w-full py-2.5 px-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 flex items-center justify-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Loja Oficial no iFood</span>
                </div>

                <a
                  href={RESTAURANT_DATA.ifoodLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
                >
                  Ver Cardápio Completo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
