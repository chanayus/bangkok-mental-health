const mobileMenu = document.querySelectorAll("aside#guide-list-link .collapsible-content a");
const collapsibleMenu = document.querySelector("aside#guide-list-link .collapsible");
const roomCategoryButtons = document.querySelectorAll(".room-category-button");
// all | suite | corner | standard
let currentShowingRoom = "all";
const roomCards = document.querySelectorAll(".room-card");

mobileMenu.forEach((element) => {
  element.addEventListener("click", () => {
    collapsibleMenu.classList.toggle("active");
  });
});

roomCategoryButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.classList.add("btn-orange");
    roomCards.forEach((room) => {
      room.style.display = room.dataset.category === button.dataset.category || button.dataset.category === "all" ? "block" : "none";
    });
    currentShowingRoom = e.target.dataset.category;
    roomCategoryButtons.forEach((button) => {
      button.dataset.category !== currentShowingRoom && button.classList.remove("btn-orange");
    });
  });

  button.dataset.category === currentShowingRoom && button.classList.add("btn-orange");
});
