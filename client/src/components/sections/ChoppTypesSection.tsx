/*
 * Locação de Chopeira
 * Preço e texto agora vêm do arquivo editável:
 * client/public/data/site-config.json
 */
import { Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { buildWhatsAppLink, formatCurrency, useSiteConfig } from "@/lib/siteConfig";

const CHOPEIRA_IMAGE =
  "https://files.manuscdn.com/user_upload_by_module/session_file/310419663030237391/jsPvnyFFCiPiDeZu.webp";

const benefits = [
  "Instalação no local do evento",
  "Atendimento personalizado",
  "Suporte técnico",
  "Equipamento de qualidade Ashby",
];

export default function ChoppeiraSection() {
  const config = useSiteConfig();

  if (!config.choppeira.active) {
    return null;
  }

  return (
    <section id="chopeira" className="section section-light overflow-hidden">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-[#8B0000] font-semibold uppercase tracking-widest text-sm mb-2">
            Equipamento Profissional
          </p>
          <h2 className="heading-lg mb-4">Locação de Chopeira</h2>
          <p className="text-lg text-[#666666]">
            Chopeira Ashby com instalação inclusa para seu evento
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="group flex justify-center">
            <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(139,0,0,0.25)]">
              <img
                src={CHOPEIRA_IMAGE}
                alt="Chopeira Ashby com instalação"
                className="w-full h-auto transition-all duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#8B0000]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div
                className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg
                transition-all duration-500 group-hover:scale-110 group-hover:bg-[#8B0000] group-hover:text-white"
              >
                <p className="text-xs text-[#666666] group-hover:text-white/80 transition-colors">
                  Locação
                </p>
                <p className="text-2xl font-bold text-[#8B0000] group-hover:text-white transition-colors">
                  {formatCurrency(config.choppeira.price)}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold text-[#333333] mb-4"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Chopeira Ashby Profissional
              </h3>

              <p className="text-lg text-[#666666] leading-relaxed">
                Equipamento profissional com instalação completa no local do seu
                evento. Garantimos que cada gole saia na temperatura e cremosidade
                perfeitas.
              </p>
            </div>

            <div
              className="bg-gradient-to-r from-[#F5F1E8] to-[#EDE8DB] rounded-xl p-6 border border-[#E8E4DC]
              transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37]/30"
            >
              <p className="text-sm text-[#666666] mb-1">Valor da locação</p>
              <p className="text-4xl font-bold text-[#8B0000]">
                {formatCurrency(config.choppeira.price)}
              </p>
              <p className="text-xs text-[#999999] mt-1">
                {config.choppeira.text}
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group/item transition-all duration-200 hover:translate-x-1"
                >
                  <div
                    className="w-6 h-6 rounded-full bg-[#8B0000]/10 flex items-center justify-center shrink-0
                    transition-all duration-300 group-hover/item:bg-[#8B0000] group-hover/item:scale-110"
                  >
                    <Check
                      size={14}
                      className="text-[#8B0000] transition-colors duration-300 group-hover/item:text-white"
                    />
                  </div>

                  <span className="text-[#333333] font-medium transition-colors duration-300 group-hover/item:text-[#8B0000]">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={buildWhatsAppLink(
                config.whatsapp.number,
                "Olá! Gostaria de alugar uma chopeira Ashby para meu evento."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-semibold text-lg
                transition-all duration-300 inline-flex items-center justify-center gap-2
                hover:bg-[#20BA58] hover:shadow-lg hover:scale-105
                hover:shadow-[0_8px_25px_rgba(37,211,102,0.4)]"
            >
              <WhatsAppIcon size={20} />
              Alugar Chopeira
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
