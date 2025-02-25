import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        document.body.style.background = "red";
    }
    else if (category === Category.GYM) {
        console.log("witam na silce");
    }
    else if (category === Category.HOBBY) {
        alert("Essa");
    }
    else if (category === Category.WORK) {
        document.body.style.background = "green";
        console.log("witam w pracy");
        alert("do pracy");
    }
    else {
        console.log("nigdy tego nie zobaczysz");
    }
};
export const renderCategories = (categories, categoriesList, inputChangeCallback) => {
    categories.forEach((category) => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesList.appendChild(categoryElement);
    });
};
