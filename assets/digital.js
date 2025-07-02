document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.digital-fade-slider__left', {
    effect: 'fade',
    loop: true,
    fadeEffect: { crossFade: true },
    speed: 700,
    navigation: {
      prevEl: '.digital-fade-slider__navigation-previous',
      nextEl: '.digital-fade-slider__navigation-next',
    },
  });

  const navigationItems = document.querySelectorAll('.category-nav-item');
  const rightPanel = document.querySelector('.digital-fade-slider__right');

  function setActiveCategory(index) {
    const realIndex = index % navigationItems.length;
    navigationItems.forEach((item, i) => {
      item.classList.toggle('active', i === realIndex);
    });

    const newActiveItem = navigationItems[realIndex];
    const newBg = newActiveItem?.getAttribute('data-block-bg');
    if (newBg) {
      rightPanel.style.background = newBg;
    }
  }

  setActiveCategory(swiper.realIndex);

  swiper.on('slideChange', function () {
    setActiveCategory(swiper.realIndex);
  });

  navigationItems.forEach((el, index) => {
    el.addEventListener('click', () => {
      swiper.slideToLoop(index);
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const sliderInner = document.querySelector('.digital-fade-slider__inner');
  if (sliderInner) {
    sliderInner.classList.add('loaded');
  }
});
