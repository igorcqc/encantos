# Encantos Home&Decor — Landing Page

Página única (one-page) no formato "cartão de perfil" (estilo linktree
premium): foto grande + pilha de links principais numa coluna, e do outro
lado quem somos, categorias de produto, dúvidas frequentes e estatísticas —
substituindo o link da bio do Instagram (@encantosdecorr).

## Estrutura

1. **Cartão da loja** (coluna fixa/sticky no desktop): foto, nome, pilha de
   4 links principais (Grupo VIP, Loja física, Fale conosco, Instagram) e
   mini estatísticas
2. **Quote** de abertura + foto grande de ambiente
3. **Quem somos** — texto sobre a loja + CTA para as categorias
4. **Nossas categorias** — cartões com flip 3D (Cama, Mesa, Banho,
   Almofadas, Tapetes)
5. **Dúvidas frequentes** — acordeão nativo (`<details>`)
6. **Faixa de estatísticas**
7. **Faixa de fechamento** — CTA final, redes sociais e assinatura

## Destaques interativos

- **Cartões de produto com flip 3D**: toque/clique em cada categoria para
  virar o cartão e revelar a descrição e as tags da linha
- **Spotlight**: brilho que segue o cursor sobre os cartões (desktop)
- **Cursor customizado** com anel que reage ao passar sobre links e cartões
- **Botões magnéticos** nos links e CTAs principais
- **Sparkles** ao passar o mouse no link do Grupo VIP
- **Contadores animados** nas estatísticas (sobem ao entrar na tela)
- **Barra de progresso** de leitura no topo
- Tudo respeita `prefers-reduced-motion` e degrada bem em touch/mobile

## Atenção: conteúdo de exemplo

As respostas da seção **Dúvidas frequentes** foram escritas como sugestão
de tom de voz — revise/ajuste com a cliente antes de publicar (prazos de
entrega, política de troca etc. podem variar).

## Stack

HTML, CSS e JavaScript puro — sem build, sem framework. Pronta para publicar
direto na Vercel (ou qualquer host de arquivos estáticos).

## Estrutura

- `index.html` — marcação da página
- `style.css` — estilos e variáveis de marca (cores, fontes)
- `script.js` — fade-in no scroll, parallax leve no hero, ano dinâmico no rodapé
- `vercel.json` — configuração mínima de deploy

## Antes de publicar: preencher os placeholders

Busque por estes marcadores em `index.html` e substitua pelos links reais:

| Placeholder | Onde usar |
|---|---|
| `[LINK_GRUPO_WHATSAPP]` | Convite do grupo VIP (`chat.whatsapp.com/...`) |
| `[LINK_WHATSAPP_DIRETO]` | WhatsApp de atendimento (`wa.me/55XXXXXXXXXXX`) |
| `[LINK_GOOGLE_MAPS]` | Localização da loja física em Macaé/RJ |
| `[LINK_INSTAGRAM]` | `https://www.instagram.com/encantosdecorr/` |

## Trocar as fotos dos produtos

As 5 imagens da seção "Vitrine de produtos" são placeholders de banco de
imagens (Unsplash), marcados no código com o comentário:

```html
<!-- TROCAR PELA FOTO REAL DO PRODUTO -->
```

Basta trocar o `src` de cada `<img>` pela foto real do produto quando
estiver disponível. A imagem de fundo do Hero também está marcada da mesma
forma.

## Paleta de cores

As cores estão centralizadas em variáveis CSS no topo de `style.css`
(bloco `:root`), extraídas provisoriamente do logo (terracota + creme).
Basta editar os valores lá para atualizar a identidade visual em toda a
página de uma vez.

## Deploy na Vercel

```bash
npm i -g vercel
vercel
```

Ou conecte o repositório diretamente pelo painel da Vercel — não é
necessário nenhum comando de build.
