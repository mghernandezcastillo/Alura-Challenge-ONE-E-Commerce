const headerSection = document.querySelector(".header");

function createHeader(section) {
  //create navbar
  let nav = document.createElement("nav");
  nav.classList.add("navbar", "header__nav");

  //create logo container
  let logoContainer = document.createElement("div");
  logoContainer.classList.add("header__logo");

  //create logo link
  let logoLink = document.createElement("a");
  logoLink.classList.add("header__image");
  logoLink.href = "../index.html";

  //create logo image
  let logoImage = document.createElement("img");
  logoImage.src = "../assets/images/Logo.png";
  logoImage.alt = "logo";

  // append logo image to logo link
  logoLink.appendChild(logoImage);

  // append logo link to logo container
  logoContainer.appendChild(logoLink);

  // create search container
  let searchContainer = document.createElement("div");
  searchContainer.classList.add("header__search");

  // create search form
  let searchForm = document.createElement("form");
  searchForm.classList.add("header__form");
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href =
      "allProducts.html?search=" +
      document.getElementById("input_search").value +
      "&filteredBy=search";
    searchInput.focus();
  });

  // append search form to search container
  searchContainer.appendChild(searchForm);

  // create search input
  let searchInput = document.createElement("input");
  searchInput.classList.add("header__input");
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("placeholder", "¿Qué deseas buscar?");
  searchInput.setAttribute("id", "input_search");

  // append search input to search form
  searchForm.appendChild(searchInput);

  // create search button
  let searchButton = document.createElement("button");
  searchButton.setAttribute("aria-label", "submit form");
  searchButton.classList.add("header__submit");

  // create search button icon
  let searchButtonIcon = document.createElement("i");
  searchButtonIcon.classList.add("fas", "fa-search");

  // append search button icon to search button
  searchButton.appendChild(searchButtonIcon);

  // append search button to search form
  searchForm.appendChild(searchButton);

  // create login button container
  let loginContainer = document.createElement("div");
  loginContainer.classList.add("header__button");

  if (localStorage.getItem("isLogged") === "false") {
    // create login input
    let loginButton = document.createElement("input");
    loginButton.setAttribute("type", "button");
    loginButton.setAttribute("value", "Login");
    loginButton.setAttribute("id", "login_button");
    loginButton.classList.add("header__button--login");
    loginButton.onclick = function () {
      window.location.href = "../screens/logIn.html";
    };

    // append login button to login container
    loginContainer.appendChild(loginButton);
  } else {
    // create logout input
    if (localStorage.getItem("isLogged") === "true") {
      let logoutButton = document.createElement("input");
      logoutButton.setAttribute("type", "button");
      logoutButton.setAttribute("value", "Logout");
      logoutButton.setAttribute("id", "logout_button");
      logoutButton.classList.add("header__button--login");
      logoutButton.onclick = function () {
        localStorage.setItem("isLogged", false);
        window.location.href = "../screens/home.html";
      };

      // append logout button to login container
      loginContainer.appendChild(logoutButton);
    }
  }

  // create search container for mobile
  let searchContainerMobile = document.createElement("div");
  searchContainerMobile.classList.add("header__icon");

  // create search icon
  let searchIcon = document.createElement("i");
  searchIcon.classList.add("fas", "fa-search");

  // append search icon to search container
  searchContainerMobile.appendChild(searchIcon);

  // create input navbar for mobile
  let inputNavbar = document.createElement("input");
  inputNavbar.setAttribute("type", "checkbox");
  inputNavbar.setAttribute("id", "check");

  // crreate label for input navbar
  let label = document.createElement("label");
  label.setAttribute("for", "check");
  label.classList.add("checkbtn");

  // create icon for label
  let icon = document.createElement("i");
  icon.classList.add("header__menuicon");
  icon.classList.add("fas", "fa-bars");

  // append icon to label
  label.appendChild(icon);

  //create navbar menu
  let navbarMenu = document.createElement("ul");
  navbarMenu.classList.add("header__menu");
  navbarMenu.id = "menu";

  //create navbar menu items
  let navbarMenuItems = [
    {
      name: "Inicio",
      link: "../index.html",
    },
    {
      name: "Productos",
      link: "../screens/allProducts.html?category=all&filteredBy=category",
    },
    {
      name: "Contacto",
      link: "#footer",
    },
  ];

  // create navbar menu items
  navbarMenuItems.forEach(function (item) {
    let navbarMenuItem = document.createElement("li");
    navbarMenuItem.classList.add("header__item");

    let navbarMenuItemLink = document.createElement("a");
    navbarMenuItemLink.classList.add("header__link");
    navbarMenuItemLink.href = item.link;
    navbarMenuItemLink.innerHTML = item.name;

    navbarMenuItem.appendChild(navbarMenuItemLink);
    navbarMenu.appendChild(navbarMenuItem);
  });

  // append items to navbar
  nav.appendChild(logoContainer);
  nav.appendChild(searchContainer);
  nav.appendChild(loginContainer);
  nav.appendChild(searchContainerMobile);
  nav.appendChild(inputNavbar);
  nav.appendChild(label);
  nav.appendChild(navbarMenu);

  // append navbar to section
  section.appendChild(nav);
}

createHeader(headerSection);
