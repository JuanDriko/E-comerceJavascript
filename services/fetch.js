export function fetchProductById(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json());
}

export function fetchProducts() {
  return fetch("https://fakestoreapi.com/products")
    .then((res) => res.json());
}

//cambiar el windows location 