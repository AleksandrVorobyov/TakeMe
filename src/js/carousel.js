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
        nav: true,
        dots: false,
        items: 3,
        margin: 30,
        smartSpeed: 2000,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
    });

    $('.cards-carousel-nav-next').click(function() {
        $(".cards-carousel-wrap").trigger('next.owl.carousel', [2500]);
    })
    $('.cards-carousel-nav-prev').click(function() {
        $(".cards-carousel-wrap").trigger('prev.owl.carousel', [2500]);
    })
});