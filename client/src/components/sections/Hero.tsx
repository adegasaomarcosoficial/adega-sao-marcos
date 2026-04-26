/*
 * Hero Section - Adega São Marcos
 * Vídeo Ashby IPA Nirvana em loop, sem som, overlay premium
 * Fallback: foto da fachada para mobile/conexões lentas
 */
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um orçamento para chopp Ashby.`;

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* ── Vídeo de fundo em loop, sem som ── */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/adega-fachada.png"
          preload="metadata"
        >
          <source src="/manus-storage/hero-chopp-ashby_7c8d6a72.mp4" type="video/mp4" />
          {/* Fallback: imagem da fachada se vídeo não carregar */}
          <img
            src="/assets/adega-fachada.png"
            alt="Adega São Marcos"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Overlay escuro gradiente para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* ── Conteúdo principal ── */}
      <div className="container relative z-10 py-20 md:py-28">
        <div className="max-w-2xl">

          {/* Badge premium */}
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/50 text-[#D4AF37] px-5 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            🍺 Chopp Ashby Premium em Valinhos/SP
          </div>

          {/* Título principal */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Chopp Ashby Gelado{" "}
            <span className="text-[#D4AF37]">para Seu Evento</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-white/85 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
            Barris de 10 a 50 litros com entrega e locação de chopeira.
            Atendemos Valinhos, Campinas e região.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg
                transition-all duration-300 inline-flex items-center justify-center gap-3
                hover:bg-[#20BA58] hover:scale-105
                shadow-[0_4px_20px_rgba(37,211,102,0.35)]
                hover:shadow-[0_8px_30px_rgba(37,211,102,0.55)]"
            >
              <WhatsAppIcon size={24} />
              Pedir Orçamento no WhatsApp
            </a>
            <a
              href="#barris"
              className="border-2 border-white/60 text-white px-8 py-4 rounded-xl font-semibold text-lg
                transition-all duration-300 inline-flex items-center justify-center gap-2
                hover:bg-white/10 hover:border-white backdrop-blur-sm"
            >
              Ver Preços dos Barris
            </a>
          </div>

          {/* Info rápida em linha */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              "Barris 10L a 50L",
              "Locação de Chopeira",
              "Entrega na Região",
              "Chopp Ashby Premium",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-white/80 text-sm">
                <span className="w-5 h-5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] text-xs font-bold flex-shrink-0">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Seta de scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-8 border-2 border-white/40 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
