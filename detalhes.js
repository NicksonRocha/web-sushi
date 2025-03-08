
const params = new URLSearchParams(window.location.search);
const name = params.get('name');
const price = params.get('price');
const description = params.get('description');
const image = params.get('image');

document.getElementById('itemName').textContent = decodeURIComponent(name);
document.getElementById('itemPrice').textContent = `R$ ${price}`;
document.getElementById('itemDescription').textContent = decodeURIComponent(description);

document.getElementById('itemImage').src = `public/${image}`;
document.getElementById('itemImage').alt = name;
