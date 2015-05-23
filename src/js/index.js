$(document).ready(function () {
  'use strict';
  $('.slider').slick({
    asNavFor: '.thumbnails',
    slideToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    dots: false,
    arrows: true,
    speed: 400,
    fade: true,
    infinite: true,
    appendArrows: $('.slider-arrows'),
    prevArrow: '<svg class="icon-arrow"><use xlink:href="#icon-arrow-left"></use></svg>',
    nextArrow: '<svg class="icon-arrow" ><use xlink:href="#icon-arrow-right"></use></svg>'
  });
  $('.thumbnails').slick({
    asNavFor: '.slider',
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: false,
    arrows: false,
    focusOnSelect: true
  });
});