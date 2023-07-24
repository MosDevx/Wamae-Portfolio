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


homepageTL.to('.name-span',{

	keyframes:{
		color:['#443322','#129126','#102796']
	},
	duration:3,
	repeat:-1
})

// gsap.to('.about-me-div',{
// 		scrollTrigger: '.about-me-div',
// 		x:300,
// 		duration:2,
// 		opacity:1
// })