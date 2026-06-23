document.addEventListener('DOMContentLoaded', () => {

//Hamburger menu interactions (opening/closing mobile menu overlay; opening/closing accordion menu)

// Defines variables for hamburger button and mobile menu div.
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

// Shows or hides mobile menu when hamburger button is clicked (using "toggle" method).
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

// Defines variables for accordion button/list children (sub menu).
    const accordionBtn = document.querySelector('.accordion-btn');
    const subMenu = document.querySelector('.sub-menu')

// Show or hides submenu items when parent is clicked (also using "toggle")
    if (accordionBtn && subMenu) {
        accordionBtn.addEventListener('click', () => {
            subMenu.classList.toggle('hidden');
        });
    }
});