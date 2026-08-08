# Encantos Home&Decor — Landing Page

Página única (one-page), objetiva por design: vídeo institucional no topo,
botões de link logo abaixo e direto para as dúvidas frequentes. Pensada
para funcionar como página "coringa" — link da bio, anúncios, Google Meu
Negócio — sem depender de contexto extra.

## Estrutura

1. **Vídeo institucional** — hero com player nativo (controles do próprio
   navegador, sem autoplay forçado)
2. **Links principais** — Grupo VIP, Loja física, Fale conosco, Instagram
3. **Dúvidas frequentes** — acordeão nativo (`<details>`)
4. **Fechamento** — CTA final, redes sociais e assinatura

## Vídeo institucional

O vídeo já está em `video/snapinsta-1786212534136.mp4` (vertical, 9:16 —
formato Reels/Stories) e o player em `index.html`/`style.css` está
ajustado pro formato retrato. Veja `video/README.md` para trocar por
outro arquivo depois.

A imagem de capa (`poster`) que aparece antes do play está marcada com o
comentário `TROCAR PELA IMAGEM DE CAPA DO VÍDEO` em `index.html`.

## Antes de publicar: preencher os placeholders

Busque por estes marcadores em `index.html` e substitua pelos links reais:

| Placeholder | Onde usar |
|---|---|
| `[LINK_GRUPO_WHATSAPP]` | Convite do grupo VIP (`chat.whatsapp.com/...`) |
| `[LINK_WHATSAPP_DIRETO]` | WhatsApp de atendimento (`wa.me/55XXXXXXXXXXX`) |
| `[LINK_GOOGLE_MAPS]` | Localização da loja física em Macaé/RJ |
| `[LINK_INSTAGRAM]` | `https://www.instagram.com/encantosdecorr/` |

## Atenção: conteúdo de exemplo

As respostas da seção **Dúvidas frequentes** foram escritas como sugestão
de tom de voz — revise/ajuste com a cliente antes de publicar (prazos de
entrega, política de troca etc. podem variar).

## Direção visual

Sóbria e editorial: tons terracota/creme, tipografia serif (Fraunces) nos
títulos, ícones de linha finos, textura de papel muito sutil no fundo.
Paleta centralizada em variáveis CSS no topo de `style.css` (bloco
`:root`) — fácil de ajustar quando a identidade final estiver fechada.

## Micro-interações

- Cursor customizado discreto (desktop)
- Botões com leve efeito magnético
- Fade-in suave ao rolar a página
- Barra de progresso de leitura no topo
- Tudo respeita `prefers-reduced-motion` e degrada bem em touch/mobile

## Deploy na Vercel

```bash
npm i -g vercel
vercel
```

Ou conecte o repositório diretamente pelo painel da Vercel — não é
necessário nenhum comando de build.
