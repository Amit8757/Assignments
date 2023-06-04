function calculateRentalCost(daysRented, carType) {
    var rentalCost = 0;
  
    switch (carType) {
      case 'Economy':
        rentalCost = 4000;
        break;
      case 'Midsize':
        rentalCost = 10000;
        break;
      case 'Luxury':
        rentalCost = 20000;
        break;
      default:
        console.log('Invalid car type.');
        return;
    }
  
    var totalCost = rentalCost * daysRented;
  
    return totalCost;
  }

var daysRented = 5;
var carType = 'Luxury';

var totalCost = calculateRentalCost(daysRented, carType);
console.log(totalCost);

  