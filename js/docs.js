import {docs} from "../const/docs.js";

const template = document.getElementById("docTemplate");
const container = document.querySelector(".docs__list"); // контейнер для всех docs

export function renderDocs(){
    docs.forEach(doc => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".docs__date").textContent = doc.date;
        clone.querySelector(".docs__itemTitle").textContent = doc.title;
        clone.querySelector(".docs__icon").src = doc.icon;


        container.appendChild(clone);
    });
}