let arrTabs = Array.from(document.querySelectorAll('.tab'));
let arrTabActive = Array.from(document.querySelectorAll('.tab__content'));
let numberItemActive;

function change() {
    
    arrTabs.forEach(element => {
        element.classList.remove('tab_active');
        event.target.classList.add('tab_active');
    });

    arrTabActive.forEach(element => {
        element.classList.remove('tab__content_active');
    });

    numberItemActive = arrTabs.indexOf(document.querySelector('.tab_active'));
    arrTabActive[numberItemActive].classList.add('tab__content_active');
}

arrTabs.forEach(element => {
    element.addEventListener('click', change);
});