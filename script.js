const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const arrows = document.querySelectorAll(".mobile-arrow");
const parentLinks = document.querySelectorAll(".parent-link");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* Toggle dropdown */
function toggleDropdown(element) {
  const dropdown = element.closest(".has-dropdown").querySelector(".dropdown");

  document.querySelectorAll(".dropdown").forEach((d) => {
    if (d !== dropdown) d.classList.remove("active");
  });

  dropdown.classList.toggle("active");
}

/* + button click */
arrows.forEach((arrow) => {
  arrow.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.stopPropagation();
      toggleDropdown(this);
    }
  });
});

/* Parent link click (mobile only) */
parentLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    if (window.innerWidth < 992) {
      e.preventDefault();
      toggleDropdown(this);
    }
  });
});
