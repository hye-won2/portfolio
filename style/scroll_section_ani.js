$(document).ready(function() {
  $(window).scroll( function(){
      $('.img_box3').each( function(i){
          
          var bottom_of_element = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > bottom_of_element ){
              $(this).animate({'opacity':'1','margin-left':'0px'},1000);
          }
          
      }); 
  });
});



// 터치 이벤트 처리
var startY, endY;
$(window).on("touchstart", function(e) {
  startY = e.originalEvent.touches[0].clientY;
});

$(window).on("touchmove", function(e) {
  endY = e.originalEvent.touches[0].clientY;
});

$(window).on("touchend", function(e) {
  if (mHtml.is(":animated")) return;
  if (startY > endY + 5) {
      // 스크롤 다운
      if (page == 4) return;
      page++;
  } else if (startY < endY - 5) {
      // 스크롤 업
      if (page == 1) return;
      page--;
  }
  var posTop = (page - 1) * $(window).height();
  mHtml.animate({ scrollTop: posTop });

  // section4 클래스에서는 buttonPosition 숨기기 (fade 효과 추가)
  if (page == 4) {
      $(".buttonPosition").fadeOut(700);
  } else {
      $(".buttonPosition").fadeIn(700);
  }
});