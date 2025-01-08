/*main_visual 스와이퍼 호출*/
var main_visual = new Swiper("#main_visual",{
	wrapperClass:"slider",	//슬라이드 요소를 감싸는 요소의 클래스
	slideClass:"view",	//슬라이드 요소들의 클래스
	slideActiveClass:"active",	//보이는 슬라이드에 추가되는 클래스명
	spaceBetween:10,	//사이간격
	speed:800,	//슬라이드되는 시간
	autoplay:{	//자동슬라이드
		delay:5000,	//전환간격(5초) 
	},
	pagination: {	//페이지버튼 생성
    el: '.pager',	//버튼영역 지정
		clickable:true,	//클릭시 슬라이드 전환기능 활성화
		bulletActiveClass:"active" //활성화된 버튼에 추가되는 클래스
	},
});