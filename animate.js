gsap.registerPlugin(ScrollTrigger);

let t1 = gsap.timeline({

	scrollTrigger:{
		trigger:".homepage-container",
		start:"top top",
		end:"bottom top",
		scrub:true,
		pin:true,
		anticipatePin: 1

	}
})


gsap.to('')