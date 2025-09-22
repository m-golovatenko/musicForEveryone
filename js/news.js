import { news } from "../const/news.js";

const newsList = document.querySelector(".news__content");
const template = document.getElementById("newsTemplate");
const dialog = document.getElementById("newsDialog");
const dialogTitle = dialog.querySelector(".dialog__title");
const dialogImage = dialog.querySelector(".dialog__img");
const dialogDate = dialog.querySelector(".dialog__date");
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
            dialogImage.src = item.img;
            dialogDate.textContent = item.date;

            dialogText.innerHTML = "";


            item.fullText.split("\n\n").forEach(paragraph => {
                if (paragraph.trim() !== "") {
                    const p = document.createElement("p");
                    p.textContent = paragraph;
                    p.style.marginBottom = "16px";
                    dialogText.appendChild(p);
                }
            });

            dialog.showModal();
        });

        newsList.appendChild(clone);
    });

    dialogClose.addEventListener("click", () => {
        dialog.close();
    });

    dialog.addEventListener("click", (e) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });
}