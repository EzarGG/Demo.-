let products = [
  { id: 1, name: 'Game Mod 1', description: 'Deskripsi Game Mod 1', price: 10000 },
  { id: 2, name: 'Tool 1', description: 'Deskripsi Tool 1', price: 20000 },
  { id: 3, name: 'Design 1', description: 'Deskripsi Design 1', price: 15000 },
  // Tambahkan produk lainnya sesuai kebutuhan
];
&nbsp;
&nbsp;

let cart = [];
&nbsp;
&nbsp;

function renderProducts(filter = 'all', filteredProducts = products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';
&nbsp;
&nbsp;

  const productsToDisplay = filter === 'all' ? products : filteredProducts;
&nbsp;
&nbsp;

  productsToDisplay.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p>Rp${product.price}</p>
      <button onclick="addToCart(${product.id})">Tambah ke Keranjang</button>
    `;
    productList.appendChild(productDiv);
  });
}
&nbsp;
&nbsp;

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  document.getElementById('cartCount').textContent = cart.length;
  showNotification(`${product.name} telah ditambahkan ke keranjang!`);
  updateCart();
}
&nbsp;
&nbsp;

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  let total = 0;
&nbsp;
&nbsp;

  cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <p>${item.name} - Rp${item.price}</p>
    `;
    cartItems.appendChild(itemDiv);
    total += item.price;
  });
&nbsp;
&nbsp;

  document.getElementById('cartTotal').textContent = total;
}
&nbsp;
&nbsp;

function toggleCart() {
  const cartPanel = document.getElementById('cartPanel');
  cartPanel.classList.toggle('active');
}
&nbsp;
&nbsp;

function checkout() {
  alert('Checkout via WhatsApp');
}
