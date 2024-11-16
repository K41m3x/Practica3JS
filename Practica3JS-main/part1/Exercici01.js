let num;
document.getElementById("button1").onclick = function () {
    open("encerta.html");
    let content = document.getElementById("number");
    let num = Math.floor(Math.random() * 11);
    content.innerHTML=  num;
    if (num >=5) {
        content.style.color = "green"
    } else{
        content.style.color = "red"
    }
}