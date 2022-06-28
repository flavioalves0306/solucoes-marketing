// Abrir/Fechar Menu //

let menuMobile = document.querySelector(".mobile-menu");

function menuShow() {
  if (menuMobile.classList.contains('open')) {
    menuClose();
  } else {
    menuMobile.classList.add('open');
    document.querySelector(".icon").src = "./img/xmark-solid.svg";
  }
}

function menuClose() {
  menuMobile.classList.remove('open');
  document.querySelector(".icon").src = "./img/bars-solid.svg";
}

// Abrir/Fechar Menu //
