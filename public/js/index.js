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

function onMoNavi() {
	$(this).next().toggleClass('active');
}

function onResize() {
	var winWidth = $(window).width();
	if(winWidth > 576) $('.mo-navi').removeClass('active');
}

function onScroll(e) {
	var scTop = $(this).scrollTop();
	var naviHeight = $('.navi-wrapper').innerHeight();
	if (scTop >= naviHeight) $('.navi-wrapper').css({position:"fixed",width:"100%"});
	else $('.navi-wrapper').css("position","relative");
}

new WOW({
	offset : 150
}).init();

$(window).resize(onResize).trigger('resize');
//$(window).scroll(onScroll);

$('.navi-wrap li').mouseenter(onNaviEnter);
$('.navi-wrap li').mouseleave(onNaviLeave);
mainBanner();

$('.bars').click(onMoNavi);