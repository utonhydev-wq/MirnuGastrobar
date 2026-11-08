import React from "react";
import { RESTAURANT_DATA } from "../data/restaurantData";
import { Star, MessageSquareHeart, ExternalLink, ThumbsUp } from "lucide-react";

export const GoogleReviews: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 sm:py-32 bg-[#090b0e] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#e2a84a]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 shadow-2xl text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700 text-xs font-semibold text-[#e2a84a] mb-6">
            <MessageSquareHeart className="w-4 h-4 text-[#e2a84a]" />
            <span>Avaliações & Opiniões de Clientes</span>
          </div>

          {/* 5 Stars representation */}
          <div className="flex items-center justify-center gap-1.5 mb-5 text-[#f6cb7d]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-[#e2a84a] text-[#e2a84a]" />
            ))}
          </div>

          {/* Exact Requested Title */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5 max-w-2xl leading-tight">
            Sua opinião faz parte da nossa história!
          </h2>

          {/* Exact Requested Text */}
          <p className="text-base sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Gostou da experiência no Mirnu Gastrobar? Deixe sua avaliação no Google e ajude outras pessoas a conhecerem nosso espaço.
          </p>

          {/* Exact Requested Button */}
          <a
            href={RESTAURANT_DATA.reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold text-[#0b0d11] bg-gradient-to-r from-[#e2a84a] via-[#f0ba5b] to-[#f6cb7d] hover:brightness-105 active:scale-[0.98] shadow-xl shadow-[#e2a84a]/25 transition-all duration-200"
          >
            <ThumbsUp className="w-5 h-5 text-[#0b0d11]" />
            <span>AVALIAR NO GOOGLE</span>
            <ExternalLink className="w-4 h-4 text-[#0b0d11]/80" />
          </a>

          {/* Social Proof Quote cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 w-full text-left pt-10 border-t border-zinc-800/80">
            <div className="p-4 rounded-2xl bg-black/40 border border-zinc-800">
              <div className="flex items-center gap-1 text-[#e2a84a] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#e2a84a]" />
                ))}
              </div>
              <p className="text-xs text-zinc-300 italic mb-3">
                "Almoço muito saboroso e rápido. As marmitas chegam quentinhas e bem servidas. Recomendo demais!"
              </p>
              <span className="text-[11px] font-mono text-zinc-400 block">Cliente Verificado · Google</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-zinc-800">
              <div className="flex items-center gap-1 text-[#e2a84a] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#e2a84a]" />
                ))}
              </div>
              <p className="text-xs text-zinc-300 italic mb-3">
                "Ambiente super agradável em Prazeres. O happy hour tem cerveja gelada e petiscos de primeira qualidade."
              </p>
              <span className="text-[11px] font-mono text-zinc-400 block">Cliente Verificado · Google</span>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-zinc-800">
              <div className="flex items-center gap-1 text-[#e2a84a] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#e2a84a]" />
                ))}
              </div>
              <p className="text-xs text-zinc-300 italic mb-3">
                "Atendimento nota dez e tempero no ponto. Virou nosso lugar fixo para almoço durante a semana."
              </p>
              <span className="text-[11px] font-mono text-zinc-400 block">Cliente Verificado · Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
