const searchIcon = document.querySelector(".header__icon");
const search = document.querySelector(".header__search");
const nav = document.querySelector(".header__nav");

searchIcon.addEventListener("click", function () {
  searchIcon.classList.toggle("header__icon--hidden");
  nav.classList.toggle("header__nave--displayinherit");
  search.classList.toggle("header__search--show");
});
