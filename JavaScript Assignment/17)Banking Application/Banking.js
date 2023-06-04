const customer = {
    name: "Amit Kumar Pathak",
    balance: 1000,
  
    deposit: function(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit of ${amount} successful. New balance: ${this.balance}`);
      } else {
        console.log("Invalid deposit amount. Please enter a positive number.");
      }
    },
  
    withdrawal: function(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New balance: ${this.balance}`);
      } else if (amount > this.balance) {
        console.log("Insufficient funds.");
      } else {
        console.log("Invalid withdrawal amount. Please enter a positive number.");
      }
    }
  };
  
  // Example usage
  console.log(`Account holder: ${customer.name}`);
  console.log(`Initial balance: ${customer.balance}`);
  
  customer.deposit(500); // Deposit of 500 successful. New balance: 1500
  customer.withdrawal(200); // Withdrawal of 200 successful. New balance: 1300
  customer.withdrawal(1500); // Insufficient funds.
  customer.deposit(-100); // Invalid deposit amount. Please enter a positive number.
  