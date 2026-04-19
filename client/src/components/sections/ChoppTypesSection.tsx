import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";

const choppTypes = [
  {
    name: "Session IPA",
    emoji: "🍺",
    description: "Leve e refrescante com toque de lúpulo",
  },
  {
    name: "Pilsen Puro Malte",
    emoji: "🌾",
    description: "Clássica e equilibrada para todos",
  },
  {
    name: "Pale Ale",
    emoji: "🔥",
    description: "Encorpada com notas de caramelo",
  },
  {
    name: "IPA Nirvana",
    emoji: "✨",
    description: "Intensa e aromática para apreciadores",
  },
  {
    name: "Weiss",
    emoji: "🌾",
    description: "Bavara com notas de trigo e banana",
  },
  {
    name: "Pilsen Escuro",
    emoji: "🌑",
    description: "Encorpada com toque de chocolate",
  },
  {
    name: "Pilsen Claro",
    emoji: "☀️",
    description: "Refrescante e leve para qualquer ocasião",
  },
];

export default function ChoppTypesSection() {
  const handleWhatsApp = (type: string) => {
    const message = `Olá! Gostaria de saber mais sobre o Chopp Ashby ${type}.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="section section-beige">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Conheça os Tipos de Chopp Ashby</h2>
          <p className="text-lg text-[#666666]">
            7 estilos diferentes para todos os gostos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {choppTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-[#E8E4DC] hover:shadow-lg transition-all"
            >
              <div className="w-full h-28 bg-[#F5F1E8] rounded-md mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030237391/2yNdveRVHFrsqhfsSL7zE7/chopeira-ashby-profissional-jejSrWQyt3aHpkwSxpQdk7.webp"
                  alt={`Chopp Ashby ${type.name}`}
                  className="w-auto h-full object-contain p-2"
                />
              </div>
              <h3 className="text-xl font-bold text-[#333333] mb-2">
                {type.name}
              </h3>
              <p className="text-sm text-[#666666] mb-4">{type.description}</p>
              <button
                onClick={() => handleWhatsApp(type.name)}
                className="w-full bg-[#25D366] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#20BA58] transition-all text-sm flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={14} />
                Saber Mais
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#666666] mb-4 text-lg">
            Qual é seu favorito? Fale com a gente!
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre os tipos de Chopp Ashby disponíveis.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#20BA58] transition-all inline-flex items-center gap-2"
          >
            <WhatsAppIcon size={16} />
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
