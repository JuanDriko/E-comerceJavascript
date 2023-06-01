import { fetchProducts } from "../services/fetch.js";
import { createProductCard } from "./productCard.js";

export function bringProducts() {
  fetchProducts()
    .then((products) => renderProducts(products));
}

export function renderProducts(products) {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  products.forEach((product) => {
    const card = createProductCard(product);
    productContainer.appendChild(card);
  });
}