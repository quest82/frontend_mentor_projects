const allReadBtn = document.querySelector('.notifications__header__clearAll')
const unreadNotifications = document.querySelectorAll('.notifications__section__banner--unread')
const notificationDot = document.querySelectorAll('.redDot')

allReadBtn.addEventListener('click', e => {
    unreadNotifications.forEach(notice => {
        notice.classList.remove('notifications__section__banner--unread')       
    })

    notificationDot.forEach(dot => {
        dot.remove()
    })

    e.preventDefault()
})