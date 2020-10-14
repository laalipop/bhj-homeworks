// Задача countdown
const changeText = function () {
    let changeTimer = document.getElementById("timer");
    changeTimer.textContent -= 1;

    if (changeTimer.textContent == 0) {
        
        alert("Вы победили в конкурсе!");
        clearTimeout(stop);
        newHref.click(); // для задания 1.3
    }
}

const stop = setInterval(changeText, 1000);


// Задача countdown#2
// let hours = 0;
// let minutes = 0;
// let seconds = 5;
// let hour;
// let minute;
// let second;

// function startTime() {
//     let ourTime = document.getElementById("timer");
    
//     if (hours == 0 && seconds == 0 && minutes == 0) {
//         alert("Вы победили в конкурсе!");
//         clearTimeout(stop);
//     }

//     if (seconds < 0) {
//         minutes--;
//         seconds = 59;
//     }

//     if (minutes < 0) {
//         hours--;
//         minutes = 59;
//     }

//     hour = hours < 10 && hours >= 0 ? "0" + hours : hours;
//     minute = minutes < 10 && minutes >= 0 ? "0" + minutes : minutes;
//     second = seconds < 10 && seconds >= 0 ? "0" + seconds : seconds;
//     ourTime.innerHTML = hour + ":" + minute + ":" + second;
//     seconds--;
// }

// const stop = setInterval(startTime, 1000);