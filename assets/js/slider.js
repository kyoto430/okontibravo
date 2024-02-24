console.log('slider running...');

if (window.innerWidth > 768) {
  new Swiper('.custom__slider', {
    // slidesPerView: 3,
    // slidesPerGroup: 1,
    // spaceBetween: 20,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
} else {
  new Swiper('.custom__slider', {
    // slidesPerView: 1,
    // slidesPerGroup: 1,
    // spaceBetween: 20,
    loop: false,
    navigation: {
      prevEl: '.slider__btn-prev',
      nextEl: '.slider__btn-next',
    },
  });
}
