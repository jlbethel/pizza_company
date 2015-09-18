function Pizza(quantity, toppings, pizzaSize) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
};

Pizza.prototype.calculatePrice = function() {
  var pizzaSize = this.pizzaSize;
  sizeCost = null;
  
  if (pizzaSize === "Small") {
    var sizeCost = 7;
  } else if (pizzaSize === "Medium") {
    var sizeCost = 10;
  }
  var finalPrice = this.quantity * (this.toppings.length + sizeCost);
  return finalPrice;
}
