// Toggle navbar on mobile
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const navBar = document.querySelector(".navbar");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      navBar.classList.toggle("show");
    });
  }
});
