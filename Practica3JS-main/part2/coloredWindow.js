let color;
let num = Math.floor(Math.random() * 4) + 1;
let divColorName = document.getElementById("colorName");
switch (num) {
    case 1:
        color = "RED";
        document.body.style.backgroundColor = color;
        break;

    case 2:
        color = "GREEN";
        document.body.style.backgroundColor = color;
        break;
    case 3:
        color = "LIGHTBLUE";
        document.body.style.backgroundColor = color;
        break;
    case 4:
        color = "GREY";
        document.body.style.backgroundColor = color;
        break;
}
divColorName.innerHTML = "<h1>" + color + "</h1>";


document.onclick = function(){
    window.opener.click(color,window);
}