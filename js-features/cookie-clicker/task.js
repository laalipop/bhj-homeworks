const cookieCl = document.getElementById("cookie");
let counter = document.getElementById("clicker__counter");
let speedClick = document.getElementById("clicker__speed");

let differencesTime;
let lastTime = Date.now();
let sumClicks = 0;

cookieCl.onclick = function () {
    counter.textContent++;
    
    if ((counter.textContent % 2) !== 0) {
        cookieCl.width = 500;
    } else cookieCl.width = 200;

    let nowTime = Date.now();
    differencesTime = Math.abs(lastTime - nowTime) / 1000; 
    lastTime = nowTime;
    sumClicks = sumClicks + differencesTime;

    speedClick.textContent = sumClicks.toFixed(2) / counter.textContent;
};

// не работает как надо .toFixed(2) в 21 строке. Не понимаю почему 