document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var messageElement = document.getElementById("message");
    
    // Validate email
    if (emailInput.value.indexOf("@") === -1) {
      messageElement.textContent = "Invalid email or password!";
      messageElement.style.color = "red";
      return;
    }
    
    // Validate password
    if (passwordInput.value.length < 8) {
      messageElement.textContent = "Invalid email or password!";
      messageElement.style.color = "red";
      return;
    }
    
    // Valid email and password
    messageElement.textContent = "Valid email and password!";
    messageElement.style.color = "green";
  });
  