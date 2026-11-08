import React, { useState, useEffect } from "react";
import { RESTAURANT_DATA, getRestaurantCurrentStatus, OpenStatus } from "../data/restaurantData";
import { Clock, Sun, Sparkles, CheckCircle2, Calendar } from "lucide-react";

export const OperatingHours: React.FC = () => {
  const [currentStatus, setCurrentStatus] = useState<OpenStatus>(getRestaurantCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStatus(getRestaurantCurrentStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const weekSchedule = [
    { day: "Segunda-feira", lunch: "08:00 – 15:00", happyHour: "Fechado à noite" },
    { day: "Terça-feira", lunch: "08:00 – 15:00", happyHour: "Fechado à noite" },
    { day: "Quarta-feira", lunch: "08:00 – 15:00", happyHour: "Fechado à noite" },
    { day: "Quinta-feira", lunch: "08:00 – 15:00", happyHour: "18:00 – 23:00" },
    { day: "Sexta-feira", lunch: "08:00 – 15:00", happyHour: "18:00 – 23:00" },
    { day: "Sábado", lunch: "08:00 – 15:00", happyHour: "18:00 – 23:00" },
    { day: "Domingo", lunch: "08:00 – 15:00", happyHour: "18:00 – 23:00" },
  ];

  return (
    <section id="horarios" className="py-24 sm:py-32 bg-[#0c0f14] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#e2a84a] uppercase font-mono block mb-3">
            Programação Oficial
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Horários de Funcionamento
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-light">
            Planeje sua visita ou faça seu pedido. Estamos prontos para receber você com sabor e acolhimento.
          </p>

          {/* Real-time Status Banner */}
          <div className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-700/80 shadow-lg">
            <div className={`w-2.5 h-2.5 rounded-full ${currentStatus.isOpen ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
            <span className="text-sm font-semibold text-white">{currentStatus.statusLabel}</span>
            <span className="text-zinc-400 text-xs font-mono">· {currentStatus.statusDetail}</span>
          </div>
        </div>

        {/* 2 Primary Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Almoço Card (Highlighted: EVERY DAY) */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border-2 border-[#e2a84a]/50 shadow-xl shadow-[#e2a84a]/5 overflow-hidden">
            {/* Featured corner badge */}
            <div className="absolute top-0 right-0 bg-[#e2a84a] text-[#0b0d11] font-bold text-xs uppercase tracking-wider py-1.5 px-6 rounded-bl-xl shadow-md">
              Todos os dias!
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#e2a84a]/15 border border-[#e2a84a]/30 flex items-center justify-center text-[#e2a84a]">
                <Sun className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#e2a84a] tracking-wider uppercase font-semibold">
                  Serviço Diário
                </span>
                <h3 className="font-serif text-3xl font-bold text-white">Almoço</h3>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-black/40 border border-zinc-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-zinc-300">Dias de atendimento:</span>
                  <span className="text-sm font-bold text-white">Segunda a Domingo</span>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-800/80">
                  <span className="text-sm font-medium text-zinc-300">Horário:</span>
                  <span className="font-mono text-lg font-bold text-[#e2a84a]">08h às 15h</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-zinc-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e2a84a] shrink-0" />
                  <span>Almoço executivo e refeições completas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e2a84a] shrink-0" />
                  <span>Marmitas selecionadas para delivery pelo iFood</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#e2a84a] shrink-0" />
                  <span>Funcionamento ininterrupto de segunda a domingo</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <a
                href={RESTAURANT_DATA.ifoodLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-[#0b0d11] bg-[#e2a84a] hover:bg-[#f6cb7d] transition-all shadow-md active:scale-[0.98]"
              >
                Pedir Almoço no iFood
              </a>
            </div>
          </div>

          {/* Happy Hour Card */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-zinc-900/80 border border-zinc-800 shadow-xl overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-amber-300">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 tracking-wider uppercase font-semibold">
                    Noite & Confraternização
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white">Happy Hour</h3>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-black/40 border border-zinc-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-zinc-300">Dias de atendimento:</span>
                    <span className="text-sm font-bold text-white">Quinta a Domingo</span>
                  </div>
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-800/80">
                    <span className="text-sm font-medium text-zinc-300">Horário:</span>
                    <span className="font-mono text-lg font-bold text-amber-300">18h às 23h</span>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-zinc-300 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Petiscos saborosos e porções especiais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Cerveja trincando, drinks e bebidas selecionadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>O ponto de encontro ideal para fechar o dia em Prazeres</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <a
                href={RESTAURANT_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all shadow-md active:scale-[0.98]"
              >
                Tirar Dúvidas / WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Schedule Accordion / Clean Summary Table */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800/80">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-[#e2a84a]" />
            <h4 className="font-serif text-lg font-semibold text-white">
              Quadro Completo da Semana
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {weekSchedule.map((item, idx) => {
              const isToday = new Date().getDay() === (idx === 6 ? 0 : idx + 1);
              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border text-center transition-all ${
                    isToday
                      ? "bg-[#e2a84a]/10 border-[#e2a84a] ring-1 ring-[#e2a84a]/30"
                      : "bg-black/30 border-zinc-800"
                  }`}
                >
                  <span className={`text-xs font-semibold block ${isToday ? "text-[#e2a84a]" : "text-zinc-300"}`}>
                    {item.day.split("-")[0]}
                    {isToday && " (Hoje)"}
                  </span>
                  <div className="mt-2 text-[11px] text-zinc-400 space-y-1">
                    <p>
                      <span className="text-zinc-500">Almoço:</span>{" "}
                      <span className="font-mono text-zinc-200">{item.lunch}</span>
                    </p>
                    <p>
                      <span className="text-zinc-500">Noite:</span>{" "}
                      <span className={`font-mono ${item.happyHour.includes("Fechado") ? "text-zinc-500" : "text-amber-300 font-medium"}`}>
                        {item.happyHour}
                      </span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
