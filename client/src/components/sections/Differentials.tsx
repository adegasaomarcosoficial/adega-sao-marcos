import { MapPin, ShieldCheck, Truck, MessageCircle } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: MapPin,
      title: "Valinhos e Região",
      description: "Cobertura ampla em Valinhos, Campinas e cidades próximas.",
    },
    {
      icon: ShieldCheck,
      title: "Chopp Ashby Original",
      description: "Produto de qualidade, com procedência e padrão premium.",
    },
    {
      icon: Truck,
      title: "Entrega e Suporte",
      description: "Atendimento próximo para orientar pedido, barril e chopeira.",
    },
    {
      icon: MessageCircle,
      title: "Atendimento Direto",
      description: "Fale pelo WhatsApp e receba orientação rápida para seu evento.",
    },
  ];

  return (
    <section id="diferenciais" className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Diferenciais da Adega São Marcos</h2>
          <p className="text-lg text-[#666666]">
            Qualidade, proximidade e atendimento para deixar seu momento mais completo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-[#F0E6D2] text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#8B0000] text-white flex items-center justify-center">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-[#333333] mb-3">
                  {item.title}
                </h3>

                <p className="text-[#666666]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
