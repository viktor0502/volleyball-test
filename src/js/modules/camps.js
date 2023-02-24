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
// в ВП создает слайд, куда помещается дата локация и картинка кастомно
function camps() {
  const btnSoon = document.getElementById("soon");
  const btnOver = document.getElementById("over");
  const btns = document.querySelector(".camps-slider__btns");

    function showSoonCamps(){
        
    }



  btns.addEventListener("click", (e) => {
    if (e.target == btnSoon) {
      btnSoon.classList.add("camps-slider__btn--active");
      btnOver.classList.remove("camps-slider__btn--active");
    }
    if (e.target == btnOver) {
      btnSoon.classList.remove("camps-slider__btn--active");
      btnOver.classList.add("camps-slider__btn--active");
    }
  });
}
export default camps