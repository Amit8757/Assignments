const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discountAmount = originalPrice - discountedPrice;
    const discountPercentage = (discountAmount / originalPrice) * 100;
    const roundedPercentage = Math.round(discountPercentage * 100) / 100; // Round off to two decimal places
    return roundedPercentage;
  };

  
  const originalPrice = 505.60;
  const discountedPrice = 450;
  
  const percentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(`You save ${percentage}% on this product!`);
    