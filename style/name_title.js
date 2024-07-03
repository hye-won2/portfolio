
const content = "안녕하세요.\n웹디자이너\n박혜원 입니다.";
const text = document.querySelector(".text");
let i = 0;

// 무한반복
// function typing(){
//     let txt = content[i++];
//     text.innerHTML += txt=== "\n" ? "<br/>": txt;
//     if (i > content.length) {
//         text.textContent = "";
//         i = 0;
//     }
// }
// setInterval(typing, 180)

// 한번만
function typing(){
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    i++;
    }
}
setInterval(typing, 80)
