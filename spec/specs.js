describe('Pizza', function() {
  it("creates a new pizza with the given specifications", function() {
    var testPizza = new Pizza(1, ["Mushrooms"], "Medium");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.toppings).to.eql(["Mushrooms"]);
    expect(testPizza.pizzaSize).to.equal("Medium");
  });

  it("creates a pizza with a quantity higher than one, and that has multiple toppings", function() {
    var testPizza = new Pizza(3, ["Mushrooms", "Extra Cheese", "Pepperoni"], "Medium");
    expect(testPizza.quantity).to.equal(3);
    expect(testPizza.toppings).to.eql(["Mushrooms", "Extra Cheese", "Pepperoni"]);
    expect(testPizza.pizzaSize).to.equal("Medium");
  });

  it("calculates the cost of a small pizza with one topping", function () {
    var testPizza = new Pizza(1, ["Mushrooms"], "Small");
    expect(testPizza.calculatePrice()).to.equal(8);
  });

  it("calculates the cost of a medium pizza with one topping", function () {
    var testPizza = new Pizza(1, ["Mushrooms"], "Medium");
    expect(testPizza.calculatePrice()).to.equal(11);
  });
});
