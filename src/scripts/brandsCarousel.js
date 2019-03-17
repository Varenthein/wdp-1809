var onresizeBrands = function() {
  var width = document.body.clientWidth;
  var groups;
  console.log(width);

  if (width < 576) {
    groups = 1;
  } else if (width >= 576 && width <= 767) {
    groups = 2;
  } else if (width >= 768 && width < 992) {
    groups = 4;
  } else if (width >= 992) {
    groups = 6;
  }

  var elem = document.querySelector('.brands-carousel');
  var brandsCarousel = new Flickity(elem, {
    setGallerySize: false,
    groupCells: groups,
    cellAlign: 'left'
  });
};

onresizeBrands();
window.addEventListener('resize', onresizeBrands);
