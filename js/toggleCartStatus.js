function toggleCartStatus() {
  //находим элемент "корзина"
  const cartWrapper = document.querySelector(".cart-wrapper");

  //находим аттрибут элемента "корзина пуста"
  const cartEmptyBadge = document.querySelector("[data-cart-empty]");

  //находим id "оформить заказ"
  const orderForm = document.querySelector("#order-form");

  //скрываем надпись "корзина пуста"
  if (cartWrapper.children.length > 0) {
    cartEmptyBadge.classList.add("none");
    orderForm.classList.remove("none");
  } else {
    cartEmptyBadge.classList.remove("none");
    orderForm.classList.add("none");
  }

  //скрываем надпись "оформить заказ"
}
