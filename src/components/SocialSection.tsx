import React from "react";
import { RESTAURANT_DATA } from "../data/restaurantData";
import { Instagram, Facebook, ExternalLink, Flame, MessageCircle, Heart } from "lucide-react";

export const SocialSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0b0e13] border-t border-zinc-850 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#e2a84a] uppercase font-mono block mb-3">
            Conecte-se Conosco
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Acompanhe o Mirnu nas Redes Sociais
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-light">
            Fique por dentro do cardápio do dia, promoções exclusivas, programação do Happy Hour e bastidores da nossa cozinha.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Featured: Instagram (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-900/95 to-zinc-950 border-2 border-pink-500/30 hover:border-pink-500/60 shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 shadow-lg">
                    <div className="w-full h-full bg-zinc-900 rounded-[14px] flex items-center justify-center text-white">
                      <Instagram className="w-6 h-6 text-pink-400" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-mono font-medium text-pink-400 tracking-wider uppercase block">
                      Canal Principal de Novidades
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      @mirnugastrobar
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs font-semibold text-pink-300">
                  <Flame className="w-3.5 h-3.5 text-pink-400" />
                  <span>Stories Diários</span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed mb-6">
                Nosso Instagram é onde tudo acontece! Acompanhe fotos dos pratos servidos no almoço, a atmosfera vibrante do nosso Happy Hour, avisos de horários especiais e novidades fresquinhas.
              </p>

              {/* Simulated Instagram feed preview highlights */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="relative aspect-square rounded-xl overflow-hidden group/item">
                  <img
                    src="https://i.postimg.cc/JzVZ6cs5/mirnugastrobar-1793628003-4021519516765074416-6189682257.jpg"
                    alt="Prato do Mirnu Gastrobar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center text-white text-xs gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>

                <div className="relative aspect-square rounded-xl overflow-hidden group/item">
                  <img
                    src="https://i.postimg.cc/zGZKtSyp/mirnugastrobar-1793628003-4021519516773492525-6189682257.jpg"
                    alt="Ambiente Mirnu Gastrobar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center text-white text-xs gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>

                <div className="relative aspect-square rounded-xl overflow-hidden group/item">
                  <img
                    src="https://i.postimg.cc/Mp2VPbn5/mirnugastrobar-1793628003-4021519517008347413-6189682257.jpg"
                    alt="Happy Hour no Mirnu"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center text-white text-xs gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={RESTAURANT_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:brightness-110 transition-all shadow-md active:scale-[0.98] w-full sm:w-auto"
              >
                <Instagram className="w-4 h-4" />
                <span>SEGUIR NO INSTAGRAM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Secondary: Facebook */}
          <div className="p-8 sm:p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Facebook className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-medium text-blue-400 tracking-wider uppercase block">
                    Página Oficial
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Facebook
                  </h3>
                </div>
              </div>

              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6">
                Curta nossa página no Facebook para acompanhar publicações, novidades, fotos e avaliações da nossa comunidade gastronômica.
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800 space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
                  <span>Publicações e avisos oficiais</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Heart className="w-3.5 h-3.5 text-blue-400" />
                  <span>Comunidade Mirnu Gastrobar</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-800">
              <a
                href={RESTAURANT_DATA.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors w-full"
              >
                <Facebook className="w-4 h-4" />
                <span>Acessar Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
