var burger_menu = document.querySelector('.menu_toggle.open')
var close_menu = document.querySelector('.menu_toggle_close')
var overlay = document.querySelector('.overlay')
var menu = document.querySelector('.navbar')

burger_menu.addEventListener('click', ()=>{
    menu.classList.add('active')
    overlay.classList.add('active')
})

close_menu.addEventListener('click', ()=>{
    menu.classList.remove('active')
    overlay.classList.remove('active')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('active')
    overlay.classList.remove('active')
})