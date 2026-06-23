document.addEventListener('DOMContentLoaded', () => {

// HAMBURGER MENU (mobile nav)

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

// CART OVERLAY ('Your Bag')

// Defines variables for bag button, cart overlay div, close cart button
    const bagBtn = document.getElementById('bag-btn')
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');

// Shows or hides cart overlay when bag button is clicked (using "toggle" method)
    if (bagBtn && cartOverlay) {
    bagBtn.addEventListener('click', () => {
        cartOverlay.classList.toggle('hidden');
    });
    
// Hides the cart overlay when the close cart button is clicked (also using "toggle")
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => {
            cartOverlay.classList.add('hidden');
        });
    }
}

});