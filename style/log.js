    
// 로그인시
 $(document).ready(function(){
    $('#submit').click(function(){
        var id = $('#id_').val().trim();
        var pass = $('#pass_').val().trim();

        if (id === "hyewon" && pass === "1967") {
            window.location.href = "main.html";
        } else {
            alert("잘못된 정보입니다.");
            $('#pass_').val('');
        }
    });

    $('.btn').click(function(){
        alert('핸드폰 번호 뒷자리');
    });
});

// 비밀번호 힌트
$(document).ready(function(){
$('.btn').click(function(){
alert('핸드폰 번호 뒷자리');
});
});

