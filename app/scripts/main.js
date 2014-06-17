'use strict';


var sdegree = 0;

$(window).scroll(function(event){
	var st = $(this).scrollTop(),
		rotate = "rotate(" + st + "deg)";

	$('.tm-reel-left').css({transform : rotate});
	$('.tm-reel-right').css({transform : rotate});
	$('.tm-meters').css({
    	background: '#F7F374'
    });

	$(window).scroll(function() {
	    clearTimeout($.data(this, 'scrollTimer'));
	    $.data(this, 'scrollTimer', setTimeout(function() {
	        $('.tm-meters').css({
	        	background: 'grey'
	        });
	    }, 200));
	});

});
