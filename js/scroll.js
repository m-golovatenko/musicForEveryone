function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

export function scrollOnLogo() {
    document.addEventListener('DOMContentLoaded', function() {

        const headerLogo = document.getElementById('header-logo');
        const footerLogo = document.getElementById('footer-logo');

        if (headerLogo) {
            headerLogo.addEventListener('click', scrollToTop);
        }

        if (footerLogo) {
            footerLogo.addEventListener('click', scrollToTop);
        }

    });
}