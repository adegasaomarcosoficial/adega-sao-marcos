import { useEffect, useRef } from 'react';

/**
 * Componente de Fundo Animado
 * Design: Luxo Cervejeiro Contemporâneo
 * Efeito: Espuma de chopp escorrendo com parallax
 */

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    // Partículas de espuma
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
    }> = [];

    // Inicializar partículas
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 0.3 + 0.1,
        radius: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const animate = () => {
      // Limpar canvas com fundo semi-transparente
      ctx.fillStyle = 'rgba(18, 18, 25, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Animar partículas
      particles.forEach((particle, index) => {
        // Movimento vertical (descendo)
        particle.y += particle.vy;

        // Movimento horizontal (ondulação)
        particle.x += Math.sin(time + index) * 0.2;

        // Resetar partículas que saem da tela
        if (particle.y > canvas.height) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }

        // Desenhar partícula com gradiente
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Desenhar linhas decorativas
      ctx.strokeStyle = `rgba(212, 175, 55, 0.05)`; // Ouro com transparência
      ctx.lineWidth = 1;

      for (let i = 0; i < 3; i++) {
        const waveY = (canvas.height / 3) * (i + 1) + Math.sin(time + i) * 20;
        ctx.beginPath();
        ctx.moveTo(0, waveY);

        for (let x = 0; x < canvas.width; x += 50) {
          const y = waveY + Math.sin((x + time * 50) / 100) * 10;
          ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Redimensionar canvas ao mudar tamanho da janela
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

/**
 * Componente de Linha Dourada Derramando
 * Efeito visual de chopp sendo derramado
 */
export function GoldenDrip() {
  return (
    <svg
      className="absolute top-0 left-0 w-full h-auto pointer-events-none"
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
      style={{ zIndex: 1 }}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Linha principal derramando */}
      <path
        d="M 0,0 Q 150,40 300,20 T 600,30 T 900,15 T 1200,25 L 1200,200 Q 900,150 600,170 Q 300,150 0,200 Z"
        fill="url(#goldGradient)"
        filter="url(#glow)"
        style={{
          animation: 'drip 4s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes drip {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </svg>
  );
}
