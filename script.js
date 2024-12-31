var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"50% 50%",
    scrub:true,
    // markers:true,
}})
tl.to("#fenta",{
    top:"120%",
    left:"7%"
},'orange')

tl.to("#orange2",{
    top:"155%",
    left:"25%"
},'orange')

tl.to("#orange",{
    width:"15%",
    top:"170%",
    left:"70%"
},'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"20% 50%",
    scrub:true,
    // markers:true,
}})
tl2.from(".lemon",{
    rotate:"-90deg",
    left:"-50%",
    top:"100%"
},'ca')

tl2.from("#cocacola",{
    rotate:"-90deg",
    left:"-50%",
    top:"100%"
},'ca')

tl2.from(".lemon1",{
    rotate:"90deg",
    left:"50%",
    top:"100%"
},'ca')

tl2.from("#pepsi",{
    rotate:"90deg",
    left:"50%",
    top:"100%"
},'ca')

tl2.to("#orange2",{
    left:"40%",
    top:"199%"
},'ca')

tl2.to("#fenta",{
    width:"33%",
    top:"210%",
    left:"34%",
},'ca')


