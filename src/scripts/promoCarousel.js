'use strict';
const promoCarauselRightElemenet = document.getElementById('promoCarouselRight');
const promoCarouselLeftElement = document.getElementById('promoCarouselLeft');

const promoCarauselRight = new Flickity(promoCarauselRightElemenet, {
  autoPlay: true,
  contain: true,
  draggable: true,
  cellAlign: 'left'
});

const promoCarouselLeft = new Flickity(promoCarouselLeftElement, {
  autoPlay: true,
  contain: true,
  draggable: true,
  cellAlign: 'left'
});

function promoCarouselsResize() {
  setInterval(function() {
    promoCarauselRight.resize();
    promoCarouselLeft.resize();
  }, 300);
}

window.addEventListener('resize', promoCarouselsResize);
