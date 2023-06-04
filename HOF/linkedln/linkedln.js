function validateLinkedInURL(url) {
    var regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    if (regex.test(url)) {
      return "Valid LinkedIn profile URL";
    } else {
      return "Invalid LinkedIn profile URL";
    }
  }
  
  // Example usage:
  var urls = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane_doe",
    "https://www.linkedin.com/in/1234",
    "https://www.linkedin.com/in/johndoe12345678901234567890"
  ];
  
  urls.forEach(function(url) {
    console.log(url + ": " + validateLinkedInURL(url));
  });
  