document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.numberjs button');

  function updateCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    document.querySelectorAll('.numberjs span').forEach(function(span) {
      const quantity = parseInt(span.textContent);
      if (quantity > 0) {
        const productInfo = span.closest('.card, .main-product');
        const productName = productInfo.querySelector('h2').textContent;

        const item = document.createElement('li');
        item.textContent = `${productName} - Quantité: ${quantity}.`;
        cartItems.appendChild(item);
      }
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      const quantitySpan = event.target.closest('.numberjs').querySelector('span');

      let quantity = parseInt(quantitySpan.textContent,);

      if (event.target.textContent === '+') {
        quantity++;
        quantitySpan.textContent = quantity;
      } else if (event.target.textContent === '-') {
        if (quantity > 0) {
          quantity--;
          quantitySpan.textContent = quantity;
        } else {
          alert("Il n'y a aucun article de ce type dans votre panier.");
        }
      }

      updateCartItems();
    });
  });

 // Bouton pour vider le panier
  const clearCartButton = document.getElementById('clear-cart');

  clearCartButton.addEventListener('click', function() {
    const isConfirmed = confirm("Êtes-vous sûr de vouloir vider le panier ?");

    if (isConfirmed) {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
      document.querySelectorAll('.numberjs span').forEach(function(span) {
        span.textContent = '0';
      });
      alert("Le panier a été vidé.");
    }
  });

});
