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
/*
const links = document.querySelectorAll("a");
const main = document.querySelector("main");

if (links && main) {
	links.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			const currentPath = window.location.href.split("#");
			const nextPath = (e.target.parentElement.href ?? e.target.href).split(
				"#"
			);

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
*/

// See-more
const seeMoreButtons = document.querySelectorAll(".see-more-button");
seeMoreButtons.forEach((button) =>
  button.addEventListener("click", () => {
    /*button.classList.add("hidden");
		button.nextElementSibling.classList.add("active");*/
    const attrText = button.dataset.text;
    if (attrText === "See More") {
      button.previousElementSibling.classList.add("active");
      button.dataset.text = "See Less";
    } else {
      button.previousElementSibling.classList.remove("active");
      button.dataset.text = "See More";
    }
    button.innerText = button.dataset.text + "...";
  })
);

// Modal Search
/*let modalAnimation;
const modalSearch = document.querySelector("#modal__search__obj");
const openModalSearch = () => {
	document.body.style.overflow = "hidden";
	modalAnimation = gsap
		.timeline({ defaults: { ease: "power2.inOut" } })
		.to(modalSearch, {
			display: "flex",
			scaleY: 0.01,
			x: 1,
			opacity: 0.25,
			duration: 0.4,
			background:
				"linear-gradient(152.47deg, rgba(255, 255, 255, 0.8) 30.12%, rgba(255, 255, 255, 0.3) 91.28%)",
			zIndex: "99999",
		})
		.to(modalSearch, {
			scaleY: 1,
			opacity: 1,
			duration: 0.6,
		})
		.to(
			"#modal__search__obj form",
			{ scaleY: 1, opacity: 1, duration: 0.75 },
			"-=0.4"
		);
	if (modalAnimation) {
		modalAnimation.eventCallback("onComplete", function () {
			const modalInput = document.querySelector("#modal__search__obj input");
			modalInput.focus();
		});
	}
};
const closeModalSearch = () => {
	document.body.style.overflow = "unset";
	modalAnimation.reverse().timeScale(-1.6);
};
document
	.querySelector("#nav__search__obj")
	.addEventListener("click", openModalSearch);
document
	.querySelector("#close__search__modal")
	.addEventListener("click", closeModalSearch);*/

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
document.querySelector("#socials__gallery a.call")?.addEventListener("click", (e) => toggleModal("open", e));
document.querySelector("#socials__gallery a.chat")?.addEventListener("click", (e) => toggleModal("open", e));
document.querySelector("#socials__gallery a.line")?.addEventListener("click", (e) => toggleModal("open", e));

const toggleModal = (type, e) => {
  if (e?.target?.id !== "modal-confirm") {
    e.preventDefault();
  }

  const modal = document.querySelector("#modal");
  const modalContent = modal?.querySelector("#modal-content");
  const cancelButton = modal?.querySelector("#modal-cancel");
  const confirmButton = modal?.querySelector("#modal-confirm");

  const onCloseHandler = (e) => {
    if (e.target && !modalContent.contains(e.target) && modalContent) {
      toggleModal("close", e);
      document.removeEventListener("click", onCloseHandler, { capture: true });
    }
  };
  if (type === "open" && modal) {
    gsap.to(modal, { autoAlpha: 1 });
    document.querySelector("#modal-desc").innerHTML = event.target.innerHTML;
    const confirmAction = document.querySelector("#modal-confirm");
    confirmAction.href = e.target.dataset.value;

    cancelButton?.addEventListener("click", () => toggleModal("close", e));
    confirmButton?.addEventListener("click", (e) => {
      //e.preventDefault();
      toggleModal("close", e);
    });
    document.addEventListener("click", onCloseHandler, { capture: true });
  } else if (type === "close" && modal) {
    gsap.to(modal, { autoAlpha: 0 });
  }
};

// Popup Confirm
/*let confirmAnimation;
const popupConfirm = document.querySelector("#popup__confirm");
const popupConfirmBackground = document.querySelector(
	"#popup__confirm .bg-black"
);
const popupConfirmContent = document.querySelector(
	"#popup__confirm .content--wrapper"
);

const openPopupConfirm = (event) => {
	event.preventDefault();
	document.body.style.overflow = "hidden";
	confirmAnimation = gsap
		.timeline({ defaults: { ease: "power2.linear" } })
		.to(popupConfirm, {
			display: "block",
		});
	document.querySelector("#display__confirm__value").innerHTML =
		event.target.innerHTML;
	const confirmAction = document.querySelector("#confirm__action");
	//confirmAction.dataset.action = event.target.dataset.value;
	confirmAction.href = event.target.dataset.value;
};
const confirmPopupConfirm = (e) => {
	//console.log("e dataset ", e.target.dataset.action);
	document.body.style.overflow = "unset";
	confirmAnimation.reverse();
};
const closePopupConfirm = () => {
	document.body.style.overflow = "unset";
	confirmAnimation.reverse();
};
document
	.querySelector("#socials__gallery a.call")
	.addEventListener("click", openPopupConfirm, false);
document
	.querySelector("#socials__gallery a.chat")
	.addEventListener("click", openPopupConfirm, false);
document
	.querySelector("#socials__gallery a.line")
	.addEventListener("click", openPopupConfirm, false);
document
	.querySelector("#cancel__action")
	.addEventListener("click", closePopupConfirm);
document
	.querySelector("#confirm__action")
	.addEventListener("click", confirmPopupConfirm);

window.onclick = function (event) {
	if (
		event.target.contains(popupConfirmBackground) &&
		event.target !== popupConfirmContent
	) {
		closePopupConfirm();
	}
};*/
