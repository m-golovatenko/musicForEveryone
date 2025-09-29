import {initSpecialistToggle, renderSpecialists} from "./specialists.js";
import {renderNews} from "./news.js";
import {renderDocs} from "./docs.js";
import {renderHelpData} from "./helpData.js";
import {scrollOnLogo} from "./scroll.js";
import {toggleBurger} from "./burger.js";
import {copyLinks} from "./links.js";

renderHelpData()

renderSpecialists();

initSpecialistToggle()

renderNews()

renderDocs()

toggleBurger()

scrollOnLogo()

copyLinks()

document.querySelectorAll(".vk").forEach(el => {
    el.addEventListener("click", () => {
        window.open("https://vk.com/club232724284", "_blank");
    });
});