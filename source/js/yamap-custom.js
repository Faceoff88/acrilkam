ymaps.ready(function () {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [55.723307, 38.036377],
      zoom: 17,
      controls: []
    },
    {
      searchControlProvider: "yandex#search"
    }
  ),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemarkWithContent = new ymaps.Placemark(
      [55.723714, 38.040257],
      {
        hintContent: "Собственный значок метки с контентом",
        balloonContent:
          "AcrilKam - производство изделий из искуственного камня и кварца",
        iconContent: "12"
      },
      {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: "default#imageWithContent",
        // Своё изображение иконки метки.
        iconImageHref: "img/map-marker.png",
        // Размеры метки.
        iconImageSize: [116, 120],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-30, -120],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
      }
    );

  myMap.geoObjects.add(myPlacemarkWithContent);

  function onResizeMap() {
    if (window.innerWidth < '660') {
      myMap.setCenter([55.724495, 38.040264]);
    } else if (window.innerWidth < '1200') {
      myMap.setCenter([55.724065, 38.038055])
    } else {
      myMap.setCenter([55.723307, 38.036377]);
    }
  } onResizeMap();

  window.onresize = function () {
    onResizeMap();
  };
});
