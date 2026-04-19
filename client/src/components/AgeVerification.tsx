/*
 * Modal de Verificação de Idade - Adega São Marcos
 * Estilo Brahma Chopp: Logo + Aviso Legal + Botões SIM/NÃO
 */
import { useState, useEffect } from "react";

interface AgeVerificationProps {
  children: React.ReactNode;
}

export default function AgeVerification({ children }: AgeVerificationProps) {
  const [isVerified, setIsVerified] = useState(false);
  const [showDenied, setShowDenied] = useState(false);

  useEffect(() => {
    // Verifica se já confirmou a idade nesta sessão
    const verified = sessionStorage.getItem("age-verified");
    if (verified === "true") {
      setIsVerified(true);
    }
  }, []);

  const handleYes = () => {
    sessionStorage.setItem("age-verified", "true");
    setIsVerified(true);
  };

  const handleNo = () => {
    setShowDenied(true);
  };

  if (isVerified) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Fundo escurecido */}
      <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
        {/* Modal */}
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center animate-in fade-in zoom-in duration-300">
          {/* Logo Adega São Marcos */}
          <div className="flex justify-center mb-6">
            <img
              src="/manus-storage/AdegaLogoSite_6e09f4ff.png"
              alt="Adega São Marcos"
              className="w-36 h-36 object-contain"
            />
          </div>

          {showDenied ? (
            <>
              {/* Mensagem de acesso negado */}
              <p className="text-lg text-[#333333] mb-2 font-medium">
                Acesso não permitido.
              </p>
              <p className="text-sm text-[#666666] mb-6">
                O consumo de bebidas alcoólicas é proibido para menores de 18 anos.
              </p>
              <p className="text-xs text-[#999999]">
                Lei n.° 9.294, de 15 de julho de 1996
              </p>
            </>
          ) : (
            <>
              {/* Aviso legal */}
              <p className="text-[#333333] mb-4 text-base leading-relaxed">
                O consumo de bebidas alcoólicas é proibido para menores de 18 anos.
              </p>

              {/* Pergunta */}
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-8 uppercase tracking-wide">
                Você tem 18 anos ou mais?
              </h2>

              {/* Botões */}
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleNo}
                  className="flex-1 max-w-[160px] border-2 border-[#333333] text-[#333333] px-8 py-3 rounded-lg
                    font-bold text-lg uppercase tracking-wider
                    transition-all duration-300
                    hover:bg-[#333333] hover:text-white"
                >
                  Não
                </button>
                <button
                  onClick={handleYes}
                  className="flex-1 max-w-[160px] bg-[#8B0000] text-white px-8 py-3 rounded-lg
                    font-bold text-lg uppercase tracking-wider
                    transition-all duration-300
                    hover:bg-[#6B0000] hover:shadow-lg hover:scale-105"
                >
                  Sim
                </button>
              </div>

              {/* Texto legal pequeno */}
              <p className="text-xs text-[#999999] mt-6">
                Beba com moderação. Venda proibida para menores de 18 anos.
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
