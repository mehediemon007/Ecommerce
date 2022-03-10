;(function($){
    // Banner

    $(".ecom-banner").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true
    })

    // New Arrivals

    $(".new-products-slider").owlCarousel({
        items:5,
        loop:false,
        margin:16,
        slideBy:5,
        nav:true,
        navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
        mouseDrag:false
    })

    // Brands

    $(".brands-slider").owlCarousel({
        items:8,
        margin:16,
        slideBy:8,
        nav:true,
        // navText:[$(".owl-navigation .owl-nav-prev"),$(".owl-navigation .owl-nav-next")],
    })

})(jQuery);

(function(){
    

})()

