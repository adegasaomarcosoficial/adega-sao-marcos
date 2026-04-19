import { Calendar, MapPin, Users } from "lucide-react";

export default function SinceSection() {
  return (
    <section className="section section-beige">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Adega São Marcos - Desde 2020</h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto">
            Desde 2020, a Adega São Marcos atende clientes de Valinhos, Campinas
            e região com Chopp Ashby, locação de chopeira e atendimento
            personalizado para festas e eventos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 text-center border border-[#E8E4DC]">
            <Calendar size={40} className="mx-auto mb-4 text-[#8B0000]" />
            <h3 className="text-xl font-bold text-[#333333] mb-2">Desde 2020</h3>
            <p className="text-[#666666]">
              Mais de 4 anos de experiência e confiança
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center border border-[#E8E4DC]">
            <MapPin size={40} className="mx-auto mb-4 text-[#8B0000]" />
            <h3 className="text-xl font-bold text-[#333333] mb-2">
              Valinhos, Campinas e Região
            </h3>
            <p className="text-[#666666]">Cobertura ampla e atendimento local</p>
          </div>

          <div className="bg-white rounded-lg p-8 text-center border border-[#E8E4DC]">
            <Users size={40} className="mx-auto mb-4 text-[#8B0000]" />
            <h3 className="text-xl font-bold text-[#333333] mb-2">
              Atendimento Personalizado
            </h3>
            <p className="text-[#666666]">Consultoria completa para seu evento</p>
          </div>
        </div>
      </div>
    </section>
  );
}
