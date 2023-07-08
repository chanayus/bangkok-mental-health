const initAnimation = () => {
  const heroIcons = gsap.utils.toArray(".hero-icon");

  gsap.fromTo(".hero-icon", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, delay: 0.4, stagger: 0.175, ease: "expo", duration: 1.5 });
  gsap.fromTo("#human", { autoAlpha: 0, y: 40 }, { autoAlpha: 1, delay: 0.2, y: 0, ease: "expo", duration: 1.5 });
  gsap.fromTo("#bg-hero", { autoAlpha: 0, filter: "blur(5px)" }, { autoAlpha: 1, filter: "blur(0px)", delay: 0.2, y: 0, ease: "expo", duration: 1 });
  gsap.fromTo(".hero-text", { autoAlpha: 0, filter: "blur(0px)", y: 25 }, { autoAlpha: 1, filter: "blur(0px)", delay: 0.3, y: 0, stagger: 0.2, ease: "expo", duration: 1 });

  heroIcons.forEach((element, index) => {
    gsap.fromTo(element, { y: 0 }, { y: 15, duration: 2 + index * 0.5, repeat: -1, ease: "none", yoyo: true });
  });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#services-section",
        start: "20% 50%",
        end: "20% 50%",
      },
    })
    .fromTo(
      ".service-card",
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        stagger: 0.2,
        y: 0,
        ease: "expo",
      }
    )
    .fromTo(
      ".service-icon",
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        stagger: 0.2,
        y: 0,
        ease: "expo",
      },
      "-=0.35"
    )
    .fromTo(
      ".service-backdrop",
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        stagger: 0.2,
        ease: "none",
      }
    )
    .fromTo(
      ".service-text",
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        stagger: 0.2,
        ease: "none",
        duration: 0.2,
      },
      "-=1"
    );
};

const initSlide = () => {
  new Splide("#complete-case-slide", {
    perPage: 1,
    gap: "1.25rem",
    focus: "center",
    snap: false,
    fixedWidth: true,
    drag: "free",
    pagination: false,
    arrows: false,
    padding: { left: "15rem", right: "2rem" },
    breakpoints: {
      1440: {
        padding: { left: "1.25rem", right: "1.25rem" },
        drag: true,
        gap: "0.75rem",
      },
    },
  }).mount();

  new Splide("#article-mobile-slide", {
    perPage: 1,
    perMove: 1,
    gap: "1.25rem",
    arrows: false,
  }).mount();
};

initAnimation();
initSlide();
