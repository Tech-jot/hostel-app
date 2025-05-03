function searchPage() {
      const input = document.getElementById("searchInput").value.toLowerCase();
      const pages = {
        "home": "index.html",
        "dashboard": "pages/dashboard.html",
        "rooms": "pages/rooms.html",
        "mess": "pages/mess.html",
        "login": "pages/login.html"
      };
    
      if (pages[input]) {
        window.location.href = pages[input];
      } else {
        alert("Page not found!");
      }
    }