const productSection = document.querySelector(".product");

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

function getProductCategory() {
  if (localStorage.getItem("productCategory") === null) {
    const urlParams = new URLSearchParams(window.location.search);
    localStorage.setItem("productCategory", urlParams.get("category"));
    const productCategory = localStorage.getItem("productCategory");
    return productCategory;
  } else {
    const productCategory = localStorage.getItem("productCategory");
    return productCategory;
  }
}
