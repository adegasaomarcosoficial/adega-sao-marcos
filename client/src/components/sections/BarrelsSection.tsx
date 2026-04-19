import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";

const barrels = [
  {
    size: "10 Litros",
    pricePerLiter: 13.25,
    description: "Ideal para encontros menores e momentos mais reservados",
    group: 1,
  },
  {
    size: "15 Litros",
    pricePerLiter: 13.25,
    description: "Prático para reunir amigos com Chopp gelado e presença premium",
    group: 1,
  },
  {
    size: "20 Litros",
    pricePerLiter: 13.25,
    description: "Mais capacidade para churrascos, aniversários e celebrações",
    group: 1,
    popular: true,
  },
  {
    size: "30 Litros",
    pricePerLiter: 12.99,
    description: "Perfeito para eventos com maior fluxo e praticidade",
    group: 2,
    popular: true,
  },
  {
    size: "50 Litros",
    pricePerLiter: 12.99,
    description: "Volume, presença e experiência completa no evento",
    group: 2,
  },
];

export default function BarrelsSection() {
  const handleWhatsApp = (size: string, price: number) => {
    const message = `Olá! Gostaria de fazer um orçamento para um barril de ${size} de Chopp Ashby (R$ ${price.toFixed(2)}/litro).`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="barris" className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Barris de Chopp Ashby</h2>
          <p className="text-lg text-[#666666]">
            Escolha o tamanho ideal para seu evento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {barrels.map((barrel, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-6 border-2 transition-all hover:shadow-lg ${
                barrel.popular
                  ? "border-[#8B0000] bg-[#FFF5F5]"
                  : "border-[#E8E4DC] bg-white"
              }`}
            >
              {barrel.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#8B0000] text-white px-3 py-1 rounded-full text-xs font-bold">
                    Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-4">
                <div className="w-full h-32 bg-[#F5F1E8] rounded-md mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030237391/2yNdveRVHFrsqhfsSL7zE7/chopeira-ashby-profissional-jejSrWQyt3aHpkwSxpQdk7.webp"
                    alt={`Barril ${barrel.size} Chopp Ashby`}
                    className="w-auto h-full object-contain p-2"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#333333]">{barrel.size}</h3>
              </div>

              <p className="text-sm text-[#666666] mb-4 text-center">
                {barrel.description}
              </p>

              <div className="bg-[#F5F1E8] rounded-md p-3 mb-4 text-center">
                <p className="text-2xl font-bold text-[#8B0000]">
                  R$ {barrel.pricePerLiter.toFixed(2)}
                </p>
                <p className="text-xs text-[#666666]">por litro</p>
              </div>

              <button
                onClick={() => handleWhatsApp(barrel.size, barrel.pricePerLiter)}
                className="w-full bg-[#25D366] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#20BA58] transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={16} />
                Pedir Orçamento
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-[#F5F1E8] rounded-lg p-6 text-center">
          <p className="text-[#666666] mb-4">
            Não sabe qual barril escolher?
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de ajuda para escolher o barril ideal para meu evento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#20BA58] transition-all inline-flex items-center gap-2"
          >
            <WhatsAppIcon size={16} />
            Me Ajude a Escolher
          </a>
        </div>
      </div>
    </section>
  );
}
