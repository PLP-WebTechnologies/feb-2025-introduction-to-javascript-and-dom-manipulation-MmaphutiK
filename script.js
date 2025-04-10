// Change text content and styles
document.getElementById("changeTextBtn").addEventListener("click", function () {
  const desc = document.getElementById("description");
  desc.textContent = "We love food 😎";
  desc.style.color = "#00e676"; // bright green
  desc.style.fontWeight = "bold";
});

// Add/remove an element
document.getElementById("toggleBoxBtn").addEventListener("click", function () {
  const container = document.getElementById("boxContainer");
  const existingBox = document.getElementById("dynamicBox");

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement("div");
    box.id = "dynamicBox";
    box.textContent = "Surprise!!!!!";
    box.style.padding = "20px";
    box.style.backgroundColor = "black";
    box.style.marginTop = "10px";
    container.appendChild(box);
  }
});

// Toggle dark mode
document.getElementById("darkModeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});