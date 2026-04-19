import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um orçamento para chopp Ashby.`;

export default function Hero() {
  return (
    <section className="relative bg-white pt-12 pb-16 md:pt-20 md:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Conteúdo */}
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="heading-xl mb-4">
                Chopp Ashby Gelado para Seu Evento
              </h1>
              <p className="text-xl text-[#666666] mb-2">
                Locação de chopeira com instalação + atendimento personalizado
              </p>
              <p className="text-lg font-semibold text-[#8B0000]">
                Chopeira: R$ 49,90
              </p>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#20BA58] transition-all duration-200 hover:shadow-lg inline-flex items-center justify-center gap-2 w-full md:w-auto text-lg"
            >
              <WhatsAppIcon size={20} />
              Pedir Orçamento no WhatsApp
            </a>

            <p className="text-sm text-[#666666]">
              Atendimento rápido para Valinhos, Campinas e região
            </p>
          </div>

          {/* Imagem Chopeira */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030237391/2yNdveRVHFrsqhfsSL7zE7/chopeira-ashby-profissional-jejSrWQyt3aHpkwSxpQdk7.webp"
                alt="Chopeira Ashby Premium"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
