//div внутри корзины, в который добавляется товар
const cartWrapper = document.querySelector(".cart-wrapper");

//Проверяем, что клик по кнопке "добавить в корзину"
window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-cart")) {
    //находим ближайшую карточку
    const card = event.target.closest(".card");

    //собираем данные с этого товара и пишем их в единый объект productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    //собранные данные кидаем в шаблон товара в корзине
    cartItemHTML = `<div class="cart-item" data-id=${productInfo.id}>
    <div class="cart-item__top">
        <div class="cart-item__img">
            <img src=${productInfo.imgSrc} alt="">
        </div>
        <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

            <!-- cart-item__details -->
            <div class="cart-item__details">

                <div class="items items--small counter-wrapper">
                    <div class="items__control" data-action="minus">-</div>
                    <div class="items__current" data-counter="">${productInfo.counter}</div>
                    <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                    <div class="price__currency">${productInfo.price}</div>
                </div>

            </div>
            <!-- // cart-item__details -->

        </div>
    </div>
</div>`;

    //добавляем товар в корзину
    cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
  }
});
