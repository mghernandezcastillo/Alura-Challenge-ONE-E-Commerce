// creating products

const similarProductsSection = document.querySelector("#similar-products");

async function getProductsData() {
  const Http = new XMLHttpRequest();
  const url = "../productsData.json";
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(Http.responseText);
      const products = data;
      console.log(getProductId());

      const category = getProductCategory(products, getProductId());
      console.log(category);

      // delete actual product from products array
      const productsArray = products.filter(
        (product) => product.id != getProductId()
      );
      // randomize products array
      const productsArrayRandomized = productsArray.sort(
        () => Math.random() - 0.5
      );

      if (window.innerWidth <= 768) {
        displayProductsByCategory(
          productsArrayRandomized,
          similarProductsSection,
          category,
          4
        );
      }

      // for desktop devices
      if (window.innerWidth > 768) {
        displayProductsByCategory(
          productsArrayRandomized,
          similarProductsSection,
          category,
          5
        );
      }
    }
  };
}

localStorage.clear();

getProductsData();
