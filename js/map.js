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
              iconLayout: 'default#image',
              iconImageHref: './img/pin.svg',
              iconImageSize: [80, 140],
              iconImageOffset: [-40, -140]
          });

      myMap.geoObjects.add(myPlacemark);
  });
});
