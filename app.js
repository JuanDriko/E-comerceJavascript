import { bringProducts } from "./components/render.js";
import { searchProductsByName } from "./components/search.js";
import { showCartItems } from "./components/cart.js";
import { showProduct } from "./components/show.js";
import { changeURL } from "./components/productCard.js";

document.addEventListener("DOMContentLoaded", () => {
  const  urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has("DetallesProductoId")) {
    const productId = urlParams.get("DetallesProductoId");
    showProduct(productId);
  } else {
    bringProducts();

    const searchBtn = document.getElementById("search-btn");
    searchBtn.addEventListener("click", searchProductsByName);

    const cartButton = document.querySelector("#btn-cart");
    cartButton.addEventListener("click", async () => {
      await showCartItems();
      changeURL("Cart");
    });

    const cartCounter = document.getElementById("cart-counter");
    cartCounter.addEventListener("click", async () => {
      await showCartItems();
      changeURL("Cart");
    });
  }
});
