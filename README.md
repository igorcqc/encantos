# Encantos Home&Decor — Landing Page

Página única (one-page), estilo linktree, extremamente interativa: vitrine
de produtos com cartões que viram ao toque, cursor customizado, parallax,
sparkles no CTA principal e mais — substituindo o link da bio do Instagram
(@encantosdecorr).

## Destaques interativos

- **Cartões de produto com flip 3D**: toque/clique em cada categoria (Cama,
  Mesa, Banho, Almofadas, Tapetes) para virar o cartão e revelar a
  descrição e as tags da linha
- **Spotlight**: brilho que segue o cursor sobre os cartões (desktop)
- **Cursor customizado** com anel que reage ao passar sobre links e cartões
- **Parallax** nas formas decorativas do Hero e na imagem de fundo
- **Nav de categorias** sticky com scroll-spy (destaca a categoria visível)
- **Toggle Loja Física / Online** animado
- **Botões magnéticos** nos CTAs principais
- **Sparkles** ao passar o mouse no CTA do Grupo VIP
- **Barra de progresso** de leitura no topo
- Tudo respeita `prefers-reduced-motion` e degrada bem em touch/mobile

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
