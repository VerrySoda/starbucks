const searchEl = document.querySelector('.search'); // document = HTML에서 querySelector(찾을것이냐)
const searchInputEl = searchEl.querySelector('input'); // searchEl에서 찾을것이냐 input을

// search라는 div요소를 click하면 function()을 실행해라
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});


// function(){}으로 실행되는 부분을 핸들러라고 한다
searchInputEl.addEventListener('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
  // html의 속성을 attribute라고 한다
});

searchInputEl.addEventListener('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
  // html의 속성을 attribute라고 한다
});

const thisYear = document.querySelector('.this-year');
  //thisYear라는 변수를 선언하고 .this-year라는 클래스를 찾아보고
  //thisYear에 date().getFullYear();의 출력값이 .this-year 클래스에 할당이된다
thisYear.textContent = new Date().getFullYear(); //2021이 출력됨

