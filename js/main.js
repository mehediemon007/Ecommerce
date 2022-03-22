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
        slideBy:3,
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

    // Single Product Slider

    jQuery(document).ready(function() {
        var productPreview = jQuery(".product-preview");
        var productThumb = jQuery(".product-thumb");
        var slidesPerPage = 4; //globaly define number of elements per page
        var syncedSecondary = true;
    
        productPreview.owlCarousel({
            items: 1,
            slideSpeed: 3000,
            nav: false,
            animateIn: "fadeIn",
            autoplayHoverPause: true,
            autoplaySpeed: 1400,
            dots: false,
            loop: true,
            responsiveRefreshRate: 200,

        }).on("changed.owl.carousel", syncPosition);
    
        productThumb.on("initialized.owl.carousel", function() {

            productThumb .find(".owl-item").eq(0).addClass("current");

        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin:16,
            smartSpeed: 1000,
            slideSpeed: 1000,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100,
            navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],

        }).on("changed.owl.carousel", syncPosition2);
    
        function syncPosition(el) {
          //if you set loop to false, you have to restore this next line
          //var current = el.item.index;
    
          //if you disable loop you have to comment this block
          var count = el.item.count - 1;
          var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
    
          if (current < 0) {
            current = count;
          }
          if (current > count) {
            current = 0;
          }
    
          //end block
    
          productThumb
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
          var onscreen = productThumb.find(".owl-item.active").length - 1;
          var start = productThumb
          .find(".owl-item.active")
          .first()
          .index();
          var end = productThumb
          .find(".owl-item.active")
          .last()
          .index();
    
          if (current > end) {
            productThumb.data("owl.carousel").to(current, 100, true);
          }
          if (current < start) {
            productThumb.data("owl.carousel").to(current - onscreen, 100, true);
          }
        }
    
        function syncPosition2(el) {
          if (syncedSecondary) {
            var number = el.item.index;
            productPreview.data("owl.carousel").to(number, 100, true);
          }
        }
    
        productThumb.on("click", ".owl-item", function(e) {
          e.preventDefault();
          var number = jQuery(this).index();
          productPreview.data("owl.carousel").to(number, 300, true);
        });

      });

    // Layout Change

    if($(".grid-icon").length){

      $(".grid-icon").on("click",function(){
          
          $(".list-icon").removeClass("active");
          $(this).addClass("active");
          $(".filtered-products").removeClass("list");
      })
    }
  
    if($(".list-icon").length){

        $(".list-icon").on("click",function(){

            $(".grid-icon").removeClass("active");
            $(this).addClass("active");
            $(".filtered-products").addClass("list");
        })
    }

    $(".disable").on("click",function(e){
        e.preventDefault();
    })

    // Compare Head

    $(".cmpr-table thead").on("click", function () {
        var $this = $(this);
        $this.find("i").toggleClass("fa-chevron-down fa-chevron-up");
        $($this).next().toggleClass("hide");
    });

    // Total Accordion

    $(".cart-filter .cart-filter-label").on("click",function(){

        $("i",this).toggleClass("fa-circle-plus fa-circle-minus")
    })

})(jQuery);

(function(){
    
    // Sticky Nav

    const headerContainer = document.querySelector(".ecom-nav");
    window.onscroll = ()=>{
            this.scrollY > 120 ? headerContainer.classList.add("sticky") : headerContainer.classList.remove("sticky");
    }

    //FAQ

    const filter = document.getElementsByClassName('filter-label');

    for(i=0;i<filter.length;i++){
        filter[i].addEventListener('click',function(){
            this.classList.toggle('active');
        })
    }

    // Cart Filter

    const totalFilter = document.getElementsByClassName('cart-filter-label');

    for(i=0;i<totalFilter.length;i++){
        totalFilter[i].addEventListener('click',function(){
            this.classList.toggle('active');
        })
    }

})()

