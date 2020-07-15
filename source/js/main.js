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
var footerOrder = document.querySelector('.order');
var footerOrderImage = footerOrder.querySelector('.order__image');
var footerOrderName = footerOrder.querySelector('.order__name');
var footerOrderSize = footerOrder.querySelector('.order__size>span:nth-child(2)');
var footerOrderResult = footerOrder.querySelector('.order__preliminary>p:nth-child(2)');
var sizes = document.querySelector('.sizes');
var materials = document.querySelector('.materials');
var formFactor = document.querySelector('.formfactor');
var activeProduct;

var placeSerialNum = function () {
  for (var i = 0; i < productsItem.length; i++) {
    productsItem[i].dataset.serialNum = i;
  }
};

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
      footerOrderName.innerText = selectedProductName.innerText;
      footerOrder.classList.add('order--active');

    }
  }
  getSerialNum();
  getClickedNexNumber();

  activeProduct = productsList.querySelector('.products--active');
  if (activeProduct.dataset.serialNum == 3) {
    formFactor.classList.add('formfactor--disabled');
    sizes.classList.add('formfactor--disabled');
    materials.classList.remove('materials--disabled');
  } else {
    sizes.classList.remove('formfactor--disabled');
    formFactor.classList.remove('formfactor--disabled');
    materials.classList.add('materials--disabled');
  }
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
  footerOrderName.innerText = activeProduct.querySelector('.products__description').innerText;
};

editSelectedNextButton.addEventListener('click', onClickNextButton);
productsList.addEventListener('click', onChangeProduct);

var formFactorList = formFactor.querySelector('.step__list');
var formFactorItem = formFactorList.querySelectorAll('.step__item');
var sizesImage = document.querySelector('.input-sizes__image');
var elemInputSizeC = document.querySelector('.input-sizes__item:last-child');
var elemInputSizeB = document.querySelector('.input-sizes__item:nth-child(2)');
var elemInputSizeA = document.querySelector('.input-sizes__item:first-child');
var setStraight = true;
var setLshaped = false;
var setUshaped = false;

var getFullSpaceProductsInMetr = function () {
  if (setStraight) {
    fullSpaceProductsInMetr = (parseFloat(inputSizeA.value) * parseFloat(inputSizeB.value)) / 10000;
  } else if (setLshaped) {
    fullSpaceProductsInMetr = ((parseFloat(inputSizeA.value) * parseFloat(inputSizeB.value)) + (parseFloat(inputSizeA.value) * parseFloat(inputSizeC.value))) / 10000;
  } else if (setUshaped) {
    fullSpaceProductsInMetr = (((parseFloat(inputSizeA.value) * parseFloat(inputSizeB.value)) * 2) + (parseFloat(inputSizeA.value) * parseFloat(inputSizeC.value))) / 10000;
  }

  return fullSpaceProductsInMetr;
};

var changeFormfactor = function (evt) {
  evt.preventDefault();
  var target = evt.target;
  for (var i = 0; i < formFactorItem.length; i++) {
    formFactorItem[i].classList.remove('step__item--active');
  }
  if (target.className == 'step__form-image') {
    sizesImage.src = 'img/' + target.dataset.formfactor + '.svg';
    footerOrderImage.src = 'img/' + target.dataset.formfactor + '.svg';
    target.parentNode.classList.add('step__item--active');
    elemInputSizeC.classList.remove('input-sizes__item--disabled');
    elemInputSizeB.classList.remove('input-sizes__item--disabled');
    elemInputSizeA.classList.remove('input-sizes__item--disabled');
    inputSizeC.removeAttribute('disabled', true);
    inputSizeB.removeAttribute('disabled', true);
    inputSizeA.removeAttribute('disabled', true);
    sizes.classList.remove('sizes--disabled');
    footerOrder.classList.add('order--active');


    if (target.dataset.formfactor == 'straight-sizes') {
      setStraight = true;
      setLshaped = false;
      setUshaped = false;
      elemInputSizeC.classList.add('input-sizes__item--disabled');
      inputSizeC.setAttribute('disabled', true);
    } else if (target.dataset.formfactor == 'l-shaped') {
      setLshaped = true;
      setStraight = false;
      setUshaped = false;
    } else if (target.dataset.formfactor == 'u-shaped-white') {
      setUshaped = true;
      setStraight = false;
      setLshaped = false;
    }
  }
  getFullSpaceProductsInMetr();

};

formFactorList.addEventListener('click', changeFormfactor);

var inputSizeList = document.querySelector('.input-sizes__list');
var inputSizeA = document.querySelector('.input-side-a');
var inputSizeB = document.querySelector('.input-side-b');
var inputSizeC = document.querySelector('.input-side-c');
var fullSpaceProductsInMetr = 0;


var onInputSizes = function (evt) {
  evt.preventDefault();
  var target = evt.target;
  if (target.tagName == "INPUT") {
    var re = /^[0-9]*$/;

    for (var i = 0; i < target.value.length; i++) {
      if (!re.test(target.value[i])) {
        target.value = "";
      }
    }
  }

  if (setStraight) {
    footerOrderSize.innerHTML = inputSizeA.value + ' X ' + inputSizeB.value + ' см';
  } else {
    footerOrderSize.innerHTML = inputSizeA.value + ' X ' + inputSizeB.value + ' X ' + inputSizeC.value + ' см';
  }
  getFullSpaceProductsInMetr();
  materials.classList.remove('materials--disabled');
};

inputSizeList.addEventListener('input', onInputSizes);

var materialsList = document.querySelector('.materials__list');
var materialsItem = materialsList.querySelectorAll('.materials__item');

var onChangeMaterial = function (evt) {

  var target = evt.target.parentNode;
  for (var i = 0; i < materialsItem.length; i++) {
    materialsItem[i].classList.remove('materials__item--active');
  }
  if (target.className == 'materials__item') {
    target.classList.add('materials__item--active');
  }
  var priceOfMetr = materialsList.querySelector('.materials__item--active').value;
  var resultSum = document.querySelector('.result__sum');
  var result = fullSpaceProductsInMetr * priceOfMetr;
  footerOrder.classList.add('order--active');
  activeProduct = productsList.querySelector('.products--active');
  if (isNaN(result)) {
    resultSum.innerHTML = '0' + '<sup>руб</sup>';
    footerOrderResult.innerHTML = '0' + '<sup>руб</sup>';
  } else if (activeProduct.dataset.serialNum == 3) {
    resultSum.innerHTML = 'от ' + (priceOfMetr - 10000) + '<sup>руб</sup>';
    footerOrderResult.innerHTML = 'от ' + (priceOfMetr - 10000) + '<sup>руб</sup>';
  } else {
    resultSum.innerHTML = result + '<sup>руб</sup>';
    footerOrderResult.innerHTML = result + '<sup>руб</sup>';
  }
};

materialsList.addEventListener('click', onChangeMaterial);


