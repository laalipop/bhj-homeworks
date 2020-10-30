const interestsMain = document.querySelector('.interests_main');
const check = document.querySelectorAll('.interest__check');

interestsMain.addEventListener('change', event => {
    const parentItem = event.target.parentElement;
    const childItem = Array.from(parentItem.nextElementSibling.querySelectorAll('.interest__check'));

    childItem.forEach(element => {
        if (event.target.checked) {
            element.checked = true;
        } else element.checked = false;
    })
})
