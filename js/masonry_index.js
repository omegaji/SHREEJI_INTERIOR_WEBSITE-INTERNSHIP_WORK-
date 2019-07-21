	(function ($) {
        
        "use strict";

            var $container = $('.masonry_wrapper'),
            
            colWidth = function () {
                var w = $container.width(), 
                    columnNum = 5,
                    columnWidth = 0;
                if (w > 1200) {
                    columnNum  = 5;
                } else if (w > 900) {
                    columnNum  = 4;
                } else if (w > 600) {
                    columnNum  = 2;
                } else if (w > 300) {
                    columnNum  = 2;
                }
                columnWidth = Math.floor(w/columnNum);
                $container.find('.item').each(function() {
                    var $item = $(this),
                        multiplier_w = $item.attr('class').match(/item-w(\d)/),
                        multiplier_h = $item.attr('class').match(/item-h(\d)/),
                        width = multiplier_w ? columnWidth*multiplier_w[5] : columnWidth,
                        height = multiplier_h ? columnWidth*multiplier_h[1]*0.5-2 : columnWidth*0.5-2;
                    $item.css({
                        width: width,
                        //height: height
                    });
                });
                return columnWidth;
            }
                        
            function refreshWaypoints() {
                "use strict";
                setTimeout(function() {
                }, 1000);   
			}
			
      
            $('nav.portfolio-filter ul a').on('click', function() {
                var selector = $(this).attr('data-filter');
                $container.isotope({ filter: selector }, refreshWaypoints());
                $('nav.portfolio-filter ul a').removeClass('active');
                $(this).addClass('active');
                return false;
            });
                
            function setPortfolio() { 
                
                "use strict";
                setColumns();
                $container.isotope('reLayout');
            }
    
            var isotope = function () {

                "use strict";
                $container.imagesLoaded( function() {
                        $container.isotope({
                            resizable: true,
                            itemSelector: '.item',
                            masonry: {
                                columnWidth: colWidth(),
                                gutterWidth: 0
                            }
                        });
                    });
                
            };
        
        $(document).ready(function(){
            isotope();
        });
        
        $(window).smartresize(isotope);
    }(jQuery));


	
	
(function ($) {
	
    "use strict";
    
	var $container = $('.masonry_wrapper2');
	var w = $('.masonry_wrapper2').width(), 
		columnNum = 1,
		columnWidth = 0;
	if (w > 1200) {
		columnNum  = 4;
	} else if (w > 900) {
		columnNum  = 4;
	} else if (w > 600) {
		columnNum  = 3;
	} else if (w > 300) {
		columnNum  = 2;
	}
	columnWidth = Math.floor(w/columnNum);
	
    try {
        var carousel = $('.masonry_wrapper2').bxSlider({minSlides:4, maxSlides: 4, slideWidth: columnWidth});
    }
    catch(e) {

    }
			
	$('nav.portfolio-filter ul a').on('click', function() {
		var selector = $(this).attr('data-filter');
		var item = $container.find('.item');
		var classes = $container.find(selector);
		//item.fadeOut();
		//classes.fadeIn();
		$('nav.portfolio-filter ul a').removeClass('active');
		$(this).addClass('active');
		carousel.destroySlider();
		carousel.bxSlider({
			minSlides:4, 
			maxSlides: 4, 
			slideWidth: columnWidth,
			onSliderLoad: function() {
				item.fadeOut();
				classes.fadeIn();
			}
		});
		
		return false;
	});
	

}(jQuery));