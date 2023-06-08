import { fetchProducts } from "../services/fetch.js";
import { renderProducts } from "./render.js";

export function searchProductsByName() {
  const searchInput = document.getElementById("search");
  const searchTerm = searchInput.value.toLowerCase();
  const url = new URL(window.location.href);
  url.searchParams.set("search", searchTerm);
  window.history.pushState({}, "", url);

  fetchProducts()
    .then((products) => {
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm)
      );
      renderProducts(filteredProducts);
    });

  searchInput.value = "";
}
