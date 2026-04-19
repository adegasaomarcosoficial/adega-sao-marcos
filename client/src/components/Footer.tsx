import { MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <img
              src="/manus-storage/adega-logo_10dd0845.png"
              alt="Adega São Marcos"
              className="h-20 w-auto object-contain mb-4"
            />
            <p className="text-sm text-gray-300">
              Chopp Ashby para festas e eventos em Valinhos, Campinas e região.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs text-gray-500">Distribuidor oficial:</span>
              <img
                src="/manus-storage/ashby-logo_3704ba10.png"
                alt="Ashby Cervejaria"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <div>
                  <p>Rua João Previtale, 2625</p>
                  <p>Jardim São Marcos – Valinhos</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  (19) 99344-4124
                </a>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon size={16} />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-[#D4AF37] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#barris" className="hover:text-[#D4AF37] transition-colors">
                  Barris
                </a>
              </li>
              <li>
                <a href="#tipos-chopp" className="hover:text-[#D4AF37] transition-colors">
                  Tipos de Chopp
                </a>
              </li>
              <li>
                <a href="#chopeira" className="hover:text-[#D4AF37] transition-colors">
                  Chopeira
                </a>
              </li>
              <li>
                <a href="#parceria" className="hover:text-[#D4AF37] transition-colors">
                  Ashby
                </a>
              </li>
              <li>
                <a href="#como-funciona" className="hover:text-[#D4AF37] transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="space-y-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <p>© 2020–2026 Adega São Marcos. Todos os direitos reservados.</p>
            <p>
              Venda e consumo de bebidas alcoólicas proibidos para menores de 18
              anos.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
