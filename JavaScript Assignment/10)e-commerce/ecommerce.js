function doubleCartQuantities(cart) {
    var doubledCart = [];
    
    for (var i = 0; i < cart.length; i++) {
      var itemQuantity = cart[i];
      var doubledQuantity = itemQuantity * 2;
      doubledCart.push(doubledQuantity);
    }
    
    return doubledCart;
  }
  
  // Example usage
  var cart = [1, 2, 3, 4];
  var doubledCart = doubleCartQuantities(cart);
  console.log(doubledCart);
  