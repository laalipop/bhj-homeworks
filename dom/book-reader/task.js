const clickFS = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

function changeFontSize(element, arr) {    
    arr.forEach(element => {
        element.classList.remove('font-size_active');
    });    
    event.target.classList.add('font-size_active');

    if (element.classList.contains('font-size_big')) {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    } 
    else if (element.classList.contains('font-size_small')) {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    } 
    else {
        book.classList.remove('book_fs-small');
        book.classList.remove('book_fs-big');
    }
}

clickFS.forEach(element => {
    element.addEventListener('click', function(event) {
        
        event.preventDefault();
        changeFontSize(element, clickFS);
    })
})