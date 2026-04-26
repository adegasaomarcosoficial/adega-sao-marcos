/*
 * Seção "Sobre a Adega São Marcos"
 * Layout assimétrico premium: texto à esquerda, foto grande da fachada à direita
 * Mobile: empilhado, imagem primeiro
 */
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre a Adega São Marcos.`;

export default function SobreAdegaSection() {
  return (
    <section id="sobre" className="py-20 bg-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-center">

          {/* ── Imagem da fachada (aparece primeiro no mobile) ── */}
          <div className="order-1 lg:order-2 relative mb-10 lg:mb-0">
            {/* Moldura decorativa dourada atrás da imagem */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#D4AF37]/30 rounded-2xl hidden lg:block" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/manus-storage/adega-fachada_bc0e9403.png"
                alt="Fachada da Adega São Marcos em Valinhos/SP"
                className="w-full h-auto object-cover"
              />
              {/* Tag de localização sobre a imagem */}
              <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Valinhos/SP — Rua João Previtale, 2625
              </div>
            </div>
          </div>

          {/* ── Conteúdo textual ── */}
          <div className="order-2 lg:order-1">
            <p className="text-[#8B0000] font-semibold uppercase tracking-widest text-sm mb-3">
              Nossa História
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A Adega que Transformou{" "}
              <span className="text-[#8B0000]">Eventos em Valinhos</span>
            </h2>

            <p className="text-[#555] text-lg leading-relaxed mb-5">
              A <strong>Adega São Marcos</strong> nasceu da paixão por oferecer o melhor chopp
              artesanal para festas e eventos na região de Valinhos e Campinas. Localizada
              no coração do Jardim São Marcos, nos tornamos referência em qualidade,
              atendimento e pontualidade.
            </p>

            <p className="text-[#555] text-lg leading-relaxed mb-8">
              Parceiros oficiais da <strong>Cervejaria Ashby</strong> — premiada
              internacionalmente desde 1993 — garantimos que cada evento tenha o chopp
              gelado, cremoso e no ponto certo. Do barril de 10L para uma reunião íntima
              ao barril de 50L para grandes festas.
            </p>

            {/* Diferenciais em linha */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: "🏆", label: "Parceiro Oficial Ashby" },
                { icon: "🚚", label: "Entrega na Região" },
                { icon: "🍺", label: "6 Tipos de Chopp" },
                { icon: "📞", label: "Atendimento Rápido" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-[#F5F1E8] rounded-xl px-4 py-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[#333] font-semibold text-sm">{item.label}</span>
                </div>
              ))}
            </div>

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
              Falar com a Adega
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
