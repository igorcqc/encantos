# Vídeo institucional

Suba aqui o arquivo do vídeo institucional com o nome:

```
institucional.mp4
```

Ou seja: o caminho final deve ser `video/institucional.mp4` na raiz do
projeto, exatamente como referenciado em `index.html`.

## Recomendações rápidas

- **Formato:** MP4 (H.264 + AAC) — o mais compatível entre navegadores
- **Peso:** ideal manter abaixo de 15–20 MB para carregar rápido em 4G
  (se o arquivo original for maior, vale comprimir com HandBrake,
  CloudConvert ou similar antes de subir)
- **Proporção:** 16:9 (paisagem) funciona melhor no formato atual do hero;
  se o vídeo for vertical (9:16 / stories), me avise para eu ajustar o
  CSS do player
- **Poster/capa:** enquanto o vídeo não carrega, a página mostra uma
  imagem de capa (`poster`) — ela está marcada com o comentário
  `TROCAR PELA IMAGEM DE CAPA DO VÍDEO` em `index.html`, também para trocar

Depois de subir o arquivo com esse nome exato, não precisa mexer em mais
nada — o `<video>` em `index.html` já aponta para `video/institucional.mp4`.
