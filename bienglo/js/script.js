window.addEventListener('load', () => {
	const visualTL = gsap.timeline({ defaults: { ease: 'power4.inOut' } });

	visualTL.set('.visual .slide2', { opacity: 0 });

	visualTL.from('.visual', { scale: 0.9, duration: 2 });
	visualTL.from('.visual .slide', { scale: 1.3, duration: 2 }, '<');
	visualTL.from('.visual .slide .text', {
		autoAlpha: 0,
		y: 50,
		duration: 1,
		ease: 'none',
		// onComplete: () => visualYoyo(),
	});
	visualTL.to('.visual .slide1', {
		autoAlpha: 0,
		duration: 3,
		repeat: -1,
		repeatDelay: 1,
		yoyo: true,
	});
	visualTL.to(
		'.visual .slide2',
		{ autoAlpha: 1, duration: 3, repeat: -1, repeatDelay: 1, yoyo: true },
		'<'
	);

	function visualYoyo() {
		gsap.utils.toArray('.visual .slide').forEach((slide) => {
			gsap.to(slide, {
				autoAlpha: 0,
				duration: 3,
				repeat: -1,
				repeatDelay: 1,
				yoyo: true,
			});
		});
	}

	// about title
	document.querySelectorAll('.about h3 > span:first-child').forEach((title) => {
		gsap.to(title, {
			// animation
			x: -200,

			// scrollTrigger
			scrollTrigger: {
				trigger: title,
				start: 'top 100%',
				scrub: 3,
				// markers: true,
			},
		});
	});
	document.querySelectorAll('.about h3 > span:last-child').forEach((title) => {
		gsap.to(title, {
			// animation
			x: 200,

			// scrollTrigger
			scrollTrigger: {
				trigger: title,
				start: 'top 100%',
				scrub: 3,
				// markers: true,
			},
		});
	});

	// about figure
	document.querySelectorAll('.about-con figure').forEach((pic) => {
		const image = pic.querySelector('img');

		gsap.from(pic, {
			scale: 0.8,
			duration: 2,
			scrollTrigger: {
				trigger: pic,
				start: 'top 50%',
				// scrub: 1,
				// markers: true,
			},
		});
		gsap.from(image, {
			autoAlpha: 0,
			scale: 1.3,
			duration: 2,
			scrollTrigger: {
				trigger: pic,
				start: 'top 50%',

				// markers: true,
			},
		});
	});

	// contact
	gsap.from('.contact', {
		// width: 0,

		// 시계방향으로 클리핑 마스크를 씌운다고 생각
		clipPath: 'inset(50% 100% 50% 100%)',
		duration: 3,

		scrollTrigger: {
			trigger: '.contact',
			start: 'top 80%',
			// markers: true,
		},
	});
});
