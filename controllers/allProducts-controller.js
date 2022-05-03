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

async function getAllProductsByCategory(category = "all" /* default */) {
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
  ComproveIsLogged();
}

async function getAllProductsBySearch(searchData) {
  setSubtitle(searchData);
  let products = await productServices.getAllProductsBySearch(searchData);
  console.log(products);

  if (window.innerWidth <= 768) {
    displayProducts(products, allProductsSection, products.length);
  }

  // for desktop devices
  if (window.innerWidth > 768) {
    displayProducts(products, allProductsSection, products.length);
  }
  ComproveIsLogged();
}

function deleteProduct(productId) {
  productServices.deleteProduct(productId).then(() => {
    window.location.href = window.location.href;
  });
}

function getFilter() {
  const urlParams = new URLSearchParams(window.location.search);
  const filteredBy = urlParams.get("filteredBy");
  if (filteredBy === "category") {
    getAllProductsByCategory();
  } else if (filteredBy === "search") {
    getAllProductsBySearch(urlParams.get("search"));
  }
}

function ComproveIsLogged() {
  const createProductBtn = document.querySelector(".all-products__button");

  const productIconsContainer = document.querySelectorAll(
    ".product__icons-container"
  );

  const productDeleteButton = document.querySelectorAll(
    ".product__delete-icon"
  );

  const productEditButton = document.querySelectorAll(".product__edit-icon");

  createProductBtn.onclick = function () {
    window.location.href = "createProduct.html";
  };
  const isLogged = localStorage.getItem("isLogged");
  if (isLogged === "true") {
    console.log("isLogged");
    createProductBtn.classList.remove("all-products__button--hide");
    productIconsContainer.forEach((productIcon) => {
      productIcon.classList.remove("product__icons-container--hide");
    });
  }

  productDeleteButton.forEach((productDelete) => {
    productDelete.onclick = function () {
      /*       const productId =
        productDelete.parentElement.parentElement.lastChild.lastChild.innerHTML;

      deleteProduct(productId); */
      alert("Accion no permitida");
    };
  });

  productEditButton.forEach((productEdit) => {
    productEdit.onclick = function () {
      /*       const productId =
        productEdit.parentElement.parentElement.lastChild.lastChild.innerHTML;
      localStorage.setItem("productId", productId);
      window.location.href = "editProduct.html"; */
      alert("Accion no permitida");
    };
  });
}

localStorage.removeItem("productId");

getFilter();
