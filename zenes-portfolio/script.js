// Atualiza o ano do rodapé automaticamente.
const yearElement = document.getElementById('year');
if (yearElement) yearElement.textContent = new Date().getFullYear();
