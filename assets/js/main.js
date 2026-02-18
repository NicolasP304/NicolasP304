(function () {
  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu after click
    menu.addEventListener("click", function (e) {
      if (e.target && e.target.tagName === "A") {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Theme toggle + remember preference
  var themeBtn = document.querySelector(".theme-toggle");
  var root = document.documentElement;

  function setTheme(mode) {
    if (mode === "light") root.setAttribute("data-theme", "light");
    else root.removeAttribute("data-theme");
    try { localStorage.setItem("theme", mode); } catch (e) {}
  }

  // Load stored theme
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light") setTheme("light");
  } catch (e) {}

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var isLight = root.getAttribute("data-theme") === "light";
      setTheme(isLight ? "dark" : "light");
    });
  }

  // Copy buttons
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest("[data-copy]");
    if (!btn) return;

    var sel = btn.getAttribute("data-copy");
    var input = document.querySelector(sel);
    if (!input) return;

    input.select();
    input.setSelectionRange(0, 99999);

    try {
      document.execCommand("copy");
      btn.textContent = "Copied!";
      setTimeout(function () { btn.textContent = "Copy"; }, 1200);
    } catch (err) {
      btn.textContent = "Copy failed";
      setTimeout(function () { btn.textContent = "Copy"; }, 1200);
    }
  });
})();
