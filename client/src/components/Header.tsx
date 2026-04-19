import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um orçamento para chopp Ashby.`;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8E4DC]">
      <div className="container flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#8B0000] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#8B0000]">ADEGA</span>
            <span className="text-xs font-semibold text-[#333333]">SÃO MARCOS</span>
          </div>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#barris" className="text-[#333333] hover:text-[#8B0000] transition-colors font-medium">
            Barris
          </a>
          <a href="#chopeira" className="text-[#333333] hover:text-[#8B0000] transition-colors font-medium">
            Chopeira
          </a>
          <a href="#como-funciona" className="text-[#333333] hover:text-[#8B0000] transition-colors font-medium">
            Como Funciona
          </a>
          <a href="#faq" className="text-[#333333] hover:text-[#8B0000] transition-colors font-medium">
            FAQ
          </a>
        </nav>

        {/* Botão WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md hover:bg-[#20BA58] transition-colors font-semibold shadow-md"
        >
          <WhatsAppIcon size={18} />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
