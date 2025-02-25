import { Category } from "./types/types.js";
import { render } from "./helpers/render-task.helper.js";
import { renderCategories } from "./helpers/render-categories.helper.js";
const input = document.querySelector(".input");
const addButton = document.querySelector(".add");
const taskList = document.querySelector(".tasks");
const categoriesList = document.querySelector(".categories");
let selectedCategory;
const categories = [
    Category.GENERAL,
    Category.WORK,
    Category.HOBBY,
    Category.GYM,
];
const tasks = [
    {
        name: "Wyrzucić śmieci",
        done: false,
        category: Category.GENERAL,
    },
    {
        name: "Pójść na siłkę",
        done: true,
        category: Category.GYM,
    },
    {
        name: "Nakarmić kota",
        done: true,
        category: Category.WORK,
    },
];
const addTask = (task) => {
    tasks.push(task);
};
const task = ["Zrobić klate", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDone = task[2];
addTask({ name: taskName, category: taskCategory, done: taskDone });
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    addTask({
        name: input.value,
        done: false,
        category: selectedCategory,
    });
    render(tasks, taskList);
});
renderCategories(categories, categoriesList, updateSelectedCategory);
render(tasks, taskList);
