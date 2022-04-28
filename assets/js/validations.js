export function validate(input) {
  console.log("validate");
  const inputType = input.dataset.type;
  /*   if (validators[inputType](input)) {
    validators[inputType](input);
  } */

  if (input.validity.valid) {
    input.parentElement.classList.remove("item--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("item--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      showErrorMessage(inputType, input);
  }
}

const errorTypes = ["valueMissing", "patternMismatch"];

const errorMessages = {
  name: {
    valueMissing: "El nombre es obligatorio",
  },
  price: {
    valueMissing: "El precio es obligatorio",
    patternMismatch: "El precio debe ser un número sin decimales",
  },
  description: {
    valueMissing: "La descripción es obligatoria",
  },
};

const validators = {
  name: (input) => nameValidator(input),
};

function showErrorMessage(inputType, input) {
  const errorMessage = errorMessages[inputType];
  const errorType = errorTypes.find((type) => input.validity[type]);
  console.log(errorType);

  return errorMessage[errorType];
}
