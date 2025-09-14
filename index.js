// ✅ Demonstrates scope, parameters, and return values

// Global variable
let animationCount = 0;

// Function with parameters and return value
function updateCounter(elementId, increment) {
  animationCount += increment;
  return `Animations triggered: ${animationCount}`;
}

// Function to toggle a class
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

// Select elements
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const card = document.getElementById("card");
const flipBtn = document.getElementById("flipBtn");
const popup = document.getElementById("popup");
const popupBtn = document.getElementById("popupBtn");
const closePopup = document.getElementById("closePopup");

// Animate box
animateBtn.addEventListener("click", () => {
  toggleAnimation(box, "animate");
  console.log(updateCounter("box", 1)); // Demonstrates return value
});

// Flip card
flipBtn.addEventListener("click", () => {
  toggleAnimation(card, "flipped");
  console.log(updateCounter("card", 1));
});

// Show popup
popupBtn.addEventListener("click", () => {
  popup.classList.add("show");
  console.log(updateCounter("popup", 1));
});

// Close popup
closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});
