const productSection = document.querySelector(".product");

import { productServices } from "../service/product-service.js";

async function getProductsData() {
  const productId = productServices.getProductId();
  const product = await productServices.getProduct(productId);

  if (window.innerWidth <= 768) {
    createProductDataItem(product, productSection);
  }

  // for desktop devices
  if (window.innerWidth > 768) {
    createProductDataItem(product, productSection);
  }
}

localStorage.clear();

getProductsData();
