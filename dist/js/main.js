//Select items
const menu = document.querySelector(".menu");
const menubtn = document.querySelector(".menu-btn");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");

const navItems = document.querySelectorAll(".nav-item");

//Set initial state of menu (Open/Closed)
let showMenu = false;

menubtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menubtn.classList.add("close");
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");

    navItems.forEach((item) => item.classList.add("show"));

    showMenu = true;
  } else {
    menubtn.classList.remove("close");
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");

    navItems.forEach((item) => item.classList.remove("show"));
    showMenu = false;
  }
}
