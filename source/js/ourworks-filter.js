var ourWorks = document.querySelector('.ourworks');
var ourWorksNav = ourWorks.querySelector('.ourworks__nav-list');
var ourWorksList = ourWorks.querySelector('.ourworks__list');
var ourWorksItems = ourWorksList.querySelectorAll('.ourworks__item');
var newArrOurWorks = Array.from(ourWorksItems);
var getFilteredWorks = function (evt) {
  evt.preventDefault();
  var target = evt.target;
  ourWorksList.innerHTML = '';
  for (var i = 0; i < newArrOurWorks.length; i++) {
    if (target.dataset.name == newArrOurWorks[i].dataset.product) {
      ourWorksList.appendChild(newArrOurWorks[i]);
    } else if (target.dataset.name == 'all') {
      for (var j = 0; j < newArrOurWorks.length; j++) {
        ourWorksList.appendChild(newArrOurWorks[j]);
      }
    }
  }
};

ourWorksNav.addEventListener('click', getFilteredWorks);
