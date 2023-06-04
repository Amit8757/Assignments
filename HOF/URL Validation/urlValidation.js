// Regular expression for matching valid URLs
var regex = /^(http:\/\/|https:\/\/)[\w\d\s\S]+\.[\w]+$/;

// Input URL to test
var inputURL = "http://www.example.com";

// Check if the input matches the conditions using the regex
var isMatch = regex.test(inputURL);

// Print a message indicating if the input matches or not
if (isMatch) {
  console.log("The input URL matches the conditions.");
} else {
  console.log("The input URL does not match the conditions.");
}
