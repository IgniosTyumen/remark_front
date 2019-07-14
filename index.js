$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            margin:20,
            autoHeight: true,
            responsive:{
                0:{
                    items:1
                },
                768: {
                    items:2
                },
                992:{
                    items:3
                },
                1200:{
                    items:4
                }
            }
        }
    );
});

