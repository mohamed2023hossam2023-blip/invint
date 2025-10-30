// التحكم في السلايدر
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const scrollStep = 250;

nextBtn.addEventListener('click', () => {
  slider.scrollBy({ left: scrollStep, behavior: 'smooth' });
});
prevBtn.addEventListener('click', () => {
  slider.scrollBy({ left: -scrollStep, behavior: 'smooth' });
});

// عنصر الكروت داخل السكشن
const productList = document.getElementById("productList");

// بيانات ثابتة (بدون API)
const products = [
  { id: 1, name: "Laptop Dell", price: 14500, imageUrl: "../images/gallery-01.png", description: "High-performance laptop for work and gaming." },
  { id: 2, name: "Wireless Headphones", price: 750, imageUrl: "../images/gallery-02.png", description: "Enjoy premium sound quality wirelessly." },
  { id: 3, name: "Smart Watch", price: 1250, imageUrl: "../images/gallery-03.jpg", description: "Track your fitness and notifications easily." },
  { id: 4, name: "Gaming Keyboard", price: 1100, imageUrl: "../images/gallery-04.png", description: "RGB mechanical keyboard for gamers." },
  { id: 5, name: "Tablet Pro", price: 9999, imageUrl: "../images/gallery-01.png", description: "A powerful tablet for all your creative needs." },
  { id: 6, name: "Bluetooth Speaker", price: 450, imageUrl: "../images/gallery-02.png", description: "Portable speaker with rich sound." }
];

// دالة لعرض الكروت
function displayProducts() {
  productList.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card", "product-card");
    card.style.width = "16rem";
    card.style.cursor = "pointer";

    card.innerHTML = `
      <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
      <div class="card-body text-center">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">$${product.price.toFixed(2)}</p>
      </div>
    `;

    // لما تضغط على الكارت
    card.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      window.location.href = "prodact.html";
    });

    productList.appendChild(card);
  });
}

window.addEventListener("DOMContentLoaded", displayProducts);
