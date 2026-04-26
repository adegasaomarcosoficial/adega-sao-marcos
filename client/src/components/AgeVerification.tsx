/*
 * Verificação de Idade - Adega São Marcos
 * Overlay parcial: mostra prévia do site por trás, bloqueia scroll/interação
 * Usuário vê o site mas não consegue navegar sem confirmar 18+
 */
import { useState, useEffect } from "react";

interface AgeVerificationProps {
  children: React.ReactNode;
}

export default function AgeVerification({ children }: AgeVerificationProps) {
  const [isVerified, setIsVerified] = useState(false);
  const [showDenied, setShowDenied] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem("age-verified");
    if (verified === "true") {
      setIsVerified(true);
    }
  }, []);

  // Bloqueia scroll quando não verificado
  useEffect(() => {
    if (!isVerified) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVerified]);

  const handleYes = () => {
    sessionStorage.setItem("age-verified", "true");
    setIsVerified(true);
  };

  const handleNo = () => {
    setShowDenied(true);
  };

  return (
    <>
      {/* Site renderiza por trás - visível como prévia */}
      <div className={!isVerified ? "pointer-events-none select-none" : ""}>
        {children}
      </div>

      {/* Overlay de verificação - semi-transparente para mostrar prévia */}
      {!isVerified && (
        <div className="fixed inset-0 z-[9999] flex items-end justify-center pb-0">
          {/* Gradiente escuro na parte inferior para contraste com o modal */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />

          {/* Modal fixo na parte inferior */}
          <div className="relative bg-white rounded-t-3xl shadow-2xl w-full max-w-lg p-8 text-center
            animate-in slide-in-from-bottom duration-500">
            {/* Indicador de arraste */}
            <div className="w-12 h-1.5 bg-[#E8E4DC] rounded-full mx-auto mb-5" />

            {/* Logo Adega São Marcos */}
            <div className="flex justify-center mb-5">
              <img
                src="/manus-storage/AdegaLogoSite_6e09f4ff.png"
                alt="Adega São Marcos"
                className="w-28 h-28 object-contain"
              />
            </div>

            {showDenied ? (
              <>
                <p className="text-lg text-[#333333] mb-2 font-medium">
                  Acesso não permitido.
                </p>
                <p className="text-sm text-[#666666] mb-4">
                  O consumo de bebidas alcoólicas é proibido para menores de 18 anos.
                </p>
                <p className="text-xs text-[#999999]">
                  Lei n.° 9.294, de 15 de julho de 1996
                </p>
              </>
            ) : (
              <>
                {/* Aviso legal */}
                <p className="text-[#333333] mb-3 text-sm leading-relaxed">
                  O consumo de bebidas alcoólicas é proibido para menores de 18 anos.
                </p>

                {/* Pergunta */}
                <h2 className="text-xl md:text-2xl font-bold text-[#1a1a1a] mb-6 uppercase tracking-wide">
                  Você tem 18 anos ou mais?
                </h2>

                {/* Botões: SIM à esquerda (principal/vermelho), NÃO à direita (secundário) */}
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleYes}
                    className="flex-1 max-w-[160px] bg-[#8B0000] text-white px-6 py-3.5 rounded-xl
                      font-bold text-base uppercase tracking-wider
                      transition-all duration-300
                      hover:bg-[#6B0000] hover:shadow-lg hover:scale-105
                      shadow-[0_4px_15px_rgba(139,0,0,0.3)]"
                  >
                    Sim, tenho 18+
                  </button>
                  <button
                    onClick={handleNo}
                    className="flex-1 max-w-[120px] border-2 border-[#333333] text-[#333333] bg-white px-6 py-3.5 rounded-xl
                      font-bold text-base uppercase tracking-wider
                      transition-all duration-300
                      hover:bg-[#f5f5f5]"
                  >
                    Não
                  </button>
                </div>

                {/* Texto legal */}
                <p className="text-xs text-[#999999] mt-5">
                  Beba com moderação. Venda proibida para menores de 18 anos.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
