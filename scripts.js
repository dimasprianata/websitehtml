let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rp${item.price.toLocaleString()}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Rp${total.toLocaleString()}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Keranjang kosong!");
    return;
  }
  alert("Terima kasih! Pesanan Anda sedang diproses.");
  cart = [];
  updateCart();
}