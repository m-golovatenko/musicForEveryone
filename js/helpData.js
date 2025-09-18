import {helpData} from "../const/helpData.js";

const template = document.getElementById("helpCardTemplate");
const list = document.querySelector(".help__cardList");

export function renderHelpData() {
    helpData.forEach(item => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".help__cardTitle").textContent = item.title;
        clone.querySelector(".help__description").textContent = item.description;
        clone.querySelector(".help__icon").src = item.icon;

        list.appendChild(clone);
    });
}