let arr = Array.from(document.getElementsByClassName("menu__link"));

arr.forEach(element => {
    element.onclick = function () {
        
        if (element.nextElementSibling.classList.contains("menu_active")) {
            element.nextElementSibling.classList.remove("menu_active");
            return false;
        }

        if (element.nextElementSibling.classList.contains("menu_sub")) {
            element.nextElementSibling.classList.add("menu_active");
            return false;
        }       
        
    }
});

