console.log('slider running...');

new Swiper('.preview__slider', {
  loop: false,
  slidesPerView: 1,
  centeredSlides: false,
  pagination: {
    el: '.preview-slider__pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.preview-slider__btn-prev',
    nextEl: '.preview-slider__btn-next',
  },
  breakpoints: {
    740: {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
    },
  },
});
