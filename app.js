const toDoList = document.getElementById('toDoList');
const inputToDo = document.getElementById('todo');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clear-completed');
const removeButton = document.getElementById('remove-all');


addButton.addEventListener('click', function () {
    const newLi = document.createElement('li');
    newLi.innerText = inputToDo.value;
    toDoList.appendChild(newLi);
    inputToDo.value = '';

    newLi.addEventListener('click', function () {
        newLi.classList.add('completed')
    })

    newLi.addEventListener('dblclick', function () {
        toDoList.removeChild(newLi)
    })
})


removeButton.addEventListener('click', function () {
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild)
    }
})

clearButton.addEventListener('click', function () {
    const completed = document.getElementsByClassName('completed');
    const completedArray = Array.from(completed);
    for (let i = 0; i < completedArray.length; i++) {
        completedArray[i].remove()
    }
})

