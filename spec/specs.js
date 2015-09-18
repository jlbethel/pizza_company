describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza(1, ["Mushrooms"], "medium");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.toppings).to.eql(["Mushrooms"]);
    expect(testPizza.pizzaSize).to.equal("medium");
  });

  it("creates a pizza with a quantity higher than one, and that has multiple toppings", function() {
    var testPizza = new Pizza(3, ["Mushrooms", "Extra Cheese", "Pepperoni"], "medium");
    expect(testPizza.quantity).to.equal(3);
    expect(testPizza.toppings).to.eql(["Mushrooms", "Extra Cheese", "Pepperoni"]);
    expect(testPizza.pizzaSize).to.equal("medium");
  });

  it("calculates the cost of a small pizza with one topping", function() {
    var testPizza = new Pizza(1, ["Mushrooms"], "small");
    expect(testPizza.calculatePrice()).to.equal(8);
  });

  it("calculates the cost of a medium pizza with one topping", function() {
    var testPizza = new Pizza(1, ["Mushrooms"], "medium");
    expect(testPizza.calculatePrice()).to.equal(11);
  });

  it("calculates the cost of a Large pizza with multiple toppings", function() {
    var testPizza = new Pizza(1, ["Mushrooms", "Pepperoni", "ExtraCheese"], "large");
    expect(testPizza.calculatePrice()).to.equal(16);
  });

  it("calculates the cost of a Large pizza with multiple toppings and a quantity greater than one", function () {
    var testPizza = new Pizza(3, ["Mushrooms", "Pepperoni", "ExtraCheese"], "large");
    expect(testPizza.calculatePrice()).to.equal(48);
  });

  it("calculates the cost of a Large pizza with no toppings", function() {
    var testPizza = new Pizza(1, ["Mushrooms", "Pepperoni", "ExtraCheese"], "large");
    expect(testPizza.calculatePrice()).to.equal(16);
  });
});
