function Pizza(quantity, toppings, pizzaSize) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
};

Pizza.prototype.calculatePrice = function() {
  if (this.pizzaSize === "Small") {
    var sizeCost = 7;
  }
  var finalPrice = this.quantity * (this.toppings.length + sizeCost);
  return finalPrice;
}
