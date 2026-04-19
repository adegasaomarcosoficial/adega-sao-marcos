import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Como escolher o barril ideal para meu evento?",
    answer:
      "Recomendamos considerar o número de convidados e a duração do evento. Para eventos menores (até 30 pessoas), barris de 10-15L são ideais. Para eventos maiores, recomendamos 30-50L. Nossa equipe pode ajudar na escolha!",
  },
  {
    question: "Quais tamanhos de barris estão disponíveis?",
    answer:
      "Temos barris de 10L, 15L, 20L, 30L e 50L. Todos com Chopp Ashby de qualidade premium.",
  },
  {
    question: "Qual o valor dos barris?",
    answer:
      "Barris de 10, 15 e 20 litros custam R$ 13,25 por litro. Barris de 30 e 50 litros custam R$ 12,99 por litro.",
  },
  {
    question: "A chopeira está inclusa?",
    answer:
      "A chopeira não está inclusa no preço do chopp, mas pode ser alugada por R$ 49,90, com instalação inclusa.",
  },
  {
    question: "Vocês fazem instalação da chopeira?",
    answer:
      "Sim! A instalação da chopeira está inclusa no valor de R$ 49,90. Nossa equipe realiza a montagem no local do evento.",
  },
  {
    question: "Vocês atendem só Valinhos?",
    answer:
      "Não! Atendemos Valinhos, Campinas e região. Fale conosco para confirmar se sua localidade está na área de cobertura.",
  },
  {
    question: "Como faço para pedir orçamento?",
    answer:
      "É simples! Clique em qualquer botão 'Pedir Orçamento' ou entre em contato conosco via WhatsApp (19) 99344-4124. Nossa equipe responde rapidamente.",
  },
  {
    question: "Posso pedir ajuda para saber qual barril combina com meu evento?",
    answer:
      "Claro! Nossa equipe oferece atendimento personalizado. Entre em contato via WhatsApp e conversaremos sobre os detalhes do seu evento.",
  },
  {
    question: "Onde fica a Adega São Marcos?",
    answer:
      "Estamos localizado em Rua João Previtale, 2625 - Jardim São Marcos, Valinhos. Atendemos também eventos em Campinas e região.",
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer:
      "Atendemos via WhatsApp 24/7 para consultas. Para horários específicos de atendimento presencial, entre em contato conosco.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section section-light">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Dúvidas Frequentes</h2>
          <p className="text-lg text-[#666666]">
            Encontre respostas para as perguntas mais comuns
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#E8E4DC] rounded-lg overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 bg-white hover:bg-[#F5F1E8] transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-[#333333] text-left">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#8B0000] flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-[#F5F1E8] border-t border-[#E8E4DC]">
                  <p className="text-[#666666]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
