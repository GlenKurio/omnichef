//////////////////////////////////////
// MOBILE MENU

const btnMobileNav = document.getElementById("btnMobileNav");
const header = document.querySelector("header");

btnMobileNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

//////////////////////////////////////
// MOBILE MENU