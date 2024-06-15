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
});
