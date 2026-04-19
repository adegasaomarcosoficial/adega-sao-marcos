import { MapPin, Clock, Users, Zap } from "lucide-react";

export default function TrustBar() {
  const items = [
    {
      icon: Clock,
      label: "Desde 2020",
      description: "Experiência comprovada",
    },
    {
      icon: MapPin,
      label: "Valinhos, Campinas e Região",
      description: "Cobertura ampla",
    },
    {
      icon: Users,
      label: "Atendimento Personalizado",
      description: "Consultoria completa",
    },
    {
      icon: Zap,
      label: "Chopp Ashby",
      description: "Marca premium",
    },
  ];

  return (
    <section className="bg-[#8B0000] text-white py-8 md:py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <Icon size={32} className="flex-shrink-0" />
                <div>
                  <p className="font-semibold text-base">{item.label}</p>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
