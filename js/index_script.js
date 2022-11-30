const side_button = document.querySelector("#side_button"),
  expanded_header = document.querySelector("#expanded_header"),
  mobile_menu_close = document.querySelector("#mobile_menu_close");

side_button.addEventListener("click", function () {
  expanded_header.classList.add("active");
});
mobile_menu_close.addEventListener("click", function () {
  expanded_header.classList.remove("active");
});
