console.log("hello from counter");
// находим элементы на странице (-, +, счетчик)
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

// отслеживаем клик на кнопку минус
btnMinus.addEventListener("click", function () {
  // проверка, что счетчик больше 1
  if (parseInt(counter.innerText) > 1) {
    counter.innerText = --counter.innerText;
  }
});

// отслеживаем клик на кнопку плюс
btnPlus.addEventListener("click", function () {
  counter.innerText = ++counter.innerText;
});
