// Animação do Menu no Scroll da Página//

// $(function () {
//   $(window).on('scroll', function () {
//     if ($(window).scrollTop() > 768) {
//       $('.container').addClass('container_scroll');
//       $('.logo').addClass('logo_scroll');
//     } else {
//       $('.container').removeClass('container_scroll');
//       $('.logo').removeClass('logo_scroll');
//     }
//   });
// });

const $currentWindow = $(window);
const $container = $('.container');
const $logo = $('.logo');

$($currentWindow).on('scroll', () => {
  if ($currentWindow.scrollTop() > 768) {
    $container.addClass('container_scroll');
    $logo.addClass('logo_scroll');
    return;
  }

  $container.removeClass('container_scroll');
  $logo.removeClass('logo_scroll');
});

// Animação do Menu no Scroll da Página//
