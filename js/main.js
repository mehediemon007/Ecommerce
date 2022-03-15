;(function($){
    // Banner

    $(".ecom-banner").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
        autoplay:false,
        autoplayTimeout:3000,
        smartSpeed:500
    })

    // Top Selling

    $(".grid-five-col").owlCarousel({
        items:5,
        margin:14,
        responsive:{
            1201:{
                mouseDrag:false
            },
            992:{
                items:3.20,
            }
        }
    })

    // New Arrivals

    $(".products-slider").owlCarousel({
        loop:false,
        margin:16,
        slideBy:5,
        nav:true,
        navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
        mouseDrag:false,
        responsive:{
            1201:{
                items:5
            },
            992:{
                items:3,
            }
        }
    })

    // Nav Search Focus

    if($(".nav-search").length){

        $(".nav-search input").on("focusin",function(){

            $("body").addClass("overlay");
        });
    
        $(".nav-search input").on("focusout",function(){
    
            $("body").removeClass("overlay");
        })
    }

    
})(jQuery);

(function(){
    
    // Sticky Nav

    const headerContainer = document.querySelector(".ecom-nav");
    window.onscroll = ()=>{
            this.scrollY > 120 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

})()

