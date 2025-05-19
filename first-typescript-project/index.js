var nextPizzaId = 1;
var menu = [
    { id: nextPizzaId++, name: "Pepperoni", price: 2.99 },
    { id: nextPizzaId++, name: "Hawaiian", price: 3.99 },
    { id: nextPizzaId++, name: "Meat Lovers", price: 4.99 },
    { id: nextPizzaId++, name: "Veggie", price: 3.49 },
    { id: nextPizzaId++, name: "BBQ Chicken", price: 4.49 }
];
var cashInRegister = 1000.00;
var nextOrderId = 1;
var orderHistory = [];
function addNewPizza(pizzaObject) {
    pizzaObject.id = nextPizzaId++;
    menu.push(pizzaObject);
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObject) { return pizzaObject.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " is not in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderHistory.push(newOrder);
    return newOrder;
}
function completeOrder(orderId) {
    var order = orderHistory.find(function (order) { return order.id === orderId; });
    if (!order) {
        console.error("".concat(orderId, " was not found in the order queue."));
        return;
    }
    order.status = "completed";
    return order;
}
//Utility function
function getPizzaDetails(identifier) {
    if (typeof identifier === "string") {
        return menu.find(function (pizza) { return pizza.name.toLowerCase() === identifier.toLowerCase(); });
    }
    else if (typeof identifier === "number") {
        return menu.find(function (pizza) { return pizza.id === identifier; });
    }
    else {
        throw new TypeError("Parameter `identifier` must either be a string or a number");
    }
}
// console.log(getPizzaDetails(1));
addNewPizza({ name: "Chiken Steak", price: 13 });
addNewPizza({ name: "Haawaiian", price: 3.99 });
console.log(menu);
// placeOrder("Chicken Tikka");
// completeOrder(1);
// console.log("Cash In Register: ", cashInRegister);
