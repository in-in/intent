$(document).ready(function () {
  $('.slider').slick({
    lazyLoad: 'ondemand',
    speed: 400,
    fade: true,
    infinite: true,
    slideToShow: 1,
    slidesToScroll: 1,
    dots: true
  });
});