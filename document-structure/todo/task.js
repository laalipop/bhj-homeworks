const rowInput = document.getElementById('task__input');
const tasks = document.querySelector('.tasks__list');
let elementForClone = document.querySelector('.task');

rowInput.addEventListener('keypress', rowEnter);
tasks.addEventListener('click', deleteTask);

function rowEnter(event) {
    //event.preventDefault();
    if (rowInput.value !== '' && event.key === 'Enter') {
        console.log('Задача добавлена');
        addNewTask(rowInput.value);
        rowInput.value = '';
    }
}

function addNewTask(text) {
    let newTask;   
    newTask = elementForClone.cloneNode(true); 
    newTask.firstElementChild.innerText = text;
    tasks.appendChild(newTask);
}

function deleteTask() {
    let target = event.target;
    if (target.classList.contains('task__remove')) {
        target.parentElement.remove();
    }
}