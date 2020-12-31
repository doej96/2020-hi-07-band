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

/* 카카오지도 */
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.498734, 127.026677), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(37.498734, 127.026677); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

$(window).resize(onResize).trigger('resize');
//$(window).scroll(onScroll);

$('.navi-wrap li').mouseenter(onNaviEnter);
$('.navi-wrap li').mouseleave(onNaviLeave);
mainBanner();

$('.bars').click(onMoNavi);