/*
 * Tipos de Chopp Ashby - Cards completos com imagens premium
 * object-fit: contain para não cortar as imagens
 * Borda dourada, fundo escuro, hover sutil, clique no card inteiro
 * Mobile: empilhado sem corte
 */
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";

const choppTypes = [
  {
    name: "Ashby Pilsen Puro Malte",
    image: "/manus-storage/chopp-pilsen-puro-malte_2d1f74da.png",
    whatsappMsg: "Olá! Gostaria de pedir o Chopp Ashby Pilsen Puro Malte.",
  },
  {
    name: "Ashby Pilsen Claro",
    image: "/manus-storage/chopp-pilsen-claro_d0fadd1d.png",
    whatsappMsg: "Olá! Gostaria de pedir o Chopp Ashby Pilsen Claro.",
  },
  {
    name: "Ashby Pilsen Escuro",
    image: "/manus-storage/chopp-pilsen-escuro_a174a15d.png",
    whatsappMsg: "Olá! Gostaria de pedir o Chopp Ashby Pilsen Escuro.",
  },
  {
    name: "Ashby Weiss",
    image: "/manus-storage/chopp-weiss_d47c5ef8.png",
    whatsappMsg: "Olá! Gostaria de pedir o Chopp Ashby Weiss.",
  },
  {
    name: "Ashby IPA Nirvana",
    image: "/manus-storage/chopp-ipa-nirvana_4d626934.png",
    whatsappMsg: "Olá! Gostaria de pedir o Chopp Ashby IPA Nirvana.",
  },
  {
    name: "Ashby Pale Ale",
    image: "/manus-storage/chopp-pale-ale_f10cec64.png",
    whatsappMsg: "Olá! Gostaria de pedir o Chopp Ashby Pale Ale.",
  },
];

export default function ChoppTypesSection() {
  return (
    <section
      id="tipos-chopp"
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0d0a06 0%, #1a1008 50%, #0d0a06 100%)",
      }}
    >
      {/* Textura de grãos de malte */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 3px 3px at 20px 20px, #D4AF37 0%, transparent 100%),
            radial-gradient(ellipse 2px 2px at 60px 45px, #C8A832 0%, transparent 100%),
            radial-gradient(ellipse 4px 3px at 100px 15px, #D4AF37 0%, transparent 100%),
            radial-gradient(ellipse 2px 4px at 140px 60px, #B8941E 0%, transparent 100%),
            radial-gradient(ellipse 3px 2px at 30px 80px, #D4AF37 0%, transparent 100%),
            radial-gradient(ellipse 2px 3px at 80px 100px, #C8A832 0%, transparent 100%)`,
          backgroundSize: "160px 120px",
        }}
      />

      <div className="container relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-14">
          <p className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm mb-3">
            Premiados Internacionalmente
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Conheça os Tipos de Chopp Ashby
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            6 estilos premiados para todos os gostos — escolha o seu favorito
          </p>
        </div>

        {/* Grid de cards — imagens completas sem corte */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {choppTypes.map((type) => {
            const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(type.whatsappMsg)}`;
            return (
              <a
                key={type.name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden cursor-pointer
                  bg-[#0a0704]
                  border border-[#D4AF37]/30 hover:border-[#D4AF37]/70
                  transition-all duration-400 ease-out
                  hover:-translate-y-2
                  hover:shadow-[0_20px_50px_-10px_rgba(212,175,55,0.3)]"
                title={`Pedir ${type.name} no WhatsApp`}
              >
                {/* Imagem completa — contain para não cortar nada */}
                <div className="relative w-full bg-[#0a0704] flex items-center justify-center"
                  style={{ aspectRatio: "9/16" }}
                >
                  <img
                    src={type.image}
                    alt={type.name}
                    className="w-full h-full object-contain
                      transition-transform duration-500 ease-out
                      group-hover:scale-[1.02]"
                    style={{ display: "block" }}
                  />

                  {/* Overlay sutil no hover com CTA */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25
                    transition-all duration-400 flex items-end justify-center pb-6
                    opacity-0 group-hover:opacity-100">
                    <div className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold
                      flex items-center gap-2 shadow-lg
                      transform translate-y-4 group-hover:translate-y-0
                      transition-transform duration-400">
                      <WhatsAppIcon size={18} />
                      Pedir Este Chopp
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA geral */}
        <div className="mt-14 text-center">
          <p className="text-white/60 mb-5 text-lg">
            Qual é o seu favorito? Fale com a gente!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os tipos de Chopp Ashby disponíveis.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-10 py-4 rounded-xl font-bold text-lg
              transition-all duration-300 inline-flex items-center gap-3
              hover:bg-[#20BA58] hover:scale-105
              shadow-[0_4px_20px_rgba(37,211,102,0.3)]
              hover:shadow-[0_8px_30px_rgba(37,211,102,0.5)]"
          >
            <WhatsAppIcon size={20} />
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
