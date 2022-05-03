import { userServices } from "../service/user-service.js";

const users = await userServices.getUsersData();

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const user = users.find((user) => user.email === email);
  if (user) {
    if (user.password === password) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLogged", true);
      window.location.href = "../screens/home.html";
    } else {
      alert("Wrong password");
    }
  } else {
    alert("User not found");
  }
}

const loginForm = document.querySelector(".login__form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  login();
});
