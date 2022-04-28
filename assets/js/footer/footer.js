const footerSection = document.querySelector(".footer");

function createFooter(section) {
  // create logo container
  let footerLogoContainer = document.createElement("div");
  footerLogoLink = document.createElement("a");
  footerLogoLink.href = "/";
  footerLogoLink.classList.add("footer__image");

  // create logo image
  let footerLogoImg = document.createElement("img");
  footerLogoImg.src = "../assets/images/Logo.png";
  footerLogoImg.alt = "logo";

  // append logo image
  footerLogoLink.appendChild(footerLogoImg);

  // append logo
  footerLogoContainer.appendChild(footerLogoLink);

  // create footer menu container
  let footerMenuContainer = document.createElement("div");
  footerMenuContainer.classList.add("footer__menu");

  // create footer menu items
  let footerMenuList = document.createElement("ul");
  footerMenuList.classList.add("footer__list");

  //create menu items
  let navbarMenuItems = [
    {
      name: "Quienes somos",
      link: "about.html",
    },
    {
      name: "Politica de privacidad",
      link: "privacy.html",
    },
    {
      name: "Programa de fidelidad",
      link: "fidelity.html",
    },
    {
      name: "Nuestras Tiendas",
      link: "stores.html",
    },
    {
      name: "Quiero ser franquiciado",
      link: "franchise.html",
    },
    {
      name: "Anuncie aquí",
      link: "advertising.html",
    },
  ];

  // create navbar menu items
  navbarMenuItems.forEach(function (item) {
    let footerMenuItem = document.createElement("li");
    footerMenuItem.classList.add("footer__item");

    let footerMenuItemLink = document.createElement("a");
    footerMenuItemLink.classList.add("footer__link");
    footerMenuItemLink.href = item.link;
    footerMenuItemLink.innerHTML = item.name;

    footerMenuItem.appendChild(footerMenuItemLink);
    footerMenuList.appendChild(footerMenuItem);
  });

  // append items to footer menu
  footerMenuContainer.appendChild(footerMenuList);

  // create contact form container
  let footerContactContainer = document.createElement("div");
  footerContactContainer.classList.add("footer__contact");

  // create contact form title
  let footerContactTitle = document.createElement("h2");
  footerContactTitle.classList.add("footer__title");
  footerContactTitle.innerHTML = "Hable con nosotros";

  // append title to contact form
  footerContactContainer.appendChild(footerContactTitle);

  // create contact form
  let footerContactForm = document.createElement("form");
  footerContactForm.classList.add("footer__form");

  // create contact form input
  let footerContactInput = document.createElement("input");
  footerContactInput.classList.add("footer__input");
  footerContactInput.setAttribute("type", "text");
  footerContactInput.setAttribute("placeholder", "Escribe tu nombre");
  footerContactInput.setAttribute("id", "input_name");
  footerContactInput.setAttribute("name", "name");
  footerContactInput.setAttribute("required", "required");

  // append input to form
  footerContactForm.appendChild(footerContactInput);

  // create contact form textarea
  let footerContactTextarea = document.createElement("textarea");
  footerContactTextarea.classList.add("footer__textarea");
  footerContactTextarea.setAttribute("placeholder", "Escribe tu mensaje");
  footerContactTextarea.setAttribute("id", "input_message");
  footerContactTextarea.setAttribute("name", "message");
  footerContactTextarea.setAttribute("required", "required");

  //append input and textarea to form
  footerContactForm.appendChild(footerContactTextarea);

  // create contact form button
  let footerContactButton = document.createElement("button");
  footerContactButton.classList.add("footer__submit");
  footerContactButton.setAttribute("type", "submit");
  footerContactButton.innerHTML = "Enviar mensaje";

  // append button to form
  footerContactForm.appendChild(footerContactButton);

  // append form to contact form container
  footerContactContainer.appendChild(footerContactForm);

  // append logo, menu and contact form to section
  section.appendChild(footerLogoContainer);
  section.appendChild(footerMenuContainer);
  section.appendChild(footerContactContainer);
}

createFooter(footerSection);
