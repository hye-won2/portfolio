document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');
    let mouseX = -100; // 초기 마우스 X 위치를 화면 밖으로 설정
    let mouseY = -100; // 초기 마우스 Y 위치를 화면 밖으로 설정
    let cursorX = mouseX;
    let cursorY = mouseY;
    const easingFactor = 0.1; // 보정 계수

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function updateCursor() {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * easingFactor;
      cursorY += dy * easingFactor;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      requestAnimationFrame(updateCursor);
    }

    updateCursor();

    // 1초 후에 커서를 보이게 설정
    setTimeout(() => {
      cursor.style.opacity = 1;
    }, 1000);
  });


      // 터치 디바이스 감지 스크립트
      if ('ontouchstart' in window || navigator.maxTouchPoints) {
        document.querySelector('.cursor').style.display = 'none';
    }