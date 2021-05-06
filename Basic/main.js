// window.onload=function(){
//     document.onclick=function(e){
//         alert(e.target.innerHTML +"有"+e.target.innerHTML.length+"個字元");
//     }

// };
/*
let confirmAnswer = confirm("你真的確定要取消服務嗎?");
console.log(confirmAnswer);
let thisH1 =document.getElementsByTagName("h1")[0];
if (confirmAnswer){
thisH1.innerHTML="服務已取消";
}
else{
    thisH1.innerHTML="繼續使用本服務";
}
*/
/*
let promtAnswer = prompt ("小明家裡有三個小孩。兩個哥哥分別叫張一、張二，請問第三的小孩是誰?","張三");
let thisH1 = document.getElementById("Response");

switch (promtAnswer){
case "張三":
    thisH1.innerHTML="那小明是誰?";
    break;
case "小明":
    thisH1.innerHTML="聰明";
    break;
default:
    thisH1.innerHTML="你想多了";

}
*/


function showAlert() {
    thisH1.innerHTML = "Hello!"

}

let thisButton = document.getElementsByTagName("Button")[0];
let thisH1 = document.getElementsByTagName("h1")[0];

thisButton.addEventListener("click", showAlert);


// thisButton.onclick = function () {
//     // showAlert();
//     /*
//         for(let i=0; i<10; i++){
//             if(i==3){
//             continue;
//             }
//             console.log(i);
//         }
//       */
//     let person = {
//         firstName: "Ryan",
//         lastNAme: "Chung",
//         height: 178

//     }

//     for (e in window) {
//         console.log(e + ":" + window[e])
//     }





// }
