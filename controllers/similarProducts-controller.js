// creating products

import { productServices } from "../service/product-service.js";

const similarProductsSection = document.querySelector("#similar-products");

async function getSimilarProductsData() {
  let Allproducts = await productServices.getProductsList();
  const category = productServices.getProductCategory(
    Allproducts,
    productServices.getProductId()
  );
  const products = await productServices.getProductsByCategory(category);

  // delete actual product from products array
  const productsArray = products.filter(
    (product) => product.id != productServices.getProductId()
  );
  // randomize products array
  const productsArrayRandomized = productsArray.sort(() => Math.random() - 0.5);

  if (window.innerWidth <= 768) {
    displayProducts(productsArrayRandomized, similarProductsSection, 4);
  }

  // for desktop devices
  if (window.innerWidth > 768) {
    displayProducts(productsArrayRandomized, similarProductsSection, 5);
  }
}

localStorage.clear();

getSimilarProductsData();
