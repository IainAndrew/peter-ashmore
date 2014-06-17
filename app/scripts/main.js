'use strict';

$(window).scroll(function(){
	var st = $(this).scrollTop(),
		rotate = 'rotate(' + st + 'deg)';

	$('.tm-reel-left').css({transform : rotate});
	$('.tm-reel-right').css({transform : rotate});
	$('.tm-meters').css({
		background: '#F7F374'
	});
	clearTimeout($.data(this, 'scrollTimer'));
	$.data(this, 'scrollTimer', setTimeout(function() {
		$('.tm-meters').css({
			background: 'grey'
		});
	}, 200));
});
