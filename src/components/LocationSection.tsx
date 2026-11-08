import React from "react";
import { RESTAURANT_DATA } from "../data/restaurantData";
import { MapPin, Navigation, Clock, ExternalLink } from "lucide-react";

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 sm:py-32 bg-[#0e1117] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#e2a84a] uppercase font-mono block mb-3">
            Onde Estamos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Estamos esperando por você!
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto">
            Venha desfrutar de um ambiente agradável e gastronomia de qualidade no coração de Prazeres, Jaboatão dos Guararapes – PE.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Info Card (4 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-zinc-900/90 border border-zinc-800 shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e2a84a]/15 border border-[#e2a84a]/30 flex items-center justify-center text-[#e2a84a] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    Mirnu Gastrobar
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    {RESTAURANT_DATA.neighborhood} · {RESTAURANT_DATA.locationCity}
                  </p>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-800/80">
                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800">
                  <span className="text-xs font-medium text-zinc-400 block mb-1">Localização:</span>
                  <p className="text-sm font-medium text-zinc-200">
                    Prazeres, Jaboatão dos Guararapes – PE
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    Fácil acesso na região metropolitana de Recife.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#e2a84a]" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Horários de Atendimento
                    </span>
                  </div>
                  <div className="text-xs text-zinc-300 space-y-1">
                    <p>
                      <strong className="text-white">Almoço:</strong> Todos os dias, das 08h às 15h
                    </p>
                    <p>
                      <strong className="text-white">Happy Hour:</strong> Quinta a domingo, das 18h às 23h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requested Official "COMO CHEGAR" Button */}
            <div className="pt-8 mt-6 border-t border-zinc-800">
              <a
                href={RESTAURANT_DATA.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-[#0b0d11] bg-gradient-to-r from-[#e2a84a] via-[#f0ba5b] to-[#f6cb7d] hover:brightness-105 transition-all shadow-lg shadow-[#e2a84a]/20 active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-[#0b0d11]" />
                <span>COMO CHEGAR</span>
                <ExternalLink className="w-4 h-4 text-[#0b0d11]/80" />
              </a>
              <p className="text-[11px] text-zinc-400 text-center mt-2.5 font-mono">
                Abre o itinerário diretamente no aplicativo Google Maps
              </p>
            </div>
          </div>

          {/* Right: Embedded Google Map (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative min-h-[380px] lg:min-h-[460px] bg-zinc-950">
            <iframe
              title="Localização do Mirnu Gastrobar no Google Maps"
              src="https://maps.google.com/maps?q=Mirnu%20Gastrobar%20Prazeres%20Jaboat%C3%A3o%20dos%20Guararapes&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] lg:min-h-full border-0 filter contrast-[1.05] brightness-[0.95]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Quick link overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10">
              <a
                href={RESTAURANT_DATA.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0b0d11]/90 backdrop-blur-md border border-zinc-700 text-xs font-medium text-white hover:text-[#e2a84a] shadow-lg transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#e2a84a]" />
                <span>Ver no app Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
