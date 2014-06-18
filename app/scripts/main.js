'use strict';

$(window).scroll(function(){
	var st = $(this).scrollTop(),
		rotate = 'rotate(' + st + 'deg)';

	$('.tm-reel-left').css({transform : rotate});
	$('.tm-reel-right').css({transform : rotate});
	$('.tm-meters').addClass('tm-meters-light');
	clearTimeout($.data(this, 'scrollTimer'));
	$.data(this, 'scrollTimer', setTimeout(function() {
		$('.tm-meters').removeClass('tm-meters-light');
	}, 200));
});

$(function() {
	var toggle = $('#nav-toggle'),
		menu = $('nav ul'),
		icon = $('#nav-toggle i');
		
	toggle.click(function(e) {
		e.preventDefault();
		menu.slideToggle();
		icon.addClass('spin-02s');
		setTimeout(function() { 
		    icon.removeClass('spin-02s');
		}, 200);

		if (icon.hasClass('icon-menu')) {
			icon.removeClass('icon-menu').addClass('icon-cancel');
		} else if (icon.hasClass('icon-cancel')) {
			icon.removeClass('icon-cancel').addClass('icon-menu');
		}
	});


	$(window).resize(function() {
		var width = $(window).width();
		if (width > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});