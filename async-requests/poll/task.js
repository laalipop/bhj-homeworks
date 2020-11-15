const poolTitle = document.querySelector('.poll__title');
const poolAnswers = document.querySelector('.poll__answers');

const request = new XMLHttpRequest;
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();

request.addEventListener('readystatechange', () => {

    if (request.readyState == request.DONE) {
        const obj = JSON.parse(request.responseText);
        const arrAnswers = obj.data.answers;

        poolTitle.insertAdjacentHTML('afterbegin', obj.data.title);

        arrAnswers.forEach(element => {
            poolAnswers.innerHTML += 
            `<button class="poll__answer" style = "margin-right: 10px">${element}</button>`
        });        
    }    
})

poolAnswers.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!')
    })