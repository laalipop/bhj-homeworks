const rowInput = document.getElementById('task__input');
const tasks = document.querySelector('.tasks__list');
const clickButton = document.getElementById('tasks__add');

clickButton.addEventListener('click', () => {
    console.log('clickclick')
    if (rowInput.value !== '') {
        addNewTask(rowInput.value);
    }
});

rowInput.addEventListener('keypress', rowEnter);
tasks.addEventListener('click', deleteTask);

function rowEnter(event) {
    //event.preventDefault();
    if (rowInput.value !== '' && event.key === 'Enter') {
        addNewTask(rowInput.value);
    }
}

function addNewTask(text) {
    event.preventDefault();
    tasks.innerHTML +=
        `<div class="task">
            <div class="task__title">
                ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;
    rowInput.value = '';
}

function deleteTask() {
    let target = event.target;
    if (target.classList.contains('task__remove')) {
        target.parentElement.remove();
    }
}