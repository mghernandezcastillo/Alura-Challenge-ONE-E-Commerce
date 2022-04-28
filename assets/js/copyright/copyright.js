const copyrightSection = document.querySelector(".copyright");

function createCopyright(section) {
  // copyright text
  let copyrightText = document.createElement("p");
  copyrightText.classList.add("copyright__text");
  copyrightText.innerText = "Desarrollado por Michael Hernández";

  // append to section
  section.appendChild(copyrightText);

  // br element
  let br = document.createElement("br");

  // append to section
  section.appendChild(br);

  // age text
  let ageText = document.createElement("p");
  ageText.classList.add("copyright__text");
  ageText.innerText = "2022";

  // append to section
  section.appendChild(ageText);
}

createCopyright(copyrightSection);
