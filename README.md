# Filipe Portfolio

Site de portfólio pessoal desenvolvido com React + Vite, com seções de apresentação, experiência, projetos e contato.

## Objetivo do projeto

Este repositório contém o código-fonte de um site para apresentar:

- Perfil profissional e acadêmico
- Principais áreas de atuação e competências
- Projetos em destaque com links para GitHub
- Canal de contato direto

O projeto também inclui um servidor Express simples para servir os arquivos estáticos em cenários fora do Vercel.

## Stack tecnológica

### Frontend

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Wouter (roteamento)
- Radix UI (componentes base)
- Lucide React (ícones)
- Sonner (toasts)

### Backend/Servidor de arquivos estáticos

- Node.js
- Express
- esbuild (bundle do servidor)

## Estrutura principal

- client/
  - src/
    - pages/
      - Home.tsx: página principal
      - NotFound.tsx: página 404
    - components/
      - Hero.tsx: seção de abertura
      - About.tsx: seção sobre perfil e competências
      - Projects.tsx: seção de projetos
      - Contact.tsx: seção de contato e formulário
      - Map.tsx: integração com Google Maps via proxy
      - ui/: biblioteca de componentes de interface
    - contexts/
      - ThemeContext.tsx: contexto de tema
    - App.tsx: roteamento e providers globais
    - main.tsx: bootstrap da aplicação React
- server/
  - index.ts: servidor Express para servir build estático
- shared/
  - const.ts: constantes compartilhadas
- vite.config.ts: configuração do Vite
- vercel.json: configuração de deploy para Vercel

## Como executar localmente

### Pré-requisitos

- Node.js 20+
- pnpm 10+

### Instalação

1. Instalar dependências

pnpm install

2. Rodar em desenvolvimento

pnpm dev

A aplicação ficará disponível no host configurado pelo Vite (porta padrão do projeto: 3000 no dev server).

## Scripts disponíveis

- pnpm dev: inicia ambiente de desenvolvimento (Vite)
- pnpm build: gera build de produção do frontend e bundle do servidor
- pnpm start: inicia servidor Node com os arquivos compilados
- pnpm preview: executa preview do build do Vite
- pnpm check: validação TypeScript sem emitir arquivos
- pnpm format: formata o código com Prettier

## Variáveis de ambiente

As variáveis abaixo são lidas pelo frontend (prefixo VITE\_):

- VITE_OAUTH_PORTAL_URL
- VITE_APP_ID
- VITE_FRONTEND_FORGE_API_KEY
- VITE_FRONTEND_FORGE_API_URL (opcional; há fallback no código)
- VITE_ANALYTICS_ENDPOINT
- VITE_ANALYTICS_WEBSITE_ID

Se alguma variável obrigatória estiver ausente no ambiente de produção, o comportamento pode variar entre falha funcional parcial e tela sem conteúdo útil em algumas seções.

## Build e execução em produção (Node)

Fluxo para hospedar com servidor próprio:

1. Gerar build completo

pnpm build

2. Subir servidor

pnpm start

Nesse fluxo:

- O frontend é gerado em dist/public
- O servidor é gerado em dist/index.js
- O Express serve index.html para qualquer rota, suportando SPA

## Deploy no Vercel

Este repositório está configurado para deploy estático no Vercel via vercel.json:

- installCommand: pnpm install --frozen-lockfile
- buildCommand: pnpm vite build
- outputDirectory: dist/public
- rewrite global para /index.html

Isso garante compatibilidade com roteamento client-side da SPA.

## Diagnóstico de erro comum no Vercel

Quando o deploy "sobe" mas o site não carrega corretamente, os problemas mais comuns são:

1. Diretório de saída incorreto

- O Vercel precisa apontar para dist/public (não para dist).

2. Falta de rewrite para SPA

- Rotas internas precisam redirecionar para /index.html.

3. Variáveis de ambiente ausentes

- Verificar todas as VITE\_ no painel do projeto no Vercel.

4. Comando de build incompatível com o alvo

- Para deploy estático no Vercel, o build recomendado neste projeto é pnpm vite build.

## Observações sobre o servidor (server/index.ts)

O trecho compilado com algo como:

const port = process.env.PORT || 3e3;

é equivalente a usar 3000 (notação científica em JavaScript) e não representa erro por si só. Isso é apenas resultado de transformação/minificação do build.

## Melhorias futuras sugeridas

- Criar arquivo .env.example com todas as variáveis VITE\_
- Adicionar testes de componentes críticos (Home, Projects, Contact)
- Adicionar verificação de variáveis obrigatórias no startup do app
- Configurar pipeline de CI para lint, check e build
