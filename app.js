gsap.registerPlugin(ScrollTrigger);

const contents = gsap.utils.toArray("#container .item");

gsap.to(contents, {
  xPercent: -100 * (contents.length -1),
  scrollTrigger: {
    trigger: "#container",
    scroller: "body",
    start: "top 0%",
    end : "top -400%",
    pin: true,
    scrub: 1,
  }
})

const contents2 = gsap.utils.toArray("#container2 .item");

gsap.to(contents2, {
  xPercent: 100 * (contents2.length -1),
  scrollTrigger: {
    trigger: "#container2",
    scroller: "body",
    start: "top 0%",
    end : "top -400%",
    pin: true,
    scrub: 1,
  }
})