import burgerMenu from "./modules/burgerMenu";
import accordion from "./modules/accordion";
import showAnimation from "./modules/showAnimation";
import sliders from "./modules/sliders";
import form from "./modules/form";
import smoothScrolling from "./modules/smoothScrolling";
import camps from "./modules/camps";
window.addEventListener("DOMContentLoaded", () => {
  accordion("accordion__btn");
  form()
  burgerMenu("nav__burger-menu", "nav__menu", "nav__link");
  showAnimation();
  sliders();
  jQuery(function ($) {
    $("#phone").mask("+7(999) 999-9999");
  });
  smoothScrolling()
  camps()
});

