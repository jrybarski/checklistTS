import { Category } from "../types/types.js";

const handleCategoryChange = (category: Category) => {
  if (category === Category.GENERAL) {
    document.body.style.background = "red";
  } else if (category === Category.GYM) {
    console.log("witam na silce");
  } else if (category === Category.HOBBY) {
    alert("Essa");
  } else if (category === Category.WORK) {
    document.body.style.background = "green";
    console.log("witam w pracy");
    alert("do pracy");
  } else {
    console.log("nigdy tego nie zobaczysz");
  }
};

export const renderCategories = (
  categories: Category[],
  categoriesList: HTMLElement,
  inputChangeCallback: (category: Category) => void
) => {
  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");

    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
      inputChangeCallback(category);
      handleCategoryChange(category);
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);
    categoriesList.appendChild(categoryElement);
  });
};
