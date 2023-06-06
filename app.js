import { bringProducts } from "./components/render.js";
import { searchProductsByName } from "./components/search.js";
import { showCartItems } from "./components/cart.js";
import { showProduct } from "./components/show.js";

document.addEventListener("DOMContentLoaded", () => {
  bringProducts();

  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", searchProductsByName);

  
  const cartButton = document.querySelector("#btn-cart");
  cartButton.addEventListener("click", async () => {
    await showCartItems();
  });

  const cartCounter = document.getElementById("cart-counter");
  cartCounter.addEventListener("click", async () => {
    await showCartItems();
  });
});
