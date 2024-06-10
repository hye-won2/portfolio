window.addEventListener("scroll", function() {
    const buttonPosition = document.querySelector(".buttonPosition");
    const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    
    // 스크롤바가 맨 아래에 위치할 때 요소를 안보이게 함
    if (bottomOfWindow >= pageHeight) {
      buttonPosition.style.opacity = "0";
      setTimeout(() => {
        buttonPosition.style.display = "none";
      }, 500); // 0.5초 후 요소를 완전히 안보이게 처리
    } 
    // 스크롤바가 맨 아래에 위치하지 않을 때 요소를 다시 보이게 함
    else {
      buttonPosition.style.opacity = "1";
      buttonPosition.style.display = "inline-block";
    }
  });

  