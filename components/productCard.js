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
          <a class="btn btn-outline-dark mt-auto view-product-link" href="#" data-product-id="${product.id}">Ver Producto</a>
          <input type="number" id="number" min="1" value="1">  
          <button class="btn btn-outline-dark add-to-cart-button" type="button" data-product-id="${product.id}">
              <i class="bi-cart-fill me-1"></i>
              Add Cart
          </button>
      </div>
    `;
  
    const addToCartButton = card.querySelector(".add-to-cart-button");
    const quantityInput = card.querySelector("#number");
    let selectedQuantity = 1;
  
    quantityInput.addEventListener("input", (event) => {
      selectedQuantity = parseInt(event.target.value);
    });
  
    addToCartButton.addEventListener("click", () => {
      const productId = parseInt(addToCartButton.getAttribute("data-product-id"));
      addToCart(productId, selectedQuantity);
      changeURL(`DetallesProductoId=${productId}`);
    });
  
    const viewProductLink = card.querySelector(".view-product-link");
    viewProductLink.addEventListener("click", (event) => {
      event.preventDefault();
      const productId = parseInt(viewProductLink.getAttribute("data-product-id"));
      changeURL(`DetallesProductoId=${productId}`);
      showProduct(productId);
    });
  
    return card;
  }
  
  export function changeURL(page) {
    const url = new URL(window.location.href);
    url.pathname = `/${page}`;
    window.history.pushState({}, "", url);
  }