const headerTopNav = document.querySelector(".header__top__nav");
const headerPrivacyPopupCard = document.querySelector(
  ".header__privacy__popup--card"
);
const headerPrivacySimplifed = document.querySelector(
  ".header__privacy--simplified"
);

headerPrivacySimplifed.addEventListener("click", () => {
  headerPrivacyPopupCard.classList.toggle("show-header-card");
  // when clicked to remove the social card
  headerPopupSocialCardWrapper.classList.remove("show-social-card");
});

// on section click to remove cards
const sec = document.querySelector(".sec");
sec.addEventListener("click", () => {
  // headerPrivacyPopupCard.classList.remove("show-header-card");
  // headerPopupSocialCardWrapper.classList.remove("show-social-card");
  searchIcon.classList.remove("blue");
  faTimes.classList.remove("show-times");
  menuOpen.classList.remove("show-menu-all");
});

const headerHornWrapper = document.querySelector(".header__horn__wrapper");
const headerPopupSocialCardWrapper = document.querySelector(
  ".header__popup--social--card--wrapper"
);

headerHornWrapper.addEventListener("click", () => {
  headerPopupSocialCardWrapper.classList.toggle("show-social-card");

  // when clicked to remove the header card
  headerPrivacyPopupCard.classList.remove("show-header-card");
});

const faTimes = document.querySelector(".fa-times");
const input = document.querySelector(".header__input--text");
const searchIcon = document.querySelector(".fa-search");

faTimes.addEventListener("click", () => {
  // clear the input
  input.value = "";
});

input.addEventListener("keyup", () => {
  searchIcon.classList.add("blue");
  faTimes.classList.add("show-times");
});

// menu on click to open
const hamburger = document.querySelector(".header__popup--menu");
const menuOpen = document.querySelector(".menu__open");
const closeBtn = document.querySelector(".close__wrapper");
hamburger.addEventListener("click", () => {
  menuOpen.classList.add("show-menu-all");
  headerPrivacyPopupCard.classList.remove("show-header-card");
  headerPopupSocialCardWrapper.classList.remove("show-social-card");
});

closeBtn.addEventListener("click", () => {
  menuOpen.classList.remove("show-menu-all");
});
