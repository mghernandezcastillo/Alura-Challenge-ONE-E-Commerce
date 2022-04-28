// creating products

const starWarsSection = document.querySelector("#star-wars");
const consolasSection = document.querySelector("#consolas");
const diversosSection = document.querySelector("#diversos");

async function getProductsData() {
  const Http = new XMLHttpRequest();
  const url = "../productsData.json";
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(Http.responseText);
      const products = data;
      console.log(products);

      if (window.innerWidth <= 768) {
        displayProductsByCategory(products, starWarsSection, "star wars", 4);
        displayProductsByCategory(products, consolasSection, "consolas", 4);
        displayProductsByCategory(products, diversosSection, "diversos", 4);
      }

      // for desktop devices
      if (window.innerWidth > 768) {
        displayProductsByCategory(products, starWarsSection, "star wars", 6);
        displayProductsByCategory(products, consolasSection, "consolas", 6);
        displayProductsByCategory(products, diversosSection, "diversos", 6);
      }
    }
  };
}

localStorage.clear();

getProductsData();

const banner__button = document.querySelector(".banner__button");

banner__button.onclick = function () {
  window.location.href = "allProducts.html?category=consolas";
};
