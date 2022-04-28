// redirect to home page
function redirectToHome() {
  let root = window.location.origin;
  window.location.replace(`${root}/screens/home.html`);
}

redirectToHome();
