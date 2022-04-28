// subtitle if products are filtered by category
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
  const Http = new XMLHttpRequest();
  const url = "../productsData.json";
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(Http.responseText);
      const products = data;

      const category = getProductCategory(products, getProductId());

      // filter products by category
      if (category === "all") {
        hideFilterText();
        const allProducts = products;
        if (window.innerWidth <= 768) {
          displayAllProducts(allProducts, allProductsSection, products.length);
        }

        // for desktop devices
        if (window.innerWidth > 768) {
          displayAllProducts(allProducts, allProductsSection, products.length);
        }
      } else {
        setSubtitle(category);
        const productsArray = products.filter(
          (product) => product.category == category
        );
        if (window.innerWidth <= 768) {
          displayAllProducts(
            productsArray,
            allProductsSection,
            productsArray.length
          );
        }

        // for desktop devices
        if (window.innerWidth > 768) {
          displayAllProducts(
            productsArray,
            allProductsSection,
            productsArray.length
          );
        }
      }
    }
  };
}
localStorage.clear();
getAllProducts();
