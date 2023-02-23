import axios from "axios";
function form() {
  const CHAT_ID = "-1001712866526";
  const TOKEN = "6254519044:AAF2zneOOXJoD6nqdA0I30-B0Zn7e7Rjj14";
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const form = document.getElementById("form");
  const select = document.getElementById("train")
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let message = `<b> Заявка с сайта Mitsumoro</b> \n `;
    message += `<b> Отправитель: </b> ${this.name.value} \n `;
    message += `<b> Телефон: </b> ${this.phone.value} \n`;
    if(select){
        message += `<b> Тренировка: </b> ${this.train.value} \n `;
    }
    
    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
      })
      .then((res) => {
        this.name.value = "";
        this.phone.value = "";
      })
      .catch((err) => {
        console.warn(err);
      })
      .finally(() => {
        console.log("Done");
      });
  });
}
export default form;
