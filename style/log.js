

// document.getElementById('submit').onclick = function() {
//     var pass = document.getElementById('pass_').value;
//     if (pass === "1967") {
//         // alert("로그인 성공");
//         window.location.href = "main.html";
        
//     }
//     else {
//         alert("잘못된 정보입니다.");
//         window.location.href = "";
//     }
// }


// function enterkey() {
// if (window.event.keyCode == 13) {
//      // 엔터키가 눌렸을 때 실행할 내용
//      $("#submit").click();
// }}



// 로그인 정보
$(document).ready(function(){
    $('.btn').click(function(){
        alert('핸드폰 번호 뒷자리');
    });
    
    $('#submit').click(function(){
        var pass = $('#pass_').val();
        if (pass === "1967") {
            alert("로그인 성공");
            // 로그인 성공 시 다음 페이지로 이동하도록 설정할 수 있습니다.
            window.location.href = "main.html";
        } else {
            alert("잘못된 정보입니다.");
           // 비밀번호를 틀렸을 때 입력된 비밀번호 초기화
            $('#pass_').val('');
        }
    });
});


// 비밀번호 힌트
$(document).ready(function(){
    $('.btn').click(function(){
        alert('핸드폰 번호 뒷자리');
    });
});