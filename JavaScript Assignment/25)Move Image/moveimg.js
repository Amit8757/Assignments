document.addEventListener("DOMContentLoaded", function() {
    // Get the image element
    var image = document.getElementById("image");
    
    // Set initial position
    var position = {
      top: 0,
      left: 0
    };
    
    // Update image position based on key input
    document.addEventListener("keydown", function(event) {
      var key = event.keyCode || event.which;
      
      // Arrow key codes: Left (37), Up (38), Right (39), Down (40)
      switch (key) {
        case 37: // Left arrow key
          position.left -= 10; // Adjust the movement speed as desired
          break;
        case 38: // Up arrow key
          position.top -= 10;
          break;
        case 39: // Right arrow key
          position.left += 10;
          break;
        case 40: // Down arrow key
          position.top += 10;
          break;
      }
      
      // Update the image's position
      image.style.top = position.top + "px";
      image.style.left = position.left + "px";
    });
  });
  