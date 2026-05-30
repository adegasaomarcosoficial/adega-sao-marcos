import { useEffect, useState } from "react";

export type BarrelConfig = {
  size: string;
  liters: number;
  pricePerLiter: number;
  description: string;
  popular: boolean;
  active: boolean;
};

export type SiteConfig = {
  whatsapp: {
    number: string;
    defaultMessage: string;
  };
  promo: {
    active: boolean;
    title: string;
    text: string;
    buttonText: string;
  };
  barrels: BarrelConfig[];
  choppeira: {
    price: number;
    text: string;
    active: boolean;
  };
};

export const fallbackSiteConfig: SiteConfig = {
  whatsapp: {
    number: "5519993444124",
    defaultMessage: "Olá! Gostaria de fazer um orçamento para chopp Ashby.",
  },
  promo: {
    active: false,
    title: "Promoção da semana",
    text: "Consulte condições especiais para seu evento neste fim de semana.",
    buttonText: "Pedir promoção no WhatsApp",
  },
  barrels: [
    {
      size: "10 Litros",
      liters: 10,
      pricePerLiter: 13.25,
      description: "Ideal para encontros menores e momentos mais reservados",
      popular: false,
      active: true,
    },
    {
      size: "15 Litros",
      liters: 15,
      pricePerLiter: 13.25,
      description: "Prático para reunir amigos com chopp gelado e presença premium",
      popular: false,
      active: true,
    },
    {
      size: "20 Litros",
      liters: 20,
      pricePerLiter: 13.25,
      description: "Mais capacidade para churrascos, aniversários e celebrações",
      popular: true,
      active: true,
    },
    {
      size: "30 Litros",
      liters: 30,
      pricePerLiter: 12.99,
      description: "Perfeito para eventos com maior fluxo e praticidade",
      popular: true,
      active: true,
    },
    {
      size: "50 Litros",
      liters: 50,
      pricePerLiter: 12.99,
      description: "Volume, presença e experiência completa no evento",
      popular: false,
      active: true,
    },
  ],
  choppeira: {
    price: 49.9,
    text: "Instalação inclusa",
    active: true,
  },
};

function asNumber(value: unknown, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function normalizeSiteConfig(input: unknown): SiteConfig {
  const data = (input ?? {}) as Partial<SiteConfig>;

  const barrels = Array.isArray(data.barrels)
    ? data.barrels.map((barrel, index) => {
        const fallback = fallbackSiteConfig.barrels[index] ?? fallbackSiteConfig.barrels[0];

        return {
          size: String(barrel?.size ?? fallback.size),
          liters: asNumber(barrel?.liters, fallback.liters),
          pricePerLiter: asNumber(barrel?.pricePerLiter, fallback.pricePerLiter),
          description: String(barrel?.description ?? fallback.description),
          popular: Boolean(barrel?.popular),
          active: barrel?.active !== false,
        };
      })
    : fallbackSiteConfig.barrels;

  return {
    whatsapp: {
      ...fallbackSiteConfig.whatsapp,
      ...(data.whatsapp ?? {}),
    },
    promo: {
      ...fallbackSiteConfig.promo,
      ...(data.promo ?? {}),
      active: Boolean(data.promo?.active),
    },
    barrels,
    choppeira: {
      ...fallbackSiteConfig.choppeira,
      ...(data.choppeira ?? {}),
      price: asNumber(data.choppeira?.price, fallbackSiteConfig.choppeira.price),
      active: data.choppeira?.active !== false,
    },
  };
}

export function useSiteConfig() {
  const [config, setConfig] = useState<SiteConfig>(fallbackSiteConfig);

  useEffect(() => {
    let isMounted = true;

    async function loadConfig() {
      try {
        const response = await fetch(`/data/site-config.json?v=${Date.now()}`, {
          cache: "no-store",
        });

        if (!response.ok) return;

        const data = await response.json();

        if (isMounted) {
          setConfig(normalizeSiteConfig(data));
        }
      } catch {
        if (isMounted) {
          setConfig(fallbackSiteConfig);
        }
      }
    }

    loadConfig();

    return () => {
      isMounted = false;
    };
  }, []);

  return config;
}

export function formatCurrency(value: number) {
  const safeValue = Number.isFinite(value) ? value : 0;

  return safeValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function buildWhatsAppLink(number: string, message: string) {
  const cleanNumber = String(number || fallbackSiteConfig.whatsapp.number).replace(/\D/g, "");

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}
