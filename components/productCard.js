import { showProduct } from "./show.js";

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
    </div>
  `;

  const viewProductLink = card.querySelector(".view-product-link");
  viewProductLink.addEventListener("click", () => {
    const productId = parseInt(viewProductLink.getAttribute("data-product-id"));
    showProduct(productId);
  });

  return card;
}
