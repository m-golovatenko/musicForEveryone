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

        const activityContainer = extraContainers[0].querySelector(".specialist__extraList");
        activityContainer.innerHTML = s.activity.map(text => `
            <div class="specialist__extraItem">
                <span class="specialist__dot bodyS">•</span>
                <span class="specialist__text bodyS">${text}</span>
            </div>
        `).join("");

        const methodsContainer = extraContainers[1].querySelector(".specialist__extraList");
        methodsContainer.innerHTML = s.methods.map(text => `
            <div class="specialist__extraItem">
                <span class="specialist__dot bodyS">•</span>
                <span class="specialist__text bodyS">${text}</span>
            </div>
        `).join("");

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