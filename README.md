# NUVA — Guardiões da Luz

Plataforma de gamificação que converte ações sustentáveis em crédito na conta de energia. O usuário recebe missões diárias, registra a ação em vídeo, uma inteligência artificial valida a ação e o usuário acumula SoulCoins.

**100 SoulCoins = R$1,00 de desconto na fatura.**

Projeto desenvolvido para a empresa SoulUp, na Sprint 03 de 2026 da FIAP, turma 1TDSPV, disciplina Front-End Design Engineering.

---

## Tecnologias utilizadas

| Tecnologia | Para que serve no projeto |
|---|---|
| React 18 | Construção da interface em componentes |
| Vite 5 | Servidor de desenvolvimento e build |
| TypeScript 5 | Tipagem dos componentes, props e dados do formulário |
| Tailwind CSS 3 | Toda a estilização, sem CSS externo |
| React Router DOM 6 | Navegação SPA, com rotas estáticas e uma rota dinâmica |
| React Hook Form 7 | Validação do formulário de contato |

---

## Estrutura de pastas

```
nuva-react/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── public/
│   └── avatar.svg
└── src/
    ├── components/
    │   ├── Header/Header.tsx
    │   ├── Footer/Footer.tsx
    │   ├── Layout/Layout.tsx
    │   ├── Button/Button.tsx
    │   ├── Card/Card.tsx
    │   ├── MissaoCard/MissaoCard.tsx
    │   ├── ModalGravacao/ModalGravacao.tsx
    │   ├── IntegranteCard/IntegranteCard.tsx
    │   └── FaqItem/FaqItem.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── Sobre.tsx
    │   ├── Jogo.tsx
    │   ├── MissaoDetalhe.tsx
    │   ├── Integrantes.tsx
    │   ├── Faq.tsx
    │   ├── Contato.tsx
    │   └── NotFound.tsx
    ├── data/
    │   ├── missoes.ts
    │   ├── ligas.ts
    │   └── integrantes.ts
    ├── types/index.ts
    ├── App.tsx
    ├── main.tsx
    └── index.css
```

---

## Rotas

| Rota | Página | Observação |
|---|---|---|
| `/` | Home | Hero e "Como funciona" |
| `/sobre` | Sobre | Problema, solução, diferenciais e inovação |
| `/jogo` | Jogo | Protótipo: saldo, colocação, missões, gravação e liga |
| `/missoes/:id` | Detalhe da missão | Rota dinâmica com `useParams` e `useNavigate` |
| `/integrantes` | Integrantes | Equipe do grupo |
| `/faq` | FAQ | Perguntas em formato de acordeon |
| `/contato` | Contato | Formulário com React Hook Form |
| `*` | 404 | Página para rota inexistente |

---

## A página Jogo

É o protótipo da solução. Nesta sprint nada é enviado para servidor e a câmera não é acessada de verdade, a interface simula o fluxo completo:

1. **Painel do jogador** com saldo em SoulCoins, valor equivalente em reais, colocação na liga e progresso das missões do dia.
2. **Missões do dia** em cards. O botão "Gravar vídeo" abre o modal de gravação.
3. **Modal de gravação** com quatro etapas: pronto, gravando com contador e indicador REC, IA analisando, missão validada.
4. **Liga da semana** com ranking. A linha "Você" sobe ou desce conforme o saldo, e a colocação no painel é recalculada na hora.

O progresso fica salvo no `localStorage`, então não se perde ao trocar de página.

---

## Requisitos técnicos e onde eles estão no código

| Requisito | Arquivo |
|---|---|
| Rotas estáticas | `src/App.tsx` |
| Rota dinâmica com parâmetro | `src/pages/MissaoDetalhe.tsx` |
| `useParams` e `useNavigate` | `src/pages/MissaoDetalhe.tsx` |
| `useState` (1) menu mobile | `src/components/Header/Header.tsx` |
| `useState` (2) missões concluídas e modal | `src/pages/Jogo.tsx` |
| `useState` (3) acordeon do FAQ | `src/components/FaqItem/FaqItem.tsx` |
| `useEffect` recalculando SoulCoins | `src/pages/Jogo.tsx` |
| `useEffect` nas etapas da gravação | `src/components/ModalGravacao/ModalGravacao.tsx` |
| Props tipadas | `src/components/MissaoCard/MissaoCard.tsx` |
| React Hook Form com validação | `src/pages/Contato.tsx` |
| Componentes reutilizáveis | `Header`, `Footer`, `Card`, `Button` |
| Responsividade 480 / 768 / 992 | `tailwind.config.js` |

---

## Identidade visual

| Cor | Hex | Uso |
|---|---|---|
| Azul escuro | `#0D1B3E` | Header, footer, hero e títulos |
| Azul | `#2D6BE4` | Botões, links e bordas |
| Teal | `#00B4A6` | Destaques, SoulCoins e sucesso |
| Fundo | `#F4F7FF` | Fundo das páginas |

Fontes: Poppins nos títulos, Inter no corpo do texto.

Ícones usados na interface: ⚡ (SoulCoins), ☰ e ✕ (menu mobile), 🎥 (gravar vídeo), 🤖 (validação por IA), ✅ e ✓ (missão validada), 🥇 🥈 🥉 (pódio da liga), + e − (acordeon do FAQ).

---

## Como usar

Você precisa do Node.js 18 ou superior instalado.

```bash
# 1. clonar o repositório
git clone https://github.com/SEU-USUARIO/nuva-guardioes-da-luz.git

# 2. entrar na pasta
cd nuva-guardioes-da-luz

# 3. instalar as dependências (isso gera o package-lock.json)
npm install

# 4. rodar em modo de desenvolvimento
npm run dev
```

O projeto abre em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

**Repositório:** https://github.com/SEU-USUARIO/nuva-guardioes-da-luz
**Vídeo de apresentação (YouTube, até 3 minutos):** https://youtube.com/COLOQUE-O-LINK-AQUI

---

## Autores

Turma 1TDSPV — FIAP

| Foto | Nome | RM | GitHub | LinkedIn |
|---|---|---|---|---|
| <img src="https://github.com/studdw.png" width="60" /> | Lucas Kaftan | 571302 | [studdw](https://github.com/studdw) | [LinkedIn](https://www.linkedin.com/in/lucas-pasturuti-354523273/) |
| <img src="https://github.com/LucasCabral0603.png" width="60" /> | Lucas Luque Cabral | 573347 | [LucasCabral0603](https://github.com/LucasCabral0603) | [LinkedIn](https://www.linkedin.com/in/lucas-luque-cabral-660940350/) |
| <img src="https://github.com/IuRuas.png" width="60" /> | Matheus Iumatti | 571047 | [IuRuas](https://github.com/IuRuas) | [LinkedIn](https://www.linkedin.com/in/matheus-iumatti-ruas-6923352bb/) |
| <img src="https://github.com/ViniEsposito-dev.png" width="60" /> | Vinicius Silveira Espósito | 571844 | [ViniEsposito-dev](https://github.com/ViniEsposito-dev) | [LinkedIn](https://www.linkedin.com/in/vinicius-silveira-esposito-107a2a25a/) |
| (foto a definir) | Joao Carlos | a definir | a definir | a definir |

---

## Contato

Dúvidas sobre o projeto podem ser enviadas pela página de Contato do site ou pelo GitHub de qualquer integrante listado acima.
