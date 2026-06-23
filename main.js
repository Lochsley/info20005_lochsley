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

//PRODUCT INFORMATION 

// Array of products, each with an ID, brand, name, price etc.

const products = [
    {
        id: 1,
        brand: "Grateful Dead",
        name: "Fall Tour 1994 Tee",
        details: "Follow the Golden Brick Road.",
        size: "XL",
        colour: "Green",
        condition: "Great",
        price: 120,
        image: "images/product1_front.png"
    },
    {
        id: 2,
        brand: "Ozzy Osbourne",
        name: "Ozzfest 2005 Tee",
        details: "Original rock tee.",
        size: "L",
        colour: "Black",
        condition: "Great",
        price: 80,
        image: "images/product2.png"
    },
    {
        id: 3,
        brand: "Vintage Levi's",
        name: "1960s Type 3 70505 Big E",
        details: "Denim trucker jacket, 70505 Big E",
        size: "S",
        colour: "Blue denim",
        condition: "Good",
        price: 1295,
        image: "images/product3.png"
    },
    {
        id: 4,
        brand: "Vintage Levi's",
        name: "1950s 507XX Big E",
        details: "Rare second edition, 507XX BIG E",
        size: "M-L",
        colour: "Blue denim",
        condition: "Some damage",
        price: 4500,
        image: "images/product4.png"
    }
];

// Active shopping cart
let cart = [];

});