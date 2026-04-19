import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um orçamento para chopp Ashby.`;

export default function CTAFinal() {
  return (
    <section className="section section-ashby">
      <div className="container text-center">
        <h2 className="heading-lg mb-4 text-white">Pronto para Seu Evento?</h2>
        <p className="text-xl mb-8 opacity-90">
          Fale com a Adega São Marcos e faça seu orçamento
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#25D366] px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            <WhatsAppIcon size={24} />
            Solicitar no WhatsApp
          </a>

          <a
            href={`tel:+${WHATSAPP_NUMBER}`}
            className="flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-[#8B0000] transition-colors"
          >
            <Phone size={24} />
            (19) 99344-4124
          </a>
        </div>

        <p className="mt-8 text-sm opacity-75">
          Atendimento rápido para Valinhos, Campinas e região
        </p>
      </div>
    </section>
  );
}
