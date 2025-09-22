import {docs} from "../const/docs.js";

const template = document.getElementById("docTemplate");
const container = document.querySelector(".docs__list");

export function renderDocs(){
    docs.forEach(doc => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".docs__date").textContent = doc.date;
        clone.querySelector(".docs__itemTitle").textContent = doc.title;
        clone.querySelector(".docs__icon").src = doc.icon;

        const viewBtn = clone.querySelector(".docs__view");
        const downloadBtn = clone.querySelector(".docs__download");


        viewBtn.addEventListener("click", () => {
            window.open(doc.file, "_blank");
        });


        downloadBtn.addEventListener("click", () => {
            const a = document.createElement("a");
            a.href = doc.file;
            a.download = doc.title;
            a.click();
        });

        container.appendChild(clone);
    });
}