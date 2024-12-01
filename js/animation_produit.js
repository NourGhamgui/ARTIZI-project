document.querySelectorAll('.product').forEach(product => {
    const img = product.querySelector('img');
    product.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)';
    });
    product.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)';
    });
});

// Effet de "fade-in" pour les produits à l'apparition
const products = document.querySelectorAll('.product');
const fadeInOnScroll = () => {
    products.forEach(product => {
        if (product.getBoundingClientRect().top < window.innerHeight) {
            product.classList.add('in-view');
        }
    });
};
window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll(); // Pour les produits déjà visibles au chargement de la page

// Effet de "Hover Glow" sur les produits
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.style.boxShadow = '0 0 15px rgba(0, 255, 255, 0.6)';
    });
    product.addEventListener('mouseleave', () => {
        product.style.boxShadow = 'none';
    });
});

// Animation de texte dynamique (Typing effect) sur le titre "Our Accessories"
const title = document.querySelector('h1');
const text = title.innerText;
title.innerText = '';

let i = 0;
function typeWriter() {
    if (i < text.length) {
        title.innerText += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
window.onload = typeWriter;

// Animation du bouton "Make an Order"
const orderButton = document.querySelector('.order-button button');
orderButton.addEventListener('mouseenter', () => {
    orderButton.style.transform = 'scale(1.1)';
    orderButton.style.backgroundColor = '#4a6c9a';
});
orderButton.addEventListener('mouseleave', () => {
    orderButton.style.transform = 'scale(1)';
    orderButton.style.backgroundColor = '#5784BD';
});

// Effet de "Card Flip" pour afficher plus d'informations sur chaque produit
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseenter', () => {
        const productInner = product.querySelector('.product-inner');
        productInner.style.transform = 'rotateY(180deg)';
    });
    product.addEventListener('mouseleave', () => {
        const productInner = product.querySelector('.product-inner');
        productInner.style.transform = 'rotateY(0deg)';
    });
});