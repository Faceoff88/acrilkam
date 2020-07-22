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
};

menuButton.addEventListener('click', onClickMenuButton);

// FORM //

var feedBack = document.querySelector('.feedback');
var feedBackForm = document.querySelector('.feedback>.wrapper');
var callFormButtons = document.querySelectorAll('.form-button');
var feedbackClose = feedBack.querySelector('.feedback__close');

var onClickCallFormBtn = function (evt) {
  evt.preventDefault();

  feedBack.classList.add('feedback--open');
  setTimeout(function () {
    feedBackForm.style.top = '50%';
  }, 300);

  feedbackClose.addEventListener('click', onCloseForm);
};

for (var i = 0; i < callFormButtons.length; i++) {
  callFormButtons[i].addEventListener('click', onClickCallFormBtn);
}

var onCloseForm = function (evt) {
  evt.preventDefault();

  feedBack.classList.remove('feedback--open');
  feedBackForm.style.top = '-100%';

  feedbackClose.removeEventListener('click', onCloseForm);
}
