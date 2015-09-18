function Pizza(quantity, toppings, pizzaSize) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
};

Pizza.prototype.calculatePrice = function() {
  var pizzaSize = this.pizzaSize;
  var sizeCost = null;

  if (pizzaSize === "small") {
    sizeCost = 7;
  } else if (pizzaSize === "medium") {
    sizeCost = 10;
  } else if (pizzaSize === "large") {
    sizeCost = 13;
  }
  var finalPrice = this.quantity * (this.toppings.length + sizeCost);
  return finalPrice;
}
