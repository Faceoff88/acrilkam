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
