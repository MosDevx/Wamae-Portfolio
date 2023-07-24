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


// gsap.fromTo('.homepage-h1', {x:'-50vw', opacity:0},{
// 	scrollTrigger: '.homepage-h1',
// 	x:0,
// 	duration:2,
// 	opacity:1
// })

gsap.to('.about-me-div',{
		scrollTrigger: '.about-me-div',
		x:300,
		duration:2,
		opacity:1
})