/*
 * CTA Final - Adega São Marcos
 * Fundo escuro premium com textura de grãos estilo Ashby
 */
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um orçamento para chopp Ashby.`;

export default function CTAFinal() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1a0a00 0%, #2d1200 40%, #1a0a00 100%)",
      }}
    >
      {/* Textura de grãos de malte */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 3px 4px at 25px 25px, #D4AF37 0%, transparent 100%),
            radial-gradient(ellipse 2px 3px at 70px 50px, #C8A832 0%, transparent 100%),
            radial-gradient(ellipse 4px 2px at 120px 20px, #D4AF37 0%, transparent 100%),
            radial-gradient(ellipse 2px 4px at 160px 65px, #B8941E 0%, transparent 100%),
            radial-gradient(ellipse 3px 3px at 40px 90px, #D4AF37 0%, transparent 100%),
            radial-gradient(ellipse 2px 2px at 90px 110px, #C8A832 0%, transparent 100%),
            radial-gradient(ellipse 4px 3px at 50px 140px, #D4AF37 0%, transparent 100%)`,
          backgroundSize: "180px 160px",
        }}
      />

      {/* Brilho central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#8B0000]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] px-5 py-2 rounded-full text-sm font-semibold mb-6">
          🍺 Chopp Ashby Premium
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pronto para Seu Evento?
        </h2>
        <p className="text-xl mb-10 text-white/80 max-w-lg mx-auto leading-relaxed">
          Fale com a Adega São Marcos agora e garanta o melhor chopp Ashby para sua festa
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold text-lg
              transition-all duration-300 hover:bg-[#20BA58] hover:scale-105
              shadow-[0_4px_20px_rgba(37,211,102,0.4)]
              hover:shadow-[0_8px_30px_rgba(37,211,102,0.6)]"
          >
            <WhatsAppIcon size={24} />
            Solicitar Orçamento no WhatsApp
          </a>

          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="flex items-center justify-center gap-3 border-2 border-white/50 text-white px-10 py-4 rounded-xl font-bold text-lg
              transition-all duration-300 hover:bg-white/10 hover:border-white backdrop-blur-sm"
          >
            <Phone size={22} />
            (19) 99344-4124
          </a>
        </div>

        <p className="mt-8 text-sm text-white/50">
          Atendimento rápido · Valinhos, Campinas e região
        </p>
      </div>
    </section>
  );
}
