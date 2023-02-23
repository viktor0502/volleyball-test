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

  export default accordion