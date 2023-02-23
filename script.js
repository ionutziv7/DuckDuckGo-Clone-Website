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
  headerPrivacyPopupCard.classList.remove("show-header-card");
  headerPopupSocialCardWrapper.classList.remove("show-social-card");
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
