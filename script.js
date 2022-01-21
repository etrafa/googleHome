"using strict";

const firstColorChoose = document.querySelector(".first-color");
const secondColorChoose = document.querySelector(".second-color");
const thirdColorChoose = document.querySelector(".third-color");
const fourthColorChoose = document.querySelector(".fourth-color");
const fifthColorChoose = document.querySelector(".fifth-color");
const sixthColorChoose = document.querySelector(".sixth-color");
const productColorChoose = document.querySelector(".product-color-choose");
const playButtonEl = document.querySelector(".play-button");
const productVideoEl = document.querySelector(".product-video ");
const buyButtonEl = document.querySelector(".buy-button");
const buyNowButtonEl = document.querySelector(".buy-now");
const checkoutContainer = document.querySelector(".checkout");
const checkoutBuyButtonEl = document.querySelector(".checkout-buy");

const productColorImages = [
  "./assets/first-color-product.png",
  "./assets/second-color-product.png",
  "./assets/third-color-product.png",
  "./assets/fourth-color-product.png",
  "./assets/fifth-color-product.png",
  "./assets/sixth-color-product.png",
];

firstColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[0];
});

secondColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[1];
});

thirdColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[2];
});

fourthColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[3];
});

fifthColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[4];
});

sixthColorChoose.addEventListener("click", () => {
  productColorChoose.src = productColorImages[5];
});

buyButtonEl.addEventListener("click", () => {
  checkoutContainer.classList.toggle("checkout-active");
});

buyNowButtonEl.addEventListener("click", () => {
  checkoutContainer.classList.toggle("checkout-active");
});

checkoutBuyButtonEl.addEventListener("click", () => {
  checkoutBuyButtonEl.textContent = "✔ Bought";
});

const scrollTop = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  reset: true,
});
scrollTop.reveal(".google-texts", {});
scrollTop.reveal(".introduction-image", {});
scrollTop.reveal(".integrated-apps", {});

const scrollRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2500,
  reset: true,
});

scrollRight.reveal(".introduction-text-right", {});
scrollRight.reveal(".robust-material", {});
scrollRight.reveal(".product-video-header", {});

const scrollLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2500,
  reset: true,
});
scrollLeft.reveal(".introduction-text-left", {});
scrollLeft.reveal(".powerful-speaker", {});
scrollLeft.reveal(".video-main-banner", {});
scrollLeft.reveal(".play-button", {});

const scrollDown = ScrollReveal({
  origin: "bottom",
  distance: "80px",
  duration: 2500,
  reset: true,
});

scrollDown.reveal(".banner-head", {});
scrollDown.reveal(".banner-image", {});
scrollDown.reveal(".ask-google-container", {});
