window.addEventListener("wheel", function(e){
  e.preventDefault();
},{passive : false});

var mHtml = $("html");
var page = 1;

mHtml.animate({scrollTop : 0}, 10);

$(window).on("wheel", function(e) {
  if(mHtml.is(":animated")) return;
  if(e.originalEvent.deltaY > 0) {
      if(page == 4) return;
      page++;
  } else if(e.originalEvent.deltaY < 0) {
      if(page == 1) return;
      page--;
  }
  var posTop = (page - 1) * $(window).height();
  mHtml.animate({scrollTop : posTop});
});

// 터치 이벤트 추가
var startY, endY;
$(window).on("touchstart", function(e) {
  startY = e.originalEvent.touches[0].clientY;
});

$(window).on("touchmove", function(e) {
  endY = e.originalEvent.touches[0].clientY;
});

$(window).on("touchend", function(e) {
  if(mHtml.is(":animated")) return;
  if(startY > endY + 5) {
      // 스크롤 다운
      if(page == 4) return;
      page++;
  } else if(startY < endY - 5) {
      // 스크롤 업
      if(page == 1) return;
      page--;
  }
  var posTop = (page - 1) * $(window).height();
  mHtml.animate({scrollTop : posTop});
});

// 영상탭 스크롤시 애니메이션 작동
$(window).scroll(function() {
  $('.txt_box7').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > position - windowHeight) {
          $(this).addClass('fade-in');
      }
  });
});

$(window).scroll(function() {
  $('.img_box7').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > position - windowHeight) {
          $(this).addClass('fade-in');
      }
  });
});