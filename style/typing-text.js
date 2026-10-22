    const line1 = "안녕하세요😊";
    const line2Parts = [
      { text: "웹디자이너 ", bold: false },
      { text: "박혜원", bold: true },
      { text: "입니다", bold: false }
    ];

    const line1Target = document.querySelector(".line1");
    const line2Target = document.querySelector(".line2");
    const typingSpeed = 100;

    let i = 0;
    let currentPart = 0;
    let currentChar = 0;

    function typeLine1() {
      if (i < line1.length) {
        line1Target.textContent += line1[i];
        i++;
        setTimeout(typeLine1, typingSpeed);
      } else {
        setTimeout(typeLine2, 300); // 살짝 쉬고 다음 줄 타이핑
      }
    }

    function typeLine2() {
      if (currentPart >= line2Parts.length) return;

      const part = line2Parts[currentPart];
      let span;

      // 현재 파트의 엘리먼트를 준비
      if (part.bold) {
        span = line2Target.querySelector("strong");
        if (!span) {
          span = document.createElement("strong");
          line2Target.appendChild(span);
        }
      } else {
        span = line2Target.querySelector(`.part-${currentPart}`);
        if (!span) {
          span = document.createElement("span");
          span.className = `part-${currentPart}`;
          line2Target.appendChild(span);
        }
      }

      // 글자 한 자씩 추가
      if (currentChar < part.text.length) {
        span.textContent += part.text[currentChar];
        currentChar++;
        setTimeout(typeLine2, typingSpeed);
      } else {
        currentChar = 0;
        currentPart++;
        setTimeout(typeLine2, typingSpeed);
      }
    }

    window.onload = typeLine1;