const form = document.getElementById('form');
const progress = document.getElementById('progress');
progress.value = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const request = new XMLHttpRequest;

    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
    request.upload.onprogress = function() {
        progress.value += 0.05;
    }

    request.upload.onloadend = function() {
        progress.value = 1;
    }
    
    request.send(formData);
})

