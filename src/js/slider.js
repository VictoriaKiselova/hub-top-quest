'use strict';

import Swiper from 'swiper/bundle';
import {
  Navigation,
  Keyboard,
  Mousewheel,
  EffectCoverflow,
  Pagination,
} from 'swiper/modules';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Keyboard, Mousewheel, EffectCoverflow, Pagination],
  direction: 'horizontal',
  slidesPerView: 1,
  centeredSlides: true,
  speed: 300,
  loop: true,
  grabCursor: true,
  allowTouchMove: true,
  edgeSwipeDetection: true,
  edgeSwipeThreshold: 10,

  coverflowEffect: {
    rotate: 0,
    stretch: 1,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: '24px',
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: '24px',
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: {
    enabled: true,
  },
  keyboard: {
    enabled: true,
  },
});
