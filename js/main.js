;(function($){
    // Banner

    $(".ecom-banner").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
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
                items:3.25,
            }
        }
    })

    // New Arrivals

    $(".products-slider").owlCarousel({
        items:5,
        loop:false,
        margin:16,
        slideBy:5,
        nav:true,
        navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
        mouseDrag:false
    })
    
})(jQuery);

(function(){
    
    // Sticky Nav

    const headerContainer = document.querySelector(".ecom-nav");
    window.onscroll = ()=>{
            this.scrollY > 120 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

})()

