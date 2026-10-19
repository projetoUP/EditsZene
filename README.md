# ZENES® — Portfólio de Video Editor

Site estático responsivo para apresentar os trabalhos do Zenes, receber pedidos de orçamento pelo Instagram e divulgar recursos digitais na Payhip. A identidade visual usa preto, branco e tons neutros.

## Arquivos

- `index.html` — conteúdo e estrutura das seções.
- `styles.css` — identidade visual, layout e responsividade.
- `script.js` — atualiza o ano do rodapé e revela os players do TikTok quando estiverem prontos.
- `assets/favicon.svg` — ícone da aba do navegador.

## Destaques com reprodução no site

Os dois destaques usam o player oficial incorporado do TikTok, com tentativa de reprodução automática e repetição. O navegador pode impedir o autoplay com áudio; nesse caso, o visitante pode apertar play no próprio player.

Enquanto o player carrega, o site mostra uma capa de fallback em preto e branco. Se o player não funcionar ou for bloqueado, a capa permite abrir o vídeo original diretamente no TikTok. Os destaques correspondem aos vídeos enviados pelo proprietário.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie todos os arquivos e a pasta `assets` para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`, depois salve.
6. Abra o endereço exibido na seção Pages depois da publicação.

Não mova apenas o `index.html`: mantenha `styles.css`, `script.js` e a pasta `assets` junto dele para carregar o layout e o ícone corretamente.

## Personalização

- **Nome e textos:** edite os títulos e parágrafos em `index.html`.
- **Cores:** edite as variáveis no início de `styles.css`. A proposta usa preto, branco e tons de cinza.
- **Instagram, TikTok e Payhip:** os links estão nos botões e cartões do `index.html`.
- **Trocar os destaques:** altere os IDs nas URLs `https://www.tiktok.com/player/v1/` e os links de fallback nos dois cartões da seção `EM DESTAQUE`.
- **Recursos da loja:** os cards `CC Quality` e `Main Topaz` apontam para a loja Payhip do Zenes. Atualize os nomes no HTML se os produtos mudarem.

## Observações

- O site não exige servidor, login, banco de dados nem build.
- Os vídeos do TikTok e as fontes do Google dependem de conexão com a internet.
- O autoplay com som pode ser bloqueado pelo navegador. Os visitantes sempre podem iniciar a reprodução no próprio player.
- Nenhum preço, depoimento ou resultado de cliente foi inventado para o portfólio.
