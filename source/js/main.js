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
};

var texts = document.querySelectorAll('.production-dates__description');
for (let text of texts) {
  text.innerHTML = text.textContent.split('')
    .map((e, i) => `<span style="--rot:${i * 16}deg">${e}</span>`).join('');
};


// POPUP

var categories = document.querySelector('.categories');
var closePopup = document.querySelector('.stone-popup__close');
var stonePopup = document.querySelector('.stone-popup');
var stonePopupTitle = stonePopup.querySelector('.stone-popup__title');
var stonePopupImage = stonePopup.querySelector('.stone-popup__image');
var stonePopupPrice = stonePopup.querySelector('.stone-popup__price');
var stonePopupPriceOfList = stonePopup.querySelector('.stone-pupup__price-of-list');

var getSelectedStoneInfo = function (evt) {
  var target = evt.target;
  stonePopupImage.src = target.parentNode.querySelector('.categories__image').src;
  stonePopupTitle.innerText = target.parentNode.querySelector('.categories__subitem-name').innerText;
  stonePopupPrice.innerText = target.parentNode.querySelector('.categories__subitem-price').innerText;
  stonePopupPriceOfList.innerText = target.dataset.priceoflist;
  if (target.classList[1] == 'popup-link') {
    evt.preventDefault();
    stonePopup.classList.add('stone-popup--open');
    closePopup.addEventListener('click', onClosePopup);
  }
};

var onClosePopup = function (evt) {
  evt.preventDefault();
  stonePopup.classList.remove('stone-popup--open');
  closePopup.removeEventListener('click', onClosePopup);
};

categories.addEventListener('click', getSelectedStoneInfo);
