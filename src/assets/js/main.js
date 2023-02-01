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


