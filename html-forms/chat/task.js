const chatSide = document.querySelector('.chat-widget__side');
const chatInput = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const botAnswer = [
    'Все операторы заняты. Не ждите.',
    'Такая ситуация в стране.',
    'Спасибо. И Вам.',
    'Мы хотим стать лучше.',
    'Ваше мнение очень важно для нас. Можете оценить нашу работу на высший балл.'
];

let flag = false;


function sendNoEmptyMess(event) {
    if (event.key === 'Enter' && chatInput.value !== '') {

        flag = true;

        messages.innerHTML +=
            `<div class='message message_client'>
            <div class='message__time'>${new Date().getHours()}:${new Date().getMinutes()}</div>
            <div class='message__text'>${chatInput.value}
            </div>
        </div>`;
        chatInput.value = '';

        messages.innerHTML +=
            `<div class='message'>
            <div class='message__time'>${new Date().getHours()}:${new Date().getMinutes()}</div>
            <div class='message__text'>${botAnswer[Math.floor(Math.random() * 5)]}
            </div>
        </div>`;

        messages.lastElementChild.scrollIntoView();

    }
}


chatSide.addEventListener('click', () => {
    document.querySelector('.chat-widget').classList.add('chat-widget_active');
})

chatInput.addEventListener('keydown', sendNoEmptyMess);

setInterval(addQuestion, 30000);

function addQuestion(event) {
    if (flag == false) {
            messages.innerHTML +=
            `<div class='message'>
            <div class='message__time'>${new Date().getHours()}:${new Date().getMinutes()}</div>
            <div class='message__text'>У Вас все хорошо!</div>
        </div>`;
    }
    flag = false;
    messages.lastElementChild.scrollIntoView();
}