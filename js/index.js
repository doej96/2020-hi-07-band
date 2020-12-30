function onNaviEnter() {
	$(this).find('.sub-navi').addClass('active');
}

function onNaviLeave() {
	$(this).find('.sub-navi').removeClass('active');
}

function mainBanner() {
	var swiper = new Swiper('.main-banner.swiper-container', {
		slidesPerView: 1,
		loop: 'true',
		autoplay: {
			delay : 4000,
			},
	});
}


$('.navi-wrap li').mouseenter(onNaviEnter);
$('.navi-wrap li').mouseleave(onNaviLeave);
mainBanner();