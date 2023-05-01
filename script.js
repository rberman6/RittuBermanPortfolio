const hamburger = document.querySelector('.hamburgerMenu');
const mobileNav = document.querySelector('.mobileNavBar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('mobile');
});