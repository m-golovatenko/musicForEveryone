import { news } from "../const/news.js";

const newsList = document.querySelector(".news__content");
const template = document.getElementById("newsTemplate");
const dialog = document.getElementById("newsDialog");
const dialogTitle = dialog.querySelector(".dialog__title");
const dialogImage = dialog.querySelector(".dialog__img");
const dialogDate = dialog.querySelector(".dialog__date");
const dialogText = dialog.querySelector(".dialog__text");
const dialogClose = dialog.querySelector(".dialog__close");

let scrollPosition = 0;

function disableScroll() {
    scrollPosition = window.pageYOffset;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
}

function enableScroll() {
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
}

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

            disableScroll();
            dialog.showModal();
        });

        newsList.appendChild(clone);
    });

    const closeDialog = () => {
        dialog.close();
        enableScroll();
    };

    dialogClose.addEventListener("click", closeDialog);
}