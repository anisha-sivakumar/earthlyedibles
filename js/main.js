"use strict";
$('.karusel-owl').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


$('.owl-worker').owlCarousel({
    loop:true,
    items:3,
    margin:20,
    nav:false,
    dots:true,
    autoplay:true,

})

