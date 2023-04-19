document.addEventListener("DOMContentLoaded",()=>{
    
    const title = document.getElementById("title");
    console.log(title);
    title.textContent = "안녕하세요 javascript";

    const button = document.getElementById('button');
    button.addEventListener("click",()=>{
        const div = document.createElement("div");
        div.textContent = "내용";
        title.appendChild(div);
    });

    const btn1 = document.querySelector(".btn1");
    btn1.addEventListener("click",()=>{
        title.textContent = "";
    });

});

// window.onload = function(){
// }