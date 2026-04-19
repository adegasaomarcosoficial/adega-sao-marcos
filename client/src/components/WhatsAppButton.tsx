import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um orçamento para chopp Ashby.`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA58] transition-all hover:scale-110 flex items-center justify-center"
      title="Enviar mensagem no WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
