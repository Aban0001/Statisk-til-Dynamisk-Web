"use strict"; /* Fanger Fejl Som Man Kan Se i Inspect*/

const productContainer = document.querySelector("main");

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productsArr) {
  productContainer.innerHTML = "";

  productsArr.forEach((product) => {
    productContainer.innerHTML += `
      <article class="smallProduct">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
        <h3>${product.productdisplayname}</h3>
        <p class="subtle">${product.articletype} | ${product.brandname}</p>
        <p class="price">DKK <span>${product.price}</span>,-</p>
        <a href="product.html?id=${product.id}">Read More</a>
      </article>
    `;
  });
}
