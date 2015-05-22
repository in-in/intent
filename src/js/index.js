$(document).ready(function () {
  'use strict';
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
    slidesToScroll: 10,
    asNavFor: '.slider',
    dots: false,
    arrows: false,
    focusOnSelect: true
  });
});


//  $('.slider').on({
//    beforeChange: function (event, slick, current_slide_index, next_slide_index) {
//      $('.thumbnails .slick-slide').removeClass('slick-main-active');
//      $('.thumbnails .slick-slide[data-index=' + next_slide_index + ']').addClass('slick-main-active');
//    }
//  }).slick({
//    asNavFor: '.thumbnails'
//  });