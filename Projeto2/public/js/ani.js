$(document).ready(function () {
    $('.parallax').parallax();
});

$('.carousel.carousel-slider').carousel({ full_width: true });

$(document).ready(function () {
    $('.collapsible').collapsible({
        accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});

$(document).ready(function () {
    $("#sticker").sticky({ topSpacing: 0 });
});

$(document).ready(function () {
    $('.scrollspy').scrollSpy();
});

$(document).ready(function () {
    $('.carousel').carousel();
});

$('.carousel').carousel({
    padding: 200    
});
autoplay()   
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

/*
function pullDown() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}
*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:3
        },
        1000:{
            items:5
        }
    }
})