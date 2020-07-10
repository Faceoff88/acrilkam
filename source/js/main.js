var menuButton = document.querySelector('.main-nav__button');
var menu = document.querySelector('.main-nav');
var closeMenuButton = document.querySelector('.main-nav__close');

var onClickMenuButton = function (evt) {
  evt.preventDefault();
  menu.classList.add('main-nav--open');
  setTimeout(function () {
    menuButton.classList.add('main-nav__button--open');
    closeMenuButton.classList.add('main-nav__close--open');
  }, 300);
  closeMenuButton.addEventListener('click', onClickCloseButton);
};

var onClickCloseButton = function (evt) {
  evt.preventDefault();
  menu.classList.remove('main-nav--open');
  menuButton.classList.remove('main-nav__button--open');
  closeMenuButton.classList.remove('main-nav__close--open');
  closeMenuButton.removeEventListener('click', onClickCloseButton);
}

menuButton.addEventListener('click', onClickMenuButton);
