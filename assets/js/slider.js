console.log('slider running...');

new Swiper('.preview__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  pagination: {
    el: '.preview-slider__pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.preview-slider__btn-prev',
    nextEl: '.preview-slider__btn-next',
  },
});
