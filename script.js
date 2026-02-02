// ------------------ NAVBAR MOBILE ------------------
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const arrows = document.querySelectorAll(".mobile-arrow");
  const parentLinks = document.querySelectorAll(".parent-link");

  // Toggle mobile menu
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  function toggleDropdown(element) {
    const parent = element.closest(".has-dropdown");
    const dropdown = parent.querySelector(".dropdown");
    const arrow = parent.querySelector(".mobile-arrow");

    // Close other dropdowns
    document.querySelectorAll(".dropdown").forEach((d) => {
      if (d !== dropdown) d.classList.remove("active");
    });

    document.querySelectorAll(".mobile-arrow").forEach((a) => {
      if (a !== arrow) a.textContent = "+";
    });

    // Toggle current dropdown
    dropdown.classList.toggle("active");
    arrow.textContent = dropdown.classList.contains("active") ? "−" : "+";
  }

  // Arrow click toggles dropdown
  arrows.forEach((arrow) => {
    arrow.addEventListener("click", function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        toggleDropdown(this);
      }
    });
  });

  // Parent link click toggles dropdown in mobile
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

// ------------------ HERO BUTTON SMOOTH SCROLL ------------------
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btn-primary");
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector("#locations");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
