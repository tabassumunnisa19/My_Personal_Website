// script.js - mobile hamburger toggle with aria + outside-click + resize reset
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navBar = document.querySelector(".navbar");

  if (!menuToggle || !navBar) return;

  // initialize aria-expanded
  menuToggle.setAttribute("aria-expanded", "false");

  menuToggle.addEventListener("click", (e) => {
    const isOpen = navBar.classList.toggle("show");
    menuToggle.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Close menu when clicking outside (mobile)
  document.addEventListener("click", (e) => {
    if (!navBar.contains(e.target) && !menuToggle.contains(e.target)) {
      if (navBar.classList.contains("show")) {
        navBar.classList.remove("show");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    }
  });

  // On resize to desktop, ensure mobile menu is closed
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      if (navBar.classList.contains("show")) {
        navBar.classList.remove("show");
      }
      if (menuToggle.classList.contains("active")) {
        menuToggle.classList.remove("active");
      }
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});
