"use strict"; /* Fanger Fejl Som Man Kan Se i Inspect*/

const productContainer = document.querySelector("#productContainer");
const params = new URLSearchParams(window.location.search);

const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); /* Hjælper med at tjekke fejl */
    productContainer.innerHTML = `
      <figure>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Produktbillede" class="productImage" />
        <!-- <span class="saleLabel">Udsalg!</span> -->
      </figure>

      <section class="productDetails">
        <h2 class="productName">Sahara Team India Fanwear Round Neck Jersey</h2>
        <div>
          <p class="articleType"><span class="bold">Type:</span>${data.articletype}</p>
          <p class="productCategory"><span class="bold">Kategori:</span> ${data.category}</p>
          <p class="productPrice"><span class="bold">Pris:</span> ${data.price},-</p>
        </div>
        <label class="sizeSelector">
          Choose a size
          <select>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </label>
        <button class="buyButton">Køb nu</button>
      </section>

`;
  });
