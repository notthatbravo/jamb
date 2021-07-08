const hamburgerIcon = document.querySelector('#hamburger-menu-container');
const sidebar = document.querySelector('nav');
const line1 = document.querySelector('#line-1');
const line2 = document.querySelector('#line-2');
const line3 = document.querySelector('#line-3');

hamburgerIcon.addEventListener('click', toggleMenu);

function toggleMenu() {
    console.log('oppor');
    sidebar.classList.toggle('active');

    line1.classList.toggle('active');
    line2.classList.toggle('active');
    line3.classList.toggle('active');
}
