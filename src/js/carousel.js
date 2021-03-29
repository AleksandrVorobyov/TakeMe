$(document).ready(function(){
    $(".header__carousel").owlCarousel({
        nav: false,
        dots: false,
        items: 1,
        animateOut: 'animate__fadeOutDownBig',
        animateIn: 'animate__fadeInDownBig',
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