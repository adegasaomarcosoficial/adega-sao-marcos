import { useEffect, useState } from "react";
import type { BarrelConfig, SiteConfig } from "@/lib/siteConfig";
import { fallbackSiteConfig, formatCurrency } from "@/lib/siteConfig";

type Status = {
  type: "idle" | "success" | "error" | "loading";
  message: string;
};

export default function Admin() {
  const [config, setConfig] = useState<SiteConfig>(fallbackSiteConfig);
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    async function loadConfig() {
      try {
        const response = await fetch(`/data/site-config.json?v=${Date.now()}`, {
          cache: "no-store",
        });

        if (!response.ok) return;

        const data = await response.json();
        setConfig(data);
      } catch {
        setStatus({
          type: "error",
          message: "Não foi possível carregar as configurações atuais.",
        });
      }
    }

    loadConfig();
  }, []);

  function updateWhatsApp(field: keyof SiteConfig["whatsapp"], value: string) {
    setConfig((current) => ({
      ...current,
      whatsapp: {
        ...current.whatsapp,
        [field]: value,
      },
    }));
  }

  function updatePromo(
    field: keyof SiteConfig["promo"],
    value: string | boolean
  ) {
    setConfig((current) => ({
      ...current,
      promo: {
        ...current.promo,
        [field]: value,
      },
    }));
  }

  function updateChoppeira(
    field: keyof SiteConfig["choppeira"],
    value: string | number | boolean
  ) {
    setConfig((current) => ({
      ...current,
      choppeira: {
        ...current.choppeira,
        [field]: value,
      },
    }));
  }

  function updateBarrel(
    index: number,
    field: keyof BarrelConfig,
    value: string | number | boolean
  ) {
    setConfig((current) => {
      const barrels = [...current.barrels];

      barrels[index] = {
        ...barrels[index],
        [field]: value,
      };

      return {
        ...current,
        barrels,
      };
    });
  }

  async function saveConfig() {
    if (!password.trim()) {
      setStatus({
        type: "error",
        message: "Digite a senha administrativa antes de salvar.",
      });
      return;
    }

    setStatus({
      type: "loading",
      message: "Salvando alterações...",
    });

    try {
      const response = await fetch("/.netlify/functions/update-config", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
          config,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result?.message || "Erro ao salvar.");
      }

      setStatus({
        type: "success",
        message:
          "Alterações salvas. O site pode levar alguns minutos para atualizar após o deploy.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Erro inesperado ao salvar alterações.",
      });
    }
  }

  return (
    <main className="min-h-screen bg-[#0d0a06] text-white px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 rounded-2xl border border-[#D4AF37]/30 bg-white/5 p-6 shadow-xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#D4AF37] mb-2">
            Painel Administrativo
          </p>

          <h1
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Adega São Marcos
          </h1>

          <p className="text-white/70">
            Edite preços, promoção, WhatsApp e texto da chopeira. Alterações
            maiores continuam com a OLEGARIO TECH.
          </p>
        </div>

        <section className="mb-6 rounded-2xl border border-white/10 bg-white p-5 text-[#333333]">
          <h2 className="text-xl font-bold mb-4 text-[#8B0000]">
            Senha para salvar
          </h2>

          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Digite a senha administrativa"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
          />
        </section>

        <section className="mb-6 rounded-2xl border border-white/10 bg-white p-5 text-[#333333]">
          <h2 className="text-xl font-bold mb-4 text-[#8B0000]">WhatsApp</h2>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold">
                Número com DDI e DDD
              </span>
              <input
                value={config.whatsapp.number}
                onChange={(event) =>
                  updateWhatsApp("number", event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold">
                Mensagem padrão
              </span>
              <input
                value={config.whatsapp.defaultMessage}
                onChange={(event) =>
                  updateWhatsApp("defaultMessage", event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
              />
            </label>
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-white/10 bg-white p-5 text-[#333333]">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-[#8B0000]">
              Promoção simples
            </h2>

            <label className="flex items-center gap-2 text-sm font-semibold">
              <input
                type="checkbox"
                checked={config.promo.active}
                onChange={(event) =>
                  updatePromo("active", event.target.checked)
                }
              />
              Exibir promoção no site
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold">Título</span>
              <input
                value={config.promo.title}
                onChange={(event) => updatePromo("title", event.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold">
                Texto do botão
              </span>
              <input
                value={config.promo.buttonText}
                onChange={(event) =>
                  updatePromo("buttonText", event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-1 block text-sm font-semibold">
                Texto da promoção
              </span>
              <textarea
                value={config.promo.text}
                onChange={(event) => updatePromo("text", event.target.value)}
                className="min-h-24 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
              />
            </label>
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-white/10 bg-white p-5 text-[#333333]">
          <h2 className="text-xl font-bold mb-4 text-[#8B0000]">
            Preços dos barris
          </h2>

          <div className="grid gap-4">
            {config.barrels.map((barrel, index) => {
              const total = barrel.liters * barrel.pricePerLiter;

              return (
                <div
                  key={`${barrel.size}-${index}`}
                  className="rounded-2xl border border-gray-200 bg-[#FAF8F2] p-4"
                >
                  <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-bold">{barrel.size}</h3>

                    <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={barrel.active}
                          onChange={(event) =>
                            updateBarrel(index, "active", event.target.checked)
                          }
                        />
                        Ativo
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={barrel.popular}
                          onChange={(event) =>
                            updateBarrel(index, "popular", event.target.checked)
                          }
                        />
                        Popular
                      </label>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <label className="block">
                      <span className="mb-1 block text-sm font-semibold">
                        Litros
                      </span>
                      <input
                        type="number"
                        value={barrel.liters}
                        onChange={(event) =>
                          updateBarrel(
                            index,
                            "liters",
                            Number(event.target.value)
                          )
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1 block text-sm font-semibold">
                        Preço por litro
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        value={barrel.pricePerLiter}
                        onChange={(event) =>
                          updateBarrel(
                            index,
                            "pricePerLiter",
                            Number(event.target.value)
                          )
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
                      />
                    </label>

                    <div className="rounded-xl bg-[#1a1a1a] p-4 text-white">
                      <p className="text-xs uppercase text-white/50">
                        Total do barril
                      </p>
                      <p className="text-2xl font-bold text-[#D4AF37]">
                        {formatCurrency(total)}
                      </p>
                    </div>

                    <label className="block md:col-span-3">
                      <span className="mb-1 block text-sm font-semibold">
                        Descrição
                      </span>
                      <input
                        value={barrel.description}
                        onChange={(event) =>
                          updateBarrel(index, "description", event.target.value)
                        }
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
                      />
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-6 rounded-2xl border border-white/10 bg-white p-5 text-[#333333]">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-[#8B0000]">
              Locação de chopeira
            </h2>

            <label className="flex items-center gap-2 text-sm font-semibold">
              <input
                type="checkbox"
                checked={config.choppeira.active}
                onChange={(event) =>
                  updateChoppeira("active", event.target.checked)
                }
              />
              Exibir seção
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-semibold">
                Valor da locação
              </span>
              <input
                type="number"
                step="0.01"
                value={config.choppeira.price}
                onChange={(event) =>
                  updateChoppeira("price", Number(event.target.value))
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold">
                Texto abaixo do preço
              </span>
              <input
                value={config.choppeira.text}
                onChange={(event) =>
                  updateChoppeira("text", event.target.value)
                }
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#8B0000]"
              />
            </label>
          </div>
        </section>

        {status.message && (
          <div
            className={`mb-6 rounded-2xl p-4 font-semibold ${
              status.type === "success"
                ? "bg-green-100 text-green-800"
                : status.type === "error"
                  ? "bg-red-100 text-red-800"
                  : "bg-yellow-100 text-yellow-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="button"
          onClick={saveConfig}
          disabled={status.type === "loading"}
          className="w-full rounded-2xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:bg-[#20BA58] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status.type === "loading" ? "Salvando..." : "Salvar alterações"}
        </button>
      </div>
    </main>
  );
}
