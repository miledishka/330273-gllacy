// слайдер
var sliderItems = document.querySelectorAll(".slider__item");
var sliderControls = document.querySelectorAll(".slider__btn");
var body = document.querySelector("body");
var setNewSlide = function(count) {
	document.querySelector(".slider__item--active").classList.remove("slider__item--active");
	sliderItems[count].classList.add("slider__item--active");
}

var setNewBackground = function(index) {
  classes = Array("home--first", "home--second", "home--third");
  classes.map(function(item) {
    return body.classList.remove(item);
  });
  body.classList.add(classes[index])
}

for(var i = 0; i < sliderControls.length; i++) {
	sliderControls[i].addEventListener("click", function(e) {
		e.preventDefault();

		var index = [].indexOf.call(sliderControls, this);

		document.querySelector(".slider__btn--active").classList.remove("slider__btn--active");
		this.classList.add("slider__btn--active");

		setNewSlide(index);
		setNewBackground(index);
	});
}

// карта
document.addEventListener("DOMContentLoaded", function(){
  ymaps.ready(function () {
    var myMap = new ymaps.Map("yandex-map", {
      center: [59.939319, 30.328747],
      zoom: 16
      }, {
      searchControlProvider: "yandex#search"
      }),

  myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    }, {
      iconLayout: "default#image",
      iconImageHref: "./img/pin.svg",
      iconImageSize: [80, 140],
      iconImageOffset: [-40, -140]
    });

  myMap.geoObjects.add(myPlacemark);
  });
});

// модалка
function toggle(id, toggled_class) {
  element = document.getElementById(id);

  if (element.classList) {
    element.classList.toggle(toggled_class);
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf(toggled_class);

    if (i >= 0) {
      classes.splice(i, 1);
    } else {
      classes.push(toggled_class);
    }

    element.className = classes.join(" ");
  }
}

function toggleModal(id) {
  toggle(id, "active");
  toggle("modal-overlay", "active");
  modal = document.getElementById(id);
  overlay = document.getElementById("modal-overlay");
  removeError(modal, overlay);
}

function removeError(modal, overlay) {
  if (!modal.classList.contains("active")) {
    modal.classList.remove("modal-error");
  }
}

var overlay = document.getElementById("modal-overlay");
var modal = document.getElementById("feedback-modal");
var form = modal.querySelector(".feedback-form");
var nameFeedback = form.querySelector("[name=name-feedback]");
var emailFeedback = form.querySelector("[name=email-feedback]");
var commentFeedback = form.querySelector("[name=comment-feedback]");

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && modal.classList.contains("active")) {
    toggleModal("feedback-modal");
  }
});

form.addEventListener("submit", function (evt) {
  if (!nameFeedback.value || !emailFeedback.value || !commentFeedback.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = modal.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    return true;
  }
});
