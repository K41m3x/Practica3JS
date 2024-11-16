let windowCount;
let totalCount;
document.getElementById("start").onclick = function () {
    let countdown = document.getElementById("countdown");
    let notification = document.getElementById("notification");
    let activeWindows = document.getElementById("activeWindows");
    let totalWindows = document.getElementById("totalWindows");
    let PreTotalWindows = document.getElementById("PREtotalWindows");
    let PreResult = document.getElementById("PREnotification");
    let num = 30;
    if (totalWindows.innerHTML != 0) {
        PreTotalWindows.innerHTML = totalWindows.innerHTML;
        if (notification.innerHTML == "Has Perdido...") {
            PreResult.innerHTML = "Derrota";
        } else{
            PreResult.innerHTML = "Victoria";
        }
        
    }
    activeWindows.innerHTML = 0;
    totalWindows.innerHTML = 0;
    countdown.innerHTML = num;
    notification.innerHTML = " ";
    let numInterval = setInterval(function () {
        --num;
        countdown.innerHTML = num;
        if (num == 0) {
            clearInterval(numInterval);
            clearInterval(windowInterval);
            notification.innerHTML = "Has Perdido...";
            windowCount = null;
            document.getElementById("start").value = "Reintentar";
        } else if (windowCount == 0) {
            clearInterval(numInterval);
            clearInterval(windowInterval);
            countdown.innerHTML = 0;
            notification.innerHTML = "Has Ganado!";
            windowCount = null;
            document.getElementById("start").value = "Start";
        }
    }, 1000);
    let windowInterval = setInterval(function () {
        if (windowCount == null) {
            windowCount = 0;
            totalCount = 0;
        }
        windowCount++;
        totalCount++;
        totalWindows.innerHTML = totalCount;
        activeWindows.innerHTML = windowCount;
        openwindow();
    }, 3000);
    document.getElementById("stop").onclick = function () {
        clearInterval(numInterval);
        clearInterval(windowInterval);
        notification.innerHTML = "Has Perdido...";
        windowCount = null;
        document.getElementById("start").value = "Reintentar";
    }
}

// Variable para almacenar el color del primer clic
let firstColor = null;
let firstWindow = null;
function click(color, window) {
    if (firstColor == null) {
        firstColor = color;
        firstWindow = window;
    } else {
        // DOS VENTANAS DISTINTAS DEL MISMO COLOR
        if (firstColor == color && firstWindow != window) {
            firstWindow.close();
            window.close();
            windowCount -= 2;
            document.getElementById("activeWindows").innerHTML = windowCount;
        } else if (firstColor === color && firstWindow === window) {
            //PULSAR DOS VECES EN LA MISMA VENTANA
            openwindow();
            windowCount++;
            totalCount++;
            document.getElementById("activeWindows").innerHTML = windowCount;
            document.getElementById("totalWindows").innerHTML = totalCount;
            let windowColor;
            let num = Math.floor(Math.random() * 4) + 1;
            let divColorName = window.document.getElementById("colorName");
            switch (num) {
                case 1:
                    windowColor = "RED";
                    window.document.body.style.backgroundColor = windowColor;
                    break;
                case 2:
                    windowColor = "GREEN";
                    window.document.body.style.backgroundColor = windowColor;
                    break;
                case 3:
                    windowColor = "LIGHTBLUE";
                    window.document.body.style.backgroundColor = windowColor;
                    break;
                case 4:
                    windowColor = "GREY";
                    window.document.body.style.backgroundColor = windowColor;
                    break;
            }
            divColorName.innerHTML = "<h1>" + windowColor + "</h1>";
        }
        // Restablecemos la variable para el próximo clic
        firstColor = null;
    }
}

function openwindow() {
    let randX = Math.floor(Math.random() * (window.screen.availWidth - 500));
    let randY = Math.floor(Math.random() * (window.screen.availHeight - 500));
    window.open("coloredWindow.html", "", "width=500,height=500,left=" + randX + ",top=" + randY);
}
