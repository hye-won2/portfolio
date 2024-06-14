window.addEventListener("wheel", function(e) {
  e.preventDefault();
}, { passive: false });

var mHtml = $("html");
var page = 1;

mHtml.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function(e) {
  if (mHtml.is(":animated")) return;
  if (e.originalEvent.deltaY > 0) {
      if (page == 4) return;
      page++;
  } else if (e.originalEvent.deltaY < 0) {
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

// 터치 이벤트 추가
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

// 초기 설정: 페이지 로딩 시 최하단일 경우 buttonPosition 숨기기
$(document).ready(function() {
  var windowHeight = $(window).height();
  var documentHeight = $(document).height();
  var scrollTop = $(window).scrollTop();

  if (documentHeight - windowHeight === scrollTop) {
      $(".buttonPosition").fadeOut(500);
  }
});

// 스크롤 이벤트로 애니메이션 작동 설정
$(window).scroll(function() {
  $('.txt_box7').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > position - windowHeight) {
          $(this).addClass('fade-in');
      }
  });

  $('.img_box7').each(function() {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll > position - windowHeight) {
          $(this).addClass('fade-in');
      }
  });
});





// // 기존코드 참고(아래 가이드 반복 애니메이션 section4 도달시 사라지는 이벤트 추가전)
// window.addEventListener("wheel", function(e){
//   e.preventDefault();
// },{passive : false});

// var mHtml = $("html");
// var page = 1;

// mHtml.animate({scrollTop : 0}, 10);

// $(window).on("wheel", function(e) {
//   if(mHtml.is(":animated")) return;
//   if(e.originalEvent.deltaY > 0) {
//       if(page == 4) return;
//       page++;
//   } else if(e.originalEvent.deltaY < 0) {
//       if(page == 1) return;
//       page--;
//   }
//   var posTop = (page - 1) * $(window).height();
//   mHtml.animate({scrollTop : posTop});
// });

// // 터치 이벤트 추가
// var startY, endY;
// $(window).on("touchstart", function(e) {
//   startY = e.originalEvent.touches[0].clientY;
// });

// $(window).on("touchmove", function(e) {
//   endY = e.originalEvent.touches[0].clientY;
// });

// $(window).on("touchend", function(e) {
//   if(mHtml.is(":animated")) return;
//   if(startY > endY + 5) {
//       // 스크롤 다운
//       if(page == 4) return;
//       page++;
//   } else if(startY < endY - 5) {
//       // 스크롤 업
//       if(page == 1) return;
//       page--;
//   }
//   var posTop = (page - 1) * $(window).height();
//   mHtml.animate({scrollTop : posTop});
// });

// // 영상탭 스크롤시 애니메이션 작동
// $(window).scroll(function() {
//   $('.txt_box7').each(function() {
//       var position = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();

//       if (scroll > position - windowHeight) {
//           $(this).addClass('fade-in');
//       }
//   });
// });

// $(window).scroll(function() {
//   $('.img_box7').each(function() {
//       var position = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();

//       if (scroll > position - windowHeight) {
//           $(this).addClass('fade-in');
//       }
//   });
// });