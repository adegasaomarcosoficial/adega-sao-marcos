/*
 * Barris de Chopp Ashby - PRIMEIRA seção após Hero
 * Efeitos hover modernos: scale, shadow, glow
 * Valor total do barril em destaque abaixo do preço por litro
 */
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";

const barrels = [
  {
    size: "10 Litros",
    liters: 10,
    pricePerLiter: 13.25,
    description: "Ideal para encontros menores e momentos mais reservados",
    group: 1,
  },
  {
    size: "15 Litros",
    liters: 15,
    pricePerLiter: 13.25,
    description: "Prático para reunir amigos com Chopp gelado e presença premium",
    group: 1,
  },
  {
    size: "20 Litros",
    liters: 20,
    pricePerLiter: 13.25,
    description: "Mais capacidade para churrascos, aniversários e celebrações",
    group: 1,
    popular: true,
  },
  {
    size: "30 Litros",
    liters: 30,
    pricePerLiter: 12.99,
    description: "Perfeito para eventos com maior fluxo e praticidade",
    group: 2,
    popular: true,
  },
  {
    size: "50 Litros",
    liters: 50,
    pricePerLiter: 12.99,
    description: "Volume, presença e experiência completa no evento",
    group: 2,
  },
];

export default function BarrelsSection() {
  const handleWhatsApp = (size: string, price: number, total: number) => {
    const message = `Olá! Gostaria de fazer um orçamento para um barril de ${size} de Chopp Ashby (R$ ${price.toFixed(2)}/litro — Total: R$ ${total.toFixed(2)}).`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="barris" className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <p className="text-[#8B0000] font-semibold uppercase tracking-widest text-sm mb-2">
            Preços Especiais
          </p>
          <h2 className="heading-lg mb-4">Barris de Chopp Ashby</h2>
          <p className="text-lg text-[#666666]">
            Escolha o tamanho ideal para seu evento
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {barrels.map((barrel, index) => {
            const totalPrice = barrel.liters * barrel.pricePerLiter;
            return (
              <div
                key={index}
                className={`group relative rounded-xl p-6 border-2 bg-white cursor-pointer
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:-translate-y-2
                  ${barrel.popular
                    ? "border-[#8B0000] shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(139,0,0,0.3)]"
                    : "border-[#E8E4DC] hover:border-[#D4AF37] hover:shadow-[0_20px_60px_-15px_rgba(212,175,55,0.2)]"
                  }`}
              >
                {barrel.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-[#8B0000] to-[#B22222] text-white px-4 py-1 rounded-full text-xs font-bold shadow-md">
                      Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-4">
                  <div className="w-full h-32 bg-gradient-to-b from-[#F5F1E8] to-[#EDE8DB] rounded-lg mb-3 flex items-center justify-center overflow-hidden
                    transition-all duration-300 group-hover:bg-gradient-to-b group-hover:from-[#FFF5F0] group-hover:to-[#F5F1E8]">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030237391/2yNdveRVHFrsqhfsSL7zE7/chopeira-ashby-profissional-jejSrWQyt3aHpkwSxpQdk7.webp"
                      alt={`Barril ${barrel.size} Chopp Ashby`}
                      className="w-auto h-full object-contain p-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] transition-colors duration-300 group-hover:text-[#8B0000]">
                    {barrel.size}
                  </h3>
                </div>

                <p className="text-sm text-[#666666] mb-4 text-center leading-relaxed">
                  {barrel.description}
                </p>

                {/* Preço por litro */}
                <div className="bg-gradient-to-r from-[#F5F1E8] to-[#EDE8DB] rounded-lg p-3 mb-2 text-center
                  transition-all duration-300 group-hover:from-[#8B0000] group-hover:to-[#A52A2A]">
                  <p className="text-2xl font-bold text-[#8B0000] transition-colors duration-300 group-hover:text-white">
                    R$ {barrel.pricePerLiter.toFixed(2)}
                  </p>
                  <p className="text-xs text-[#666666] transition-colors duration-300 group-hover:text-white/80">
                    por litro
                  </p>
                </div>

                {/* Valor total do barril */}
                <div className="bg-[#1a1a1a] rounded-lg p-2.5 mb-4 text-center">
                  <p className="text-xs text-gray-400 uppercase tracking-wider">
                    Total do barril
                  </p>
                  <p className="text-lg font-bold text-[#D4AF37]">
                    R$ {totalPrice.toFixed(2).replace('.', ',')}
                  </p>
                </div>

                <button
                  onClick={() => handleWhatsApp(barrel.size, barrel.pricePerLiter, totalPrice)}
                  className="w-full bg-[#25D366] text-white px-4 py-2.5 rounded-lg font-semibold
                    transition-all duration-300 flex items-center justify-center gap-2
                    hover:bg-[#20BA58] hover:shadow-lg
                    group-hover:shadow-[0_4px_15px_rgba(37,211,102,0.4)]"
                >
                  <WhatsAppIcon size={16} />
                  Pedir Orçamento
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#F5F1E8] to-[#EDE8DB] rounded-xl p-8 text-center
          border border-[#E8E4DC] hover:shadow-lg transition-all duration-300">
          <p className="text-[#666666] mb-4 text-lg">
            Não sabe qual barril escolher?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de ajuda para escolher o barril ideal para meu evento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#20BA58] transition-all duration-300 inline-flex items-center gap-2 hover:shadow-lg hover:scale-105"
          >
            <WhatsAppIcon size={18} />
            Me Ajude a Escolher
          </a>
        </div>
      </div>
    </section>
  );
}
