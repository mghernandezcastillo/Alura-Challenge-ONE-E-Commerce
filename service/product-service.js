const getProductsList = () =>
  fetch("https://db-alura-geek-mh.herokuapp.com/products").then((response) => {
    return response.json();
  });

const getProductsByCategory = (category) =>
  fetch(
    `https://db-alura-geek-mh.herokuapp.com/products?category=${category}`
  ).then((response) => {
    return response.json();
  });

function getProductId() {
  if (localStorage.getItem("productId") === null) {
    const urlParams = new URLSearchParams(window.location.search);
    localStorage.setItem("productId", urlParams.get("id"));
    const productId = localStorage.getItem("productId");
    return productId;
  } else {
    const productId = localStorage.getItem("productId");
    return productId;
  }
}

function getProductCategory(products, productId) {
  const product = products.find((product) => product.id == productId);
  const productCategory = product.category;
  return productCategory;
}

function getProduct(productId) {
  return fetch(
    `https://db-alura-geek-mh.herokuapp.com/products/${productId}`
  ).then((response) => {
    return response.json();
  });
}

function createProduct(product) {
  const productData = {
    id: uuid.v4(),
    category: product.category,
    image: product.image,
    title: product.title,
    description: product.description,
    price: product.price,
  };
  return fetch("https://db-alura-geek-mh.herokuapp.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
}

// exportar servicios
export const productServices = {
  getProductsList,
  getProductsByCategory,
  getProductId,
  getProductCategory,
  createProduct,
  getProduct,
};
