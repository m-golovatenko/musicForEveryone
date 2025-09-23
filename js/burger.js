export function toggleBurger(){
    document.addEventListener('DOMContentLoaded', function() {
        const burger = document.getElementById('burger');
        const burgerMenu = document.querySelector('.header__burgerMenu');
        const header = document.querySelector('.header');
        const body = document.body;

        burger.addEventListener('click', function() {
            const isActive = burgerMenu.classList.contains('active');


            if (isActive) {
                body.classList.remove('menu-open');
                body.style.overflow = '';
            } else {
                body.classList.add('menu-open');
                body.style.overflow = 'hidden';
            }


            burger.classList.toggle('active');
            burgerMenu.classList.toggle('active');
            header.style.borderRadius = isActive ? '1.2rem' : '1.2rem 1.2rem 0 0';
            burger.src = isActive ? './images/icons/burger.svg' : './images/icons/close.svg';
        });


        document.querySelectorAll('.header__burger-nav a').forEach(link => {
            link.addEventListener('click', () => {
                setTimeout(() => {
                    burger.classList.remove('active');
                    burgerMenu.classList.remove('active');
                    header.style.borderRadius = '1.2rem';
                    body.classList.remove('menu-open');
                    body.style.overflow = '';
                    burger.src = './images/icons/burger.svg';
                }, 300);
            });
        });
    });
}