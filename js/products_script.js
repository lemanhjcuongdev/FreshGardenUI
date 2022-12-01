const category_optionMenu = document.querySelector(".category_select_menu");
const category_selectBtn = document.querySelector(".category_select_btn");
const category_options = document.querySelectorAll(".category_option");
const category_btn_text = document.querySelector(".category_btn_text");

const price_select_menu = document.querySelector(".price_select_menu"),
  price_select_btn = document.querySelector(".price_select_btn"),
  price_btn_text = document.querySelector(".price_btn_text"),
  price_options = document.querySelectorAll(".price_option");

const flavor_select_menu = document.querySelector(".flavor_select_menu"),
  flavor_select_btn = document.querySelector(".flavor_select_btn"),
  flavor_btn_text = document.querySelector(".flavor_btn_text"),
  flavor_options = document.querySelectorAll(".flavor_option");

const size_select_menu = document.querySelector(".size_select_menu"),
  size_select_btn = document.querySelector(".size_select_btn"),
  size_btn_text = document.querySelector(".size_btn_text"),
  size_options = document.querySelectorAll(".size_option");

category_selectBtn.addEventListener("click", () => {
  category_optionMenu.classList.toggle("active");
});
price_select_btn.addEventListener("click", () => {
  price_select_menu.classList.toggle("active");
});
flavor_select_btn.addEventListener("click", () => {
  flavor_select_menu.classList.toggle("active");
});
size_select_btn.addEventListener("click", () => {
  size_select_menu.classList.toggle("active");
});

category_options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.innerText;
    category_btn_text.innerText = selectedOption;
    category_optionMenu.classList.remove("active");
  });
});
price_options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.innerText;
    price_btn_text.innerText = selectedOption;
    price_select_menu.classList.remove("active");
  });
});
flavor_options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.innerText;
    flavor_btn_text.innerText = selectedOption;
    flavor_select_menu.classList.remove("active");
  });
});
size_options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.innerText;
    size_btn_text.innerText = selectedOption;
    size_select_menu.classList.remove("active");
  });
});

const filter_open_btn = document.querySelector("#filter_open_btn"),
  filter_close_btn = document.querySelector("#filter_close_btn"),
  options = document.querySelector("#options");

filter_open_btn.addEventListener("click", function () {
  options.classList.add("active");
  // document.body.style.overflow = "hidden";
});

filter_close_btn.addEventListener("click", function () {
  options.classList.remove("active");
  // document.body.style.overflow = "scroll";
});
