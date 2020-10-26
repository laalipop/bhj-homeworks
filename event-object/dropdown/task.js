let dropdown = document.querySelector(".dropdown__value");
let dropdownList = document.querySelector(".dropdown__list");
let dropdownItem = document.getElementsByClassName("dropdown__link");
let arrDropdownItem = Array.from(dropdownItem);

function addRemoveList() {
    dropdownList.classList.toggle("dropdown__list_active");
}

dropdown.addEventListener('click', addRemoveList);


arrDropdownItem.forEach(element => {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        dropdown.textContent = element.textContent;
        addRemoveList();
    })

})