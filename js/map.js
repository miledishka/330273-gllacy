document.addEventListener('DOMContentLoaded', function(){
  ymaps.ready(function () {
      var myMap = new ymaps.Map('yandex-map', {
              center: [59.939319, 30.328747],
              zoom: 16
          }, {
              searchControlProvider: 'yandex#search'
          }),

          myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: './img/pin.svg',
              // Размеры метки.
              iconImageSize: [80, 140],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-40, -140]
          });

      myMap.geoObjects.add(myPlacemark);
  });
});
