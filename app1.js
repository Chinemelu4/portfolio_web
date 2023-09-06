const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");
const learnMoreBtn = document.querySelector(".btn");

function toggleNav() {
  container.classList.toggle("active");
}

hamburger_menu.addEventListener("click", toggleNav);
learnMoreBtn.addEventListener("click", toggleNav);