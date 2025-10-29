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

// بيانات وهمية كأنها جاية من الـ Back-End
const products = [
  {
    id: 1,
    name: "Laptop Dell",
    price: 14500.0,
    imageUrl: "images/gallery-01.png"
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 750.0,
    imageUrl: "images/gallery-02.png"
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 1250.0,
    imageUrl: "images/gallery-03.jpg"
  },
  {
    id: 4,
    name: "Gaming Keyboard",
    price: 1100.0,
    imageUrl: "images/gallery-04.png"
  },
  {
    id: 5,
    name: "Tablet Pro",
    price: 9999.0,
    imageUrl: "images/gallery-01.png"
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    price: 450.0,
    imageUrl: "images/gallery-02.png"
  }
];

// دالة لعرض الكروت
function displayProducts() {
  productList.innerHTML = "";

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card", "product-card");

    card.innerHTML = `
      <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
      <div class="card-body text-center">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">$${product.price.toFixed(2)}</p>
      </div>
    `;

    productList.appendChild(card);
  });
}

// تشغيلها عند فتح الصفحة
window.addEventListener("DOMContentLoaded", displayProducts);
