// Original object with item prices in USD
var items = {
  apple: 2.5,
  banana: 1.75,
  orange: 3.0,
  mango: 4.5
};

// Exchange rate of 1 USD to 80 INR
var exchangeRate = 80;

// Use map to create a new object with prices in INR
var convertedItems = Object.fromEntries(
  Object.entries(items).map(([item, price]) => [item, price * exchangeRate])
);

// Output the converted prices in INR
console.log(convertedItems);




