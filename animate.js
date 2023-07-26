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

// homepageTL.fromTo('.intro-text', {opacity:0,scale:0}, 
// {
// 	opacity: 1,
// 	duration:1.3,
// 	scale:1.3,
// },
// '<2.4'
// )


const introText = new SplitType('.intro-text',{types:'words,chars'})

introText.words.forEach(word=> {
	gsap.set(word,{
		x:'random(-100,100)',
		y:'random(-200,200)',
		opacity:0
	})
});

homepageTL.to(introText.words,{
	x:0,
	y:0,
	opacity:1,
	duration:2
})

// homepageTL.fromTo(introText.words,
// 	{
// 		x:"random(-100,300)",
// 		y:"random(-20,50)",
// 		opacity:0,
// 		repeatRefresh:true
// 	},
// 	{
// 	opacity:1,
// 	duration:2,
// 	ease:'elastic.out(0.9,0.3)',
// 	// rotate:360,
// 	x:0,
// 	y:0,
// 	stagger:0.1
// },
// '<0.6')

gsap.to(introText.words,
	{
	x:"random(-300,300)",
	y:"random(-100,400)",
	rotation:"random(0,360)",
	duration:4,
	scale:'random(0.8,1.2)',
	// stagger:0.1,
	// yoyo:true,
	repeat:-1,
	repeatRefresh:true,
	ease:"power1.inOut",
	onReverseComplete:completeIntroText,
	scrollTrigger:{
		trigger:'.intro-text',
		// markers:true,
		start: '30 30%',
		end:'bottom 5%',
		toggleActions:'play reverse none none'

	}
})



function completeIntroText(){
	// introText.revert()
	console.log("Called")
	gsap.to(introText.words,{
		x:0,
		y:0,
		rotation:0,
		scale:1,
		duration:1
	})
	// introText.revert()
}


//skew the name and title texts when scrolling down

const greetingText = new SplitType('.greeting-span',{types:'words'})
const jobTitleText = new SplitType('.jobtitle-span',{types:'words'})

gsap.to([jobTitleText.words, greetingText.words],{

	rotation:"random(0,360)",
	duration: 3,
	scrollTrigger:{
		trigger:'.greeting-span',
		start:'top 10%',
		scrub:1,
		markers:true
	}

}) 


gsap.to('.name-span div',{

	keyframes:{
		backgroundImage:['linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8))','linear-gradient(to right top, rgb(217, 70, 239), rgb(220, 38, 38), rgb(251, 146, 60))','linear-gradient(to right, rgb(153, 246, 228), rgb(217, 249, 157))','linear-gradient(to right, rgb(255, 228, 230), rgb(204, 251, 241))','linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175), rgb(17, 24, 39))','linear-gradient(to right, rgb(190, 18, 60), rgb(219, 39, 119))','linear-gradient(to right, rgb(56, 189, 248), rgb(103, 232, 249))'],
		easeEach: "slow(0.7, 0.7, false)",
	},
	duration:10,
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
