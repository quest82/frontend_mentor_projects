const open = document.querySelector('.header__nav__menu')
const close = document.querySelector('.header--menu__container__close')
const menu = document.querySelector('.header--menu')

open.addEventListener('click', e => {
    menu.style.display = 'block'
})

close.addEventListener('click', e => {
        menu.style.display = 'none'
})