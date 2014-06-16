//'use strict';


var sdegree = 0;

$(window).scroll(function(event){
	var st = $(this).scrollTop(),
		rotate = "rotate(" + st + "deg)";

	$(".tm-reel-left").css({transform : rotate});
	$(".tm-reel-right").css({transform : rotate});

});
