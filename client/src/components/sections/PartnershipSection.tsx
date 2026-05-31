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
    <section
      id="parceria"
      className="relative py-20 text-white overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0d0500 0%, #1a0800 50%, #0d0500 100%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse 3px 4px at 30px 30px, #D4AF37 0%, transparent 100%),
            radial-gradient(ellipse 2px 3px at 80px 55px, #C8A832 0%, transparent 100%),
            radial-gradient(ellipse 4px 2px at 130px 25px, #D4AF37 0%, transparent 100%),
            radial-gradient(ellipse 2px 4px at 170px 70px, #B8941E 0%, transparent 100%),
            radial-gradient(ellipse 3px 3px at 50px 95px, #D4AF37 0%, transparent 100%),
            radial-gradient(ellipse 2px 2px at 100px 115px, #C8A832 0%, transparent 100%)`,
          backgroundSize: "200px 140px",
        }}
      />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#D4AF37] font-semibold uppercase tracking-widest text-sm mb-3">
            Tradição Inglesa, Sabor Brasileiro
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A História por Trás do Chopp
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
        </div>

        <div className="flex items-center justify-center gap-8 md:gap-16 mb-16">
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030237391/zuZDYXcOrtWrmlgE.png"
            alt="Ashby Cervejaria"
            className="h-24 md:h-32 w-auto object-contain"
          />
          <div className="text-[#D4AF37] text-4xl md:text-5xl font-light">+</div>
          <img
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663030237391/HiSzMWvPZbLNWbbt.png"
            alt="Adega São Marcos"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-6 text-[#D4AF37]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cervejaria Ashby — Desde 1993
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4 text-base">
              A história da Cervejaria Ashby começou em 1993, quando o físico americano e mestre cervejeiro
              <strong className="text-white"> Scott Ashby</strong> trouxe sua paixão por cervejas artesanais
              da Universidade da Califórnia para o Brasil. Instalada em
              <strong className="text-white"> Amparo, interior de São Paulo</strong>, a Ashby é reconhecida como a
              <strong className="text-white"> primeira microcervejaria do Brasil</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4 text-base">
              Com produção inicial de apenas 20 mil litros por mês, a cervejaria cresceu mantendo o compromisso
              com a qualidade artesanal. Inspirada nas melhores tradições cervejeiras europeias e norte-americanas,
              a Ashby desenvolveu receitas exclusivas que combinam
              <strong className="text-white"> tradição inglesa com sabor brasileiro</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed text-base">
              Hoje, com mais de <strong className="text-white">30 anos de história</strong>, a Ashby é sinônimo de
              excelência cervejeira, oferecendo uma linha completa de chopps e cervejas premiados internacionalmente,
              democratizando o acesso à cerveja de alta qualidade para os brasileiros.
            </p>
          </div>

          <div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-6 text-[#D4AF37]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Premiações Internacionais
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                <Award className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">World Beer Awards — Melhor do Mundo</p>
                  <p className="text-gray-400 text-sm">
                    Ashby British Strong Ale eleita a melhor do mundo na sua categoria, entre mais de 3.000 rótulos inscritos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                <Globe className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Copa de Los Volcanes — Tripla Medalha</p>
                  <p className="text-gray-400 text-sm">
                    Ouro com a Ashby Weiss, Prata com a Ashby Porter e Bronze em Arequipa, Peru.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                <Star className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Australian International Beer Awards</p>
                  <p className="text-gray-400 text-sm">
                    Medalha de Bronze em uma das mais prestigiadas competições cervejeiras do mundo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white/5 rounded-lg p-4 border border-white/10">
                <Beer className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-bold text-white">Teste cego — Ashby surpreendeu</p>
                  <p className="text-gray-400 text-sm">
                    Em teste cego divulgado pela Veja SP, o chopp Ashby Pilsen foi preferido por 55% dos participantes.
                  </p>

                  <a
                    href="https://vejasp.abril.com.br/comida-bebida/chope-ashby-vence-o-brahma-em-teste-cego/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir a matéria da Veja SP sobre o teste cego do chopp Ashby em nova aba"
                    className="inline-flex items-center mt-3 px-4 py-2 rounded-md border border-[#D4AF37] text-[#D4AF37] text-sm font-semibold hover:bg-[#D4AF37] hover:text-[#1a0800] transition-all"
                  >
                    Ver teste cego na Veja SP ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#8B0000]/20 to-[#D4AF37]/10 rounded-2xl p-8 md:p-12 border border-[#D4AF37]/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                className="text-2xl md:text-3xl font-bold mb-4 text-[#D4AF37]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Adega São Marcos — Chopp Ashby para Eventos
              </h3>

              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <Calendar size={16} />
                <span>Desde 2020</span>
                <span className="mx-2">|</span>
                <MapPin size={16} />
                <span>Valinhos, Campinas e Região</span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-4 text-base">
                A <strong className="text-white">Adega São Marcos</strong> trabalha com Chopp Ashby em Valinhos,
                Campinas e região. Desde 2020, levamos a qualidade premiada da Cervejaria Ashby diretamente para a sua
                festa, churrasco ou evento corporativo.
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
