import { fetchProducts, fetchProductById } from "../services/fetch.js";
import { createProductCard } from "./productCard.js";

export let cartItems = new Set();
export let cartCount = 0;

export function addToCart(productId) {
  cartItems.add(productId);
  cartCount = cartItems.size;

  const cartCounterSpan = document.querySelector("#cart-counter");
  cartCounterSpan.textContent = cartCount.toString();
} 

export async function showCartItems() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = "";
  
    try {
      const products = await fetchProducts();
      const filteredProducts = products.filter((product) =>
        cartItems.has(product.id)
      );
  
      filteredProducts.forEach((product) => {
        const card = createProductCard(product);
        productContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  