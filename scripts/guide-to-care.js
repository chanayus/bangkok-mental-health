const cards = document.querySelectorAll(".patient-card");

cards.forEach((card, index) => {
  gsap.fromTo(
    card,
    { autoAlpha: 0, x: index % 2 === 0 ? 75 : -75 },
    {
      autoAlpha: 1,
      x: 0,
      scrollTrigger: {
        trigger: card,
        start: "-12% 50%",
      },
    }
  );
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#hero-text-wrapper",
      start: "-12% 50%",
    },
  })

  .fromTo(
    "#hero-text-2",
    { yPercent: 100 },
    {
      yPercent: 0,
      ease: "expo.out",
      duration: 1,
    },
    "+=0.25"
  )
  .fromTo(
    "#hero-text-3",
    { yPercent: 100 },
    {
      yPercent: 0,
      ease: "expo",
      duration: 1,
    },
    "-=0.5"
  )
  .fromTo(
    "#hero-text-1",
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      ease: "expo",
      duration: 1,
    },
    "-=0.5"
  );

gsap.fromTo(
  "#family-text",
  { autoAlpha: 0 },
  {
    autoAlpha: 1,
    scrollTrigger: {
      trigger: ".family-section",
      start: "10% 50%",
    },
  }
);

gsap.fromTo(
  "#family-image",
  { autoAlpha: 0, rotate: -5, scale: 0.75 },
  {
    autoAlpha: 1,
    rotate: 0,
    scale: 1,
    scrollTrigger: {
      trigger: ".family-section",
      start: "10% 50%",
    },
  }
);
