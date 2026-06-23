document.addEventListener('DOMContentLoaded', () => {

// Defines variables for hamburger button and mobile menu div
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

// Shows or hides mobile menu when hamburger button is clicked (using "toggle" method)
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});