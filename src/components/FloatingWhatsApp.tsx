import React, { useState } from "react";
import { RESTAURANT_DATA } from "../data/restaurantData";
import { MessageCircle, X } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-end flex-col">
      {/* Speech bubble / Tooltip prompt */}
      {showTooltip && (
        <div className="mb-2 relative bg-zinc-900 text-white text-xs py-2 px-3.5 rounded-2xl shadow-xl border border-zinc-700/80 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[210px] hidden sm:block">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-[#e2a84a]">Dúvidas ou Pedidos?</p>
              <p className="text-[11px] text-zinc-300 mt-0.5 leading-snug">
                Fale agora com a equipe do Mirnu Gastrobar no WhatsApp!
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-zinc-500 hover:text-zinc-300 -mr-1 -mt-0.5 p-0.5"
              aria-label="Fechar mensagem de WhatsApp"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          {/* Tooltip triangle tail */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-zinc-900 border-b border-r border-zinc-700/80 transform rotate-45" />
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={RESTAURANT_DATA.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp oficial do Mirnu Gastrobar"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Subtle breathing ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md" />

        {/* Hover label for desktop */}
        <span className="sr-only">Falar no WhatsApp (81) 99271-5946</span>
      </a>
    </div>
  );
};
