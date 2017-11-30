var sliderItems = document.querySelectorAll('.slider__item');
var sliderControls = document.querySelectorAll('.slider__btn');
var body = document.querySelector('body');

/**
 * Функция устанавливает новый слайд
 * @param {number} count Порядковый номер
 */
var setNewSlide = function(count) {
	document.querySelector('.slider__item--active').classList.remove('slider__item--active');
	sliderItems[count].classList.add('slider__item--active');
}

/**
 * Функция устанавливает новый фон для body`
 * @param {number} count Порядковый номер
 */
var setNewBackground = function(index) {
  classes = Array('home--first', 'home--second', 'home--third');
	body.classList.remove(...classes);
  // classes.map(function(item) {
  //   return body.classList.remove(item);
  // });
  body.classList.add(classes[index])
}

for(var i = 0; i < sliderControls.length; i++) {
	sliderControls[i].addEventListener('click', function(e) {
		e.preventDefault();

		var index = [].indexOf.call(sliderControls, this);

		document.querySelector('.slider__btn--active').classList.remove('slider__btn--active');
		this.classList.add('slider__btn--active');

		setNewSlide(index);
		setNewBackground(index);
	});
}
