let prevScrollY = window.scrollY;
const topNav = document.querySelector("#top-nav");

const showNavbar = () => {
  topNav.style.pointerEvents = "auto";
  gsap.to(topNav, { y: 0, duration: 0.1, ease: "none" });
};
const hideNavbar = () => {
  topNav.style.pointerEvents = "none";
  gsap.to(topNav, { y: "-100%", duration: 0.1, ease: "none" });
};

window.addEventListener("scroll", () => {
  gsap.to(topNav, {
    backgroundColor: window.scrollY <= 0 ? "transparent" : "rgba(255,255,255,1)",
    duration: 0.2,
    delay: 0,
    ease: "none",
  });

  if (window.scrollY < prevScrollY || window.scrollY <= 0) {
    showNavbar();
  } else {
    hideNavbar();
  }

  prevScrollY = window.scrollY;
});

const openSideMobileNav = () => {
  document.body.style.overflow = "hidden";
  gsap.to("#side-nav-wrapper", { autoAlpha: 1 });
  gsap.fromTo("#side-nav", { x: "100%" }, { x: 0, delay: 0.25, ease: "expo", duration: 1 });
};

const closeSideMobileNav = () => {
  document.body.style.overflow = "unset";
  gsap.to("#side-nav-wrapper", { autoAlpha: 0, delay: 0.25 });
  gsap.fromTo("#side-nav", { x: 0 }, { x: "100%", ease: "expo", duration: 1 });
};

const toggleCollapsibleMenu = (e) => {
  e.target.parentElement.classList.toggle("active");
};

const addCollapsibleButtonsEvent = () => {
  const collapsibleButton = document.querySelectorAll(".collapsible > button");
  [...collapsibleButton].map((item) => item.addEventListener("click", toggleCollapsibleMenu));
};

document.querySelector("#open-side-nav-button").addEventListener("click", openSideMobileNav);
document.querySelector("#close-side-nav-button").addEventListener("click", closeSideMobileNav);

closeSideMobileNav();
addCollapsibleButtonsEvent();

// Page Transition

const links = document.querySelectorAll("a");
const main = document.querySelector("main");

if (links && main) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const currentPath = window.location.href.split("#");
      const nextPath = (e.target.parentElement.href ?? e.target.href).split("#");

      if (currentPath[0] === nextPath[0] && nextPath[1]) {
        window.location = e.target.parentElement.href ?? e.target.href;
      } else {
        setTimeout(() => {
          if (main.classList.contains("fade-out")) {
            window.location = e.target.parentElement.href ?? e.target.href;
          }
        }, 350);
        main.classList.add("fade-out");
      }
    });
  });
}

// See-more

const seeMoreButtons = document.querySelectorAll(".see-more-button");

seeMoreButtons.forEach((button) =>
  button.addEventListener("click", () => {
    button.classList.add("hidden");
    button.nextElementSibling.classList.add("active");
  })
);

// Navbar Search Desktop
let searchDesktopShowing = false;

const inputToggle = document.querySelector("#search-input-toggle");
const searchInput = document.querySelector("#search-input");

inputToggle?.addEventListener("click", (e) => {
  searchDesktopShowing = !searchDesktopShowing;

  window.setTimeout(function () {
    searchInput.querySelector("input").focus();
  }, 10);

  gsap.to(searchInput, { autoAlpha: searchDesktopShowing ? 1 : 0 });
});

// Navbar Search Mobile

const searchMobileButton = document.querySelector("#search-mobile-button");
const backButton = document.querySelector("#back-to-menu");

searchMobileButton?.addEventListener("click", () => {
  gsap.to("#search-mobile-page", { x: 0, ease: "expo", duration: 1 });
});

backButton?.addEventListener("click", () => {
  gsap.to("#search-mobile-page", { x: "100%", ease: "expo", duration: 1 });
});

// Modals

document.querySelector("#modal-toggle")?.addEventListener("click", () => toggleModal("open"));

const toggleModal = (type) => {
  const modal = document.querySelector("#modal");
  const modalContent = modal?.querySelector("#modal-content");
  const cancelButton = modal?.querySelector("#modal-cancel");
  const confirmButton = modal?.querySelector("#modal-confirm");

  const onCloseHandler = (e) => {
    if (e.target && !modalContent.contains(e.target) && modalContent) {
      toggleModal("close");
      document.removeEventListener("click", onCloseHandler, { capture: true });
    }
  };

  if (type === "open" && modal) {
    gsap.to(modal, { autoAlpha: 1 });

    cancelButton?.addEventListener("click", () => toggleModal("close"));
    confirmButton?.addEventListener("click", (e) => {
      e.preventDefault();
      toggleModal("close");
    });

    document.addEventListener("click", onCloseHandler, { capture: true });
  } else if (type === "close" && modal) {
    gsap.to(modal, { autoAlpha: 0 });
  }
};
