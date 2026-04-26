/*
 * Header - Adega São Marcos
 * Logo real + nome premium + navegação + WhatsApp
 */
import { useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Menu, X } from "lucide-react";

const WHATSAPP_NUMBER = "5519993444124";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de fazer um orçamento para chopp Ashby.`;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E8E4DC] shadow-sm">
      <div className="container flex items-center justify-between h-20">
        {/* Logo + Nome Premium */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030237391/xCIOOTmvMLgFzVlu.png"
            alt="Adega São Marcos"
            className="h-14 w-auto object-contain"
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span
              className="text-lg font-bold tracking-wide"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #8B0000 0%, #D4AF37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ADEGA
            </span>
            <span
              className="text-xl font-black tracking-wider"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(135deg, #D4AF37 0%, #8B0000 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              SÃO MARCOS
            </span>
          </div>
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#barris" className="text-[#333333] hover:text-[#8B0000] transition-colors font-medium text-sm">
            Barris
          </a>
          <a href="#tipos-chopp" className="text-[#333333] hover:text-[#8B0000] transition-colors font-medium text-sm">
            Tipos de Chopp
          </a>
          <a href="#chopeira" className="text-[#333333] hover:text-[#8B0000] transition-colors font-medium text-sm">
            Chopeira
          </a>
          <a href="#parceria" className="text-[#333333] hover:text-[#8B0000] transition-colors font-medium text-sm">
            Ashby
          </a>
          <a href="#como-funciona" className="text-[#333333] hover:text-[#8B0000] transition-colors font-medium text-sm">
            Como Funciona
          </a>
          <a href="#faq" className="text-[#333333] hover:text-[#8B0000] transition-colors font-medium text-sm">
            FAQ
          </a>
        </nav>

        {/* Botões */}
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-md hover:bg-[#20BA58] transition-colors font-semibold shadow-md"
          >
            <WhatsAppIcon size={18} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>

          {/* Hamburguer Mobile */}
          <button
            className="lg:hidden text-[#333333]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E8E4DC] px-4 py-4 space-y-3 shadow-lg">
          <a href="#barris" onClick={() => setMobileOpen(false)} className="block text-[#333333] hover:text-[#8B0000] font-medium py-2">
            Barris
          </a>
          <a href="#tipos-chopp" onClick={() => setMobileOpen(false)} className="block text-[#333333] hover:text-[#8B0000] font-medium py-2">
            Tipos de Chopp
          </a>
          <a href="#chopeira" onClick={() => setMobileOpen(false)} className="block text-[#333333] hover:text-[#8B0000] font-medium py-2">
            Chopeira
          </a>
          <a href="#parceria" onClick={() => setMobileOpen(false)} className="block text-[#333333] hover:text-[#8B0000] font-medium py-2">
            Ashby
          </a>
          <a href="#como-funciona" onClick={() => setMobileOpen(false)} className="block text-[#333333] hover:text-[#8B0000] font-medium py-2">
            Como Funciona
          </a>
          <a href="#faq" onClick={() => setMobileOpen(false)} className="block text-[#333333] hover:text-[#8B0000] font-medium py-2">
            FAQ
          </a>
        </div>
      )}
    </header>
  );
}
