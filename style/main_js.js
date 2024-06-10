window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var mHtml = $("html");
var page = 1;


mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
    if(mHtml.is(":animated")) return;
    if(e.originalEvent.deltaY > 0) {
        if(page == 4) return;
        page++;
    } else if(e.originalEvent.deltaY < 0) {
        if(page == 1) return;
        page--;
    }
    var posTop =(page-1) * $(window).height();
    mHtml.animate({scrollTop : posTop});
})


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



  