'use strict';
const meters = document.querySelectorAll('.experience-measure');
const figures = document.querySelectorAll('.content__figure');

const setExperienceMeasure = meter => {
  meter.querySelector('.experience-measure__value')
    .style.width = meter.dataset.value + '%';
}

const setImgPosition = figure => figure.style.left = 0;

const isVisible = elem => {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;

  //Visible top or bottom border of the element
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

const showVisibleExperienceMeasure = () => {
  meters.forEach(meter => isVisible(meter) && setExperienceMeasure(meter));
}

window.addEventListener('scroll', showVisibleExperienceMeasure);
showVisibleExperienceMeasure();

const showVisibleImg = () => {
  figures.forEach(figure => isVisible(figure) && setImgPosition(figure));
}

window.addEventListener('scroll', showVisibleImg);
showVisibleImg();
