var searchWrap=document.querySelector(".search__wrap"),searchBtn=document.querySelector(".header__search-btn"),searchInput=document.querySelector("#news__search"),searchSlider=document.querySelector(".search-input__slider"),burgerMenu=document.querySelector(".header__menu-btn"),mobileMenuWrap=document.querySelector(".mobile-menu__wrap"),closeMobileMenu=document.querySelector(".mob__menu-close"),themeSelector=document.querySelector("#theme-selector"),themeSlider=document.querySelector(".theme-slider");function onSearchBtn(e){searchSlider.classList.add("is-visible"),searchBtn.classList.add("is-hidden")}function openMobileMenu(e){mobileMenuWrap.classList.add("mob__menu-open"),searchBtn.classList.add("is-hidden"),burgerMenu.classList.add("is-hidden"),closeMobileMenu.classList.remove("is-hidden")}function onCloseMobileMenu(e){mobileMenuWrap.classList.remove("mob__menu-open"),searchBtn.classList.remove("is-hidden"),burgerMenu.classList.remove("is-hidden"),closeMobileMenu.classList.add("is-hidden")}function onThemeChange(e){themeSelector.checked?themeSlider.classList.add("theme-slider-checked"):themeSlider.classList.remove("theme-slider-checked")}searchBtn.addEventListener("click",onSearchBtn),closeMobileMenu.addEventListener("click",onCloseMobileMenu),themeSelector.addEventListener("change",onThemeChange),burgerMenu.addEventListener("click",openMobileMenu);
//# sourceMappingURL=index.2c1abd00.js.map
