const url = "https://api.adviceslip.com/advice";
var idTag = document.querySelector(".advice-id");
var quote = document.querySelector(".quote");
var dice = document.querySelector(".circle");

function LoadAdvice() {
  fetch(url)
    .then((response) => response.json())
    .then((object) => {
      idTag.innerHTML = `ADVICE #${object.slip.id}`;
      quote.innerHTML = `${object.slip.advice}`;
      console.log(object);
    })
    .catch();
}

dice.addEventListener("click", (event) => LoadAdvice());
window.onload(LoadAdvice());
