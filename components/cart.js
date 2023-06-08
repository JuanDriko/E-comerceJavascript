import { fetchProducts } from "../services/fetch.js";
import { createProductCard } from "./productCard.js";

export let cartItems = {};
export let cartCount = 0;

export function addToCart(productId, quantity) {
    if (!cartItems.hasOwnProperty(productId)) {
      cartItems[productId] = quantity;
      cartCount++;
    }
  
    const cartCounterSpan = document.querySelector("#cart-counter");
    cartCounterSpan.textContent = cartCount.toString();
  }
  

export async function showCartItems() {
  const productContainer = document.getElementById("product-container");
  productContainer.innerHTML = "";

  try {
    const products = await fetchProducts();
    const filteredProducts = products.filter((product) =>
      Object.keys(cartItems).includes(product.id.toString())
    );

    filteredProducts.forEach((product) => {
      const card = createProductCard(product);
      const quantity = cartItems[product.id];
      const quantityElement = document.createElement("p");
      card.appendChild(quantityElement);
      productContainer.appendChild(card);

      const quantityInput = card.querySelector("#number");
      quantityInput.value = quantity;

        const inputElement = document.getElementById("number");
    });
  } catch (error) {
    console.error("Error", error);
  }
}
