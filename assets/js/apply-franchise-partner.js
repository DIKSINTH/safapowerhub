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

// ------------------ FADE-IN ON SCROLL ------------------
document.addEventListener("DOMContentLoaded", function () {
  const observerOptions = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("partnerForm");
  const evToggle = document.getElementById("evOwner");
  const toggleText = document.getElementById("toggleText");
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");

  // Toggle Label Logic
  evToggle.addEventListener("change", () => {
    toggleText.textContent = evToggle.checked ? "Yes" : "No";
  });

  // File Upload Interaction
  dropZone.addEventListener("click", () => fileInput.click());

  fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
      dropZone.querySelector("p").textContent =
        `File selected: ${fileInput.files[0].name}`;
      dropZone.style.background = "#eef9f0";
    }
  });

  // Handle Submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your location details have been submitted.");
    console.log("Form Submitted Successfully");
  });
});
