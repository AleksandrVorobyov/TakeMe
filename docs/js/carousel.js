$(document).ready(function(){
    $(".header__carousel").owlCarousel({
        nav: false,
        dots: false,
        items: 1,
        animateOut: 'animate__backOutDown',
        animateIn: 'animate__backInDown',
        smartSpeed: 2000,
        margin: 200,
        mouseDrag: false,
        touchDrag: false,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
        loop: true,
    });
});

$(document).ready(function(){
    $(".cards-carousel-wrap").owlCarousel({
        dots: false,
        margin: 30,
        nav: false,
        smartSpeed: 2000,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0 : {
                items: 1,
            },
            900 : {
                items: 2,
            },
            1300 : {
                items: 3,
            },
        }
    });

    $('.cards-carousel-nav-next').click(function() {
        $(".cards-carousel-wrap").trigger('next.owl.carousel', [2500]);
    })
    $('.cards-carousel-nav-prev').click(function() {
        $(".cards-carousel-wrap").trigger('prev.owl.carousel', [2500]);
    })
});

$(document).ready(function(){
    $(".story__carousel").owlCarousel({
        nav: false,
        dots: true,
        margin: 30,
        smartSpeed: 2000,
        mouseDrag: true,
        touchDrag: true,

        responsive: {
            0: {
                items: 1,
            },
            420: {
                dotsEach: 2,
                items: 2,
                loop: true,
                autoWidth: true,
            },
        }
    });
});