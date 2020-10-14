function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let win = document.getElementById("dead");
let loss = document.getElementById("lost");

for (let i = 1; i <= 9; i++) {

    getHole(i).onclick = function () {
        getHole(i).className.includes('hole_has-mole') ? win.textContent++ : loss.textContent++;

        if (win.textContent == 10 || loss.textContent == 5) {
            alert(`new game`);
            win.textContent = 0;
            loss.textContent = 0;
        }
    }
}