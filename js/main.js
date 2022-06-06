



// 
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle( function (){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    // 뱃지요소를 숨김
    // badgeEl.style.display = 'none';
    // gsap.to(애니메이션 처리할 요소, 지속시간(초), 옵션 ) to는 애니메이션 처리를 위한 메소드 괄호가 들어가는것이 특징
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display : 'none'
    }); 
    //버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x : 0,
    });
  } else {
    // 배치보이기
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, 1, {
      opacity: 1,
      display : 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x : 100,

    });
  }
}, 300)); /0.3초 혹은 300ms으로 표기/  



toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7,{
    scrollTo : 0
  })

});





// 자바스크립트에서는 속성값(display : 'none', opacity : 0)을 숫자는
// 그냥 표기해도 되지만 문자로 표기할때는 ''를 사용한다

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {  
    delay : (index + 1) * .7,
    opacity : 1
  });
 //fade-in클래스의 요소를 1초동안 0.7초의 지연시간을 두고 투명하지 않게
 //출력되도록 반복실행한다

});


// NOTICE Swiper
//new Swiper(.선택자, 옵션)
//Swiper <-자바스크립트 라이브러리
new Swiper('.notice .notice-line .inner .inner__left .swiper', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});

new Swiper('.notice .promotion .swiper', {
  slidesPerView : 3,  //한번에 보여줄 slide 개수
  spaceBetween : 10,  //slide 사이 여백
  centeredSlides : true, //1번 slide가 가운데 보이기
  // direction : 'horizontal', //기본값이기 때문에 굳이 명시하지 않아도 됨
  loop : true,
  autoplay : {
    delay : 5000,
  },
  pagination : {
    el : '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true, //클릭으로 페이지를 제어할수있게 하겠는지

  },
  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next', 
  }
});

new Swiper('.awards .swiper', {
  // direction : 'horizental',
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next',
    
  }
});





// Promotion 가리는 영역
const promotionEl = document.querySelector('.promotion')
const promotiontToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotiontToggleBtn.addEventListener('click', function(){ // click, 함수(이벤트 핸들러)
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    // !isHidePromotion으로 값이 true가 되는 부분
    //숨김 처리!
    promotionEl.classList.add('hide');
  } else{
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});
// Promotion 가리는 영역




// YOUTUBE Floating

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {  
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size){  //selector는 매개변수
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to( //메소드                          //1. gsap의 to라는 "메소드"는
    selector, //선택자                       //2. selector라는 선택자를 받고
    random(1.5, 2.5), //애니메이션 동작 시간  //3. 랜덤함수를 통해서 지속시간을 실행하고
    {//옵션                                  //4. 옵션을 통해서 실행한다
      y : size, //y축으로 이동?
      repeat : -1,  //무한반복
      yoyo : true,  //한번 재생된 애니메이션을 역재생시키는 옵션
      ease: Power1.easeInOuteaseInOut,
      delay : random(0, delay),  //시작시간을 지연시키는 옵션
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){  //() 메소드 {} 객체데이터
  new ScrollMagic
    .Scene({
      triggerElement : spyEl,  //보여짐의 여부를 감시할 요소를 지정
      triggerHook : 0.8,  //내가 감시중인 요소가 뷰포트의 어떤 지점에서 감시되었다는것을 판단하는 옵션
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller); //ScollMagic이라는 자바스크립트 라이브러리, Controller 메소드
});

