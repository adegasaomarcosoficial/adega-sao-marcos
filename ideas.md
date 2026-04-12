# Brainstorm de Design - Adega São Marcos

## Contexto
Site imersivo para a Adega São Marcos (Valinhos/SP), focado na venda de chopp Ashby para festas. Necessidade de verificação de idade, fundo animado 3D com efeito de espuma escorrendo, chopeira em movimento, tabela de preços e integração com WhatsApp.

---

## Abordagem 1: Luxo Cervejeiro Contemporâneo (Probabilidade: 0.08)

**Movimento de Design:** Art Deco Moderno + Minimalismo Sofisticado

**Princípios Fundamentais:**
- Elegância através da restrição: menos elementos, mais impacto visual
- Tipografia como protagonista: fontes geométricas e serifadas em contraste
- Profundidade sutil: sombras suaves e camadas de vidro fosco (glassmorphism)
- Ritmo visual: espaçamento generoso e alinhamentos precisos

**Filosofia de Cores:**
Paleta inspirada em cervejaria premium: ouro 24k (R$ 212, G$ 175, B$ 55) como destaque em fundo escuro (quase preto R$ 18, G$ 18, B$ 25), branco puro para tipografia de contraste. O efeito de espuma é representado por brancos translúcidos com opacidade variável. Intenção emocional: sofisticação, exclusividade, celebração.

**Paradigma de Layout:**
Assimétrico com grid de 3 colunas desalinhadas. Hero section ocupa 60% da largura esquerda com fundo animado de espuma. Coluna direita contém navegação vertical e call-to-action. Seções subsequentes alternam entre full-width e constrained, criando ritmo visual dinâmico.

**Elementos Assinatura:**
1. Linha dourada horizontal que "derrama" como chopp (SVG animado com efeito de gotejamento)
2. Ícones de chopp estilizados em ouro com contorno fino (stroke: 1.5px)
3. Cards com borda superior em gradiente ouro-transparente

**Filosofia de Interação:**
Hover effects sutis: texto muda para ouro, cards ganham sombra profunda. Cliques disparam animações de "brinde" (shake suave). Transições de página com fade + deslocamento vertical (200ms, easing: cubic-bezier(0.4, 0, 0.2, 1)).

**Animação:**
- Espuma escorrendo: loop contínuo com velocidade variável (rápido no topo, mais lento no meio)
- Chopeira: rotação suave de 3-5 graus em loop infinito, com efeito de "respiração" (scale 1.0 → 1.02)
- Parallax no scroll: fundo de espuma move mais lentamente que conteúdo (ratio 0.5x)

**Sistema Tipográfico:**
- Display: Playfair Display (serif, bold) para títulos principais
- Heading: Montserrat (sans-serif, 600) para subtítulos
- Body: Inter (sans-serif, 400) para textos longos
- Hierarquia: 48px → 32px → 24px → 16px → 14px

---

## Abordagem 2: Festeiro Descontraído & Vibrante (Probabilidade: 0.07)

**Movimento de Design:** Brutalismo Digital + Expressionismo Gráfico

**Princípios Fundamentais:**
- Autenticidade bruta: sem polimento excessivo, mas com intenção clara
- Cores saturadas e contrastantes: energia visual imediata
- Tipografia ousada: fontes com personalidade forte
- Movimento constante: animações que refletem a energia de uma festa

**Filosofia de Cores:**
Paleta inspirada em rótulos de cerveja artesanal: vermelho vibrante (R$ 220, G$ 20, B$ 60) + amarelo ouro (R$ 255, G$ 193, B$ 7) sobre fundo escuro (R$ 25, G$ 25, B$ 35). Efeito de espuma em branco puro com toque de azul claro para profundidade. Intenção emocional: diversão, energia, descontração, celebração.

**Paradigma de Layout:**
Grid irregular com elementos rotacionados (3-8 graus). Seções não-alinhadas propositalmente. Hero com imagem de chopp em grande escala (full-width, 70vh). Conteúdo "flutua" sobre o fundo animado com z-index variável, criando sensação de profundidade caótica.

