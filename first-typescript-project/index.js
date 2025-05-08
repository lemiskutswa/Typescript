var menu = [
    { name: "Pepperoni", price: 2.99 },
    { name: "Hawaiian", price: 3.99 },
    { name: "Meat Lovers", price: 4.99 },
    { name: "Veggie", price: 3.49 },
    { name: "BBQ Chicken", price: 4.49 }
];
var cashInRegister = 1000.00;
var nextOrderId = 1;
var orderHistory = [];
function addNewPizza(pizzaObject) {
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
addNewPizza({ name: "Chiken Tikka", price: 13 });
addNewPizza({ name: "Haawaiian", price: 3.99 });
placeOrder("Chicken Tikka");
completeOrder(1);
console.log("Cash In Register: ", cashInRegister);
