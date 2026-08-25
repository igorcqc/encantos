# Vídeo institucional

Arquivo atual: **`snapinsta-1786212534136.mp4`** (vertical, 9:16 — formato
Reels/Stories). O `<video>` em `index.html` já aponta para ele e o player
está ajustado em `style.css` (classe `.video-wrap--vertical`) para o
formato retrato.

## Para trocar por outro vídeo depois

1. Suba o novo arquivo aqui em `video/`
2. Atualize o `src` do `<source>` dentro de `.hero-video` em `index.html`
3. Se o novo vídeo for horizontal (16:9), remova a classe
   `video-wrap--vertical` do `<div class="video-wrap">` — o player volta
   ao formato paisagem automaticamente

## Recomendações rápidas

- **Formato:** MP4 (H.264 + AAC) — o mais compatível entre navegadores
- **Peso:** ideal manter abaixo de 15–20 MB para carregar rápido em 4G
  (se o arquivo original for maior, vale comprimir com HandBrake,
  CloudConvert ou similar antes de subir)
- **Poster/capa:** enquanto o vídeo não carrega, a página mostra uma
  imagem de capa (`poster`) — ela está marcada com o comentário
  `TROCAR PELA IMAGEM DE CAPA DO VÍDEO` em `index.html`, também para trocar
