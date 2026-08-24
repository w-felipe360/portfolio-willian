# portfolio-willian

Portfólio pessoal de Willian Felipe Braz. Single page, bilíngue (PT/EN), tema claro/escuro,
sem backend. Build estático servido por Nginx em VPS própria.

## Stack

| Camada | Escolha |
|---|---|
| Build | Vite 6 |
| UI | React 19 + TypeScript (strict) |
| Estilo | Tailwind CSS 4 (tokens em `src/styles/global.css`) |
| Fontes | Inter + JetBrains Mono self-hosted via Fontsource |
| Ícones | SVG inline em `src/components/icons.tsx` (zero dependência externa) |
| Testes | Vitest |
| Deploy | Docker multi-stage → Nginx alpine |

Nada de CDN em runtime: fonte, ícone e imagem saem do próprio domínio.

## Comandos

```bash
npm install
npm run dev       # http://localhost:5173
npm test          # vitest
npm run build     # tsc -b && vite build → dist/
npm run preview   # serve o dist local
```

## Onde editar o conteúdo

Todo o texto do site vive em **`src/content/profile.ts`**, tipado e com PT/EN lado a lado.
Adicionar um emprego ou projeto = adicionar um objeto no array. Os textos de interface
(labels, navegação, acessibilidade) ficam em `src/i18n/ui.ts`.

Os testes em `src/content/profile.test.ts` falham se algum texto ficar sem tradução,
se um projeto não tiver link nem marca de código privado, ou se houver nome duplicado.

## Estrutura

```
src/
├── assets/willian.webp         → foto do hero (recorte com alpha; fundo vem do CSS)
├── components/                 → Hero, About, Stack, Experience, Projects, Contact, Header, Footer
├── content/profile.ts          → ★ conteúdo (PT/EN) e tipos
├── hooks/useActiveSection.ts   → destaque do link ativo via IntersectionObserver
├── i18n/                       → provider de idioma + dicionário de UI
├── styles/global.css           → tokens de cor/tipografia e utilitários próprios
└── theme/ThemeProvider.tsx     → dark/light com persistência e fallback no sistema
deploy/
├── nginx.conf                  → config que vai dentro do container
└── portfolio.host.nginx.conf   → vhost do host (proxy + TLS)
```

## Antes de publicar

- [ ] Trocar `willianbraz.dev` pelo domínio real em `index.html` (canonical, `og:url`, `og:image`).
- [ ] Confirmar a cidade em `profile.location` — o CV diz Rio de Janeiro, o README do GitHub dizia Recife.
- [ ] Substituir `public/og.jpg` por uma imagem 1200×630 (hoje é a foto de perfil recortada).
- [ ] Apontar `profile.projects[].repo` para os repositórios específicos, não para o perfil do GitHub.
- [ ] Revisar `public/willian-braz-cv-pt.pdf` e `public/willian-braz-cv-en.pdf` (o botão do hero segue o idioma ativo).

Deploy: ver [DEPLOY.md](./DEPLOY.md).
