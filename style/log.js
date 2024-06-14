



// // 로그인 정보
// $(document).ready(function(){
//     $('.btn').click(function(){
//         alert('핸드폰 번호 뒷자리');
//     });
    
//     $('#submit').click(function(){
//         var id = $('#id_').val();
//         var pass = $('#pass_').val();
//         if (id === "hyewon" && pass === "1967") {
//             // alert("로그인 성공");
//             // 로그인 성공 시 다음 페이지로 이동하도록 설정할 수 있습니다.
//             window.location.href = "main.html";
//         } else {
//             alert("잘못된 정보입니다.");
//            // 비밀번호를 틀렸을 때 입력된 비밀번호 초기화
//             $('#pass_').val('');
//             $('#id_').val('');
//         }
//     });
// });


// // 비밀번호 힌트
// $(document).ready(function(){
//     $('.btn').click(function(){
//         alert('핸드폰 번호 뒷자리');
//     });
// });



$(document).ready(function(){
    $('#submit').click(function(){
var id = $('#id_').val().trim(); // 입력된 ID 값
var pass = $('#pass_').val().trim(); // 입력된 비밀번호 값


if (id === "hyewon" && pass === "1967") {
    // 로그인 성공 시
    window.location.href = "main.html";
} else {
    // 로그인 실패 시
    alert("잘못된 정보입니다.");
    $('#pass_').val(''); // 비밀번호 입력 필드 초기화
}
});
});

// 비밀번호 힌트
$(document).ready(function(){
$('.btn').click(function(){
alert('핸드폰 번호 뒷자리');
});
});
