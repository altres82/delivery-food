const cardButton = document.querySelector("#card-button"); //присваиваем переменной cardButton кнопку с индентификаторм card-button
const modal = document.querySelector(".modal"); //присваиваем переменной modal класс modal
const close = document.querySelector(".close"); //присваиваем переменной close класс close

/*первый вариант
cardButton.addEventListener("click", function (event) {
  // отслеживаем клин по кнопке
  modal.classList.add("is-open"); //добавляем в клас modal класс is-open
});
close.addEventListener("click", function (event) {
  // отслеживаем клин по кнопке
  modal.classList.remove("is-open"); //добавляем в клас modal класс is-open
});
*/
/*второй вариант*/
cardButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open"); //функция добавляет или убирет, еслти уже есть то убирает
}

new WOW().init();
