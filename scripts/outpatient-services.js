const services = document.querySelectorAll(".service-item");

services.forEach((service, index) => {
  gsap.fromTo(
    service,
    { autoAlpha: 0, x: index % 2 === 0 ? 75 : -75 },
    {
      autoAlpha: 1,
      x: 0,
      scrollTrigger: {
        trigger: service,
        start: "-12% 50%",
      },
    }
  );
});
