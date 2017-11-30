function toggle(id, toggled_class) {
  element = document.getElementById(id);

  if (element.classList) {
    element.classList.toggle(toggled_class);
  } else {
      // For IE9
      var classes = element.className.split(" ");
      var i = classes.indexOf(toggled_class);

      if (i >= 0)
          classes.splice(i, 1);
      else
          classes.push(toggled_class);
          element.className = classes.join(" ");
  }
}
function toggleModal(id) {
  toggle(id, 'active');
  toggle('modal-overlay', 'active');
}
