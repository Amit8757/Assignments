// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Variable storing the input string
var input = "amit";

// Delayed function to reverse the string after 2 seconds
setTimeout(function() {
  var reversed = reverseString(input);
  console.log(reversed); // Output the reversed string
}, 2000);

