import { WhatsAppIcon } from "./WhatsAppIcon";
import { buildWhatsAppLink, useSiteConfig } from "@/lib/siteConfig";

export default function WhatsAppButton() {
  const config = useSiteConfig();

  return (
    <a
      href={buildWhatsAppLink(config.whatsapp.number, config.whatsapp.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA58] transition-all hover:scale-110 flex items-center justify-center"
      title="Enviar mensagem no WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
