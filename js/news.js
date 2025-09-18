import { news } from "../const/news.js";

const newsList = document.querySelector(".news__content");
const template = document.getElementById("newsTemplate");
const dialog = document.getElementById("newsDialog");
const dialogTitle = dialog.querySelector(".dialog__title");
const dialogText = dialog.querySelector(".dialog__text");
const dialogClose = dialog.querySelector(".dialog__close");

export function renderNews() {
    news.forEach(item => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".news__title").textContent = item.title;
        clone.querySelector(".news__text").textContent = item.shortText;
        clone.querySelector(".news__date").textContent = item.date;
        clone.querySelector(".news__img").src = item.img;

        const button = clone.querySelector(".news__button");
        button.addEventListener("click", () => {
            dialogTitle.textContent = item.title;
            dialogText.textContent = item.fullText;
            dialog.showModal();
        });

        newsList.appendChild(clone);
    });

    dialogClose.addEventListener("click", () => {
        dialog.close();
    });
}