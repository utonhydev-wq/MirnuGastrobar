import React, { useState, useEffect } from "react";
import { RESTAURANT_DATA, getRestaurantCurrentStatus, OpenStatus } from "../data/restaurantData";
import { Menu, X, ExternalLink, Clock } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<OpenStatus>(getRestaurantCurrentStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Update status every minute
    const interval = setInterval(() => {
      setStatus(getRestaurantCurrentStatus());
    }, 60000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Nossa Experiência", href: "#experiencia" },
    { label: "Galeria", href: "#galeria" },
    { label: "Horários", href: "#horarios" },
    { label: "Localização", href: "#localizacao" },
    { label: "Avaliações", href: "#avaliacoes" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0b0d11]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-xl py-3"
            : "bg-gradient-to-b from-[#0b0d11]/90 via-[#0b0d11]/60 to-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6 lg:gap-8">
            {/* Zone 1: Brand Zone */}
            <a
              href="#inicio"
              onClick={(e) => handleNavClick(e, "#inicio")}
              className="flex items-center gap-3.5 group shrink-0"
              aria-label="Mirnu Gastrobar - Início"
            >
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-[#e2a84a]/60 group-hover:ring-[#e2a84a] transition-all duration-300 shadow-md">
                <img
                  src={RESTAURANT_DATA.logoUrl}
                  alt="Logo Mirnu Gastrobar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-semibold tracking-tight text-white group-hover:text-[#e2a84a] transition-colors whitespace-nowrap">
                  {RESTAURANT_DATA.name}
                </span>
                <span className="text-[11px] font-sans font-medium text-zinc-400 tracking-wider uppercase">
                  {RESTAURANT_DATA.neighborhood} · {RESTAURANT_DATA.locationCity}
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-7 text-[14px] font-medium text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[#e2a84a] transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#e2a84a] hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: CTA & Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Status pill (discreet and informative) */}
              <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs">
                <Clock className="w-3.5 h-3.5 text-[#e2a84a]" />
                <span className="text-zinc-300">{status.statusLabel}</span>
                <span className="text-zinc-500 font-mono text-[11px]">({status.statusDetail})</span>
              </div>

              {/* Primary Action Button: iFood */}
              <a
                href={RESTAURANT_DATA.ifoodLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-[#0b0d11] bg-gradient-to-r from-[#e2a84a] to-[#f6cb7d] hover:from-[#f6cb7d] hover:to-[#e2a84a] shadow-lg shadow-[#e2a84a]/20 hover:shadow-[#e2a84a]/30 transition-all duration-200 whitespace-nowrap active:scale-[0.98]"
              >
                <span>Pedir no iFood</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/60 focus:outline-none focus:ring-2 focus:ring-[#e2a84a]"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-[#11141a] border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <img
                    src={RESTAURANT_DATA.logoUrl}
                    alt="Logo Mirnu Gastrobar"
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full ring-2 ring-[#e2a84a]/60 object-cover"
                  />
                  <div>
                    <p className="font-serif font-bold text-white text-base">Mirnu Gastrobar</p>
                    <p className="text-xs text-zinc-400">Prazeres · PE</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Live status badge inside mobile menu */}
              <div className="my-5 p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#e2a84a] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-zinc-200">{status.statusLabel}</p>
                  <p className="text-[11px] text-zinc-400">{status.statusDetail}</p>
                </div>
              </div>

              {/* Navigation links */}
              <nav className="flex flex-col space-y-3 mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/70 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-zinc-800 space-y-3">
              <a
                href={RESTAURANT_DATA.ifoodLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-semibold text-[#0b0d11] bg-gradient-to-r from-[#e2a84a] to-[#f6cb7d] shadow-md hover:brightness-105 transition-all text-center"
              >
                <span>Fazer Pedido no iFood</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={RESTAURANT_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-colors text-center"
              >
                <span>WhatsApp: {RESTAURANT_DATA.whatsappNumber}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
