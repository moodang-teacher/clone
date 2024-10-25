document.addEventListener("DOMContentLoaded", function () {
  // Visual Slider
  const visualSwiper = new Swiper(".visual-slider", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    speed: 2000,
    allowTouchMove: true,
    fadeEffect: {
      crossFade: true,
    },
    grabCursor: true,
  });

  // Products Slider
  const productsSwiper = new Swiper(".products-slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // visual animation
  const visualTl = gsap.timeline({
    defaults: {
      ease: "power2.inOut",
      duration: 1.6,
    },
  });

  visualTl.from(".visual-slider-wrap", { scale: 0.9 });
  visualTl.from(".visual-slider", { scale: 1.3, autoAlpha: 0 }, "<");
  visualTl.from(".visual-slider .visual-text", {
    y: 100,
    autoAlpha: 0,
    duration: 0.6,
  });
  visualTl.from(".scroll-down", { opacity: 0 });

  // scroll down arrow
  gsap.from(".scroll-down b", {
    y: -15,
    duration: 1.6,
    repeat: -1,
    repeatDelay: 2,
    ease: "elastic.out(1,0.3)",
  });
});
