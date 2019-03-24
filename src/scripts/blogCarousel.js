var onresize3 = function() {
  var width = document.body.clientWidth;
  var blogCellGroups;

  if (width < 576) {
    blogCellGroups = 1;
  } else if (width >= 576 && width <= 767) {
    blogCellGroups = 1;
  } else if (width >= 768 && width < 992) {
    blogCellGroups = 2;
  } else if (width >= 992) {
    blogCellGroups = 3;
  }

  var elem = document.querySelector('.blog-carousel');
  var blogCarousel = new Flickity(elem, {
    setGallerySize: false,
    groupCells: blogCellGroups,
    cellAlign: 'left'
  });
};

onresize3();
window.addEventListener('resize', onresize3);
