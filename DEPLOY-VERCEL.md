# Deploy na Vercel

Rota atual do projeto: build estático hospedado na Vercel. A VPS
(`DEPLOY.md`, container Nginx) segue válida e pode ser retomada depois — os
dois caminhos servem o mesmo `dist/`, sem código condicional.

## O que a Vercel usa

Tudo declarado em `vercel.json`, nada configurado só no painel:

| Item | Valor |
|---|---|
| Framework | `vite` |
| Install | `npm ci` |
| Build | `npm run build` (roda `tsc -b` antes do bundle) |
| Output | `dist` |
| Headers | mesmos 4 de segurança do Nginx + cache por caminho |

Cache espelha a config da VPS: `/assets/*` (nome com hash) por 1 ano
`immutable`, `og.jpg` e `favicon.svg` por 30 dias, os dois PDFs por 1 dia
(currículo muda mais que imagem) e `/` sem cache para o deploy novo aparecer na
hora. As regras usam caminho explícito em vez de regex por extensão — na Vercel
o `source` não é PCRE puro, e caminho literal não dá margem a erro.

Não existe rewrite de SPA porque a navegação é por âncora (`#about`, `#stack`).
Se um dia entrar rota de verdade, aí sim precisa de `rewrites`.

## Opção A — pelo Git (recomendado)

1. Suba o repo para o GitHub.
2. Na Vercel: **Add New → Project → Import** o repositório.
3. Não altere nada na tela de build; o `vercel.json` manda.
4. **Deploy**.

Cada push na branch principal vira produção; cada branch/PR ganha uma preview
URL própria.

## Opção B — pela CLI

```bash
npm i -g vercel
vercel login
vercel          # cria o projeto e publica em preview
vercel --prod   # promove para produção
```

## Depois do primeiro deploy

A URL sai como `portfolio-willian-<hash>.vercel.app`. Ajuste em `index.html`:

- `<link rel="canonical">`
- `<meta property="og:url">`
- `<meta property="og:image">`

Hoje as três apontam para `https://willianbraz.dev/`, que ainda não existe —
deixar assim faz o Google indexar um endereço morto e o preview do link quebrar
no WhatsApp/LinkedIn.

## Domínio próprio, quando escolher

1. Vercel → Project → **Settings → Domains → Add**.
2. No registrador, crie o `CNAME` que a Vercel mostrar (ou os nameservers dela).
3. TLS é automático, sem certbot.
4. Volte no `index.html` e troque as três metas para o domínio final.

## Verificação pós-deploy

```bash
curl -I https://<sua-url>/                        # 200 + os 4 headers de segurança
curl -I https://<sua-url>/willian-braz-cv-pt.pdf  # 200, content-type application/pdf
curl -I https://<sua-url>/willian-braz-cv-en.pdf  # 200
curl -I https://<sua-url>/og.jpg                  # 200
```

No browser: alternar o idioma para EN e conferir que o botão de CV baixa o
`-en.pdf`; em PT, o `-pt.pdf`.

## Limites que valem saber

- Plano Hobby é para uso não-comercial. Portfólio pessoal se encaixa.
- Sem servidor, sem cron, sem env var: o site é 100% estático.
- `deploy/` e `Dockerfile` ficam no repo e são ignorados pela Vercel — não
  atrapalham e mantêm a VPS como plano B.
