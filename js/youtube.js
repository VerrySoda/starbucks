 // 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {  //onYouTubeIframeAPIReady라는 이름의 함수로 정의(유튜브 라이브러리가 찾는 함수명임 변경하면 안됨)
      //<div id="player"></div>
  new YT.Player('player', { //YT 객체 Player 메소드
    videoId: 'EJF919p_hb0', //실제 사용할 유튜브 영상의 ID주소를 넣는곳
    playerVars : {
      autoplay : true,  //자동재생 유무
      loop : true,    //반복재생 유무
      playList : 'EJF919p_hb0'  //반복재생할 유튜브 영상 ID목록
    },
    events : {
      onReady : function(event){ //객체데이터(onReady) 내부에 함수데이터(function)가 할당되어있는 속성을 메소드라고 한다
        event.target.mute() // 음소거
      }
    }
  });
}

