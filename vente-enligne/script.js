// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemCountSpan = document.getElementById('cart-item-count');

    // Fonction pour charger le panier depuis le LocalStorage
    function getCart() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    // Fonction pour sauvegarder le panier dans le LocalStorage
    function saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Fonction pour mettre à jour le compteur d'articles dans le header
    function updateCartItemCount() {
        const cart = getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (totalItems > 0) {
            cartItemCountSpan.textContent = totalItems;
            cartItemCountSpan.style.display = 'inline'; // Afficher le compteur
        } else {
            cartItemCountSpan.style.display = 'none'; // Cacher le compteur si le panier est vide
        }
    }

    // Ajouter un écouteur d'événement à chaque bouton "Ajouter au panier"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.dataset.name;
            const productPrice = parseFloat(event.target.dataset.price);

            let cart = getCart();

            // Vérifier si l'article est déjà dans le panier
            const existingItem = cart.find(item => item.name === productName);

            if (existingItem) {
                // Si l'article existe, augmenter la quantité
                existingItem.quantity++;
            } else {
                // Sinon, ajouter le nouvel article
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            saveCart(cart); // Sauvegarder le panier mis à jour
            updateCartItemCount(); // Mettre à jour le compteur
            alert(`${productName} a été ajouté à votre panier !`); // Message de confirmation
        });
    });

    // Mettre à jour le compteur au chargement de la page
    updateCartItemCount();
});