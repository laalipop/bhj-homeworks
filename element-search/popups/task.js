
let elements = document.getElementsByClassName("modal__close");

elements.item(0).onclick = function () {
    elements.item(0).parentElement.parentElement.remove("modal_active");
}

elements.item(2).onclick = function () {
    elements.item(0).parentElement.parentElement.remove("modal_active");
}

document.getElementsByClassName("show-success").item(0).onclick = function () {
    elements.item(0).parentElement.parentElement.remove("modal_active");
    document.getElementById("modal_success").classList.add("modal_active");
} 

