document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

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
    autoplay: {
      delay: 1000,
    },
    speed: 2600,

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

  // 1. 중복되는 각각의 선택자를 배열로
  const leftTitle = gsap.utils.toArray(".about-con h3 span:first-child");
  leftTitle.forEach((title) => {
    gsap.to(title, {
      x: -300,
      duration: 4,
      ease: "none",

      scrollTrigger: {
        trigger: title,
        // markers: true,
        start: "top 50%",
        scrub: 1.5,
      },
    });
  });

  const rightTitle = gsap.utils.toArray(".about-con h3 span:last-child");
  rightTitle.forEach((title) => {
    gsap.to(title, {
      x: 300,
      duration: 4,
      ease: "none",

      scrollTrigger: {
        trigger: title,
        // markers: true,
        start: "top 50%",
        scrub: 1.5,
      },
    });
  });

  // 2. 중복되는 부모요소를 배열로, 그 부모를 기준으로 필터링
  const aboutCon = gsap.utils.toArray(".about-con-item");
  aboutCon.forEach((con) => {
    gsap
      .timeline({
        defaults: { duration: 2, ease: "power2.out" },

        scrollTrigger: {
          trigger: con,
          markers: true,
          start: "top 70%",
        },
      })
      .from(con.querySelector("figure"), {
        scale: 0.7,
      })
      .from(
        con.querySelector("img"),
        {
          autoAlpha: 0,
          scale: 1.6,
        },
        "<"
      );
  });
});
