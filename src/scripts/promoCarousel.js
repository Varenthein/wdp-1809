'use strict';
const promoCarouselRightElement = document.getElementById('promoCarouselRight');
const promoCarouselLeftElement = document.getElementById('promoCarouselLeft');

const promoCarouselRight = new Flickity(promoCarouselRightElement, {
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
