// Create an array to store selected items
let cart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  // Check if the item is already in the cart
  const existingItem = cart.find(item => item.name === itemName);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name: itemName, price: itemPrice, quantity: 1 });
  }

  // Update the cart display
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartContainer = document.getElementById('cart-items');
  const totalPriceContainer = document.getElementById('total-price');

  // Clear the cart container
  cartContainer.innerHTML = '';

  let totalPrice = 0;

  // Display the items in the cart
  cart.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartContainer.appendChild(itemElement);
    totalPrice += item.price * item.quantity;
  });

  // Display the total price
  totalPriceContainer.innerHTML = `Total: $${totalPrice.toFixed(2)}`;
}

// Add event listeners to menu items
document.querySelectorAll('.item').forEach(item => {
  const itemName = item.querySelector('.flavor, .dessert').textContent.trim();
  const itemPrice = parseFloat(item.querySelector('.price').textContent.trim().slice(1));

  item.addEventListener('click', () => addToCart(itemName, itemPrice));
});
