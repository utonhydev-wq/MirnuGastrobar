import React from "react";
import { RESTAURANT_DATA } from "../data/restaurantData";
import { Instagram, Facebook, MessageCircle, MapPin, ExternalLink, ArrowUp, UtensilsCrossed } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07080b] border-t border-zinc-800/80 text-zinc-300 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-850">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#e2a84a]/60 shrink-0">
                <img
                  src={RESTAURANT_DATA.logoUrl}
                  alt="Mirnu Gastrobar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  {RESTAURANT_DATA.name}
                </h3>
                <p className="text-xs text-zinc-400">Gastronomia & Momentos</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              Uma experiência gastronômica completa em Prazeres, Jaboatão dos Guararapes. Do almoço diário às noites especiais de Happy Hour.
            </p>

            <div className="pt-2">
              <a
                href={RESTAURANT_DATA.ifoodLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#ea1d2c]/15 text-[#ea1d2c] border border-[#ea1d2c]/30 text-xs font-semibold hover:bg-[#ea1d2c]/25 transition-colors"
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Peça no iFood</span>
              </a>
            </div>
          </div>

          {/* Col 2: Horários Oficiais */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Horários de Funcionamento
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <p className="font-semibold text-[#e2a84a]">Almoço (Todos os Dias)</p>
                <p className="text-zinc-400 mt-0.5">Segunda a Domingo: 08h às 15h</p>
              </div>
              <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <p className="font-semibold text-amber-300">Happy Hour</p>
                <p className="text-zinc-400 mt-0.5">Quinta a Domingo: 18h às 23h</p>
              </div>
            </div>
          </div>

          {/* Col 3: Localização & Contato */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Localização & Contato
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e2a84a] mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium">Prazeres</p>
                  <p className="text-zinc-400">Jaboatão dos Guararapes – PE</p>
                </div>
              </li>
              <li>
                <a
                  href={RESTAURANT_DATA.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#e2a84a] hover:underline"
                >
                  <span>Abrir no Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={RESTAURANT_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-[#e2a84a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span className="font-mono">{RESTAURANT_DATA.whatsappNumber}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Redes Sociais */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white mb-4 tracking-wide">
              Redes Sociais
            </h4>
            <p className="text-xs text-zinc-400 mb-4">
              Siga nossos canais oficiais para promoções, cardápio do dia e programações.
            </p>
            <div className="flex flex-col space-y-2.5">
              <a
                href={RESTAURANT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 hover:text-white hover:border-pink-500/50 hover:bg-zinc-800/80 transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram @mirnugastrobar</span>
              </a>

              <a
                href={RESTAURANT_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 hover:text-white hover:border-blue-500/50 hover:bg-zinc-800/80 transition-all"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
                <span>Facebook Oficial</span>
              </a>

              <a
                href={RESTAURANT_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800/80 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Oficial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Mirnu Gastrobar. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Prazeres, Jaboatão dos Guararapes – PE</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-[#e2a84a] transition-colors"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
