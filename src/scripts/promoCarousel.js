'use strict';
const promoCarauselRightElement = document.getElementById('promoCarouselRight');
const promoCarouselLeftElement = document.getElementById('promoCarouselLeft');

const promoCarauselRight = new Flickity(promoCarauselRightElement, {
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
