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
    appendArrows: $('.slider-arrows'),
    asNavFor: '.thumbnails',
    prevArrow: '<svg class="icon-arrow"><use xlink:href="#icon-arrow-left"></use></svg>',
    nextArrow: '<svg class="icon-arrow" ><use xlink:href="#icon-arrow-right"></use></svg>'
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