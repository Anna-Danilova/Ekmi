// SELECTOR
function select() {
  const selectHeader = document.querySelectorAll('.select__header');
  const selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach((item) => {
    item.addEventListener('click', function () {
      this.parentElement.classList.toggle('select--active');
    });
  });

  selectItem.forEach((item) => {
    item.addEventListener('click', function () {
      let text = this.innerText;
      let select = this.closest('.select');
      let currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('select--active');
    });
  });

  window.addEventListener('click', function (event) {
    const select = document.querySelectorAll('.select');
    if (!event.target.closest('.select')) {
      select.forEach((item) => {
        item.classList.remove('select--active');
      });
    }
  });
}
select();

//MAIN-MENU

const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.header__hamburger');
hamburger.addEventListener('click', function () {
  menu.classList.toggle('menu--open');
  hamburger.classList.toggle('header__hamburger--menu-open');
});
