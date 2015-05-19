$(document).ready(function () {
  $('.slider').slick({
    lazyLoad: 'ondemand',
    speed: 400,
    fade: true,
    infinite: true,
    slideToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.thumbnails'
  });
  $('.thumbnails').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });
});