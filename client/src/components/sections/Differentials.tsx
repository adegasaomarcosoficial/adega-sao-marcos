import {
  Zap,
  Users,
  Truck,
  Wrench,
  MessageCircle,
  MapPin,
} from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: Zap,
      title: "Chopp Ashby",
      description: "Marca reconhecida e valorizada em todo o mercado",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description: "Orientação completa para escolher o ideal para seu evento",
    },
    {
      icon: Truck,
      title: "Locação de Chopeira",
      description: "Equipamento profissional por apenas R$ 49,90",
    },
    {
      icon: Wrench,
      title: "Instalação no Evento",
      description: "Montagem e preparo para funcionar perfeitamente",
    },
    {
      icon: MessageCircle,
      title: "Atendimento Rápido via WhatsApp",
      description: "Resposta ágil e orçamento direto pelo celular",
    },
    {
      icon: MapPin,
      title: "Valinhos, Campinas e Região",
      description: "Cobertura ampla na região metropolitana",
    },
  ];

  return (
    <section className="section section-beige">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Por Que Escolher a Adega São Marcos</h2>
          <p className="text-lg text-[#666666]">
            6 razões para confiar em nossa experiência
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-[#E8E4DC] hover:shadow-lg transition-all"
              >
                <Icon size={32} className="text-[#8B0000] mb-4" />
                <h3 className="text-lg font-bold text-[#333333] mb-2">
                  {diff.title}
                </h3>
                <p className="text-[#666666]">{diff.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
