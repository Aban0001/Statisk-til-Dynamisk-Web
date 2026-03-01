"use strict"; /* Fanger Fejl Som Man Kan Se i Inspect*/

const productContainer = document.querySelector("main");

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProduct(producttsArr) {
  //   console.log("productArr", productsArr);
  productArr.forEach((product) => {
    console.log("product", product.id);

    productContainer.innerHTML += `<article class="smallProduct">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/1163.webp" alt="product image" />
        <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
        <p class="subtle">Tshirts | Nike</p>
        <p class="price">DKK <span>1595</span>,-</p>
        <div class="discounted">
          <p>Now DKK <span></span>,-</p>
          <p><span></span>%</p>
        </div>
        <a href="product.html">Read More</a>
      </article>`;
  });
}
