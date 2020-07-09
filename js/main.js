'use strict';

const setExperienceMeasure = (meter) => {
  const meterValue = meter.querySelector('.experience-measure__value');
  meterValue.style.width = meter.value + '%';
}

function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;

  //Visible top or bottom border of the element
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

function showVisible() {
  const meters = document.querySelectorAll('.experience-measure');
  meters.forEach(meter => isVisible(meter) && setExperienceMeasure(meter));
}

window.addEventListener('scroll', showVisible);
showVisible();
