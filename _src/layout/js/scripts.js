$(document).ready(function(){

function siteLoaded () {
	$('.pace-progress').addClass('pace-done');
	$('.module').css({'margin-top':'0'});
	$('#pace-cover').fadeOut(250);
}

// Use pace to fade in page content after load and fade out before leaving pages.
Pace.on('start', function() {$('.module').css({'margin-top':'2em'});});
Pace.on('done', siteLoaded);
$(window).on('pageshow', siteLoaded);

$('a').each(function() {
	var anchor = new RegExp('/' + window.location.host + '/');
	if ( !anchor.test(this.href) ) {
		$(this).addClass('external-link').attr('target', '_blank');
	} else {
		$(this).addClass('internal-link');
	}
});

$('a.internal-link:not([href^="#"])').click(function() {
	event.preventDefault();
	newLocation = this.href;
	$('.module').css({'margin-top':'2em'});
	$('#pace-cover').fadeIn(250, newpage);
});

function newpage() {window.location = newLocation;}

// Smooth Scroll on anchor click
$('a.internal-link[href^="#"]').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
		|| location.hostname == this.hostname) {

		var target = $(this.hash);
	if (target) {
		$('html,body').animate({
			scrollTop: target.offset().top
		}, 1000);
		return false;
	}
}
});




// Adds active class to menu for current page (Can be used in a root directory , but will need to lose the '././ +' bit)
$('a').each(function () {
	if ($(this).attr('href') == window.location.pathname) {
		$(this).addClass('current-page');
	}
});




var distance = $('.main').offset().top,
$window = $(window);

$window.scroll(function() {
	if ( $window.scrollTop() >= distance ) {
		$('.desktop').addClass('header-shrink');
	} else {
		$('.desktop').removeClass('header-shrink');
	}
});


    // Fade-In effect on text and image blocks
    $('.main > div:not(.banner):not(.viewing)').addClass('fadein');

    $('.fadein').css({'opacity':'0', 'transform': 'translateY(' + 2 + 'em)'});
    $(window).on("load resize scroll",function(){
    	$('.fadein').each( function(i){
    		var bottom_of_object = $(this).offset().top + $(this).outerHeight()/15;
    		var bottom_of_window = $(window).scrollTop() + $(window).height();
    		if( bottom_of_window > bottom_of_object ){
    			$(this).css({'opacity':'1', 'transform': 'translateY(' + 0 + 'em)'});
    		}
    	});
    });

    $('.menu-toggle').click(function() {
    	$('.menu').toggleClass('menu-show');
    	$('.menu-toggle').toggleClass('menu-toggle-active');
    	$('html').toggleClass('scroll-lock');
    });




    // $(window).bind('mousewheel', function(event) {
    // 	if (event.originalEvent.wheelDelta >= 0) {
    // 		console.log(event.originalEvent.wheelDelta);
    // 		$('.mobile').css({'top':'0em'});
    // 	}
    // 	else {
    // 		console.log(event.originalEvent.wheelDelta);
    // 		$('.mobile').css({'top':'-3.5em'});
    // 	}
    // });

});
