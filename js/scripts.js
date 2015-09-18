function Pizza(quantity, toppings, pizzaSize) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
};

Pizza.prototype.calculatePrice = function() {
  var pizzaSize = this.pizzaSize;
  var sizeCost = 0;

  if (pizzaSize === "small") {
    sizeCost += 7;
  } else if (pizzaSize === "medium") {
    sizeCost += 10;
  } else if (pizzaSize === "large") {
    sizeCost += 13;
  }
  var finalPrice = this.quantity * (this.toppings.length + sizeCost);
  return finalPrice;
}


$("form#new-order").submit(function(event) {
  event.preventDefault();

  var selectedQuantity = parseInt($("input#quantity").val());
  var selectedPizzaSize = $("#pizza-size")
  var selectedToppings = [];

  $.each($("input[name="toppings"]:checked"), function() {
    selectedToppings.push($(this).val());
  });
};
