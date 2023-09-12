const initAnimation = () => {
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
  window.scrollTo(0, 0);

  let currentBannerPage = 0;

  const heroBanners = document.querySelectorAll(".hero-banner-content");
  const prevButton = document.querySelector("#hero-banner-prev");
  const nextButton = document.querySelector("#hero-banner-next");
  const pagination = document.querySelector("#hero-banner-pagination");

  const timer = gsap.delayedCall(0.5, () => {}, [currentBannerPage]);

  const initPagination = () => {
    [...Array(heroBanners.length).keys()].map((index) => {
      pagination.innerHTML += `
        <button class="${index === currentBannerPage ? "w-7 bg-orange rounded-3xl pointer-events-none" : "w-3 bg-white rounded-full"} h-3 hero-banner-page-dot"></button>
      `;
    });

    document.querySelectorAll(".hero-banner-page-dot").forEach((ele, index) => {
      ele.addEventListener("click", () => {
        playBannerAnimation(heroBanners[currentBannerPage], heroBanners[index]);

        currentBannerPage = index;
        updatePagination();
      });
    });
  };

  const updatePagination = () => {
    const dots = pagination.querySelectorAll("button");
    timer.restart(true);
    dots.forEach((dot, index) => {
      dot.className = `${index === currentBannerPage ? "w-7 bg-orange rounded-3xl pointer-events-none" : "w-3 bg-white rounded-full"} h-3 hero-banner-page-dot`;
    });
  };

  const toggleButtons = (enabled) => {
    prevButton.style.pointerEvents = enabled ? "auto" : "none";
    nextButton.style.pointerEvents = enabled ? "auto" : "none";

    document.querySelectorAll(".hero-banner-page-dot").forEach((ele, index) => {
      ele.style.pointerEvents = enabled ? "auto" : "none";
    });
  };

  const playBannerAnimation = (currentElement, nextElement) => {
    timer.restart(true);

    const tl = gsap.timeline({
      onStart: () => {
        toggleButtons(false);
      },
      onComplete: () => toggleButtons(true),
    });
    tl.to(currentElement.querySelector("#human"), { autoAlpha: 0, duration: 0.5 }, 0)
      .to(currentElement.querySelectorAll(".hero-text"), { autoAlpha: 0, duration: 0.5 }, 0)
      .set(currentElement, { display: "none" })
      .set(nextElement, { display: "flex" })
      .fromTo(nextElement.querySelector("#human"), { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, ease: "expo", duration: 0.5 }, 0.55)
      .fromTo(nextElement.querySelectorAll(".hero-text"), { autoAlpha: 0, y: 25 }, { autoAlpha: 1, y: 0, stagger: 0.2, ease: "expo", duration: 0.5 }, 0.45);
  };

  heroBanners.forEach((element, index) => {
    if (index !== currentBannerPage) {
      gsap.set(element, { display: "none" });

      gsap.set(element.querySelector("#human"), { autoAlpha: 0 });
      gsap.set(element.querySelectorAll(".hero-text"), { autoAlpha: 0 });
    } else {
      gsap.set(element, { display: "flex" });

      gsap.fromTo(element.querySelectorAll(".hero-text"), { autoAlpha: 0, y: 25 }, { autoAlpha: 1, delay: 0.3, y: 0, stagger: 0.2, ease: "expo", duration: 0.75 });
      gsap.fromTo(element.querySelector("#human"), { autoAlpha: 0, y: 40 }, { autoAlpha: 1, delay: 0.5, y: 0, ease: "expo", duration: 1 });
    }
  });

  prevButton.addEventListener("click", () => {
    playBannerAnimation(heroBanners[currentBannerPage], heroBanners[currentBannerPage - 1 < 0 ? heroBanners.length - 1 : currentBannerPage - 1]);
    currentBannerPage = currentBannerPage - 1 < 0 ? heroBanners.length - 1 : currentBannerPage - 1;
    updatePagination();
  });

  nextButton.addEventListener("click", () => {
    playBannerAnimation(heroBanners[currentBannerPage], heroBanners[currentBannerPage + 1 > heroBanners.length - 1 ? 0 : currentBannerPage + 1]);
    currentBannerPage = currentBannerPage + 1 > heroBanners.length - 1 ? 0 : currentBannerPage + 1;
    updatePagination();
  });

  const container = document.querySelector("#hiring-slide");
  const slides = container.querySelectorAll(".splide__slide");
  const hiringMobileContainer = document.querySelector("#hiring-mobile-content");

  slides.forEach((item) => {
    hiringMobileContainer.innerHTML += item.outerHTML;
  });

  new Splide("#hiring-slide", {
    perPage: 4,
    gap: "1.5rem",
    snap: false,
    drag: "free",
    pagination: false,
    padding: { left: "15rem", right: "2rem" },
    breakpoints: {
      1480: {
        perPage: 3,
        padding: { left: "1.25rem", right: "1.25rem" },
        drag: true,
      },
      1024: {
        destroy: true,
      },
    },
  }).mount();
  initPagination();
};

initSlide();
initAnimation();
