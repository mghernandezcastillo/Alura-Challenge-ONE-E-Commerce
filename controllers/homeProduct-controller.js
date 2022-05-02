// creating products

import { productServices } from "../service/product-service.js";

async function displayProductsData() {
  // sections
  const starWarsSection = document.querySelector("#star-wars");
  const consolasSection = document.querySelector("#consolas");
  const diversosSection = document.querySelector("#diversos");

  let productsSectionStarWars = await productServices.getProductsByCategory(
    "star wars"
  );
  let productsSectionConsolas = await productServices.getProductsByCategory(
    "consolas"
  );
  let productsSectionDiversos = await productServices.getProductsByCategory(
    "diversos"
  );

  if (window.innerWidth <= 768) {
    displayProducts(
      productsSectionStarWars,
      starWarsSection,
      productsSectionStarWars.length
    );
    displayProducts(productsSectionConsolas, consolasSection, 4);
    displayProducts(productsSectionDiversos, diversosSection, 4);
  }

  // for desktop devices
  if (window.innerWidth > 768) {
    displayProducts(productsSectionStarWars, starWarsSection, 6);
    displayProducts(productsSectionConsolas, consolasSection, 6);
    displayProducts(productsSectionDiversos, diversosSection, 6);
  }
}

localStorage.clear();

displayProductsData();

const banner__button = document.querySelector(".banner__button");

banner__button.onclick = function () {
  window.location.href = "allProducts.html?category=consolas";
};
