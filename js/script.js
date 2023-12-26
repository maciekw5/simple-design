const nav = document.querySelector('.navbar-collapse')

nav.addEventListener('click', () => {

    if(nav.classList.contains('show')) {
        nav.classList.remove('show')
    }

})