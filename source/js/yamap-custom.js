ymaps.ready(function () {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [55.770051, 37.595061],
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
      [55.770051, 37.595061],
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
        iconImageSize: [156, 160],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-50, -190],
        // Смещение слоя с содержимым относительно слоя с картинкой.
        //iconContentOffset: [15, 15],
        // Макет содержимого.
        iconContentLayout: MyIconContentLayout
      }
    );

  myMap.geoObjects.add(myPlacemarkWithContent);
});
