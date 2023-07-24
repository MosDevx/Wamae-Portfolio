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

let homepageTL = gsap.timeline({defaults: {duration:2.5,ease:'elastic.out(1, 0.6)'}})

homepageTL.fromTo('.greeting-span', {
	x: '-25vw',
	opacity: 0,
}, {

	x: 0,
	// duration: 1.5,
	opacity: 1,
	// zIndex:-1
});
homepageTL.fromTo('.jobtitle-span', {
	x: '25vw',
	opacity: 0,
}, {

	x: 0,
	// duration: 1.5,
	opacity: 1,
	// zIndex:-1
},
'<0.6'
);

// gsap.to('.about-me-div',{
// 		scrollTrigger: '.about-me-div',
// 		x:300,
// 		duration:2,
// 		opacity:1
// })