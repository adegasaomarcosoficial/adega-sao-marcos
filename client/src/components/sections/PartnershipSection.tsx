/*
 * Design: Parceria Ashby + Adega São Marcos
 * Seção premium com história da Ashby e a parceria
 * Objetivo: Atrair patrocínio da marca Ashby
 */
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Award, Globe, Beer, Star, Calendar, MapPin } from "lucide-react";

const WHATSAPP_NUMBER = "5519993444124";

export default function PartnershipSection() {
  return (
    <section id="parceria" className="py-20 bg-gradient-to-b from-[#1a0a0a] to-[#2a1010] text-white overflow-hidden">
      <div className="container">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm mb-3">
            Tradição Inglesa, Sabor Brasileiro
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            A História por Trás do Chopp
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
        </div>

        {/* Logos lado a lado */}
        <div className="flex items-center justify-center gap-8 md:gap-16 mb-16">
          <img
            src="/manus-storage/ashby-logo_3704ba10.png"
            alt="Ashby Cervejaria"
            className="h-24 md:h-32 w-auto object-contain"
          />
          <div className="text-[#D4AF37] text-4xl md:text-5xl font-light">+</div>
          <img
            src="/manus-storage/adega-logo_10dd0845.png"
            alt="Adega São Marcos"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </div>

        {/* História da Ashby */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Cervejaria Ashby — Desde 1993
            </h3>
            <p className="text-gray-300 leading-relaxed mb-4 text-base">
              A história da Cervejaria Ashby começou em 1993, quando o físico americano e mestre cervejeiro 
              <strong className="text-white"> Scott Ashby</strong> trouxe sua paixão por cervejas artesanais 
              da Universidade da Califórnia para o Brasil. Instalada em <strong className="text-white">Amparo, interior de São Paulo</strong>, 
              a Ashby é reconhecida como a <strong className="text-white">primeira microcervejaria do Brasil</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-base">
              Com produção inicial de apenas 20 mil litros por mês, a cervejaria cresceu mantendo o compromisso 
              com a qualidade artesanal. Inspirada nas melhores tradições cervejeiras europeias e norte-americanas, 
              a Ashby desenvolveu receitas exclusivas que combinam <strong className="text-white">tradição inglesa com sabor brasileiro</strong>.
            </p>
            <p className="text-gray-300 leading-relaxed text-base">
              Hoje, com mais de <strong className="text-white">30 anos de história</strong>, a Ashby é sinônimo de 
              excelência cervejeira, oferecendo uma linha completa de chopps e cervejas premiados internacionalmente, 
              democratizando o acesso à cerveja de alta qualidade para os brasileiros.
            </p>
          </div>

          {/* Premiações */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Premiações Internacionais
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                <Award className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">World Beer Awards — Melhor do Mundo</p>
                  <p className="text-gray-400 text-sm">Ashby British Strong Ale eleita a melhor do mundo na sua categoria, entre mais de 3.000 rótulos inscritos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                <Globe className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Copa de Los Volcanes — Tripla Medalha</p>
                  <p className="text-gray-400 text-sm">Ouro com a Ashby Weiss, Prata com a Ashby Porter e Bronze em Arequipa, Peru.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                <Star className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Australian International Beer Awards</p>
                  <p className="text-gray-400 text-sm">Medalha de Bronze em uma das mais prestigiadas competições cervejeiras do mundo.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                <Beer className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Teste Cego — Venceu a Brahma</p>
                  <p className="text-gray-400 text-sm">Em teste cego realizado pela Veja SP, o chopp Ashby Pilsen venceu o Brahma em degustação.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parceria Adega São Marcos */}
        <div className="bg-gradient-to-r from-[#8B0000]/20 to-[#D4AF37]/10 rounded-2xl p-8 md:p-12 border border-[#D4AF37]/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Adega São Marcos — Distribuidor Oficial
              </h3>
              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar size={16} />
                <span>Desde 2020</span>
                <span className="mx-2">|</span>
                <MapPin size={16} />
                <span>Valinhos, Campinas e Região</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 text-base">
                A <strong className="text-white">Adega São Marcos</strong> é distribuidora oficial do Chopp Ashby 
                em Valinhos, Campinas e região. Desde 2020, levamos a qualidade premiada da Cervejaria Ashby 
                diretamente para a sua festa, churrasco ou evento corporativo.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 text-base">
                Com <strong className="text-white">atendimento personalizado, locação de chopeira e instalação completa</strong>, 
                garantimos que cada gole do seu evento tenha a mesma qualidade que conquistou prêmios ao redor do mundo. 
                Somos a ponte entre a tradição cervejeira Ashby e os melhores momentos da sua vida.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vi no site sobre a parceria com a Ashby e gostaria de fazer um orçamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#20BA58] transition-all shadow-lg"
              >
                <WhatsAppIcon size={18} />
                Fazer Orçamento
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]">30+</p>
                <p className="text-gray-400 text-sm mt-1">Anos de Tradição Ashby</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]">5+</p>
                <p className="text-gray-400 text-sm mt-1">Anos Adega São Marcos</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]">6</p>
                <p className="text-gray-400 text-sm mt-1">Tipos de Chopp</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]">10+</p>
                <p className="text-gray-400 text-sm mt-1">Prêmios Internacionais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
