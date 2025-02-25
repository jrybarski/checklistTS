import { Task, Category } from "./types/types.js";
import { render } from "./helpers/render-task.helper.js";
import { renderCategories } from "./helpers/render-categories.helper.js";

const input: HTMLInputElement = document.querySelector(".input");
const addButton: HTMLButtonElement = document.querySelector(".add");
const taskList: HTMLElement = document.querySelector(".tasks");
const categoriesList: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category;

const categories: Category[] = [
  Category.GENERAL,
  Category.WORK,
  Category.HOBBY,
  Category.GYM,
];

const tasks: Task[] = [
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

const addTask = (task: Task) => {
  tasks.push(task);
};

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ["Zrobić klate", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDone = task[2];

addTask({ name: taskName, category: taskCategory, done: taskDone });

const updateSelectedCategory = (newCategory: Category) => {
  selectedCategory = newCategory;
};

addButton.addEventListener("click", (event: Event) => {
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
