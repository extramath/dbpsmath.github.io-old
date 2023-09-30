document.addEventListener("DOMContentLoaded", function() {
    const storedFavicon = localStorage.getItem('customFavicon');
    const storedTitle = localStorage.getItem('customTitle');
  
    if (storedFavicon && storedTitle) {
        document.querySelector('link[rel="icon"]').href = storedFavicon;
        document.title = storedTitle;
    }
  });  