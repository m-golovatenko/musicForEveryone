const contactSelectors = [
    '.header__contacts .header__contactLink a, .header__contacts .header__contactLink p',
    '.header__burger-contacts .header__burger-contactLink a, .header__burger-contacts .header__burger-contactLink p',
    '.hero__contactLinkList .hero__contactLink a, .hero__contactLinkList .hero__contactLink p',
    '.footer__contactLinkList .footer__contactLink a, .footer__contactLinkList .footer__contactLink p'
];

export function copyLinks() {
    contactSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.addEventListener('click', (e) => {
                const isMobile = window.innerWidth < 1024;
                if (isMobile) return;

                e.preventDefault();

                const text = el.textContent.trim();

                navigator.clipboard.writeText(text).then(() => {
                    const originalText = el.textContent;
                    el.textContent = 'Скопировано';

                    setTimeout(() => {
                        el.textContent = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Не удалось скопировать:', err);
                });
            });
        });
    });
}