**Elementos Assinatura:**
1. Bolhas de espuma que explodem ao hover (animação de scale + opacity)
2. Badges de "Promoção" e "Novo" em formas geométricas irregulares (trapézios, losangos)
3. Linhas de contorno em cores vibrantes que "pulsam"

**Filosofia de Interação:**
Cliques disparam sons (opcional): "tink" de vidro. Hover em botões causa rotação e mudança de cor. Scroll dispara animações de entrada em cascata. Feedback visual imediato e exagerado.

**Animação:**
- Espuma: múltiplas camadas com velocidades diferentes, algumas bolhas "explodem" e desaparecem
- Chopeira: movimento de "chacoalhada" (rotate 2deg → -2deg em loop)
- Confete de espuma ao clicar em CTA (opcional, pode ser desabilitado)

**Sistema Tipográfico:**
- Display: Fredoka One (sans-serif, bold, rounded) para títulos
- Heading: Poppins (sans-serif, 700) para subtítulos
- Body: Open Sans (sans-serif, 400) para textos
- Hierarquia: 56px → 36px → 28px → 18px → 14px

---

## Abordagem 3: Tradição Cervejeira & Nostalgia (Probabilidade: 0.06)

**Movimento de Design:** Vintage Cervejeiro + Tipografia Clássica

**Princípios Fundamentais:**
- Respeito à tradição: elementos que remetem a cervejarias históricas
- Tipografia clássica: serifas e fontes tradicionais
- Textura e grão: fundo com padrão de madeira ou papel envelhecido
- Movimento sutil: animações que não distraem da mensagem

**Filosofia de Cores:**
Paleta inspirada em rótulos antigos de cerveja: marrom escuro (R$ 101, G$ 67, B$ 33) + cobre (R$ 184, G$ 115, B$ 51) + creme (R$ 245, G$ 245, B$ 220). Espuma em branco com toque de bege. Fundo com textura de madeira envelhecida. Intenção emocional: confiança, tradição, qualidade, herança.

**Paradigma de Layout:**
Layout clássico com grid simétrico de 2 colunas. Hero section com imagem de chopeira antiga/clássica. Seções bem-definidas com separadores (linhas horizontais em cobre). Navegação em topo clássico. Estrutura tradicional mas com refinamento moderno.

**Elementos Assinatura:**
1. Brasão/escudo com logo da Adega São Marcos
2. Ornamentos tipográficos (flourishes) em cobre/ouro
3. Molduras em estilo vintage ao redor de imagens

**Filosofia de Interação:**
Hover effects elegantes: texto em cobre, cards ganham borda em cobre. Transições suaves e previsíveis. Feedback visual clássico (sem surpresas).

**Animação:**
- Espuma: movimento lento e constante, como se fosse derramada com cuidado
- Chopeira: movimento mínimo, apenas uma leve oscilação (1-2 graus)
- Scroll: fade-in suave de elementos conforme entram no viewport

**Sistema Tipográfico:**
- Display: Lora (serif, bold) para títulos
- Heading: Crimson Text (serif, 600) para subtítulos
- Body: Lato (sans-serif, 400) para textos
- Hierarquia: 48px → 32px → 24px → 16px → 14px

---

## Decisão Final

**Abordagem Escolhida: Luxo Cervejeiro Contemporâneo**

Essa abordagem equilibra sofisticação com funcionalidade, permitindo que o site se destaque no mercado como um serviço premium. A paleta ouro + preto transmite exclusividade e qualidade, alinhada com a marca Ashby. As animações sutis mantêm o foco no conteúdo enquanto adicionam movimento elegante. O layout assimétrico cria dinamismo sem parecer caótico, e a tipografia clara facilita a conversão (WhatsApp, orçamento).

**Justificativa:** Para um site de vendas de chopp em Valinhos, a elegância contemporânea é mais eficaz que a vibração descontraída ou a nostalgia. Comunica qualidade, profissionalismo e exclusividade—exatamente o que festas premium procuram.
