let dropEl = document.getElementById('drop-btn')
let navName = document.getElementById('header-name')
let dropBtnEl = document.getElementById('drop-btn')

dropBtnEl.addEventListener('click', function(){
    const bodyEl = document.querySelector('.body-style')
    const navEl = document.querySelector('.nav-style')
    const aboutEl = document.querySelector('.about-me')

    if (navName.textContent === 'website in beta...')
     {
        navName.textContent = 'welcome...'
 
    } else {
        navName.textContent = 'website in beta...'

    }

    navEl.classList.toggle('party-mode-navbar')
    bodyEl.classList.toggle('party-mode-body')
    aboutEl.classList.toggle('party-mode-navbar')
}
)

        

        