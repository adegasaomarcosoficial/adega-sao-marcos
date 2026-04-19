import { MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";

export function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Empresa */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#8B0000] rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div>
                <p className="text-sm font-bold">ADEGA</p>
                <p className="text-xs">SÃO MARCOS</p>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              Chopp Ashby para festas e eventos em Valinhos, Campinas e região.
            </p>
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
                <a href="#chopeira" className="hover:text-[#D4AF37] transition-colors">
                  Chopeira
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
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                <WhatsAppIcon size={18} />
                WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                <span>📱</span>
                Instagram
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                <span>f</span>
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
            <p>© 2020-2026 Adega São Marcos. Todos os direitos reservados.</p>
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
