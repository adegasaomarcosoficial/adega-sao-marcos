import { MessageCircle, CheckCircle, Zap } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Chame no WhatsApp",
      description:
        "Fale com a Adega São Marcos e informe a data, tipo de evento e quantidade de pessoas.",
    },
    {
      icon: CheckCircle,
      title: "Receba a Indicação",
      description:
        "Nossa equipe ajuda você a escolher o barril certo e a chopeira para sua ocasião.",
    },
    {
      icon: Zap,
      title: "Feche seu Pedido",
      description:
        "Com tudo alinhado, garantimos atendimento personalizado com instalação e suporte.",
    },
  ];

  return (
    <section id="como-funciona" className="section section-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Como Funciona</h2>
          <p className="text-lg text-[#666666]">
            Três passos simples para seu evento perfeito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Número */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-[#8B0000] text-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                </div>

                {/* Ícone */}
                <Icon size={40} className="text-[#8B0000] mb-4" />

                {/* Conteúdo */}
                <h3 className="text-xl font-bold text-[#333333] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#666666]">{step.description}</p>

                {/* Linha conectora */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute w-12 h-1 bg-[#8B0000] transform translate-x-32 -translate-y-8"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
