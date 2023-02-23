import burgerMenu from "./modules/burgerMenu";
import accordion from "./modules/accordion";
import showAnimation from "./modules/showAnimation";
import sliders from "./modules/sliders";
import form from "./modules/form";
import smoothScrolling from "./modules/smoothScrolling";
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
});

// class Camp {
//   constructor(date, location, parent) {
//     this.date = date;
//     this.location = location;
//     this.parent = document.querySelector(parent);
//   }
//   render() {
//     const elem = document.createElement("div");
//     elem.innerHTML = `
//       <div class="camps-slider__item camps-item">
//         <div class="camps-item__img">
//           <img src="./assets/img/trains/train2.png" alt="train" />
//         </div>
//         <div class="camps-item__content">
//           <p class="camps-item__date">${date}</p>
//           <p class="camps-item__location">${location}</p>
//           <a class="btn btn-yellow" href="#">Подробнее</a>
//         </div>
//       </div>
//       `;
//     this.parent.append(elem);
//   }
// }
