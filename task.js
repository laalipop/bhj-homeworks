
let revealOne = document.querySelectorAll('.reveal').item(0);
let revealTwo = document.querySelectorAll('.reveal').item(1);

function showElement(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    let elementHeight = element.getBoundingClientRect().top - element.getBoundingClientRect().bottom;

    if (elementTop < viewportHeight) {
        element.classList.add('reveal_active');
    } 
    if (elementTop < elementHeight || elementTop > viewportHeight) {
        element.classList.remove('reveal_active');
    }
}

document.addEventListener("scroll", function () {
   showElement(revealOne);
}, false);

document.addEventListener("scroll", function () {
    showElement(revealTwo);
 }, false);
//document.addEventListener("scroll", showElement(reveal));