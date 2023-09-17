const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');
function setNationalGeographicFavicon() {
  var linkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
  linkElement.type = 'image/x-icon';
  linkElement.rel = 'shortcut icon';
  linkElement.href = 'https://www.nationalgeographic.com/favicon.ico';

  var head = document.getElementsByTagName('head')[0];
  head.appendChild(linkElement);

  document.title = 'National Geographic';
}

input.addEventListener('input', () => {
  const searchTerm = input.value.toLowerCase();
  games.forEach(game => {
    if (game.alt.toLowerCase().includes(searchTerm)) {
      game.style.display = 'block';
    } else {
      game.style.display = 'none';
    }
  });
});

document.addEventListener('keyup', (event) => {
  if (event.keyCode === 119) {
    window.open("https://www.google.com");
    setNationalGeographicFavicon();
  }
});
