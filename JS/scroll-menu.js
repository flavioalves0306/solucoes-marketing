// Animação do Menu no Scroll da Página//

<<<<<<< HEAD
$(function() {
    $(window).on("scroll", function(){
        if ($(window).scrollTop() > 600) {
            $(".container").addClass("container_scroll");
            $(".logo").addClass("logo_scroll");
        } else {
            $(".container").removeClass("container_scroll")
            $(".logo").removeClass("logo_scroll");
        }
    })
})
=======
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
>>>>>>> 8f6751fd8b1c89ec2002f479398ffbf5f98a290c

// Animação do Menu no Scroll da Página//
