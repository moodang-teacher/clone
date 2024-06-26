document.addEventListener('DOMContentLoaded', (event) => {
  gsap.registerPlugin(ScrollTrigger);

  // header
  ScrollTrigger.create({
    trigger: '#main',
    // markers: true,
    start: 'top 0',
    toggleClass: {
      targets: '#header',
      className: 'hide',
    },
  });

  // visual animation
  const visualTL = gsap.timeline();

  visualTL.from('.visual-title h2 > span', {
    y: 100,
    autoAlpha: 0,
    ease: 'power4.out',
    duration: 2,
    stagger: 0.2,
  });

  visualTL.from(
    '.visual-title-con',
    {
      y: 100,
      autoAlpha: 0,
      ease: 'power4.out',
      duration: 2,
    },
    0
  );

  visualTL.from(
    '.visual-img-list figure',
    {
      autoAlpha: 0,
      duration: 1,
      ease: 'none',
      stagger: { each: 0.3, from: 'random' },
    },
    1
  );

  visualTL.from('.btn-gotop', { xPercent: 300, autoAlpha: 0 }, '+=1');

  // sec-title
  const secTitle = gsap.utils.toArray('.sec-title');

  secTitle.forEach((title) => {
    gsap.from(title, {
      y: 100,
      autoAlpha: 0,
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: title,
        // markers: true,
        start: 'top 60%',
      },
    });
  });

  // text
  const aboutText = gsap.utils.toArray('.about-con-text');
  aboutText.forEach((text) => {
    gsap.from(text, {
      y: 100,
      autoAlpha: 0,
      ease: 'none',
      duration: 1,
      scrollTrigger: {
        trigger: text,
        // markers: true,
        start: 'top 70%',
      },
    });
  });
  // figure
  const aboutPic = gsap.utils.toArray('.about-con figure');
  aboutPic.forEach((pic) => {
    gsap.from(pic, {
      y: 100,
      autoAlpha: 0,
      ease: 'none',
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: pic,
        // markers: true,
        start: 'top 70%',
      },
    });
  });

  // fog moving
  const fog = document.querySelector('.fog');
  let x = 0;
  let y = 0;
  let mx = 0;
  let my = 0;
  const speed = 0.007;

  window.addEventListener('mousemove', (e) => {
    x = e.pageX;
    y = e.pageY;
  });

  fogMoving();
  function fogMoving() {
    mx += (x - mx) * speed;
    my += (y - my) * speed;

    console.log(mx, my);
    fog.style.left = mx + 'px';
    fog.style.top = my + 'px';

    requestAnimationFrame(fogMoving);
  }

  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
});
