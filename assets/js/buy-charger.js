let selectedProduct = "";

function openProduct(title, power, desc, img) {
  document.getElementById("productPopup").style.display = "flex";
  document.getElementById("popupTitle").innerText = title;
  document.getElementById("popupPower").innerText = power;
  document.getElementById("popupDesc").innerText = desc;
  document.getElementById("popupImg").src = img;

  selectedProduct = title + " - " + power;
}

function closePopup() {
  document.getElementById("productPopup").style.display = "none";
}

function buyNow() {
  const number = "919042594468"; // replace with your number
  const message = encodeURIComponent(
    "Hello, I want to buy: " + selectedProduct,
  );
  window.open(`https://wa.me/${number}?text=${message}`, "_blank");
}
