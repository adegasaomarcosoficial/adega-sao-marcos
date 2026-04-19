/*
 * Hero Section - Adega São Marcos
 * Chopeira com efeito hover + CTA forte
 */
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { MapPin, Clock, Star } from "lucide-react";

const WHATSAPP_NUMBER = "5519993444124";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um orçamento para chopp Ashby.`;

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-[#FDFBF7] to-[#F5F1E8] pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Decoração de fundo sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B0000]/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#8B0000]/10 text-[#8B0000] px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Star size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
                Chopp Premiado Internacionalmente
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Chopp Ashby Gelado{" "}
                <span className="text-[#8B0000]">para Seu Evento</span>
              </h1>
              <p className="text-xl text-[#666666] mb-2 leading-relaxed">
                Locação de chopeira com instalação + atendimento personalizado
              </p>
              <div className="flex flex-wrap gap-4 mt-3">
                <div className="flex items-center gap-1.5 text-sm text-[#666666]">
                  <MapPin size={16} className="text-[#8B0000]" />
                  Valinhos, Campinas e região
                </div>
                <div className="flex items-center gap-1.5 text-sm text-[#666666]">
                  <Clock size={16} className="text-[#8B0000]" />
                  Atendimento rápido
                </div>
              </div>
            </div>

            {/* Preços destaque */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-xl px-5 py-3 shadow-md border border-[#E8E4DC]">
                <p className="text-xs text-[#999999]">Chopeira</p>
                <p className="text-2xl font-bold text-[#8B0000]">R$ 49,90</p>
              </div>
              <div className="bg-white rounded-xl px-5 py-3 shadow-md border border-[#E8E4DC]">
                <p className="text-xs text-[#999999]">Barril a partir de</p>
                <p className="text-2xl font-bold text-[#8B0000]">R$ 12,99<span className="text-sm font-normal text-[#999999]">/L</span></p>
              </div>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg
                transition-all duration-300 inline-flex items-center justify-center gap-2 w-full md:w-auto
                hover:bg-[#20BA58] hover:shadow-lg hover:scale-105
                hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)]"
            >
              <WhatsAppIcon size={22} />
              Pedir Orçamento no WhatsApp
            </a>
          </div>

          {/* Imagem Chopeira com hover */}
          <div className="group flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(139,0,0,0.3)]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030237391/2yNdveRVHFrsqhfsSL7zE7/chopeira-ashby-profissional-jejSrWQyt3aHpkwSxpQdk7.webp"
                  alt="Chopeira Ashby Premium"
                  className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-[#D4AF37]/10 rounded-3xl blur-2xl -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
