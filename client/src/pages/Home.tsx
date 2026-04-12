import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, MapPin, Package } from 'lucide-react';
import { AnimatedBackground, GoldenDrip } from '@/components/AnimatedBackground';
import { Footer } from '@/components/Footer';

/**
 * Adega São Marcos - Home Page
 * Design: Luxo Cervejeiro Contemporâneo
 * Paleta: Ouro (#D4AF37) + Preto (#121219) + Branco (#FFFFFF)
 * Tipografia: Playfair Display (títulos) + Montserrat (subtítulos) + Inter (corpo)
 */

export default function Home() {
  const [showAgeGate, setShowAgeGate] = useState(true);
  const [birthDate, setBirthDate] = useState('');
  const [ageError, setAgeError] = useState('');

  // Verificar se usuário já passou pela verificação de idade
  useEffect(() => {
    const ageVerified = localStorage.getItem('adega_age_verified');
    if (ageVerified === 'true') {
      setShowAgeGate(false);
    }
  }, []);

  const handleAgeVerification = () => {
    if (!birthDate) {
      setAgeError('Por favor, insira sua data de nascimento');
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    if (age < 18) {
      setAgeError('Desculpe, você precisa ter 18 anos ou mais para acessar este site.');
      return;
    }

    localStorage.setItem('adega_age_verified', 'true');
    setShowAgeGate(false);
  };

  const handleWhatsAppClick = () => {
    const phone = '5519993444124';
    const message = encodeURIComponent('Olá! Gostaria de fazer um orçamento para chopp Ashby.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Fundo Animado */}
      <AnimatedBackground />
      {/* Age Gate Modal */}
      <Dialog open={showAgeGate} onOpenChange={setShowAgeGate}>
        <DialogContent className="sm:max-w-md border-primary/20 bg-card">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-primary">
              Verificação de Idade
            </DialogTitle>
            <DialogDescription className="text-foreground/70">
              Você precisa ter 18 anos ou mais para acessar este site.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="birthDate" className="text-foreground">
                Data de Nascimento
              </Label>
              <Input
                id="birthDate"
                type="date"
                value={birthDate}
                onChange={(e) => {
                  setBirthDate(e.target.value);
                  setAgeError('');
                }}
                className="bg-secondary border-primary/30 text-foreground"
              />
            </div>
            {ageError && (
              <p className="text-sm text-destructive">{ageError}</p>
            )}
            <Button
              onClick={handleAgeVerification}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Confirmar Idade
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Sua privacidade é importante. Não armazenamos suas informações pessoais.
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-primary/20 relative">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-primary">
            Adega São Marcos
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#chopp" className="text-foreground hover:text-primary transition">Chopp</a>
            <a href="#precos" className="text-foreground hover:text-primary transition">Preços</a>
            <a href="#contato" className="text-foreground hover:text-primary transition">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden z-10">
        {/* Background animado com gradiente */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary opacity-50"></div>
        
        {/* Imagem de fundo com parallax */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663030237391/2yNdveRVHFrsqhfsSL7zE7/fundo-animado-chopp-E9PcxADpGTq4xMkximhc4.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        ></div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                  Chopp Ashby
                </h1>
                <p className="text-xl text-foreground/80">
                  Qualidade Premium para suas Festas
                </p>
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed">
                A Adega São Marcos traz o melhor chopp Ashby para Valinhos. 
                Perfeito para festas, eventos corporativos e celebrações especiais.
              </p>

              <div className="flex gap-4 pt-4">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Fazer Orçamento
                </Button>
              </div>

              {/* Linha decorativa dourada */}
              <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent mt-8"></div>
            </div>

            {/* Imagem do chopp */}
            <div className="relative h-96 md:h-full">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030237391/2yNdveRVHFrsqhfsSL7zE7/chopp-hero-ashby-Db38icP7PQuPNTYB2zuuiz.webp"
                alt="Chopp Ashby Premium"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Preços */}
      <section id="precos" className="py-20 bg-secondary/50 border-t border-b border-primary/20 relative z-10">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-primary mb-16">
            Nossos Preços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Pequenos Barris */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="flex items-center justify-center h-24 mb-6 bg-secondary rounded-lg">
                <Package className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Barris Pequenos</h3>
              <p className="text-foreground/70 mb-4">10, 15 ou 20 Litros</p>
              <p className="text-3xl font-bold text-primary mb-4">R$ 13,25</p>
              <p className="text-sm text-muted-foreground">Por litro</p>
            </div>

            {/* Card 2: Barris Grandes */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="flex items-center justify-center h-24 mb-6 bg-secondary rounded-lg">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030237391/2yNdveRVHFrsqhfsSL7zE7/barril-chopp-ashby-bbq5ss6Z5DWxY3aRW4mmx3.webp"
                  alt="Barril Grande"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Barris Grandes</h3>
              <p className="text-foreground/70 mb-4">30 ou 50 Litros</p>
              <p className="text-3xl font-bold text-primary mb-4">R$ 12,99</p>
              <p className="text-sm text-muted-foreground">Por litro</p>
            </div>

            {/* Card 3: Localização */}
            <div className="bg-card border border-primary/20 rounded-lg p-8 hover:border-primary/50 transition">
              <div className="flex items-center justify-center h-24 mb-6 bg-secondary rounded-lg">
                <MapPin className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">Localização</h3>
              <p className="text-foreground/70 mb-4">Entrega em Valinhos</p>
              <p className="text-3xl font-bold text-primary mb-4">R$ 49,90</p>
              <p className="text-sm text-muted-foreground">Taxa de entrega</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Chopeira */}
      <section id="chopp" className="py-20 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Imagem da Chopeira */}
            <div className="relative h-96 flex items-center justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030237391/2yNdveRVHFrsqhfsSL7zE7/chopeira-3d-BBosVxUgF6T2abWTHebHS9.webp"
                alt="Chopeira Premium"
                className="w-full h-full object-contain drop-shadow-2xl"
                style={{
                  animation: 'float 3s ease-in-out infinite'
                }}
              />
            </div>

            {/* Conteúdo */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-primary">
                Equipamento Premium
              </h2>

              <p className="text-lg text-foreground/70 leading-relaxed">
                Nossas chopeiras são de alta qualidade, mantendo o chopp Ashby sempre 
                na temperatura perfeita. Ideal para festas, eventos corporativos e 
                celebrações que exigem excelência.
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Refrigeração profissional</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Design elegante e moderno</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Fácil instalação e uso</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">Suporte técnico 24/7</span>
                </li>
              </ul>

              <Button
                onClick={handleWhatsAppClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contato" className="py-20 bg-secondary/50 border-t border-primary/20 relative z-10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-primary">
              Pronto para sua Festa?
            </h2>

            <p className="text-lg text-foreground/70">
              Entre em contato conosco pelo WhatsApp e faça seu orçamento. 
              Estamos prontos para tornar sua celebração inesquecível!
            </p>

            <Button
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-8 text-xl"
            >
              <Phone className="mr-2 h-6 w-6" />
              Chamar no WhatsApp: (19) 99344-4124
            </Button>

            <div className="pt-8 border-t border-primary/20">
              <p className="text-sm text-muted-foreground">
                Adega São Marcos • Valinhos, SP
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* CSS para animações */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
      `}</style>
    </div>
  );
}
