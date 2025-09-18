import { specialists } from "../const/specialists.js";

export function renderSpecialists() {
    const template = document.getElementById("specialistTemplate");
    const list = document.querySelector(".specialist__list");

    specialists.forEach((s) => {
        const clone = template.content.cloneNode(true);

        clone.querySelector(".specialist__img").src = s.img;
        clone.querySelector(".specialist__name").textContent = s.name;
        clone.querySelector(".specialist__job").textContent = s.job;

        const extraContainers = clone.querySelectorAll(".specialist__extraContainer");

        const activityList = extraContainers[0].querySelector(".specialist__extraList");
        s.activity.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("specialist__extraItem");
            li.textContent = item;
            activityList.appendChild(li);
        });

        const methodsList = extraContainers[1].querySelector(".specialist__extraList");
        s.methods.forEach((item) => {
            const li = document.createElement("li");
            li.classList.add("specialist__extraItem");
            li.textContent = item;
            methodsList.appendChild(li);
        });

        list.appendChild(clone);
    });
}


export function initSpecialistToggle() {
    const buttons = document.querySelectorAll('.specialist__more');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.closest('.specialist__card').querySelector('.specialist__extraContainers');
            content.classList.toggle('hidden');

            btn.textContent = content.classList.contains('hidden') ? 'Больше' : 'Скрыть';
        });
    });
}