function showAnimation(){
    function onEntry(entry) {
        entry.forEach((change) => {
          if (change.isIntersecting) {
            change.target.classList.add("element-show");
          }
        });
      }
      let options = { threshold: [0.7] };
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
     
      function commonCounter() {
        counter(8, "#years", 1);
        counter(5000, "#trains", 50);
        counter(300, "#students", 10);
      }
}

export default showAnimation