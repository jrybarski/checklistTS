import {Task} from "../types/types"


export const render = (tasks: Task[], taskList: HTMLElement) => {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const taskElement: HTMLElement = document.createElement("li");
        if(task.category) {
            taskElement.classList.add(task.category);
        }
        const id:string = `task-${index}`;
        
        const labelElement: HTMLLabelElement = document.createElement("label");
        labelElement.innerHTML = task.name;
        labelElement.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = task.name;
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener('change', () => {
            task.done = !task.done;
        })

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);

        taskList.appendChild(taskElement);
    })
}