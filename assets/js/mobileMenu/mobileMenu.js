const check = document.getElementById("check");

// all the li elements in the mobile menu
const mobilemenuItems = document.querySelectorAll("#menu li");

mobilemenuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    check.checked = !check.checked;
  });
});
