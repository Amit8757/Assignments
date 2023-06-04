// Get references to HTML elements
const progressBarFill = document.getElementById("progressBarFill");

// Calculate and update progress bar
function updateProgressBar() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollProgress = (scrollTop / scrollHeight) * 100;
  progressBarFill.style.width = scrollProgress + "%";
}

// Event listener for scrolling
window.addEventListener("scroll", updateProgressBar);
