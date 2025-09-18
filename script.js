document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.specialist__more');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!btn) return;

            const content = btn.closest('.specialist__card').querySelector('.specialist__extraContainers');
            content.classList.toggle('hidden');

            if (content.classList.contains('hidden')) {
                btn.textContent = 'Больше';
            } else {
                btn.textContent = 'Скрыть';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('newsDialog');
    const titleEl = dialog.querySelector('.dialog__title');
    const textEl = dialog.querySelector('.dialog__text');
    const closeBtn = dialog.querySelector('.dialog__close');

    document.querySelectorAll('.news__button').forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.news__card');
            titleEl.textContent = card.querySelector('.news__title').textContent;
            textEl.textContent = card.querySelector('.news__text').textContent;
            dialog.showModal();
        });
    });

    closeBtn.addEventListener('click', () => dialog.close());

    dialog.addEventListener('click', (e) => {
        if (e.target === dialog) {
            dialog.close();
        }
    });
});