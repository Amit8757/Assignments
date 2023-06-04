function countVowels(name) {
  // Convert the name to lowercase to simplify the vowel check
  name = name.toLowerCase();
  // Initialize the vowel count to zero
  let vowelCount = 0;
  // Iterate through each character in the name
  for (let i = 0; i < name.length; i++) {
    // Check if the character is a vowel
    if (name[i] == 'a' || name[i] == 'e' || name[i] == 'i' || name[i] == 'o' || name[i] == 'u') {
      // Increment the vowel count if the character is a vowel
      vowelCount++;
    }
  }
  // Return the final vowel count
  return vowelCount;
}

// Example usage:
console.log(countVowels("Amit Pathak")); // Output: 2

