import { Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";

const benefits = [
  "Instalação no local do evento",
  "Atendimento personalizado",
  "Suporte técnico",
  "Equipamento de qualidade Ashby",
];

export default function ChoppeiraSection() {
  return (
    <section id="chopeira" className="section section-light">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <div className="flex justify-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030237391/2yNdveRVHFrsqhfsSL7zE7/chopeira-ashby-profissional-jejSrWQyt3aHpkwSxpQdk7.webp"
              alt="Chopeira Ashby com Instalação"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="heading-lg mb-4">
                Locação de Chopeira com Instalação
              </h2>
              <p className="text-lg text-[#666666] mb-6">
                Equipamento profissional com instalação inclusa
              </p>
            </div>

            {/* Preço */}
            <div className="bg-[#F5F1E8] rounded-lg p-6">
              <p className="text-sm text-[#666666] mb-2">Valor da locação</p>
              <p className="text-4xl font-bold text-[#8B0000]">R$ 49,90</p>
            </div>

            {/* Benefícios */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={20} className="text-[#8B0000] flex-shrink-0" />
                  <span className="text-[#333333]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de alugar uma chopeira Ashby para meu evento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#20BA58] transition-all inline-flex items-center justify-center gap-2 text-lg"
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
