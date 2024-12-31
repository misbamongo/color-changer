// Select elements
const hero = document.querySelector(".hero");
const cursorCircle = document.querySelector(".cursor-circle");

// Define background colors for 16 quadrants
const colors = [
  "#3498db", "#9b59b6", "#e67e22", "#2ecc71", // Row 1
  "#1abc9c", "#e74c3c", "#f1c40f", "#8e44ad", // Row 2
  "#16a085", "#d35400", "#f39c12", "#27ae60", // Row 3
  "#2980b9", "#c0392b", "#f4d03f", "#7f8c8d", // Row 4
];

// Define contrasting colors for the circle
const contrastingColors = [
  "#fff", "#ffeb3b", "#ffffff", "#ffeb3b", // White or Yellow for Row 1
  "#ffeb3b", "#ffffff", "#000", "#ffeb3b", // Black or Yellow for Row 2
  "#fff", "#ffeb3b", "#000", "#ffffff",    // Alternating contrasts for Row 3
  "#ffffff", "#000", "#000", "#ffeb3b",    // Strong contrasts for Row 4
];

// Track the current quadrant to avoid redundant updates
let currentQuadrant = null;

// Add mousemove event listener
document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;

  // Determine the viewport width and height
  const { innerWidth: width, innerHeight: height } = window;

  // Update the circle's position
  cursorCircle.style.left = `${x}px`;
  cursorCircle.style.top = `${y}px`;

  // Calculate the column and row (0 to 3 for each)
  const col = Math.floor((x / width) * 4); // 4 columns
  const row = Math.floor((y / height) * 4); // 4 rows

  // Determine the quadrant index (row * 4 + col)
  const quadrantIndex = row * 4 + col;

  // Update the background and circle color only if the quadrant changes
  if (quadrantIndex !== currentQuadrant) {
    currentQuadrant = quadrantIndex; // Update current quadrant

    // Change background color
    hero.style.backgroundColor = colors[quadrantIndex];

    // Change circle color to its contrasting color
    cursorCircle.style.backgroundColor = contrastingColors[quadrantIndex];
  }
});
