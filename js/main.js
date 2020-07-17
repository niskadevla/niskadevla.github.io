'use strict';
const meters = document.querySelectorAll('.progress');
const figures = document.querySelectorAll('.content__figure');

const setProgress = meter => {
    meter.children[0].style.width = meter.dataset.value + '%';
}

const setImgPosition = figure => {
  figure.style.left = 0;
  figure.style.opacity = 1;
}

const isVisible = elem => {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;

  //Visible top or bottom border of the element
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

const showProgress = () => {
  meters.forEach(meter => isVisible(meter) && setProgress(meter));
}

const showVisibleImg = () => {
  figures.forEach(figure => isVisible(figure) && setImgPosition(figure));
}

window.addEventListener('scroll', showProgress);
showProgress();

window.addEventListener('scroll', showVisibleImg);
showVisibleImg();
