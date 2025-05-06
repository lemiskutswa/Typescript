
const menu = [
    {name: "Pepperoni", price : 2.99},
    {name: "Hawaiian", price : 3.99},
    {name: "Meat Lovers", price : 4.99},
    {name: "Veggie", price : 3.49},
    {name: "BBQ Chicken", price : 4.49}
]

const cashInRegister = 1000.00
const nextOrderId = 1;
const orderQueue = []

function addNewPizza (pizzaObject) {
    menu.push(pizzaObject)
}

function placeOrder (pizzaName) {
     const selectedPizza = menu.find(pizzaObject => pizzaObject.name === pizzaName)
     cashInRegister += selectedPizza.price
     const newOrder = { id: nextOrderId++, pizza: selectecPizza, status: "ordered"}
     orderQueue.push(newOrder)
     return newOrder;
}

function completeOrder (orderId) {
    const order = orderQueue.find(order => order.Id === orderId)
    order.status = "completed"
    return order;
}

addNewPizza({name: "Chiken Tikka", price: 13})

placeOrder("Chicken Tikka");

completeOrder("1");

console.log("Cash In REG: ", cashInRegister);