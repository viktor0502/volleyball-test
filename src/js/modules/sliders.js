import Swiper, { Navigation, Pagination } from 'swiper';
function sliders(){
    const swiperCamp = new Swiper(".swiper-camps", {
      modules: [Navigation, Pagination],
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          400: {
            slidesPerView: 1.5,
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
          1440: {
            slidesPerView: 4,
            spaceBetween: 40,
          }
        },
      });
      const swiperAbout = new Swiper(".swiper-review", {
        modules: [Navigation, Pagination],
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
      const swiperSchedule = new Swiper(".swiper-schedule", {
        modules: [Navigation, Pagination],

        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 12,
            allowTouchMove: true,
          },
          767: {
            slidesPerView: 8,
            spaceBetween: 12,
            allowTouchMove: false,
          }
        },
      });
      const swiperKinds = new Swiper(".swiper-kinds", {
        modules: [Navigation, Pagination],
        pagination: {
          el: ".swiper-pagination",
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 12,
            allowTouchMove: true,
          },
          760: {
            slidesPerView: 0,
            spaceBetween: 12,
            allowTouchMove: false,
          }
        },
      });
}

export default sliders