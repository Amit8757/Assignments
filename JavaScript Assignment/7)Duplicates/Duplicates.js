function removeDuplicates(cart) {
  // Create a new Set to store unique items
  const uniqueItems = new Set(cart);

  // Convert the Set back to an array
  const newCart = [...uniqueItems];

  return newCart;
}
const customerCart = ['apple', 'banana', 'orange', 'banana', 'kiwi', 'apple'];
const newCart = removeDuplicates(customerCart);
console.log(newCart); // Output: ['apple', 'banana', 'orange', 'kiwi']
