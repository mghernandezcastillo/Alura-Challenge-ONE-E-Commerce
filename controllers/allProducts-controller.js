// subtitle if products are filtered by category

import { productServices } from "../service/product-service.js";
function setSubtitle(category) {
  const subtitle = document.querySelector(".all-products__subtitle h4");
  subtitle.innerHTML = ` Filtrados por: ${category}`;
}

function hideFilterText() {
  const filterText = document.querySelector(".all-products__remove-filter");
  filterText.classList.add("hide-filter");
}

// all products

const allProductsSection = document.querySelector("#all-products");

async function getAllProducts(category = "all" /* default */) {
  let products = [];

  category = getProductCategory(products, getProductId());

  // filter products by category
  if (category === "all") {
    hideFilterText();
    products = await productServices.getProductsList();
  } else {
    setSubtitle(category);
    products = await productServices.getProductsByCategory(category);
  }

  if (window.innerWidth <= 768) {
    displayProducts(products, allProductsSection, products.length);
  }

  // for desktop devices
  if (window.innerWidth > 768) {
    displayProducts(products, allProductsSection, products.length);
  }
}
localStorage.clear();
getAllProducts();
