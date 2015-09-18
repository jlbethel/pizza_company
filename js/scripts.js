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

  $("#add-pizza").click(function() {
    var selectedPizzaName = $("input#pizzaName").val();
    $("ul#pizzas").append(selectedPizzaName);
  });

  $("form#new-order").submit(function(event) {
    event.preventDefault();
    //Get Pizza properties from html form
    var selectedQuantity = $("input#quantity").val();
    var selectedToppings = [];
    var selectedPizzaSize = $("#pizzaSize").val();

    //Get values of checked boxes
    $.each($("input[name='toppings']:checked"), function() {
      selectedToppings.push($(this).val());
    });

    //create a new Pizza object and calculate its price
    var newPizza = new Pizza(selectedQuantity, selectedToppings, selectedPizzaSize);
    var calculatedPrice = newPizza.calculatePrice();

    //Give calculated price to html total span
    $("#total").text(calculatedPrice);

  });
});
