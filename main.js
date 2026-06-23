document.addEventListener('DOMContentLoaded', () => {

// HAMBURGER MENU (mobile nav)
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

// ACCORDION MENU
    const accordionBtn = document.querySelector('.accordion-btn');
    const subMenu = document.querySelector('.sub-menu');

    if (accordionBtn && subMenu) {
        accordionBtn.addEventListener('click', () => {
            subMenu.classList.toggle('hidden');
        });
    }

// DESKTOP DROPDOWN MENU
const desktopClothingBtn = document.getElementById('desktop-clothing-btn');
const desktopDropdownMenu = document.getElementById('desktop-dropdown-menu');

if (desktopClothingBtn && desktopDropdownMenu) {
    desktopClothingBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Stops the page from jumping back to the top when you click the link!
        desktopDropdownMenu.classList.toggle('hidden');
    });
}

// CART OVERLAY ('Your Bag')
    const bagBtn = document.getElementById('bag-btn');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart-btn');

    if (bagBtn && cartOverlay) {
        bagBtn.addEventListener('click', () => {
            cartOverlay.classList.toggle('hidden');
        });
        
        if (closeCartBtn) {
            closeCartBtn.addEventListener('click', () => {
                cartOverlay.classList.add('hidden');
            });
        }
    }

// PRODUCT INFORMATION 
const products = [
    {
        id: 1,
        brand: "Grateful Dead",
        name: "Fall Tour 1994 Tee",
        details: "Follow the Golden Brick Road.",
        category: "tee",
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
        category: "tee",
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
        category: "jacket",
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
        category: "jacket",
        size: "M-L",
        colour: "Blue denim",
        condition: "Some damage",
        price: 4500,
        image: "images/product4.png"
    }
];

// CART LOGIC
let cart = JSON.parse(localStorage.getItem('cart')) || [];

updateCartUI();

function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');

    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your bag is currently empty.</p>';
        return;
    }

    cartItemsContainer.innerHTML = '';

    cart.forEach((item) => {
        const colourClass = (item.category === "jacket") ? "img-thumbnail-red" : "img-thumbnail-blue";
    
        const itemHTML = `
            <div class="cart-item-card">
                <img src="${item.image}" alt="${item.name}" class="img-thumbnail ${colourClass} cart-item-img">
                <div class="cart-item-details">
                    <h3>${item.brand}</h3>
                    <h4>${item.name}</h4>
                    <p>Size: ${item.size}</p>
                    <p>$${item.price}</p>
                </div>
            </div>
        `;

        cartItemsContainer.innerHTML += itemHTML;
    });
}

// PRODUCT ID FUNCTION
function addToCart(productId) {

// Check if product is already in cart; if so, block adding again (and alert user)    
    const alreadyInCart = cart.some(item => item.id === productId);

    if (alreadyInCart) {
        alert("This unique vintage piece is already in your bag!");
        return
    }

// Add item to cart
    const productToAdd = products.find(item => item.id === productId);

    if (productToAdd) {
        cart.push(productToAdd);
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        cartOverlay.classList.remove('hidden');
        updateCartUI(); 
    }
}

// BUTTON LISTENER
const addToBagBtn = document.getElementById('add-to-bag-btn');

if (addToBagBtn) {
    addToBagBtn.addEventListener('click', () => {
        const productId = parseInt(addToBagBtn.getAttribute('data-id'));
        addToCart(productId);
    });
}

// CART TOTAL BADGE

const cartBadge = document.getElementById('cart-badge');
    
if (cartBadge) {
    if (cart.length > 0) {
        cartBadge.textContent = cart.length;
        cartBadge.classList.remove('hidden'); 
    } else {
        cartBadge.classList.add('hidden'); 
    }
}

}); 