// 1. Initialize Map centered on India
const map = L.map("map").setView([17.385, 78.4867], 6);

// 2. Add Gray-scale Map Tiles (similar to your image)
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

// 3. Sample Data (Replace this with your actual station list)
const stations = [
  {
    id: 1,
    name: "Suryapet | Little Village",
    lat: 17.1439,
    lng: 79.6239,
    status: "Open 24 Hours",
    power: "120 KW",
    type: "CCS2 DC",
    amenities: ["🍴", "☕", "🚻", "🛡️"],
  },
  {
    id: 2,
    name: "Goa Central Hub",
    lat: 15.2993,
    lng: 74.124,
    status: "Open 24 Hours",
    power: "60 KW",
    type: "CCS2 DC",
    amenities: ["☕", "🚻"],
  },
  {
    id: 3,
    name: "Chennai",
    lat: 15.2993,
    lng: 74.124,
    status: "Open 24 Hours",
    power: "60 KW",
    type: "CCS2 DC",
    amenities: ["☕", "🚻"],
  },
];

const detailsPanel = document.getElementById("details-panel");
const contentArea = document.getElementById("content-area");

// 4. Function to show details
function showDetails(station) {
  contentArea.innerHTML = `
            <div class="station-name">${station.name}</div>
            <div class="status">● ${station.status}</div>
            <div class="amenities">
                ${station.amenities.map((a) => `<span class="amenity-icon">${a}</span>`).join("")}
            </div>
            <div class="charger-info">
                <div><strong>${station.type}</strong></div>
                <div>${station.power}</div>
            </div>
            <a href="https://www.google.com/maps?q=${station.lat},${station.lng}" target="_blank" class="btn-directions">Get Directions</a>
        `;
  detailsPanel.style.display = "block";
}

function closePanel() {
  detailsPanel.style.display = "none";
}

// 5. Add Markers to Map
stations.forEach((station) => {
  // Create a custom red icon
  const redIcon = L.divIcon({
    className: "custom-div-icon",
    html: `<div style="background-color:green; width:12px; height:12px; border-radius:50%; border:2px solid white; box-shadow: 0 0 5px rgba(0,0,0,0.5);"></div>`,
    iconSize: [15, 15],
    iconAnchor: [7, 7],
  });

  const marker = L.marker([station.lat, station.lng], {
    icon: redIcon,
  }).addTo(map);

  marker.on("click", () => {
    showDetails(station);
    map.flyTo([station.lat, station.lng], 10); // Zoom in on click
  });
});

// Close panel if clicking on map background
map.on("click", () => {
  if (event.target.id === "map") closePanel();
});

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("page-loader");

  // 🔹 Hide loader when page fully loads
  window.addEventListener("load", function () {
    loader.classList.add("hide");
  });

  // 🔹 Show loader on internal link click
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = link.getAttribute("href");

      if (
        target &&
        !target.startsWith("#") &&
        !target.startsWith("javascript:") &&
        !link.hasAttribute("target")
      ) {
        loader.classList.remove("hide");
      }
    });
  });
});
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
