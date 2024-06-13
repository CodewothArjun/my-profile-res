document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const menuLinks = document.querySelector(".menu-links");

  hamburgerMenu.addEventListener("click", function () {
    menuLinks.classList.toggle("show-menu");
  });
});
