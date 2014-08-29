'use strict';


$(window).load(function() {
	$('body').removeClass('loading'); // Hide loading animation on page load

	$(function() {

		var $header = $('header .header-text h1 span');

		$header.addClass('header-drop');

	});
});

// Tape machine scroll effect
if ( !Modernizr.touch ) {
	$(window).scroll(function(){
		var $st = $(this).scrollTop(),
			rotate = 'rotate(' + $st + 'deg)',
			$leftReel = $('section.bio .tape-machine-wrap .tm-reel-left'),
			$rightReel = $('section.bio .tape-machine-wrap .tm-reel-right'),
			$meters = $('section.bio .tape-machine-wrap .tm-meters');

		$leftReel.css({transform : rotate});
		$rightReel.css({transform : rotate});
		$meters.addClass('tm-meters-light');
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			$meters.removeClass('tm-meters-light');
		}, 200));
	});
}

// Navbar functionality
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
			$menu.slideToggle(); // slide up when item is clicked on mobile
			$icon.removeClass('icon-cancel').addClass('icon-menu');
		});
	}

	$(window).resize(function() {
		if ($width > 320 && $menu.is(':hidden')) {
			$menu.removeAttr('style');
		}

	});
});

// Anchor smooth scrolling
$('nav > ul > a').add($('header > a')).click(function(){
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href') ).offset().top
	}, 1000);
	return false;
});

var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

if (iOS === true) {
	var $orphan = $('.block-orphan-img'),
		$ghost = $('.block-ghost-img'),
		$peter = $('.header-photo');

	$orphan.add($ghost).add($peter).css({
		'background-attachment':'scroll',
	});
}