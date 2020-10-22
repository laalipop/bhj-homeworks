let clickLeft = document.getElementsByClassName("slider__arrow_prev");
let clickRight = document.getElementsByClassName("slider__arrow_next");
let sliders = document.getElementsByClassName("slider__item");
let arrSliders = Array.from(sliders);
let nowSlider = 0;

function searchElements() {
    for (i = 0; i < arrSliders.length; i++) {
        if (arrSliders[i].classList.contains("slider__item_active")) {
            nowSlider = i;
        }
    }
}

searchElements();

function changeElements(directionClick) {
    let changeSlider;
    arrSliders[nowSlider].classList.remove("slider__item_active");
    if (directionClick == true) {
       
        if (nowSlider == 0) {
            changeSlider = arrSliders.length - 1;
        } else {
            changeSlider = nowSlider - 1;
        }

    } else {
        if (nowSlider == arrSliders.length - 1) {
            changeSlider = 0;
        } else {
            changeSlider = nowSlider + 1;
        }
        
    }
    arrSliders[changeSlider].classList.add("slider__item_active");
    nowSlider = changeSlider;
}

clickLeft.item(0).onclick = function () {
    changeElements(true);
}

clickRight.item(0).onclick = function () {
    changeElements(false);
}