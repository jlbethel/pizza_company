function Pizza(quantity, toppings, pizzaSize) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
};

Pizza.prototype.calculatePrice = function() {
  var pizzaSize = this.pizzaSize;
  var sizeCost = null;

  if (pizzaSize === "Small") {
    sizeCost = 7;
  } else if (pizzaSize === "Medium") {
    sizeCost = 10;
  } else if (pizzaSize === "Large") {
    sizeCost = 13;
  }
  var finalPrice = this.quantity * (this.toppings.length + sizeCost);
  return finalPrice;
}
