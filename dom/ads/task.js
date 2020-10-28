let rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let indexItem = 0;
let ttt= document.querySelector('.rotator__case')
function changeItem() {

    if (indexItem == rotatorCase.length - 1) {
        rotatorCase[indexItem].classList.remove('rotator__case_active');
        indexItem = 0;
        rotatorCase[indexItem].classList.add('rotator__case_active');
    } else {
        rotatorCase[indexItem].classList.remove('rotator__case_active');
        rotatorCase[indexItem + 1].classList.add('rotator__case_active');
        
        indexItem++;
    }
}

setInterval(changeItem, 1000);

