// Automatically updates the footer year.
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();

// TikTok sends a message when the embedded player is ready.
// Meanwhile, the site displays a black-and-white fallback cover with a link,
// preventing blank areas if the player fails to load or is blocked.
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
