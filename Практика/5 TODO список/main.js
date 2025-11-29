const submitForm = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const taskList = document.getElementById('tasks__list');

submitForm.onsubmit = function (event) {
    event.preventDefault();
    if (input.value.trim()) {
        taskList.insertAdjacentHTML("beforeend", `<div class="task">
                                                              <div class="task__title">
                                                                ${input.value}
                                                              </div>
                                                              <a href="#" class="task__remove">&times;</a>
                                                            </div>`);
        // const remove = taskList.getElementsByClassName('task__remove');
        // remove[remove.length - 1].onclick = function () {
        //     this.closest('.task').remove();
        // }
        input.value = '';
    }
}

taskList.onclick = function (event) {
    if (event.target.closest('a.task__remove') === event.target) {
        event.target.closest('.task').remove();
    }
}