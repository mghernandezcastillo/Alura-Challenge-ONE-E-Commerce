import { productServices } from "../service/product-service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const product = {};
  formData.forEach((value, key) => {
    if (key === "image") {
      product[key] = document.querySelector("#previewImg").src;
      product[key] = product[key];
    } else {
      product[key] = value;
    }
  });

  productServices
    .createProduct(product)
    .then((response) => {})
    .catch((error) => {
      console.log(error);
    });
});

function previewFile() {
  const preview = document.querySelector("#previewImg");
  const file = document.querySelector("#uploadFile").files[0];
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      preview.src = reader.result;
    },
    false
  );

  if (file) {
    reader.readAsDataURL(file);
  }
}

// add EventListener
document.getElementById("uploadFile").addEventListener("change", previewFile);
