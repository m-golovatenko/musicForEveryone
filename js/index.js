import {initSpecialistToggle, renderSpecialists} from "./specialists.js";
import {renderNews} from "./news.js";
import {renderDocs} from "./docs.js";
import {renderHelpData} from "./helpData.js";
import {scrollOnLogo} from "./scroll.js";

renderHelpData()

renderSpecialists();

initSpecialistToggle();

renderNews()

renderDocs()

scrollOnLogo()

document.querySelectorAll(".vk").forEach(el => {
    el.addEventListener("click", () => {
        window.open("https://vk.com/musicandsound", "_blank");
    });
});