const cards = document.querySelectorAll(".card-item");

cards.forEach((card) => {
  gsap.fromTo(
    card,
    { autoAlpha: 0, y: 50 },
    {
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: card,
        start: "-15% 50%",
      },
    }
  );
});
