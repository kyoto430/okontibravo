console.log('slider running...');

new Swiper('.preview__slider', {
  slidesPerView: 3,
  pagination: {
    el: '.preview-slider__pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.preview-slider__btn-prev',
    nextEl: '.preview-slider__btn-next',
  },
  uniqueNavElements: false,
});
