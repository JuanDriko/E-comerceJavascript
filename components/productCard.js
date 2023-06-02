import { showProduct } from "./show.js";
import { addToCart } from "./cart.js";

export function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${product.image}" alt="Product Image">
    <h5>${product.title}</h5>
    <p> $ ${product.price}</p>
    <p>${product.category}</p>
    <div class="text-center">
        <a class="btn btn-outline-dark mt-auto view-product-link" href="product" data-product-id="${product.id}">Ver Producto</a>
        <button class="btn btn-outline-dark add-to-cart-button" type="button" data-product-id="${product.id}">
            <i class="bi-cart-fill me-1"></i>
            Add Cart
        </button>
    </div>
  `;

  const addToCartButton = card.querySelector(".add-to-cart-button");
  addToCartButton.addEventListener("click", () => {
    const productId = parseInt(addToCartButton.getAttribute("data-product-id"));
    addToCart(productId);
  });

  const viewProductLink = card.querySelector(".view-product-link");
  viewProductLink.addEventListener("click", () => {
    const productId = parseInt(viewProductLink.getAttribute("data-product-id"));
    showProduct(productId);
  });

  return card;
}
