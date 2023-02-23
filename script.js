const headerTopNav = document.querySelector(".header__top__nav");
const headerPrivacyPopupCard = document.querySelector(
  ".header__privacy__popup--card"
);
const headerPrivacySimplifed = document.querySelector(
  ".header__privacy--simplified"
);

headerPrivacySimplifed.addEventListener("click", () => {
  headerPrivacyPopupCard.classList.toggle("show-header-card");
});


const sec = document.querySelector('.sec');
sec.addEventListener('click', () => {
  headerPrivacyPopupCard.classList.remove("show-header-card");
})
