$(document).ready(function () {

    $("#preloader").fadeOut("slow");

    init_animate();

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 15,
        responsiveClass: true,
        responsive:{
            0: {
                items: 1,
                nav:false
            },
            768: {
                items: 2,
                nav:false
            },
            1000: {
                items: 5,
                nav:false,
                loop: false
            }
        }
    });

    $("a.nav-link").on("click",function(){
        $("a.nav-link").removeClass("active");
        $(this).addClass("active");
    });

});

function init_animate() {
    $(".animate__animated").each(function () {
        $(this).on('inview', function (event, isInView) {
            var animate_class = $(this).attr("data-animate");

            if (isInView) {
                $(this).addClass(animate_class);
            } else {
                $(this).removeClass(animate_class);
            }
        });
    });
}