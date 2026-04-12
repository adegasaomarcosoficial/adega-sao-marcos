import { Phone, MapPin, Clock } from 'lucide-react';

/**
 * Componente Footer
 * Design: Luxo Cervejeiro Contemporâneo
 */
export function Footer() {
  return (
    <footer className="bg-secondary border-t border-primary/20 py-12 relative z-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Sobre */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Adega São Marcos</h3>
            <p className="text-sm text-foreground/70">
              Fornecedora oficial de chopp Ashby em Valinhos. 
              Qualidade premium para suas celebrações.
            </p>
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Contato</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-foreground/70">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+5519993444124" className="hover:text-primary transition">
                  (19) 99344-4124
                </a>
              </div>
              <div className="flex items-center gap-2 text-foreground/70">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Valinhos, SP</span>
              </div>
            </div>
          </div>

          {/* Horário */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Horário</h3>
            <div className="space-y-2 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>Disponível 24/7</span>
              </div>
              <p className="text-xs">
                Entre em contato via WhatsApp para orçamentos e agendamentos.
              </p>
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Adega São Marcos. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground">
              Chopp Ashby • Valinhos, SP
            </p>
          </div>
        </div>

        {/* Aviso Legal */}
        <div className="mt-6 pt-6 border-t border-primary/20">
          <p className="text-xs text-muted-foreground text-center">
            Este site é destinado apenas para maiores de 18 anos. 
            Bebida alcoólica. Consumo excessivo de álcool é prejudicial à saúde.
          </p>
        </div>
      </div>
    </footer>
  );
}
