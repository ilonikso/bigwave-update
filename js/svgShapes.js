// Index page
let tl = gsap.timeline({repeat: -1, repeatDelay: 0});
gsap.set('#mask-1', {duration: 2,transformOrigin:"50% 50%"});

// 0
tl.to('#mask-1', {duration: 2, rotate:"2", x:10 ,  ease:"power1.inOut"});
tl.to('#mask-1', {duration: 2, rotate:"-2", y:-25, scaleY: 1.02,  ease:"power1.inOut"}, "-=0");
tl.to('#mask-1', {duration: 2, rotate:"-1", y:-15, x: -15,  scaleX: 0.95,   ease:"power1.inOut"}, "-=0");
tl.to('#mask-1', {duration: 2, rotate:"2", y:-15, scaleX: 0.95,   ease:"power1.inOut"}, "-=0");
tl.to('#mask-1', {duration: 2, rotate:"0", x:0, y:0, scaleX: 1,  scaleY: 1, ease:"power1.inOut"}, "-=0");

