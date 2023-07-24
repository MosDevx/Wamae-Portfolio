gsap.registerPlugin(ScrollTrigger);

// let t1 = gsap.timeline({

// 	scrollTrigger:{
// 		// trigger:".homepage-container",
// 		start:"top top",
// 		end:"bottom top",
// 		scrub:true,
// 		pin:true,
// 		anticipatePin: 1

// 	}
// })

// gsap.set('.greeting-span', {x:-300,opacity:1})

gsap.fromTo('.greeting-span', {x:'-50vw', opacity:0},{

	x:0,
	duration:2,
	opacity:1,
	// zIndex:-1
})

// gsap.to('.about-me-div',{
// 		scrollTrigger: '.about-me-div',
// 		x:300,
// 		duration:2,
// 		opacity:1
// })