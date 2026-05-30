const CONFIG_PATH = "client/public/data/site-config.json";

function jsonResponse(statusCode, data) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
}

function validateConfig(config) {
  if (!config || typeof config !== "object") {
    return "Configuração inválida.";
  }

  if (!config.whatsapp?.number) {
    return "Número do WhatsApp é obrigatório.";
  }

  if (!Array.isArray(config.barrels)) {
    return "Lista de barris inválida.";
  }

  if (!config.choppeira || typeof config.choppeira !== "object") {
    return "Dados da chopeira inválidos.";
  }

  return null;
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return jsonResponse(200, { ok: true });
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, {
      message: "Método não permitido.",
    });
  }

  const {
    GITHUB_TOKEN,
    GITHUB_OWNER,
    GITHUB_REPO,
    GITHUB_BRANCH,
    ADMIN_PASSWORD,
  } = process.env;

  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO || !ADMIN_PASSWORD) {
    return jsonResponse(500, {
      message:
        "Variáveis de ambiente ausentes no Netlify. Configure GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO, GITHUB_BRANCH e ADMIN_PASSWORD.",
    });
  }

  let body;

  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return jsonResponse(400, {
      message: "Corpo da requisição inválido.",
    });
  }

  if (body.password !== ADMIN_PASSWORD) {
    return jsonResponse(401, {
      message: "Senha administrativa incorreta.",
    });
  }

  const configError = validateConfig(body.config);

  if (configError) {
    return jsonResponse(400, {
      message: configError,
    });
  }

  const branch = GITHUB_BRANCH || "main";
  const repoFullName = `${GITHUB_OWNER}/${GITHUB_REPO}`;
  const apiBase = `https://api.github.com/repos/${repoFullName}/contents/${CONFIG_PATH}`;

  try {
    const currentFileResponse = await fetch(
      `${apiBase}?ref=${encodeURIComponent(branch)}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    if (!currentFileResponse.ok) {
      const errorText = await currentFileResponse.text();

      return jsonResponse(500, {
        message: "Não foi possível localizar o arquivo de configuração no GitHub.",
        detail: errorText,
      });
    }

    const currentFile = await currentFileResponse.json();

    const content = Buffer.from(
      `${JSON.stringify(body.config, null, 2)}\n`,
      "utf8"
    ).toString("base64");

    const updateResponse = await fetch(apiBase, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "Content-Type": "application/json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      body: JSON.stringify({
        message: "chore: update site config from admin panel",
        content,
        sha: currentFile.sha,
        branch,
      }),
    });

    if (!updateResponse.ok) {
      const errorText = await updateResponse.text();

      return jsonResponse(500, {
        message: "Erro ao salvar alteração no GitHub.",
        detail: errorText,
      });
    }

    return jsonResponse(200, {
      message: "Configuração salva com sucesso.",
    });
  } catch (error) {
    return jsonResponse(500, {
      message: "Erro inesperado ao salvar configuração.",
      detail: error instanceof Error ? error.message : String(error),
    });
  }
}
