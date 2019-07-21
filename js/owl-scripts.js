(function($) { 

    "use strict";
    $(document).ready(function(){

        "use strict";

        $('#about-slider').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

        $('#testimonial-slider').owlCarousel({
            //items: 2,
			loop:true,
            margin:10,
            nav:false,
            dots:true,
			slideSpeed : 10000,
            responsive:{
                790:{
                    items:1
                },
                600:{
                    items:1
                },
				786: {
					items: 1
				},
                1024:{
                    items:1
                },
				480: {
					items: 1
				},
                320:{
                    items:1
                }
            }
        })
		  


        $('#owl-testi-sidebar').owlCarousel({
            loop:true,
			items: 1,
            margin:10,
    	slideSpeed : 2000,
    		paginationSpeed : 800,
    		rewindSpeed : 1000,
            nav:false,
            dots:true,
            responsive:{
                800:{
                    items:1
                },
                600:{
                    items:1
                },
				786: {
					items: 1
				},
                1024:{
                    items:1
                },
				480: {
					items: 1
				},
                320:{
                    items:1
                }
            }
        })


        $('#carousel-related').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
			slideSpeed : 2000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:2
                }
            }
        })

        $('#carousel-blog').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

    });
})(jQuery);