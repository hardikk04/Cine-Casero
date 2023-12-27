const tl = gsap.timeline();
function imgGalleryGsap() {
  tl.to(".page1-img-part3", {
    height: "100%",
    width: "100%",
    scrollTrigger: {
      scroller: "body",
      trigger: ".page1-img-gallery",
      start: "top 0%",
      end: "top -100%",
      pin: true,
      scrub: 1,
      // markers: true,
    },
  })
    .to(".page1-img-part1", {
      left: "-35%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1-img-gallery",
        start: "top 0%",
        end: "top -100%",
        //   pin: true,
        scrub: 1,
        //   markers: true,
      },
    })

    .to(".page1-img-part2", {
      left: "-22%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1-img-gallery",
        start: "top 0%",
        end: "top -100%",
        //   pin: true,
        scrub: 1,
        //   markers: true,
      },
    })
    .to(".page1-img-part4", {
      right: "-22%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1-img-gallery",
        start: "top 0%",
        end: "top -100%",
        //   pin: true,
        scrub: 1,
        //   markers: true,
      },
    })

    .to(".page1-img-part5", {
      right: "-35%",
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1-img-gallery",
        start: "top 0%",
        end: "top -100%",
        //   pin: true,
        scrub: 1,
        //   markers: true,
      },
    })

    .from(".page1-img-part3 > h1", {
      y: 100,
      fontSize: "1vw",
      opacity: 0,
      scrollTrigger: {
        scroller: "body",
        trigger: ".page1-img-gallery",
        start: "top 0%",
        end: "top -100%",
        //   pin: true,
        scrub: 1,
        //   markers: true,
      },
    });
}

imgGalleryGsap();
