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
  // centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    400: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
  },
});
const swiperAbout = new Swiper(".swiper-review", {
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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

burgerMenu("nav__burger-menu", "nav__menu", "nav__link");

// Counter & Show-animation

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);
let observerCounter = new IntersectionObserver(counterEntry, options);
let elements = document.querySelectorAll(".element-animation");
let numbers = document.querySelectorAll(".benefits__number");

for (let elm of elements) {
  observer.observe(elm);
}
for (let num of numbers) {
  observerCounter.observe(num);
}
function counterEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting && !change.target.classList.contains("over")) {
      commonCounter();
    }
  });
}
function counter(num, elem, step) {
  const time = 2000;
  let l = document.querySelector(elem);
  let n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n >= num) {
      clearInterval(interval);
    }
    l.innerHTML = n;
    l.classList.add("over");
  }, t);
}
console.log(document.querySelector('#years'))
function commonCounter() {
  counter(8, "#years", 1);
  counter(5000, "#trains", 50);
  counter(300, "#students", 10);
}