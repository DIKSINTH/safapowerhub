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

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("locationForm");
  const fileUpload = document.getElementById("fileUpload");
  const fileList = document.getElementById("fileList");
  const evOwnerToggle = document.getElementById("evOwner");
  const toggleLabel = document.getElementById("toggleLabel");

  let selectedFiles = [];

  evOwnerToggle.addEventListener("change", function () {
    toggleLabel.textContent = this.checked ? "Yes" : "No";
  });

  fileUpload.addEventListener("change", function (e) {
    const files = Array.from(e.target.files);

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        selectedFiles.push(file);
      }
    });

    displayFiles();
  });

  function displayFiles() {
    fileList.innerHTML = "";

    selectedFiles.forEach((file, index) => {
      const fileItem = document.createElement("div");
      fileItem.className = "file-item";
      fileItem.innerHTML = `
        <span>${file.name} (${formatFileSize(file.size)})</span>
        <button type="button" onclick="removeFile(${index})">Remove</button>
      `;
      fileList.appendChild(fileItem);
    });
  }

  window.removeFile = function (index) {
    selectedFiles.splice(index, 1);
    displayFiles();
  };

  function formatFileSize(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      email: document.getElementById("email").value,
      propertyType: document.getElementById("propertyType").value,
      parkingSpaces: document.getElementById("parkingSpaces").value,
      chargerAvailability: document.querySelector(
        'input[name="chargerAvailability"]:checked',
      )?.value,
      googleLocation: document.getElementById("googleLocation").value,
      evOwner: document.getElementById("evOwner").checked,
      comments: document.getElementById("comments").value,
      files: selectedFiles.map((f) => f.name),
    };

    console.log("Form submitted:", formData);

    alert("Form submitted successfully! Check the console for form data.");

    form.reset();
    selectedFiles = [];
    fileList.innerHTML = "";
    toggleLabel.textContent = "No";
  });

  const inputs = document.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => {
    input.addEventListener("invalid", function (e) {
      e.preventDefault();
      this.style.borderColor = "#ff4444";
      setTimeout(() => {
        this.style.borderColor = "";
      }, 2000);
    });

    input.addEventListener("input", function () {
      if (this.validity.valid) {
        this.style.borderColor = "";
      }
    });
  });
});
