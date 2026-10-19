# ZENES® — Portfólio de Video Editor

Site estático responsivo para apresentar os trabalhos do Zenes, receber pedidos de orçamento pelo Instagram e divulgar recursos digitais na Payhip.

## Arquivos

- `index.html` — conteúdo e estrutura das seções.
- `styles.css` — identidade visual, layout e responsividade.
- `script.js` — atualiza o ano do rodapé.
- `assets/favicon.svg` — ícone da aba do navegador.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie os arquivos e a pasta `assets` para a raiz do repositório.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)`, depois salve.
6. Aguarde o GitHub concluir a publicação e abra o endereço exibido na seção Pages.

Não mova apenas o `index.html`: mantenha `styles.css`, `script.js` e a pasta `assets` junto dele para carregar o layout e o ícone corretamente.

## Vídeos em destaque

Os dois vídeos são incorporados pelo player do TikTok. Se a plataforma bloquear a incorporação no navegador, os links **VER NO TIKTOK** continuam disponíveis em cada card.

Para trocar os destaques, edite no `index.html` os IDs dos vídeos nos endereços `/player/v1/ID_DO_VIDEO` e os respectivos links externos.

## Personalização

- **Nome e textos:** edite os títulos e parágrafos em `index.html`.
- **Cores:** ajuste as variáveis no início de `styles.css`; o verde de destaque está em `--lime`.
- **Instagram, TikTok e Payhip:** os links estão nos botões e cartões do `index.html`.
- **Recursos da loja:** os cards `CC Quality` e `Main Topaz` apontam para a loja Payhip de Zenes. Os nomes podem ser atualizados no HTML caso os produtos mudem.

## Observações

- O site não exige servidor, login, banco de dados nem build.
- Os vídeos do TikTok e as fontes do Google dependem de conexão com a internet.
- Nenhum preço, depoimento ou resultado de cliente foi inventado para o portfólio.
