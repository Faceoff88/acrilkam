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

var productsList = document.querySelector('.products__list');
var productsItem = document.querySelectorAll('.products__item');
var editSelectedSubtitle = document.querySelector('.edit-selected__subtitle');
var editSelectedNextButton = document.querySelector('.edit-selected__next-button');
var productSerialNumber;
var wasClickedProductsList = false;

var placeSerialNum = function () {
  for (var i = 0; i < productsItem.length; i++) {
    productsItem[i].dataset.serialNum = i;
  }
}
placeSerialNum();

var getSerialNum = function () {
  productSerialNumber = productsList.querySelector('.products--active').dataset.serialNum;
};

var onChangeProduct = function (evt) {
  evt.preventDefault();
  var target = evt.target;

  for (var i = 0; i < productsItem.length; i++) {
    productsItem[i].classList.remove('products--active');
  }

  if (target.className == 'products__item') {
    target.classList.add('products--active');
  } else if (target.className == 'products__image') {
    target.parentNode.classList.add('products--active');
  }
  var num = 0;
  for (var j = 0; j < productsItem.length; j++) {
    num++;
    if (num >= 6) {
      num = 0;
    }
    if (productsItem[j].classList[1] == 'products--active') {
      var selectedProductName = productsItem[j].querySelector('.products__description');
      var nextSelectedProductName = productsItem[num].querySelector('.products__description');
      editSelectedNextButton.innerText = nextSelectedProductName.innerText;
      editSelectedSubtitle.innerText = selectedProductName.innerText;
    }
  }
  getSerialNum();

  getClickedNexNumber();
};


var nexNumber = 1;

getClickedNexNumber = function () {
  nexNumber = productSerialNumber;
};

var onClickNextButton = function (evt) {
  evt.preventDefault();

  for (var i = 0; i < productsItem.length; i++) {
    productsItem[i].classList.remove('products--active');
  }

  productsItem[nexNumber].classList.add('products--active');
  nexNumber++;
  if (nexNumber >= 6) {
    nexNumber = 0;
  }
  var activeProduct = productsList.querySelector('.products--active');
  editSelectedSubtitle.innerText = activeProduct.querySelector('.products__description').innerText;
  editSelectedNextButton.innerText = productsItem[nexNumber].querySelector('.products__description').innerText;
};

editSelectedNextButton.addEventListener('click', onClickNextButton);
productsList.addEventListener('click', onChangeProduct);


var formFactor = document.querySelector('.formfactor');
var formFactorList = formFactor.querySelector('.step__list');
var formFactorItem = formFactorList.querySelectorAll('.step__item');
var sizesImage = document.querySelector('.input-sizes__image');


var changeFormfactor = function (evt) {
  evt.preventDefault();
  var target = evt.target;

  for (var i = 0; i < formFactorItem.length; i++) {
    if (target.className == 'step__form-image') {
      console.log(target);
      sizesImage.src = 'img/' + target.dataset.formfactor + '.svg';
    }
  }
}

formFactorList.addEventListener('click', changeFormfactor);

