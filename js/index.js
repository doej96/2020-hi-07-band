function onNaviEnter() {
	$(this).find('.sub-navi').addClass('active');
}

function onNaviLeave() {
	$(this).find('.sub-navi').removeClass('active');
}


$('.navi-wrap li').mouseenter(onNaviEnter);
$('.navi-wrap li').mouseleave(onNaviLeave);