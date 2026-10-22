document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", function (e) {
            this.classList.toggle("active");
            closeOtherDropdowns(this);
        });
    });

    function closeOtherDropdowns(currentDropdown) {
        dropdowns.forEach((dropdown) => {
            if (dropdown !== currentDropdown) {
                dropdown.classList.remove("active");
            }
        });
    }

    document.querySelector("#menuBtn").addEventListener("click", function (e) {
        const menuWrap = document.querySelector(".menuWrap");
        if (menuWrap.classList.contains("on")) {
            // 메뉴 slide
            menuWrap.classList.remove("on");
            document.getElementById("menuBtn").src = "images/menu_bar_m.png";
            document.querySelector("#menuBtn").classList.remove("btnRotate");
            document.querySelector("#dimmed").remove();
        } else {
            // 메뉴 slideIn
            menuWrap.classList.add("on");
            document.getElementById("menuBtn").src = "images/menu_close_m.png";
            document.querySelector("#menuBtn").classList.add("btnRotate");
            let div = document.createElement("div");
            div.id = "dimmed";
            document.body.append(div);

            // 페이지 스크롤 락 모바일 이벤트 차단
            document
                .querySelector("#dimmed")
                .addEventListener("scroll touchmove touchend mousewheel", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    return false;
                });
        }

        // 드롭다운 닫기
        closeOtherDropdowns(null);
    });
});




//모바일 세로형 서브메뉴 드롭다운
document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(function (menuItem) {
        const menuTitle = menuItem.querySelector(".menu_title");
        const submenu = menuItem.querySelector(".submenu");

        menuTitle.addEventListener("click", function () {
            const isActive = menuTitle.classList.contains("active");

            // 모든 메뉴 타이틀에서 active 클래스 제거
            menuItems.forEach(function (item) {
                if (item !== menuItem) {
                    item.querySelector(".menu_title").classList.remove("active");
                    item.querySelector(".submenu").style.height = "0";
                }
            });

            if (!isActive) {
                // 서브메뉴의 실제 높이를 계산하여 설정
                submenu.style.height = `${submenu.scrollHeight}px`;
                menuTitle.classList.add("active"); // 클래스 추가
            } else {
                submenu.style.height = "0";
                menuTitle.classList.remove("active"); // 클래스 제거
            }
        });
    });
});