/*
 * Seção "Sobre a Adega São Marcos" — Nossa História
 * Layout assimétrico premium: texto à esquerda, foto grande com borda dourada à direita
 * Mobile: texto em cima, imagem abaixo (order-first/last)
 * scroll-padding-top no html garante que o título não fique atrás do header
 */
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de pedir um orçamento para chopp Ashby.`;

export default function SobreAdegaSection() {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Conteúdo textual — aparece primeiro no mobile ── */}
          <div className="order-1">
            <p className="text-[#8B0000] font-semibold uppercase tracking-widest text-sm mb-3">
              Nossa História
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Desde 2020 servindo{" "}
              <span className="text-[#8B0000]">bons momentos em Valinhos</span>
            </h2>

            <p className="text-[#555] text-lg leading-relaxed mb-8">
              A <strong>Adega São Marcos</strong> nasceu para atender quem valoriza bebida
              gelada, atendimento próximo e aquele chopp bem tirado que transforma qualquer
              encontro em uma ocasião especial. Trabalhamos com Chopp Ashby, chopeiras para
              eventos e atendimento personalizado para Valinhos, Campinas e região.
            </p>

            {/* Diferenciais em grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { icon: "🏆", label: "Parceiro Oficial Ashby" },
                { icon: "🚚", label: "Entrega na Região" },
                { icon: "🍺", label: "6 Tipos de Chopp" },
                { icon: "📞", label: "Atendimento Rápido" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-[#F5F1E8] rounded-xl px-4 py-3
                    border border-[#E8E4DC] hover:border-[#D4AF37]/50 transition-colors"
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-[#333] font-semibold text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold text-lg
                transition-all duration-300 inline-flex items-center gap-3
                hover:bg-[#20BA58] hover:scale-105
                shadow-[0_4px_20px_rgba(37,211,102,0.3)]
                hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)]"
            >
              <WhatsAppIcon size={22} />
              Pedir Orçamento no WhatsApp
            </a>
          </div>

          {/* ── Imagem da fachada — aparece depois no mobile ── */}
          <div className="order-2 relative">
            {/* Moldura dourada decorativa atrás */}
            <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl
              border-2 border-[#D4AF37]/40 hidden lg:block pointer-events-none" />

            {/* Container da imagem com borda dourada premium */}
            <div className="relative rounded-2xl overflow-hidden
              ring-2 ring-[#D4AF37]/50 hover:ring-[#D4AF37]/80
              shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]
              hover:shadow-[0_30px_80px_-15px_rgba(212,175,55,0.2)]
              transition-all duration-500 group">

              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030237391/KaGizoxkCvvjqEqc.png"
                alt="Fachada da Adega São Marcos em Valinhos/SP"
                className="w-full h-auto object-cover
                  transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Overlay sutil no hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Selo de localização */}
              <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm
                text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2
                border border-white/10">
                <svg className="w-4 h-4 text-[#D4AF37] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Rua João Previtale, 2625 — Valinhos/SP</span>
              </div>

              {/* Badge "Desde 2020" */}
              <div className="absolute top-5 right-5 bg-[#D4AF37] text-[#1a1a1a]
                px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider
                shadow-lg">
                Desde 2020
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
