let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');

  cartItems.innerHTML = '';

  cart.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${entry.item} - R$ ${entry.price.toFixed(2)}`;
    cartItems.appendChild(listItem);
  });

  totalPriceElement.textContent = `Total: R$ ${totalPrice.toFixed(2)}`;
}
