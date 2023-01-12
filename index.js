let dropEl = document.getElementById('drop-btn')
let navName = document.getElementById('header-name')
let dropBtnEl = document.getElementById('drop-btn')

dropBtnEl.addEventListener('click', function(){
    
    if (navName.textContent === 'PARTY TIME!!') {
        navName.textContent = 'welcome...'
    } else {
        navName.textContent = 'PARTY TIME!!'
    }
}
)