'use strict';

$(window).scroll(function(){
	var st = $(this).scrollTop(),
		rotate = 'rotate(' + st + 'deg)',
		$leftReel = $('.tm-reel-left'),
		$rightReel = $('.tm-reel-right'),
		$meters = $('.tm-meters');

	$leftReel.css({transform : rotate});
	$rightReel.css({transform : rotate});
	$meters.addClass('tm-meters-light');
	clearTimeout($.data(this, 'scrollTimer'));
	$.data(this, 'scrollTimer', setTimeout(function() {
		$meters.removeClass('tm-meters-light');
	}, 200));
});

$(function() {
	var $toggle = $('#nav-toggle'),
		$menu = $('nav ul'),
		$icon = $('#nav-toggle i'),
		$menuItem = $('nav ul a');
		var $width = $(window).width();
		
	$toggle.click(function(e) {
		e.preventDefault();
		$menu.slideToggle();
		$icon.addClass('spin-02s');
		setTimeout(function() { 
			$icon.removeClass('spin-02s');
		}, 200);

		if ($icon.hasClass('icon-menu')) {
			$icon.removeClass('icon-menu').addClass('icon-cancel');
		} else if ($icon.hasClass('icon-cancel')) {
			$icon.removeClass('icon-cancel').addClass('icon-menu');
		}
	});
	if ( $width < 480 ) {
		$menuItem.click(function() {
			$menu.slideToggle();
			$icon.removeClass('icon-cancel').addClass('icon-menu');
		});
	}

	$(window).resize(function() {
		if ($width > 320 && $menu.is(':hidden')) {
			$menu.removeAttr('style');
		}

	});
});

$('a:not(nav > a)').click(function(){
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 1000);
	return false;
});

/*$(function() {

		var $img = $('#instafeed a');

		$img.hover(function() {
			console.log('hi');
			//$overlay.toggleClass('instafeed-overlay-slideup');
		});
		
});*/