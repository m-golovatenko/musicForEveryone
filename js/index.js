import {renderSpecialists} from "./specialists.js";
import {renderNews} from "./news.js";
import {renderDocs} from "./docs.js";
import {renderHelpData} from "./helpData.js";
import {scrollOnLogo} from "./scroll.js";

renderHelpData()

renderSpecialists();

renderNews()

renderDocs()

scrollOnLogo()

document.querySelectorAll(".vk").forEach(el => {
    el.addEventListener("click", () => {
        window.open("https://vk.com/club232724284", "_blank");
    });
});

const burger = document.getElementById('burger')
const burgerBg = document.getElementById('burgerBg')
const nav = document.querySelector('.header__nav')
const contacts = document.querySelector('.header__contacts')

burger.addEventListener('click', () => {
    burgerBg.classList.toggle('active')
    nav.classList.toggle('active')
    contacts.classList.toggle('active')
})