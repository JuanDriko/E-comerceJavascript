import { bringProducts } from "./components/render.js";
import { searchProductsByName } from "./components/search.js";
import * as show from "./components/show.js"; 

const showProduct = show.showProduct;

document.addEventListener("DOMContentLoaded", () => {
  bringProducts();

  const searchBtn = document.getElementById("search-btn");
  searchBtn.addEventListener("click", searchProductsByName);
});
