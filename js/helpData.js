import {helpData} from "../const/helpData.js";

const template = document.getElementById("helpCardTemplate");
const list = document.querySelector(".help__cardList");

export function renderHelpData() {
    helpData.forEach(item => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".help__icon").src = item.icon;
        clone.querySelector(".help__cardTitle").textContent = item.title;

        const descriptionContainer = clone.querySelector(".help__description");

        if (Array.isArray(item.description)) {
            descriptionContainer.innerHTML =
                `<ul class="help__list">
                    ${item.description.map(text => 
                        `<li class="help__listItem">${text}</li>`).join("")}
                </ul>`;
        } else {
            descriptionContainer.textContent = item.description;
        }

        list.appendChild(clone);
    });
}