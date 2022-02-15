const menu = document.getElementById("menu");
const burger = document.getElementById("burger");
const cartContent = document.getElementById("cart-menu");
const cart = document.getElementById("shopping-cart");
const openSubnav = document.getElementById("btn__features");
const subnavMenu = document.getElementById("sub-nav");
const closeSubnav = document.getElementById("btn__back");

burger.addEventListener("click", toggleMenu);
cart.addEventListener("click", toggleCart);
openSubnav.addEventListener("click", addSubNavigationMenu);
closeSubnav.addEventListener("click", removeSubNavigationMenu);

const previousSlide = document.getElementById("left-arrow");
const nextSlide = document.getElementById("right-arrow");

function toggleMenu() {
  menu.classList.toggle("show");
  burger.classList.toggle("change");
  cartContent.classList.remove("openCart");
  subnavMenu.classList.remove("visible");
}

function addSubNavigationMenu() {
  subnavMenu.classList.add("visible");
  menu.classList.remove("show");
}

function removeSubNavigationMenu() {
  subnavMenu.classList.remove("visible");
  menu.classList.add("show");
}

function toggleCart() {
  cartContent.classList.toggle("openCart");
  menu.classList.remove("show");
  burger.classList.remove("change");
  subnavMenu.classList.remove("visible");
}

const slider = document.querySelector(".carousel-container__carousel__slider");
const carousel = document.querySelector(".carousel-container__carousel");
let direction = -1;

nextSlide.addEventListener("click", moveNext);
previousSlide.addEventListener("click", movePrevious);
slider.addEventListener("transitionend", slideShow);

function moveNext() {
  if (direction === 1) {
    direction = -1;
    slider.prepend(slider.lastElementChild);
  }
  carousel.classList.add("justifyNext");
  carousel.classList.remove("justifyPrevious");
  slider.classList.remove("resetSlide");
  slider.classList.add("slideNext");
  slider.classList.remove("slidePrevious");
  previousSlide.disabled = true;
}

function movePrevious() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.classList.add("justifyPrevious");
  carousel.classList.remove("justifyNext");
  slider.classList.remove("resetSlide");
  slider.classList.add("slidePrevious");
  slider.classList.remove("slideNext");
  nextSlide.disabled = true;
}

function slideShow() {
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
  } else {
    slider.appendChild(slider.firstElementChild);
  }

  slider.classList.add("resetSlide");
  setTimeout(function () {
    slider.classList.add("setTimeout");
    previousSlide.disabled = false;
    nextSlide.disabled = false;
  });
}
