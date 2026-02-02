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
    const arrow = parent.querySelector(".mobile-arrow");

    document.querySelectorAll(".dropdown").forEach((d) => {
      if (d !== dropdown) d.classList.remove("active");
    });

    document.querySelectorAll(".mobile-arrow").forEach((a) => {
      if (a !== arrow) a.textContent = "+";
    });

    dropdown.classList.toggle("active");
    arrow.textContent = dropdown.classList.contains("active") ? "−" : "+";
  }

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        toggleDropdown(this);
      }
    });
  });

  parentLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const arrow = this.parentElement.querySelector(".mobile-arrow");
        toggleDropdown(arrow);
      }
    });
  });
});
