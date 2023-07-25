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

let homepageTL = gsap.timeline({defaults: {duration:3,ease:'elastic.out(0.7, 0.6)'}})

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

homepageTL.fromTo('.intro-text', {opacity:0,scale:0}, 
{
	opacity: 1,
	duration:1.3,
	scale:1.3,
},
'<2.4'
)

homepageTL.to('.intro-text',{scale:1,duration:1,ease:'elastic.out(0.9,0.3)'},'<0.6')


gsap.to('.name-span',{

	keyframes:{
		backgroundImage:['linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))','linear-gradient(to right top, rgb(217, 70, 239), rgb(220, 38, 38), rgb(251, 146, 60))','linear-gradient(to right, rgb(153, 246, 228), rgb(217, 249, 157))'],
		easeEach: "slow(0.7, 0.7, false)",
	},
	duration:4,
	ease: "sine.inOut",
	yoyo:true,
	repeat:-1
})

// gsap.to('.about-me-div',{
// 		scrollTrigger: '.about-me-div',
// 		x:300,
// 		duration:2,
// 		opacity:1
// })

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
