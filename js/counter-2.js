window.addEventListener("click", function (event) {
  //console.log(event.target.dataset.action);
  let counter;

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    const counterWrapper = event.target.closest(".counter-wrapper");
    console.log(counterWrapper);
    counter = counterWrapper.querySelector("[data-counter]");
    console.log(counter);
  }

  //проверяем нажали ли мы на плюс
  if (event.target.dataset.action === "plus")
    counter.innerText = ++counter.innerText;

  //проверяем нажали ли мы на минус
  if (event.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    }
  }
});
