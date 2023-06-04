// Array of colors
const colors = ["#FF0000", "#00FF00", "#0000FF", "#FF00FF", "#FFFF00", "#00FFFF"];

// Get reference to the button
const changeColorButton = document.getElementById("changeColorButton");

// Function to change background color randomly
function changeBackgroundColor() {
  // Generate a random index to select a color from the array
  const randomIndex = Math.floor(Math.random() * colors.length);
  
  // Get the selected color
  const selectedColor = colors[randomIndex];
  
  // Set the background color of the body
  document.body.style.backgroundColor = selectedColor;
}

// Event listener for button click
changeColorButton.addEventListener("click", changeBackgroundColor);
