import { fetchProductById } from "../services/fetch.js";

export function showProduct(id) {
  const productId = parseInt(id);
  fetchProductById(productId)
    .then((product) => {
      const productContainer = document.getElementById("product-container");
      const selectProductContainer = document.getElementById("select-product");

      productContainer.style.display = "none";
      selectProductContainer.innerHTML = "";

      const card = document.createElement("div");
      card.classList.add("select-product");
      card.innerHTML = `
        <img class="image-product" src="${product.image}" alt="Product Image">
        <h5 class="title-product">${product.title}</h5>
        <p class="price-product"> $ ${product.price}</p>
        <p class="description-product">${product.description}</p>
        
        <form class="d-flex">
          <button class="btn btn-outline-dark" type="submit">
            <i class="bi-cart-fill me-1"></i>
            Add Cart
          </button>
          <button class="btn btn-outline-dark" type="submit">
            Comprar
          </button>
        </form>
        <p class="category-product">${product.category}</p>
      `;
      selectProductContainer.appendChild(card);
    });
}
