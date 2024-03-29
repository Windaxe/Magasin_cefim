document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.numberjs button');

  // Fonction pour mettre à jour les articles du panier
  function updateCartItems() {
    const cartItems = document.getElementById('cart-items'); // On récupère la liste des articles
    cartItems.innerHTML = ''; // On la vide
    document.querySelectorAll('.numberjs span').forEach(function(span) { // Pour chaque span avec la classe numberjs
      const quantity = parseInt(span.textContent); // On récupère la quantité convertie en integer
      if (quantity > 0) { // Si la quantité est supérieure à 0
        const productInfo = span.closest('.card, .main-product'); // On récupère les informations du produit
        const productName = productInfo.querySelector('h2').textContent; // On récupère le nom du produit

        const item = document.createElement('li'); // On crée un élément li
        item.textContent = `${productName} - Quantité: ${quantity}.`; // On affiche le nom du produit et la quantité
        cartItems.appendChild(item); // On ajoute l'élément à la liste
      }
    });
  }

  // Boutons pour ajouter ou retirer des articles du panier
  buttons.forEach(function (button) { // Pour chaque bouton
    button.addEventListener('click', function (event) { // On écoute le clic
      const quantitySpan = event.target.closest('.numberjs').querySelector('span');
      // On récupère le span le plus proche du bouton avec la classe numberjs

      let quantity = parseInt(quantitySpan.textContent,); // On récupère la quantité actuelle

      if (event.target.textContent === '+') { // Si le bouton est un +
        quantity++;
        quantitySpan.textContent = quantity; // On incrémente la quantité
      } else if (event.target.textContent === '-') { // Si le bouton est un -
        if (quantity > 0) {
          quantity--;
          quantitySpan.textContent = quantity; // On décrémente la quantité
        } else {
          alert("Il n'y a aucun article de ce type dans votre panier."); // Sinon on affiche une alerte
        }
      }

      updateCartItems(); // On met à jour les articles du panier
    });
  });

 // Bouton pour vider le panier
  const clearCartButton = document.getElementById('clear-cart');

  clearCartButton.addEventListener('click', function() {
    const isConfirmed = confirm("Êtes-vous sûr de vouloir vider le panier ?");

    if (isConfirmed) { // Si l'utilisateur confirme
      const cartItems = document.getElementById('cart-items'); // On récupère la liste des articles
      cartItems.innerHTML = ''; // On la vide
      document.querySelectorAll('.numberjs span').forEach(function(span) { // Pour chaque span
        span.textContent = '0'; // On remet la quantité à 0
      });
      alert("Le panier a été vidé.");
    }
  });

});
