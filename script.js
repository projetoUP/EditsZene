// Atualiza o ano do rodapé automaticamente.
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

// O TikTok envia uma mensagem quando o player embutido está pronto.
// Enquanto isso, o site mantém uma capa preta e branca com link de fallback,
// evitando áreas brancas caso o player não carregue ou seja bloqueado.
window.addEventListener('message', (event) => {
  if (!event.origin || !event.origin.endsWith('tiktok.com')) return;
  const message = event.data;
  if (!message || message['x-tiktok-player'] !== true) return;
  if (message.type !== 'onPlayerReady' && message.type !== 'onStateChange') return;

  document.querySelectorAll('.tiktok-player').forEach((player) => {
    if (player.contentWindow === event.source) {
      const frame = player.closest('[data-video-frame]');
      if (frame) frame.classList.add('is-ready');
    }
  });
});
