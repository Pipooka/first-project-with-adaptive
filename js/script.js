window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger'),
    lang__ru = document.querySelector('.lang__ru'),
    lang__eng = document.querySelector('.lang__eng');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
        lang__ru.classList.toggle('lang__ru_active');
        lang__eng.classList.toggle('lang__eng_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
            lang__ru.classList.toggle('lang__ru_active');
            lang__eng.classList.toggle('lang__eng_active');
        })
    })
})