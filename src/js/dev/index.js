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
  
  var $container = $('.work-gallery').isotope({
    itemSelector: '.work-thumb',
    layoutMode: 'fitRows',
    fitRows: {
      gutter: 21
    }
  });
  
  $('.filter').on('click', '.filter-button', function () {
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });
  
  $('.filter').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.filter-button', function () {
      $buttonGroup.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    });
  });
});