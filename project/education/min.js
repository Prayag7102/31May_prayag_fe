let burger = document.querySelector('.burger')
let navbar = document.querySelector('.navbar')
let rightNav = document.querySelector('.rightNav')
let navlist = document.querySelector('.nav-list')

burger.addEventListener('click',()=>{
rightNav.classList.toggle('v-class');
navlist.classList.toggle('v-class');
navbar.classList.toggle('h-nav');
})