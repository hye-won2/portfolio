window.addEventListener("scroll", function() {
    const buttonPosition = document.querySelector(".buttonPosition");
    const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    // 스크롤바가 맨 아래에 위치할 때 요소를 fade-out
    if (bottomOfWindow >= pageHeight) {
        buttonPosition.classList.remove("fade-in");
        buttonPosition.classList.add("fade-out");
        setTimeout(() => {
            buttonPosition.style.display = "none";
        }, 500); // 0.5초 후 요소를 완전히 안보이게 처리
    } else {
        buttonPosition.style.display = "inline-block";
        buttonPosition.classList.remove("fade-out");
        buttonPosition.classList.add("fade-in");
    }
});