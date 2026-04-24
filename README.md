# Filipe Pessoa · Portfólio

Site de portfólio pessoal desenvolvido com React + Vite. Design **Industrial Precision** com paleta Triple Craft — Blueprint Blue (Engenharia), Terminal Green (Programação) e Academic Burgundy (Pesquisa).

## Design System

Fontes: **Space Mono** (display/mono) + **IBM Plex Sans** (corpo)

Paleta de cores:

| Token | Valor | Uso |
|---|---|---|
| `--fp-blueprint` | `#1e4e8c` | Engenharia de Produção (primário) |
| `--fp-terminal` | `#00c853` | Programação (secundário) |
| `--fp-burgundy` | `#8b1e3f` | Pesquisa (destaque) |
| `--fp-charcoal` | `#1a1a1a` | Texto / superfície escura |

## Stack tecnológica

### Frontend

- React 19 + TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion + CSS keyframes (gear, scroll-parallax, float)
- Lucide React (ícones)
- Wouter (roteamento)
- Radix UI / shadcn-ui (primitivos)

### Backend

- Node.js + Express (serve o build estático fora do Vercel)

## Estrutura do projeto

```
client/
  public/assets/        # Imagens, vídeo hero, SVGs de marca
  src/
    pages/Home.tsx      # Layout principal + Nav + Footer
    components/
      Hero.tsx          # Seção hero com scroll-parallax e badges flutuantes
      About.tsx         # Sobre, experiência e stack técnica
      Projects.tsx      # Grid de projetos/pesquisa
      Contact.tsx       # Formulário de contato (seção escura)
      portfolio-kit.tsx # Componentes e hooks reutilizáveis do design system
    index.css           # Tokens CSS do design system + Tailwind
server/
  index.ts              # Express para servir SPA em produção
shared/
  const.ts              # Constantes compartilhadas
vite.config.ts
vercel.json
```

## Como executar localmente

Pré-requisitos: Node.js 20+ e pnpm 10+

```bash
pnpm install
pnpm dev
```

A aplicação sobe na porta 3000 (ou a próxima disponível).

## Scripts

| Comando | Ação |
|---|---|
| `pnpm dev` | Servidor de desenvolvimento (Vite) |
| `pnpm build` | Build de produção (frontend + bundle do servidor) |
| `pnpm start` | Inicia servidor Node com o build |
| `pnpm preview` | Preview do build do Vite |
| `pnpm check` | Validação TypeScript |

## Deploy

### Vercel (recomendado)

Configurado via `vercel.json`:
- `buildCommand`: `pnpm vite build`
- `outputDirectory`: `dist/public`
- Rewrite global para `/index.html` (suporte SPA)

### Node próprio

```bash
pnpm build
pnpm start
```

## Assets

Os assets de marca ficam em `client/public/assets/`:

- `filipe-portrait.jpg` — foto do nav (avatar circular)
- `filipe-secondary.jpg` — foto do hero (retrato 3:4)
- `hero-video.mp4` — vídeo de fundo do hero
- `gear.svg` — ícone de engrenagem de marca
- `fp-monogram.svg` — monograma FP
