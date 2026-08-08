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

## Subindo o vídeo institucional

Veja `video/README.md` para o passo a passo. Resumo: suba o arquivo como

```
video/institucional.mp4
```

O `<video>` em `index.html` já aponta para esse caminho — não precisa
mexer em mais nada depois de subir o arquivo com esse nome.

Enquanto o vídeo real não estiver no ar, uma imagem de capa (placeholder)
aparece no lugar — marcada com o comentário `TROCAR PELA IMAGEM DE CAPA DO
VÍDEO` em `index.html`.

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
