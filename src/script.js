const input = document.querySelector('input');
const games = document.querySelectorAll('#games img');
function NatGeoCloaker() { // Used on line 26
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
  if (event.keyCode === 119 ) { // F8 Detector 
    window.open("https://www.google.com"); // open new google window
    NatGeoCloaker(); // Using function on line 3
  }
});

try {
  console.log("Website started without an error.") // saying if the website started
}
catch(err) { // catching error
  console.log("Website started with an error.") // saying if there was an error
} // Debugging

document.addEventListener("DOMContentLoaded", function() { // Tab cloaking (taking input)
  const tabForm = document.getElementById('tabForm');
  const faviconInput = document.getElementById('favicon');
  const titleInput = document.getElementById('title');

  tabForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const faviconUrl = faviconInput.value;
      const pageTitle = titleInput.value;

      document.querySelector('link[rel="icon"]').href = faviconUrl;
      document.title = pageTitle;

      localStorage.setItem('customFavicon', faviconUrl);
      localStorage.setItem('customTitle', pageTitle);
  });

  const storedFavicon = localStorage.getItem('customFavicon');
  const storedTitle = localStorage.getItem('customTitle');

  if (storedFavicon && storedTitle) {
      document.querySelector('link[rel="icon"]').href = storedFavicon;
      document.title = storedTitle;
  }
});

// Tab cloaking if stored
document.addEventListener("DOMContentLoaded", function() {
  const storedFavicon = localStorage.getItem('customFavicon');
  const storedTitle = localStorage.getItem('customTitle');

  if (storedFavicon && storedTitle) {
      document.querySelector('link[rel="icon"]').href = storedFavicon;
      document.title = storedTitle;
  }
});

// Add in MOTD
document.addEventListener("DOMContentLoaded", function() {
  const quoteText = document.querySelector(".MOTD")
  var motds = Array('"Easy enough for a toddler, not easy for a sys admin"', '"Goodbye 3kh0 ):"', '"Schools are literally 1984" - Everyone', 'Imagine not blocking this', 'This is a random MOTD', '"Be responsible" -No one', '"I cant think of any more" -DBP', '"Please contribute MOTDs" - DBP');

  var randomMOTD = motds[Math.floor(Math.random() * motds.length)];
  quoteText.innerHTML = randomMOTD
});