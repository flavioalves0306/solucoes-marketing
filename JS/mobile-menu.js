// Abrir/Fechar Menu //

const $menuMobile = $('.mobile-menu');
const $icon = $('.icon');

function menuShow() {
  console.log($menuMobile.attr('class'));
  if ($menuMobile.attr('class') === 'open') {
    menuClose();
    return;
  }
  console.log($icon.attr('src'));
  $menuMobile.addClass('open');
  $icon.attr('src', './img/xmark-solid.svg');
}

function menuClose() {
  $menuMobile.removeClass('open');
  $icon.attr('src', './img/bars-solid.svg');
}

// Abrir/Fechar Menu //
