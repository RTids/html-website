let dropEl = document.getElementById('drop-btn')
let navName = document.getElementById('header-name')
let dropBtnEl = document.getElementById('drop-btn')

dropBtnEl.addEventListener('click', function(){
    const bodyEl = document.querySelector('.body')
    const navEl = document.querySelector('nav')
    if (navName.textContent === 'party time...') {
        navName.textContent = 'welcome...'
        navEl.style.backgroundColor = 'rgb(27, 26, 26)'
        bodyEl.style.backgroundColor = 'rgb(33, 32, 32)'
    } else {
        navName.textContent = 'party time...'
        navEl.style.backgroundColor = 'lightblue'
        bodyEl.style.backgroundColor = 'pink'
    }
}
)