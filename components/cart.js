import { fetchProducts, fetchProductById } from "../services/fetch.js";
import { createProductCard } from "./productCard.js";

export let cartItems = [];
export let cartCount = 0;

export function addToCart(productId) {
  cartItems.push(productId);
  cartCount++;

  const cartCounterSpan = document.querySelector("#cart-counter");
  cartCounterSpan.textContent = cartCount.toString();
}

export function showCartItems() {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  fetchProducts()
    .then((products) => {
      const filteredProducts = products.filter((product) =>
        cartItems.includes(product.id)
      );

      filteredProducts.forEach((product) => {
        const card = createProductCard(product);
        productContainer.appendChild(card);
      });
    });
}

