document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const newTaskInput = document.getElementById('new-task');
        const newTaskText = newTaskInput.value;

        if (newTaskText !== '') {
            const newTask = document.createElement('li');
            newTask.textContent = newTaskText;

            const completeButton = document.createElement('button');
            completeButton.textContent = 'done';
            completeButton.addEventListener('click', function () {
                newTask.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'delete';
            deleteButton.addEventListener('click', function () {
                taskList.removeChild(newTask);
            });

            newTask.appendChild(completeButton);
            newTask.appendChild(deleteButton);
            taskList.appendChild(newTask);

            newTaskInput.value = '';
        }
    });
});
