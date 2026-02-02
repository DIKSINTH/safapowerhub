document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const arrows = document.querySelectorAll(".mobile-arrow");
  const parentLinks = document.querySelectorAll(".parent-link");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  function toggleDropdown(element) {
    const parent = element.closest(".has-dropdown");
    const dropdown = parent.querySelector(".dropdown");

    document.querySelectorAll(".dropdown").forEach((d) => {
      if (d !== dropdown) d.classList.remove("active");
    });

    dropdown.classList.toggle("active");
  }

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        e.stopPropagation();
        toggleDropdown(this);
      }
    });
  });

  parentLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        toggleDropdown(this);
      }
    });
  });
});
