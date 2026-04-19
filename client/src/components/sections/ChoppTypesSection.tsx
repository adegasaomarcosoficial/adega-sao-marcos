/*
 * Design: Ashby Commercial - Chopp Types Section
 * Paleta: Vermelho #8B0000, Branco, Bege #F5F1E8
 * Cards com imagens reais dos copos Ashby + dados técnicos oficiais
 */
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WHATSAPP_NUMBER = "5519993444124";

const choppTypes = [
  {
    name: "Ashby Pilsen Puro Malte",
    image: "/manus-storage/ashby-pilsen-puro-malte_b5d495e6.webp",
    description:
      "O chopp feito com 100% malte de cevada, que confere muito sabor, além de 4 lúpulos alemães e americanos — que transferem os aromas herbais.",
    ibu: 12,
    teor: "4,6%",
    copo: "Pilsner ou Pokal",
    bgColor: "bg-amber-900/10",
  },
  {
    name: "Ashby Pilsen Claro",
    image: "/manus-storage/ashby-pilsen-claro_4068684f.webp",
    description:
      "Suave e extremamente refrescante, este é o chopp clássico que vai bem em qualquer momento.",
    ibu: 12,
    teor: "4,8%",
    copo: "Pilsner ou Pokal",
    bgColor: "bg-red-900/10",
  },
  {
    name: "Ashby Pilsen Escuro",
    image: "/manus-storage/ashby-pilsen-escuro_790909b4.webp",
    description:
      "Com textura única e colarinho espesso, apresenta sabores suavemente adocicados e aromas com notas de frutas, caramelo e malte torrado.",
    ibu: 11,
    teor: "4,8%",
    copo: "Pilsner ou Pokal",
    bgColor: "bg-stone-900/10",
  },
  {
    name: "Ashby Weiss",
    image: "/manus-storage/ashby-weiss_69cd704a.webp",
    description:
      "O tradicional e forte chopp de trigo da Baviera, diretamente no seu copo. Prove esse sabor alemão com aroma de cravo e banana.",
    ibu: 15,
    teor: "6,7%",
    copo: "Weizen",
    bgColor: "bg-blue-900/10",
  },
  {
    name: "Ashby IPA Nirvana",
    image: "/manus-storage/ashby-ipa-nirvana_2e2c2202.webp",
    description:
      "Essa representante do estilo India Pale Ale traz 4 lúpulos e o processo de dry hopping, sendo amargo e aromático no ponto certo.",
    ibu: 55,
    teor: "5,5%",
    copo: "Pint",
    bgColor: "bg-green-900/10",
  },
  {
    name: "Ashby Pale Ale",
    image: "/manus-storage/ashby-pale-ale_c340c32a.png",
    description:
      "Uma agradável receita inglesa que combina o aroma herbal dos lúpulos selecionados com o sabor de pão e cereais dos maltes especiais.",
    ibu: 18,
    teor: "5,1%",
    copo: "Snifter",
    bgColor: "bg-orange-900/10",
  },
];

export default function ChoppTypesSection() {
  const handleWhatsApp = (type: string) => {
    const message = `Olá! Gostaria de saber mais sobre o ${type}.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="tipos-chopp" className="section section-beige">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Conheça os Tipos de Chopp Ashby</h2>
          <p className="text-lg text-[#666666]">
            6 estilos premiados para todos os gostos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {choppTypes.map((type, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden border border-[#E8E4DC] hover:shadow-xl transition-all duration-300 bg-white`}
            >
              {/* Imagem do Chopp */}
              <div className={`${type.bgColor} flex items-center justify-center h-56 p-4`}>
                <img
                  src={type.image}
                  alt={type.name}
                  className="w-auto h-full object-contain drop-shadow-lg"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#333333] mb-3">
                  {type.name}
                </h3>
                <p className="text-sm text-[#666666] mb-4 leading-relaxed">
                  {type.description}
                </p>

                {/* Dados Técnicos */}
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div className="bg-[#F5F1E8] rounded-md py-2 px-1">
                    <p className="text-xs text-[#999999] font-medium">IBU</p>
                    <p className="text-sm font-bold text-[#8B0000]">{type.ibu}</p>
                  </div>
                  <div className="bg-[#F5F1E8] rounded-md py-2 px-1">
                    <p className="text-xs text-[#999999] font-medium">Teor</p>
                    <p className="text-sm font-bold text-[#8B0000]">{type.teor}</p>
                  </div>
                  <div className="bg-[#F5F1E8] rounded-md py-2 px-1">
                    <p className="text-xs text-[#999999] font-medium">Copo</p>
                    <p className="text-xs font-bold text-[#8B0000]">{type.copo}</p>
                  </div>
                </div>

                <button
                  onClick={() => handleWhatsApp(type.name)}
                  className="w-full bg-[#25D366] text-white px-4 py-3 rounded-md font-semibold hover:bg-[#20BA58] transition-all flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon size={16} />
                  Pedir Este Chopp
                </button>
              </div>
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
