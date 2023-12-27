function addTask() {
    // first get the element we want to manipulate
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const bg = document.getElementById('bg');
    // it will store user value in new task
    const newTask = taskInput.value.trim();

    // here's condition if input field cant be empty than true part executed and it will create a list and also in the right side the remove button will aded so user can also remove items in the list 

    if (newTask !== '') { 
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span>${newTask}</span> &nbsp;&nbsp; &nbsp; &nbsp;<button onclick="removeTask(this)">Remove</button>`;
        taskList.appendChild(listItem);
        taskInput.value = '';
        bg.style.backgroundColor = 'black';
        listItem.style.color = 'white';

    } else {
        // when input field is empty it will give a alert to the user
        alert('Please enter a task!');
    }
}

function removeTask(element) {
    element.parentElement.remove();
}
