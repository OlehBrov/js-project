const searchWrap = document.querySelector('.search__wrap');
const searchBtn = document.querySelector('.header__search-btn');
const searchInput = document.querySelector('#news__search');
const searchSlider = document.querySelector('.search-input__slider');
const burgerMenu = document.querySelector('.header__menu-btn');
const mobileMenuWrap = document.querySelector('.mobile-menu__wrap');
const closeMobileMenu = document.querySelector('.mob__menu-close');
const themeSelector = document.querySelector('#theme-selector');
const themeSlider = document.querySelector('.theme-slider');

searchBtn.addEventListener('click', onSearchBtn);
closeMobileMenu.addEventListener('click', onCloseMobileMenu);
themeSelector.addEventListener('change', onThemeChange)

function onSearchBtn(e) {
  searchSlider.classList.add('is-visible');
  searchBtn.classList.add('is-hidden');
}

burgerMenu.addEventListener('click', openMobileMenu);

function openMobileMenu(e) {
  mobileMenuWrap.classList.add('mob__menu-open');
  searchBtn.classList.add('is-hidden');
  burgerMenu.classList.add('is-hidden');
  closeMobileMenu.classList.remove('is-hidden');
}

function onCloseMobileMenu(e) {
  mobileMenuWrap.classList.remove('mob__menu-open');
  searchBtn.classList.remove('is-hidden');
  burgerMenu.classList.remove('is-hidden');
  closeMobileMenu.classList.add('is-hidden');
}

function onThemeChange(e) {
  if (themeSelector.checked) {
    themeSlider.classList.add('theme-slider-checked')
  } else { themeSlider.classList.remove('theme-slider-checked') }
}