const product = JSON.parse(localStorage.getItem("selectedProduct"));
const container = document.getElementById("productDetails");

if (product) {
  container.innerHTML = `
    <img src="${product.imageUrl}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>${product.description}</p>
    <h4>$${product.price.toFixed(2)}</h4>
  `;
} else {
  container.innerHTML = "<p>No product selected.</p>";
}
