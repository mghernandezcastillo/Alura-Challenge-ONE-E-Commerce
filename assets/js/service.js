// CREATE PRODUCT

function createListProductsItem(product, section) {
  // create product item
  const productItem = document.createElement("div");
  productItem.classList.add("product__item");

  // create product image link
  const productImageLink = document.createElement("a");
  productImageLink.classList.add("product__image-link");
  productImageLink.href = `../screens/product.html?id=${product.id}`;
  // imagen
  let productImage = document.createElement("article");
  let productImg = document.createElement("img");
  productImg.classList.add("product__image");
  if (product.image.includes("data:image")) {
    productImg.src = `${product.image}`;
  } else {
    productImg.src = `../${product.image}`;
  }

  // append imagen
  productImage.appendChild(productImg);

  // icons container
  let productIconsContainer = document.createElement("div");
  productIconsContainer.classList.add("product__icons-container");
  productIconsContainer.classList.add("product__icons-container--hide");

  // delete icon
  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fas", "fa-times");
  deleteIcon.classList.add("product__delete-icon");
  //text icon
  let textIcon = document.createElement("p");
  textIcon.classList.add("product__text-icon");
  textIcon.innerText = `${"Eliminar"}`;

  // edit icon
  let editIcon = document.createElement("i");
  editIcon.classList.add("fas", "fa-pen");
  editIcon.classList.add("product__edit-icon");

  // text icon
  let textIcon2 = document.createElement("p");
  textIcon2.classList.add("product__text-icon");
  textIcon2.innerText = `${"Editar"}`;

  // product id
  let productId = document.createElement("p");
  productId.classList.add("product__id");
  productId.innerText = `${product.id}`;
  productId.style.display = "none";

  if (section.id === "all-products") {
    // append icons
    productIconsContainer.appendChild(editIcon);
    productIconsContainer.appendChild(textIcon2);
    productIconsContainer.appendChild(deleteIcon);
    productIconsContainer.appendChild(textIcon);
    productIconsContainer.appendChild(productId);
  }

  // append image link
  productImageLink.appendChild(productImage);

  // titulo
  let productTitle = document.createElement("article");
  let productTitleText = document.createElement("h2");
  productTitleText.classList.add("product__title");

  productTitleText.innerText = product.title;
  // append titulo
  productTitle.appendChild(productTitleText);
  // precio
  let productPrice = document.createElement("article");
  let productPriceText = document.createElement("span");
  productPriceText.classList.add("product__price");
  productPriceText.innerText = product.price;
  // append precio
  productPrice.appendChild(productPriceText);

  // descripcion
  let productDescription = document.createElement("article");
  let productDescriptionText = document.createElement("p");
  productDescriptionText.classList.add("product__description");

  productDescriptionText.innerText = product.description;
  // append descripcion
  productDescription.appendChild(productDescriptionText);

  // botón
  let productLink = document.createElement("article");
  let productLinkText = document.createElement("a");
  productLinkText.classList.add("product__link");
  productLinkText.innerText = "Ver producto";
  productLinkText.href = `../screens/product.html?id=${product.id}`;
  // append boton
  productLink.appendChild(productLinkText);

  // append to product item
  productItem.appendChild(productImageLink);
  productItem.appendChild(productTitle);
  productItem.appendChild(productPrice);
  productItem.appendChild(productLink);
  productItem.appendChild(productIconsContainer);
  if (section.classList.contains("product")) {
    productItem.appendChild(productDescription);
  }

  // append to section
  section.appendChild(productItem);
}

function createProductDataItem(product, section) {
  // create product image container
  let productImageContainer = document.createElement("div");
  productImageContainer.classList.add("product__image-container");

  // create product image
  let productImage = document.createElement("img");

  productImage.classList.add("product__image");
  if (product.image.includes("data:image")) {
    productImage.src = `${product.image}`;
  } else {
    productImage.src = `../${product.image}`;
  }

  // append product image
  productImageContainer.appendChild(productImage);

  // create product data container
  let productDataContainer = document.createElement("div");
  productDataContainer.classList.add("product__data-container");

  // create product title
  let productTitle = document.createElement("h2");
  productTitle.classList.add("product__title");
  productTitle.innerText = product.title;

  // create product price
  let productPrice = document.createElement("span");
  productPrice.classList.add("product__price");
  productPrice.innerText = product.price;

  // create product description
  let productDescription = document.createElement("p");
  productDescription.classList.add("product__description");
  productDescription.innerText = product.description;

  // append product data container
  productDataContainer.appendChild(productTitle);
  productDataContainer.appendChild(productPrice);
  productDataContainer.appendChild(productDescription);

  // appen image and data containers to section
  section.appendChild(productImageContainer);
  section.appendChild(productDataContainer);
}

function displayProducts(products, section, limit = products.length) {
  for (let i = 0; i < limit; i++) {
    const product = products[i];
    createListProductsItem(product, section);
  }
}

function displayProductData(products, productId, section) {
  let productData = products.filter((product) => product.id === productId);
  createProductDataItem(productData[0], section);
}
