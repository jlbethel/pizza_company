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

//Reset form fields
function resetFields() {
  $("input#quantity").val("");
  $("#pizzaSize").val("");
  $("input#pizzaName").val("");
  $('input:checkbox').removeAttr('checked');
}

//Jquery
$(document).ready(function() {

  //Add Pizza to pizzas ul in html
  $("#add-pizza").submit(function(event) {
    event.preventDefault();
    
    $("#show-pizzas").fadeIn(900);
    var selectedPizzaName = $("input#pizzaName").val();
    $("ul#pizzas").append("<li><span class='pizza'>" + selectedPizzaName + "</span></li>");

    resetFields();
  });

  //Show pizza properties when clicked on
  $(".pizza").on('click', function () {
    $("#show-pizza").fadeIn(900);

    $("#show-pizza h2").text(selectedPizzaName);
    $(".pizzaSize").text(selectedPizzaSize);
    $(".toppings").text(selectedToppings);
    $(".quantity").text(selectedQuantity);
  });

  //Form Submission
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

    //Give calculated price to total span
    $(".total").fadeIn(900);
    $("#total").text(calculatedPrice);

    resetFields();
  });
});
