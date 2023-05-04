// ***--- MOBILE HAMBUGER MENU FUNCTION ---*** //
const hamburger = document.querySelector('.hamburgerMenu');
const mobileNav = document.querySelector('.mobileNavBar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('mobile');
});

// ***--- CLEAR FORM ON SUBMISSION ---*** //
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}