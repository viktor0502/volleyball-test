class Camp {
  constructor(date, location, parent) {
    this.date = date;
    this.location = location;
    this.parent = document.querySelector(parent);
  }
  render() {
    const elem = document.createElement("div");
    elem.innerHTML = `
      <div class="camps-slider__item camps-item">
        <div class="camps-item__img">
          <img src="./assets/img/trains/train2.png" alt="train" />
        </div>
        <div class="camps-item__content">
          <p class="camps-item__date">${date}</p>
          <p class="camps-item__location">${location}</p>
          <a class="btn btn-yellow" href="#">Подробнее</a>
        </div>
      </div>
      `;
    this.parent.append(elem);
  }
}

// SLIDER

const swiperCamp = new Swiper(".swiper-camps", {
  slidesPerView: 3.5,
  pagination: {
    el: ".swiper-pagination",
  },
});
const swiperAbout = new Swiper(".swiper-review", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Slider



function accordion(selector) {
  const acc = document.querySelectorAll("." + selector);

  acc.forEach((i) => {
    i.addEventListener("click", function () {
      this.classList.toggle(selector + "--active");
      const panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 24 + "px";
      }
    });
  });
}
accordion("accordion__btn");


// burger__menu

function burgerMenu(burgerBtnSelector, navMenuSelector, linksSelector) {
  const burger = document.querySelectorAll("." + burgerBtnSelector),
    navMenu = document.querySelectorAll("." + navMenuSelector),
    link = document.querySelectorAll("." + linksSelector);

  const scrollLock = () => {
      document.body.style.overflow = "hidden";
    },
    scrollUnclock = () => {
      document.body.style.overflow = "";
    },
    menuOpen = () => {
      navMenu.forEach((menu) => {
        menu.classList.add(navMenuSelector + "--active");
        scrollLock();
      });
    },
    menuClose = () => {
      navMenu.forEach((menu) => {
        menu.classList.remove(navMenuSelector + "--active");
        scrollUnclock();
      });
    };

  burger.forEach((burger) => {
    burger.addEventListener(`click`, () => {
      burger.classList.toggle(burgerBtnSelector + "--active");
      if (burger.classList.contains(burgerBtnSelector + "--active")) {
        menuOpen();
      } else {
        menuClose();
      }
    });
  });
  link.forEach((i) => {
    i.addEventListener(`click`, () => {
      burger.forEach((burger) => {
        burger.classList.remove(burgerBtnSelector + "--active");
        menuClose();
      });
    });
  });
}

burgerMenu('nav__burger-menu', 'nav__menu', 'nav__link')