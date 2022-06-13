
// Efeito do Menu no Scroll da Página//

$(function() {
    $(window).on("scroll", function(){
        if ($(window).scrollTop() > 768) {
            $(".container").addClass("container_scroll");
            $(".logo").addClass("logo_scroll");
        } else {
            $(".container").removeClass("container_scroll")
            $(".logo").removeClass("logo_scroll");
        }
    })
})

