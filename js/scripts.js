//Create Pizza Object
function Pizza(quantity, toppings, pizzaSize) {
  this.quantity = quantity;
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
};

//Calculate Price Method
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

//Jquery
$(document).ready(function() {


  $("form#new-order").submit(function(event) {
    event.preventDefault();
    var selectedQuantity = $("input#quantity").val();
    console.log(selectedQuantity);
    var selectedToppings = [];
    console.log(selectedToppings);
    var selectedPizzaSize = $("#pizzaSize")
    console.log(selectedPizzaSize);

    //Get values of checked boxes
    $.each($("input[name='toppings']:checked"), function() {
      selectedToppings.push($(this).val());
    });

    var newPizza = new Pizza(selectedQuantity, selectedToppings, selectedPizzaSize);
    var calculatedPrice = newPizza.calculatePrice();

    $("#total").text(calculatedPrice);

  });
});
