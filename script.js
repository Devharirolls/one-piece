gsap.to('#videoplyr',{
    scrollTrigger:{
        trigger: '#main',
        start: 'top top',
        scrub:3,
        pin:"#main"
    },
    width:"100%",
}) 

gsap.to('#one',{
    scrollTrigger:{
        trigger: '#main',
        start: 'top top',
        scrub:3,
    },
    left:'-600px',
    opacity: 0
}) 

gsap.to('#hold1',{
    scrollTrigger:{
        trigger: '#main',
        start: 'top top',
        scrub:3,
    },
    left:'-300px',
    opacity: 0
}) 


gsap.to('#sx',{
    scrollTrigger:{
        trigger: '#main',
        start: 'top top',
        scrub:3,
    },
    right:'-600px',
    opacity: 0
}) 

gsap.to('#hold2',{
    scrollTrigger:{
        trigger: '#main',
        start: 'top top',
        scrub:3,
    },
    right:'-300px',
    opacity: 0
}) 