import React from "react";
import { Sun, Sparkles, HeartHandshake, Beer, ArrowRight } from "lucide-react";
import { RESTAURANT_DATA } from "../data/restaurantData";

export const Experience: React.FC = () => {
  const experiences = [
    {
      icon: Sun,
      title: "Almoço Todos os Dias",
      badge: "Segunda a Domingo · 08h às 15h",
      highlight: "Refeições completas e saborosas",
      description:
        "Do almoço rápido do dia a dia às refeições em família, oferecemos pratos preparados com dedicação, tempero caseiro autêntico e ingredientes frescos. Opção de marmitas deliciosas e práticas pelo iFood.",
      tag: "Diário",
    },
    {
      icon: Beer,
      title: "Happy Hour de Quinta a Domingo",
      badge: "Quinta a Domingo · 18h às 23h",
      highlight: "Bebidas geladas e petiscos selecionados",
      description:
        "O ponto de encontro perfeito para relaxar após o expediente ou curtir a noite. Drinks clássicos e autorais, cervejas trincando e petiscos que combinam com boas risadas e momentos inesquecíveis.",
      tag: "Fim de Semana",
    },
    {
      icon: Sparkles,
      title: "Ambiente para Bons Momentos",
      badge: "Conforto & Descontração",
      highlight: "Espaço acolhedor e envolvente",
      description:
        "Criamos uma atmosfera calorosa e agradável em Prazeres para você se sentir em casa. Perfeito para reunir amigos, comemorar conquistas ou saborear um momento especial com quem você gosta.",
      tag: "Ambiente",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento & Gastronomia",
      badge: "Cuidado em Cada Detalhe",
      highlight: "Experiência de alta qualidade",
      description:
        "Nossa equipe tem paixão por servir bem. Da montagem de cada prato ao cuidado no atendimento presencial e nas entregas, o Mirnu Gastrobar entrega hospitalidade e sabor do início ao fim.",
      tag: "Hospitalidade",
    },
  ];

  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-[#0e1117] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#e2a84a]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-[#c58a31]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#e2a84a] uppercase font-mono block mb-3">
            Nossa Proposta
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight text-balance">
            Gastronomia, praticidade e momentos inesquecíveis.
          </h2>
          <div className="w-16 h-1 bg-[#e2a84a] mx-auto my-6 rounded-full" />
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed text-pretty">
            O <strong className="text-white font-medium">Mirnu Gastrobar</strong> nasceu para transformar cada pausa do seu dia em um momento de prazer e boa gastronomia no bairro de Prazeres, Jaboatão dos Guararapes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {experiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 sm:p-10 rounded-2xl bg-zinc-900/70 hover:bg-zinc-900/90 border border-zinc-800/80 hover:border-[#e2a84a]/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#e2a84a]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#e2a84a]/20 to-zinc-900 border border-[#e2a84a]/30 flex items-center justify-center text-[#e2a84a] group-hover:scale-105 transition-transform duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-medium text-[#e2a84a] tracking-wider uppercase px-2.5 py-1 rounded bg-[#e2a84a]/10 border border-[#e2a84a]/20">
                      {item.tag}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-zinc-400 block mb-2">{item.badge}</span>
                  <h3 className="font-serif text-2xl font-bold text-white mb-2 group-hover:text-[#e2a84a] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-amber-200/90 mb-3">{item.highlight}</p>
                  <p className="text-sm text-zinc-300 leading-relaxed font-light">{item.description}</p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors">
                  <span>Conheça essa experiência</span>
                  <ArrowRight className="w-4 h-4 text-[#e2a84a] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout Strip connecting to iFood & WhatsApp */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-900 border border-zinc-800 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center lg:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-semibold text-white">
              Quer saborear agora mesmo?
            </h4>
            <p className="text-sm text-zinc-300 mt-1">
              Faça seu pedido com comodidade pelo iFood ou tire dúvidas diretamente no WhatsApp oficial.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={RESTAURANT_DATA.ifoodLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#0a0c10] bg-[#e2a84a] hover:bg-[#f6cb7d] transition-colors shadow-md"
            >
              Pedir pelo iFood
            </a>
            <a
              href={RESTAURANT_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg text-xs sm:text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
