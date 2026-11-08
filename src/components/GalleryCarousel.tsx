import React, { useState, useEffect, useRef, useCallback } from "react";
import { RESTAURANT_DATA } from "../data/restaurantData";
import { ChevronLeft, ChevronRight, Maximize2, X, Pause, Play } from "lucide-react";

export const GalleryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const images = RESTAURANT_DATA.gallery;
  const slideIntervalMs = 5000;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay timer
  useEffect(() => {
    if (isPaused || lightboxOpen) return;

    const timer = setInterval(() => {
      nextSlide();
    }, slideIntervalMs);

    return () => clearInterval(timer);
  }, [isPaused, lightboxOpen, nextSlide]);

  // Touch event handlers for mobile swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setIsPaused(false);
  };

  // Keyboard navigation when modal is open or container is focused
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      } else if (e.key === "Escape" && lightboxOpen) {
        setLightboxOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, lightboxOpen]);

  return (
    <section id="galeria" className="py-24 sm:py-32 bg-[#090b0e] relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-[#e2a84a]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#e2a84a] uppercase font-mono block mb-3">
            Galeria Visual
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            O clima e a energia do Mirnu
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 font-light max-w-2xl mx-auto">
            Registros autênticos de nossa gastronomia, ambiente acolhedor e momentos especiais vividos aqui em Prazeres.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Carrossel de fotos do Mirnu Gastrobar"
        >
          {/* Main Image Viewport with 16:9 on desktop, 4:3 on mobile */}
          <div className="relative aspect-[4/3] sm:aspect-[16/9] w-full overflow-hidden">
            {images.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                  aria-hidden={!isActive}
                >
                  <img
                    src={item.url}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Subtle vignette and bottom gradient for title clarity */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 text-white z-20">
                    <span className="text-xs font-mono font-medium text-[#e2a84a] uppercase tracking-wider block mb-1">
                      Foto {index + 1} de {images.length}
                    </span>
                    <h3 className="font-serif text-xl sm:text-3xl font-bold text-white mb-1.5 drop-shadow-md">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-200 max-w-xl font-light drop-shadow">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Lightbox Trigger Button */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-zinc-300 hover:text-white backdrop-blur-sm border border-white/10 transition-colors shadow-lg"
              aria-label="Abrir imagem em tela cheia"
              title="Ver em tela cheia"
            >
              <Maximize2 className="w-4 h-4" />
            </button>

            {/* Play / Pause indicator */}
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-zinc-300 hover:text-white backdrop-blur-sm border border-white/10 transition-colors shadow-lg"
              aria-label={isPaused ? "Retomar reprodução automática" : "Pausar reprodução automática"}
              title={isPaused ? "Retomar" : "Pausar"}
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-[#e2a84a]" /> : <Pause className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-[#e2a84a] text-white hover:text-[#0b0d11] backdrop-blur-md border border-white/10 transition-all duration-200 shadow-xl opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-[#e2a84a] text-white hover:text-[#0b0d11] backdrop-blur-md border border-white/10 transition-all duration-200 shadow-xl opacity-90 sm:opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Thumbnail Selector & Position Indicators */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Thumbnails */}
          <div className="flex items-center gap-3">
            {images.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    isActive
                      ? "border-[#e2a84a] ring-2 ring-[#e2a84a]/30 scale-105 opacity-100"
                      : "border-zinc-800 opacity-60 hover:opacity-100 hover:border-zinc-600"
                  }`}
                  aria-label={`Ir para foto ${index + 1}: ${item.title}`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#e2a84a]"
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
                aria-label={`Foto ${index + 1}`}
              />
            ))}
          </div>

          <span className="text-xs text-zinc-500 font-mono hidden sm:inline-block">
            {isPaused ? "Pausado (interagindo)" : "Reprodução automática ativa"}
          </span>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 p-3 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-700 hover:bg-zinc-800 transition-colors z-50"
            aria-label="Fechar visualização em tela cheia"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-[#e2a84a] hover:text-[#0b0d11] transition-all z-50"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 text-white hover:bg-[#e2a84a] hover:text-[#0b0d11] transition-all z-50"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h4 className="font-serif text-xl font-bold text-white">
                {images[currentIndex].title}
              </h4>
              <p className="text-sm text-zinc-400 mt-1">
                {images[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
